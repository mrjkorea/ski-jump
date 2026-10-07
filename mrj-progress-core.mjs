/**
 * Ski Jump — MRJ auth progress (full program list + union apply).
 * Safe on old mrj-auth.js without loadProgressForApp / progressError.
 */

export const PROGRAM = "ski-jump";
export const BUILD = "20261007-ski-jump-progress-1";
const RETRY_MS = 17000;

const root = typeof globalThis !== "undefined" ? globalThis : global;

export function progressError() {
  try {
    const auth = root.MRJ_AUTH;
    if (auth && typeof auth.progressError === "function") {
      return String(auth.progressError() || "").trim();
    }
  } catch (e1) {}
  return "";
}

function rowProgram(row) {
  return String((row && (row.program || row.curriculum_program)) || "").trim();
}

function rowItemId(row) {
  return String((row && (row.itemId || row.item_id || row.item)) || "").trim();
}

function rowPass(row) {
  const raw =
    row.scoreValue != null
      ? row.scoreValue
      : row.score != null
        ? row.score
        : row.scorePct;
  const num =
    typeof raw === "number"
      ? raw
      : parseFloat(String(raw == null ? "" : raw).split("/")[0]);
  const max = row.scoreMax != null ? Number(row.scoreMax) : NaN;
  const pct = row.scorePct != null ? Number(row.scorePct) : NaN;
  if (Number.isFinite(pct)) return pct >= 100;
  if (Number.isFinite(max) && max > 0 && Number.isFinite(num)) return num >= max;
  return Number.isFinite(num) && num > 0;
}

export function filterProgramRows(rows, program) {
  const out = [];
  const want = String(program || PROGRAM).trim();
  if (!Array.isArray(rows)) return out;
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    if (!row || rowProgram(row) !== want) continue;
    out.push(row);
  }
  return out;
}

export function mergeProgressRows(existing, incoming) {
  const base = Array.isArray(existing) ? existing.slice() : [];
  if (!Array.isArray(incoming) || !incoming.length) return base;
  return base.concat(incoming);
}

/** Best pass per item across rows (union; never clears a pass). */
export function passedMap(progress, program) {
  const latest = {};
  const rows = filterProgramRows(progress, program);
  for (let bi = 0; bi < rows.length; bi++) {
    const row = rows[bi];
    const item = rowItemId(row);
    if (!item) continue;
    const pass = rowPass(row);
    latest[item] = !!latest[item] || !!pass;
  }
  return latest;
}

export function applyPassed(roundDone, latest) {
  if (!roundDone || !latest) return;
  for (const id in latest) {
    if (latest[id]) roundDone[id] = true;
  }
}

export function syncCorrects(roundDone, packItems, targetCount, currentCorrects) {
  const items = packItems || [];
  let n = 0;
  const cap = typeof targetCount === "number" ? targetCount : 5;
  for (let bi = 0; bi < items.length; bi++) {
    const id = items[bi] && items[bi].item_id;
    if (id && roundDone[id]) n++;
  }
  return Math.max(currentCorrects | 0, Math.min(cap, n));
}

export function loadFullProgram(auth, program) {
  program = String(program || PROGRAM).trim();
  if (!auth || typeof auth.loadProgressForApp !== "function") {
    return Promise.resolve({ ok: true, progress: [] });
  }
  try {
    return auth.loadProgressForApp(program).then((res) => {
      if (!res || !res.ok) {
        return { ok: false, error: (res && res.error) || "load_failed", progress: [] };
      }
      return { ok: true, progress: Array.isArray(res.progress) ? res.progress : [] };
    });
  } catch (e2) {
    return Promise.resolve({ ok: false, error: "load_failed", progress: [] });
  }
}

export function onAuthReady(ev, hooks) {
  hooks = hooks || {};
  const detail = (ev && ev.detail) || {};
  let accumulated = mergeProgressRows([], detail.progress);
  let retryDone = false;
  let retryTimer = null;

  function notify() {
    if (typeof hooks.onRows === "function") {
      try {
        hooks.onRows(accumulated);
      } catch (e3) {}
    }
  }

  function scheduleRetry() {
    if (retryDone || retryTimer != null) return;
    retryTimer = setTimeout(() => {
      retryTimer = null;
      retryDone = true;
      if (progressError()) return;
      const auth = root.MRJ_AUTH;
      loadFullProgram(auth, PROGRAM).then((res) => {
        if (!res.ok) return;
        accumulated = mergeProgressRows(accumulated, res.progress);
        notify();
      });
    }, RETRY_MS);
  }

  notify();

  if (progressError()) {
    scheduleRetry();
    return;
  }

  const auth = root.MRJ_AUTH;
  loadFullProgram(auth, PROGRAM).then((res) => {
    if (!res.ok) {
      scheduleRetry();
      return;
    }
    accumulated = mergeProgressRows(accumulated, res.progress);
    notify();
  });
}
