// Baked local audio only (no TTS, no speechSynthesis). WebAudio with iOS unlock on first tap.
const SFX = {
  whoosh: "./audio/snow-whoosh.mp3",
  jump: "./audio/ski-jump.mp3",
  cheer: "./audio/crowd-cheer.mp3",
  crash: "./audio/tree-crash.mp3",
};
const MUSIC = "./audio/music-christmas-synths.mp3";

export function createAudio() {
  let ctx = null, master, sfx, music, voice, musicSrc = null, musicBuf = null;
  const bufs = {};
  let muted = false, loading = null, unlocked = false;

  function ensure() {
    if (ctx) return ctx;
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    ctx = new AC();
    master = ctx.createGain(); master.gain.value = 0.9; master.connect(ctx.destination);
    sfx = ctx.createGain(); sfx.gain.value = 0.85; sfx.connect(master);
    music = ctx.createGain(); music.gain.value = 0.0; music.connect(master);
    voice = ctx.createGain(); voice.gain.value = 1; voice.connect(master);
    return ctx;
  }
  async function decode(url) {
    try {
      const r = await fetch(url);
      if (!r.ok) return null;
      const ab = await r.arrayBuffer();
      return await new Promise((res) => {
        const p = ctx.decodeAudioData(ab, res, () => res(null));
        if (p && p.then) p.then(res, () => res(null));
      });
    } catch (e) { return null; }
  }
  function load() {
    if (loading || !ensure()) return loading;
    loading = Promise.all(Object.entries(SFX).map(async ([k, u]) => { bufs[k] = await decode(u); }))
      .then(async () => { musicBuf = await decode(MUSIC); if (wantMusic) startMusic(); });
    return loading;
  }
  // Must run inside a user gesture (tap / key) — unlocks iOS Safari.
  function unlock() {
    if (!ensure()) return;
    if (ctx.state === "suspended") ctx.resume().catch(() => {});
    if (!unlocked) {
      const b = ctx.createBuffer(1, 1, 22050), s = ctx.createBufferSource();
      s.buffer = b; s.connect(ctx.destination); s.start(0);
      unlocked = true;
    }
    load();
  }
  function play(name, { vol = 1, rate = 1, delay = 0 } = {}) {
    if (!ctx || muted) return;
    const b = bufs[name];
    if (!b) return;
    const s = ctx.createBufferSource(), g = ctx.createGain();
    s.buffer = b; s.playbackRate.value = rate; g.gain.value = vol;
    s.connect(g); g.connect(sfx); s.start(ctx.currentTime + delay);
  }
  function tone(freq, dur, { type = "triangle", vol = 0.25, at = 0, slide = 0 } = {}) {
    if (!ctx || muted) return;
    const t = ctx.currentTime + at, o = ctx.createOscillator(), g = ctx.createGain();
    o.type = type; o.frequency.setValueAtTime(freq, t);
    if (slide) o.frequency.exponentialRampToValueAtTime(Math.max(40, freq + slide), t + dur);
    g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(vol, t + 0.015);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g); g.connect(sfx); o.start(t); o.stop(t + dur + 0.05);
  }
  let wantMusic = false;
  function startMusic() {
    wantMusic = true;
    if (!ctx || !musicBuf || musicSrc) return;
    musicSrc = ctx.createBufferSource(); musicSrc.buffer = musicBuf; musicSrc.loop = true;
    musicSrc.connect(music); musicSrc.start();
    music.gain.setTargetAtTime(muted ? 0 : 0.32, ctx.currentTime, 0.8);
  }
  function duck(on) {
    if (!ctx || muted) return;
    music.gain.setTargetAtTime(on ? 0.12 : 0.32, ctx.currentTime, 0.15);
  }
  // Rising pitch with the combo streak: C major pentatonic steps.
  const STEPS = [0, 2, 4, 7, 9, 12, 14, 16, 19, 21, 24];
  function correct(streak) {
    const base = 523.25 * Math.pow(2, STEPS[Math.min(STEPS.length - 1, Math.max(0, streak - 1))] / 12);
    tone(base, 0.18, { vol: 0.22 });
    tone(base * 1.25, 0.18, { vol: 0.2, at: 0.08 });
    tone(base * 1.5, 0.32, { vol: 0.22, at: 0.16 });
    play("jump", { vol: 0.9, rate: 1 + Math.min(0.5, streak * 0.05) });
  }
  function wrong() {
    play("crash", { vol: 1 });
    tone(220, 0.35, { type: "sawtooth", vol: 0.08, slide: -120 });
  }
  function win() {
    play("cheer", { vol: 1 });
    [0, 4, 7, 12, 16].forEach((s, i) => tone(523.25 * Math.pow(2, s / 12), 0.4, { vol: 0.18, at: i * 0.11 }));
  }
  function land() { play("whoosh", { vol: 0.7, rate: 0.9 }); }
  function carve(amount) { if (amount > 0.6) play("whoosh", { vol: 0.25 * amount, rate: 1.2 }); }
  function boost() { play("whoosh", { vol: 0.55, rate: 1.35 }); }

  // Question/word cue: pack audio first, then slug fallbacks (same order as the old engine).
  async function speak(urls) {
    if (!ctx || muted) return;
    for (const u of urls) {
      const b = await decode(u);
      if (b) {
        const s = ctx.createBufferSource(); s.buffer = b; s.connect(voice);
        duck(true); s.onended = () => duck(false); s.start();
        return;
      }
    }
  }
  function setMuted(m) {
    muted = !!m;
    if (ctx) {
      master.gain.setTargetAtTime(muted ? 0 : 0.9, ctx.currentTime, 0.05);
      if (!muted && musicSrc) music.gain.setTargetAtTime(0.32, ctx.currentTime, 0.3);
    }
    return muted;
  }
  return { unlock, play, correct, wrong, win, land, carve, boost, speak, startMusic, setMuted, isMuted: () => muted, ready: () => loading };
}
