import { createWorld } from "./world.js";
import { createAudio } from "./audio.js";
import { mrjPost, mrjPostRound, seedFromRows, wmDone } from "./report.js";
import { shuffle } from "./pack.js";

export const VERSION = "1.0.0";
const LIVES = 3;          // shown in state for reporting; one wrong jump still ends the run (as before)
const STANDALONE_TARGET = 5;

const ICON_ON = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M16 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';
const ICON_OFF = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M16 9l6 6M22 9l-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';

function el(html) { const d = document.createElement("div"); d.innerHTML = html.trim(); return d.firstElementChild; }
const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]));
const uid = () => "s-" + Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 8);
const slug = (x) => String(x || "").toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

export function startGame(root, { pack, studentId = "", sessionMode = false, quality } = {}) {
  root.innerHTML = "";
  let e = pack;
  const target = () => (sessionMode ? (e.items && e.items.length) || 0 : STANDALONE_TARGET);
  const audio = createAudio();

  const hud = el(`<div class="hud">
    <div class="topbar">
      <div class="pill name" id="sj-name">Ski</div>
      <div class="pill prog"><div class="bar"><i id="sj-bar"></i></div><span id="sj-left">0/5</span></div>
      <div class="pill pts" id="sj-score">0</div>
      <div class="pill combo" id="sj-combo"></div>
      <button class="pill mute" id="sj-mute" type="button" aria-label="Sound on/off">${ICON_ON}</button>
    </div>
    <div class="question hidden" id="sj-q"><small>Ski to the word that means…</small><p id="sj-qp">?</p></div>
    <div class="ramp-word" data-lane="0"></div><div class="ramp-word" data-lane="1"></div><div class="ramp-word" data-lane="2"></div>
    <div class="toast" id="sj-toast"></div>
    <div class="steer-hint hidden" id="sj-hint"><span>◀</span><em>tap sides to steer · slide up = faster</em><span>▶</span></div>
    <div class="card start" id="sj-start">
      <div class="logo"><b>SKI</b><b>JUMP</b></div>
      <p class="lead">Read the meaning. Ski onto the ramp with the right word. A wrong ramp is a tree!</p>
      <form id="sj-form">
        <input id="sj-input" type="text" maxlength="24" placeholder="Your name" autocomplete="nickname" />
        <button class="go" type="submit">Start skiing</button>
      </form>
      <p class="keys">Phone / tablet: tap left or right side · slide up to go faster<br>Computer: ← → or A D · ↑ or W faster</p>
      <label class="drop" id="sj-drop">Teachers: drop an Excel / CSV / JSON pack here
        <input id="lf-file" type="file" accept=".xlsx,.xls,.csv,.json" hidden />
      </label>
      <a class="howto" href="./HOW-TO-PLAY.html">How to play</a>
    </div>
    <div class="card end hidden" id="sj-end"></div>
  </div>`);
  root.appendChild(hud);
  const $ = (s) => hud.querySelector(s);
  const labels = [...hud.querySelectorAll(".ramp-word")];
  const world = createWorld(root, labels, { quality });
  root.insertBefore(world.renderer.domElement, hud);

  if (sessionMode) { $("#sj-drop").remove(); $(".howto").remove(); }
  const c = {
    pack: e, studentId: studentId || "", sessionId: uid(), view: "start", points: 0, errors: 0, round: 1, roundDone: {},
    mrjRoundPosted: false, queue: [], trial: null, jumping: false, lives: LIVES, corrects: 0, records: [], startedAt: null,
    t: 0, pendingLand: null, keys: { left: false, right: false, up: false }, pointerSteer: 0, pointerDown: false, holdSteer: 0,
    boost: 0, ptrStartY: 0, ptrY: 0, streak: 0, best: 0,
  };
  const board = []; // this session only (never saved on the device)
  let progressRows = [];

  const remaining = () => Math.max(0, target() - c.corrects);
  const mult = () => Math.min(4, 1 + Math.floor(c.streak / 3));

  function hudUpdate() {
    $("#sj-name").textContent = c.studentId || "Ski";
    $("#sj-score").textContent = `${c.points} pts`;
    const T = target() || 1;
    $("#sj-left").textContent = `${c.corrects}/${target()}`;
    $("#sj-bar").style.width = `${Math.min(100, (c.corrects / T) * 100)}%`;
    const m = mult(), cb = $("#sj-combo");
    cb.textContent = c.streak >= 2 ? `COMBO ×${m} · ${c.streak}` : "";
    cb.classList.toggle("on", c.streak >= 2);
    cb.dataset.m = String(m);
  }
  function toast(text, cls) {
    const t = $("#sj-toast");
    t.textContent = text; t.className = `toast ${cls}`; void t.offsetWidth; t.classList.add("on");
    clearTimeout(t._h); t._h = setTimeout(() => t.classList.remove("on"), 850);
  }
  function floatText(text, cls = "") {
    const p = world.skierScreen();
    const f = el(`<div class="float ${cls}">${esc(text)}</div>`);
    f.style.left = `${p.x}px`; f.style.top = `${p.y}px`;
    hud.appendChild(f); setTimeout(() => f.remove(), 1300);
  }
  function showPlay(on) {
    $("#sj-q").classList.toggle("hidden", !on);
    $("#sj-hint").classList.toggle("hidden", !on);
  }
  function refill() { c.queue = shuffle(e.items.filter((it) => !c.roundDone[it.item_id])); }
  function speakItem(it) {
    if (!it) return;
    const urls = [it.audio];
    if (!sessionMode) urls.push(it.question && `./audio/${slug(it.question)}.mp3`, it.correct && `./audio/${slug(it.correct)}.mp3`);
    audio.speak(urls.filter(Boolean));
  }
  function paint(tr) {
    tr.choices.forEach((w, i) => { labels[i].textContent = w || "—"; labels[i].dataset.answer = w || ""; });
    $("#sj-qp").textContent = tr.item.question;
    const q = $("#sj-q"); q.classList.remove("pop"); void q.offsetWidth; q.classList.add("pop");
  }
  function nextTrial(fresh = true) {
    if (fresh || !c.trial) {
      if (!c.queue.length) refill();
      if (!c.queue.length) return roundDone();
      const it = c.queue.shift();
      const choices = shuffle([it.correct, ...it.wrong.slice(0, 2)]);
      while (choices.length < 3) choices.push("");
      c.trial = { item: it, choices, correctLane: choices.indexOf(it.correct), startedAt: new Date().toISOString(), t0: performance.now(), locked: false };
      paint(c.trial); speakItem(it);
    } else c.trial.locked = false;
    showPlay(true); world.showRow(); hudUpdate();
  }
  function record(item, response, correct, latency) {
    const r = {
      student_id: c.studentId, session_id: c.sessionId, module_id: e.module_id || "ski_jump", activity_id: e.activity_id || "slope_jump",
      item_id: item.item_id, skill_tags: item.skill_tags || e.skill_tags || [], response, correct, latency_ms: Math.round(latency),
      accuracy: 0, points: c.points, errors: c.errors, started_at: c.trial.startedAt, ended_at: new Date().toISOString(),
      ui_locale: e.ui_locale || "en", round: c.round,
    };
    const all = c.records.concat(r);
    r.accuracy = all.filter((x) => x.correct).length / all.length;
    c.records.push(r);
    window.dispatchEvent(new CustomEvent("lf-record", { detail: r }));
    mrjPost(e, item, !!correct);
    return r;
  }
  function answer(lane) {
    const tr = c.trial;
    if (!tr || tr.locked || c.view !== "play") return;
    tr.locked = true; c.jumping = true;
    const latency = performance.now() - tr.t0, ok = lane === tr.correctLane, resp = Number.isInteger(lane) ? tr.choices[lane] : "";
    if (ok) {
      c.roundDone[tr.item.item_id] = true; c.corrects += 1; c.streak += 1; c.best = Math.max(c.best, c.streak);
      const m = mult(); c.points += 100 * m;
      audio.correct(c.streak); toast("FLY!", "ok");
      floatText(m > 1 ? `+100 ×${m}` : "+100", m > 1 ? "combo" : "");
      world.launch(lane, c.streak);
      c.pendingLand = { correct: true, dead: false, goLand: remaining() === 0 };
    } else {
      c.errors += 1; c.lives = 0; c.streak = 0; c.deadReason = "fall";
      audio.wrong(); toast("Oops!", "bad"); world.crash(lane);
      c.pendingLand = { correct: false, dead: true, goLand: false };
    }
    record(tr.item, resp, ok, latency); hudUpdate();
  }
  function landed() {
    const W = c.pendingLand; c.pendingLand = null; c.jumping = false;
    if (!W) return;
    if (W.dead) return finish({ dead: true });
    audio.land();
    if (W.goLand) {
      showPlay(false); world.hideRow(); audio.win(); world.ceremony(() => finish());
      return;
    }
    nextTrial(true);
  }
  function roundDone() { c.trial = null; showPlay(false); toast(`Round ${c.round} done`, "ok"); return finish(); }
  function finish({ dead = false } = {}) {
    if (c.view === "end") return;
    mrjPostRound(e, c, target(), dead);
    if (!dead) wmDone(c, e);
    c.view = "end"; c.trial = null; world.setSkiing(false); showPlay(false);
    const acc = c.records.length ? Math.round((c.records.filter((r) => r.correct).length / c.records.length) * 100) : 0;
    const i = board.findIndex((b) => b.student_id === c.studentId && b.pack_id === e.pack_id);
    const row = { student_id: c.studentId, pack_id: e.pack_id, points: c.points, accuracy: acc, errors: c.errors, ended_at: new Date().toISOString() };
    if (i >= 0) { if (row.points >= board[i].points) board[i] = row; } else board.push(row);
    board.sort((a, b) => b.points - a.points);
    const end = $("#sj-end");
    const name = esc(c.studentId);
    end.innerHTML = `<div class="medal ${dead ? "crash" : "gold"}"><span>${dead ? "!" : "★"}</span></div>
      <h2>${dead ? "Crashed!" : "Gold medal!"}</h2>
      <p>${dead ? (c.deadReason === "tree" ? `${name} hit a tree. Start again.` : `${name} jumped the wrong ramp and fell. Start again.`) : `${name} got ${target()} right. The crowd cheered and they put a gold medal on.`}</p>
      <div class="stats"><div><b>${c.points}</b><span>points</span></div><div><b>${acc}%</b><span>accurate</span></div><div><b>${c.best}</b><span>best combo</span></div></div>
      ${board.length > 1 ? `<div class="board">${board.slice(0, 8).map((b, k) => `${k + 1}. ${esc(b.student_id)} — ${b.points} pts`).join("<br>")}</div>` : ""}
      <button class="go" id="sj-again" type="button">Start again</button>`;
    end.classList.remove("hidden");
    end.querySelector("#sj-again").onclick = () => { audio.unlock(); restart(); };
  }
  function restart() {
    Object.assign(c, { points: 0, errors: 0, lives: LIVES, corrects: 0, roundDone: {}, mrjRoundPosted: false, records: [], trial: null,
      jumping: false, pendingLand: null, view: "play", holdSteer: 0, pointerSteer: 0, boost: 0, streak: 0, best: 0, deadReason: "" });
    $("#sj-end").classList.add("hidden"); $("#sj-end").innerHTML = "";
    world.reset(); world.setSkiing(true); seed();
    if (c.corrects >= target()) { world.setSkiing(false); return finish(); }
    refill(); nextTrial(true); hudUpdate();
  }
  function seed() { seedFromRows(e, c, progressRows, target()); }
  function begin(name) {
    c.studentId = String(name || studentId || (window.MRJ_AUTH && window.MRJ_AUTH.student && window.MRJ_AUTH.student()) || "Student").slice(0, 24);
    c.startedAt = new Date().toISOString(); c.view = "play";
    $("#sj-start").classList.add("hidden");
    audio.unlock(); audio.startMusic();
    world.reset(); world.setSkiing(true); seed();
    if (c.corrects >= target()) { world.setSkiing(false); return finish(); }
    refill(); nextTrial(true); hudUpdate();
  }
  // Known name (Word Master / sign-in): skip typing, keep one tap so audio can unlock on iPhone.
  function readyCard(name) {
    c.studentId = String(name).slice(0, 24);
    $("#sj-form").innerHTML = `<div class="hello">Hi, <b>${esc(c.studentId)}</b>!</div><button class="go big" type="submit">Tap to start ▶</button>`;
    hudUpdate();
  }

  // cloud progress (mrj-signin) — same events/rules as before
  function onRows(rows) { progressRows = Array.isArray(rows) ? rows : []; seed(); if (c.view === "play") { refill(); hudUpdate(); } }
  window.addEventListener("mrj-auth-ready", (ev) => {
    const d = (ev && ev.detail) || {};
    progressRows = Array.isArray(d.progress) ? d.progress.slice() : [];
    const P = window.MRJ_SKI_PROGRESS;
    if (P && typeof P.onAuthReady === "function") P.onAuthReady(ev, { onRows }); else seed();
    const id = d.id || (window.MRJ_AUTH && window.MRJ_AUTH.student && window.MRJ_AUTH.student());
    if (c.view === "start") { if (id) readyCard(id); return; }
    if (c.records.length || c.jumping || c.pendingLand) return;
    c.roundDone = {}; c.mrjRoundPosted = false; c.corrects = 0; c.queue = []; c.trial = null; c.view = "play";
    $("#sj-end").classList.add("hidden"); seed();
    if (c.corrects >= target()) { world.setSkiing(false); finish(); } else nextTrial(true);
    hudUpdate();
  });

  $("#sj-form").addEventListener("submit", (ev) => {
    ev.preventDefault();
    const input = $("#sj-input");
    begin((input && input.value.trim()) || c.studentId || "Student");
  });
  if (studentId) readyCard(studentId);

  // mute
  const muteBtn = $("#sj-mute");
  muteBtn.addEventListener("click", (ev) => {
    ev.stopPropagation(); audio.unlock();
    const m = audio.setMuted(!audio.isMuted());
    muteBtn.innerHTML = m ? ICON_OFF : ICON_ON; muteBtn.classList.toggle("off", m);
  });

  // controls: tap/hold sides to steer, slide up to boost; keys ← → A D, ↑ W
  const ptr = (ev) => {
    const t = ev.changedTouches ? ev.changedTouches[0] : ev, r = root.getBoundingClientRect();
    return { x: (t.clientX - r.left) / Math.max(1, r.width), h: Math.max(1, r.height), y: t.clientY };
  };
  const steerFrom = (x) => (x < 0.38 ? -1 : x > 0.62 ? 1 : (x - 0.5) * 2);
  function move(ev) {
    const p = ptr(ev);
    c.pointerSteer = steerFrom(p.x); c.holdSteer = c.pointerSteer; c.ptrY = p.y;
    c.boost = Math.max(0, Math.min(1, (c.ptrStartY - c.ptrY) / (p.h * 0.3)));
  }
  root.addEventListener("pointerdown", (ev) => {
    audio.unlock();
    if (c.view !== "play" || (ev.target.closest && ev.target.closest(".card, button, input, a, label"))) return;
    ev.preventDefault(); c.pointerDown = true;
    const p = ptr(ev); c.ptrStartY = p.y; c.ptrY = p.y; move(ev);
    try { root.setPointerCapture(ev.pointerId); } catch (x) {}
  });
  root.addEventListener("pointermove", (ev) => { if (c.pointerDown && c.view === "play") { ev.preventDefault(); move(ev); } });
  const up = () => { c.pointerDown = false; c.holdSteer = 0; };
  root.addEventListener("pointerup", up); root.addEventListener("pointercancel", up);
  const key = (on) => (ev) => {
    const k = ev.key;
    if (k === "ArrowLeft" || k === "a" || k === "A") c.keys.left = on;
    if (k === "ArrowRight" || k === "d" || k === "D") c.keys.right = on;
    if (k === "ArrowUp" || k === "w" || k === "W") c.keys.up = on;
    if (on && k.startsWith("Arrow") && c.view === "play") ev.preventDefault();
    if (on) audio.unlock();
  };
  window.addEventListener("keydown", key(true)); window.addEventListener("keyup", key(false));
  const steer = () => { let s = 0; if (c.keys.left) s -= 1; if (c.keys.right) s += 1; return s || (c.pointerDown ? c.pointerSteer : c.holdSteer); };

  let last = performance.now(), wasBoost = false;
  function frame(now) {
    const dt = Math.min(0.05, Math.max(0, (now - last) / 1000)); last = now; c.t += dt;
    world.setSteer(steer());
    if (c.keys.up) c.boost = Math.min(1, c.boost + dt * 2.6); else if (!c.pointerDown) c.boost = Math.max(0, c.boost - dt * 1.35);
    if (c.boost > 0.5 && !wasBoost) audio.boost(); wasBoost = c.boost > 0.5;
    world.setBoost(c.view === "play" ? c.boost : 0);
    world.tick(dt);
    if (c.view === "play") {
      for (const ev of world.pullEvents()) {
        if (ev.type === "hit") answer(ev.lane);
        else if (ev.type === "land" || ev.type === "crashdone") landed();
        else if (ev.type === "fall") { audio.fall(); toast("CRASH!", "bad"); }
        else if (ev.type === "treecrash" && !c.pendingLand) {
          // side tree: the run ends (no word answered, so no word row)
          c.lives = 0; c.streak = 0; c.deadReason = "tree"; if (c.trial) c.trial.locked = true;
          audio.treeCrash(); toast("TREE!", "bad"); showPlay(false); world.hideRow();
          c.pendingLand = { correct: false, dead: true, goLand: false };
        }
        else if (ev.type === "missed" && c.trial && !c.trial.locked) { toast("Missed! Try again", "warn"); nextTrial(false); }
      }
    } else world.pullEvents();
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
  hudUpdate();

  const api = {
    version: VERSION,
    getState() {
      return {
        student_id: c.studentId, session_id: c.sessionId, pack_id: e.pack_id, view: c.view, points: c.points, errors: c.errors,
        lives: c.lives, round: c.round, corrects: c.corrects, remaining: remaining(), total: target(), pack_items: e.items.length,
        current_item: c.trial ? c.trial.item.item_id : null, correct_lane: c.trial ? c.trial.correctLane : null, choices: c.trial ? c.trial.choices.slice() : [],
        airborne: world.isAirborne(), x: world.S.x, streak: c.streak, multiplier: mult(), quality: world.quality, muted: audio.isMuted(),
        version: VERSION, target_rule: sessionMode ? "wm:all-items" : "standalone:5", steer: c.holdSteer, boost: c.boost, session_mode: sessionMode,
      };
    },
    getRecords: () => c.records.slice(),
    getLeaderboard: () => board.slice(),
    loadPack(p) {
      if (sessionMode) return false; // Word Master words only
      e = p; c.pack = p; c.roundDone = {}; refill(); hudUpdate(); return true;
    },
  };
  window.MRJSkiJump = api; window.SkiJump = api;
  return api;
}
