// MRJ score + progress hooks. Same rows as the old engine:
//   per item  -> program "ski-jump", itemId "<pack_id>:<item_id>", itemType "word", 1/1 or 0/1
//   per round -> itemId "round:<pack_id>", itemType "round", correct / answered
// Cloud only (window.MRJ_SCORES → MRJ Classroom Metrics). Nothing is saved locally here.

export const PROGRAM = "ski-jump";
export const APP_NAME = "MRJ Ski Jump";

function student() {
  try {
    const a = window.MRJ_AUTH;
    return (a && a.student && a.student()) || "";
  } catch (e) {
    return "";
  }
}

export function mrjPost(pack, item, correct) {
  try {
    const s = student();
    if (!s || !window.MRJ_SCORES || typeof window.MRJ_SCORES.post !== "function" || !item || !item.item_id) return;
    const id = String(pack.pack_id || "pack");
    window.MRJ_SCORES.post({
      student: String(s).trim(),
      program: PROGRAM,
      appName: APP_NAME,
      bookTitle: pack.title || pack.pack_id,
      itemId: id + ":" + item.item_id,
      itemType: "word",
      correctness: correct ? "correct" : "incorrect",
      scoreValue: correct ? 1 : 0,
      scoreMax: 1,
    });
  } catch (e) {}
}

export function mrjPostRound(pack, c, target, dead) {
  try {
    if (c.mrjRoundPosted) return;
    c.mrjRoundPosted = true;
    const s = student();
    if (!s || !window.MRJ_SCORES || typeof window.MRJ_SCORES.post !== "function") return;
    const id = String(pack.pack_id || "pack");
    const total = c.records.length;
    const correct = c.records.filter((r) => r.correct).length;
    window.MRJ_SCORES.post({
      student: String(s).trim(),
      program: PROGRAM,
      appName: APP_NAME,
      bookTitle: pack.title || pack.pack_id,
      itemId: "round:" + id,
      itemType: "round",
      scoreValue: correct,
      scoreMax: total || 1,
      metadata: { round: c.round, lives: c.lives, dead: !!dead, corrects: c.corrects, target },
    });
  } catch (e) {}
}

function itemForPack(raw, packId) {
  const item = String(raw || "").trim();
  if (!item || item.indexOf("round:") === 0) return "";
  const colon = item.indexOf(":");
  if (colon > 0) {
    const prefix = item.slice(0, colon);
    if (prefix === "round") return "";
    const pack = String(packId || "").trim();
    if (pack && prefix !== pack) return "";
    return item.slice(colon + 1);
  }
  return item;
}

// Seed already-passed items from cloud progress rows (same rules as mrj-progress-core).
export function seedFromRows(pack, c, rows, target) {
  const P = window.MRJ_SKI_PROGRESS;
  if (P && typeof P.passedMap === "function") {
    P.applyPassed(c.roundDone, P.passedMap(rows, PROGRAM, pack.pack_id));
    c.corrects = P.syncCorrects(c.roundDone, pack.items, target, c.corrects);
    return;
  }
  const latest = {};
  for (const row of Array.isArray(rows) ? rows : []) {
    if (!row || String(row.program || row.curriculum_program || "").trim() !== PROGRAM) continue;
    const item = itemForPack(row.itemId || row.item_id || row.item, pack.pack_id);
    if (!item) continue;
    const raw = row.scoreValue != null ? row.scoreValue : row.score != null ? row.score : row.scorePct;
    const num = typeof raw === "number" ? raw : parseFloat(String(raw == null ? "" : raw).split("/")[0]);
    const max = row.scoreMax != null ? Number(row.scoreMax) : NaN;
    const pct = row.scorePct != null ? Number(row.scorePct) : NaN;
    const pass = Number.isFinite(pct) ? pct >= 100 : Number.isFinite(max) && max > 0 && Number.isFinite(num) ? num >= max : Number.isFinite(num) && num > 0;
    latest[item] = !!latest[item] || !!pass;
  }
  let n = 0;
  for (const it of pack.items || []) if (it && latest[it.item_id]) { c.roundDone[it.item_id] = true; n++; }
  c.corrects = Math.max(c.corrects | 0, Math.min(target, n));
}

// Word Master parent frame: tell it the game finished (same message as the old build).
export function wmDone(c, pack) {
  try {
    const n = Object.keys(c.roundDone).filter((k) => c.roundDone[k]).length;
    const need = (pack.items && pack.items.length) || 0;
    if (need && n >= need && window.parent && window.parent !== window) {
      window.parent.postMessage({ type: "mrj-wm-game-done", game: "snowjump", items: n, correct: c.corrects | 0, finished: true }, "*");
    }
  } catch (e) {}
}
