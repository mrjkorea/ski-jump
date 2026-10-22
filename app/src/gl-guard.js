// WebGL safety net (shared by the MRJ 3D games).
// 1) makeRenderer: try normal -> safe -> low-power settings; if WebGL is missing, throw a NO_WEBGL error with a kid-friendly message.
// 2) guardContext: when the GPU drops the WebGL context (weak/old PCs, driver resets, too many tabs) the old code kept
//    playing sound + DOM words over a blank canvas. Now: pause drawing, show a message, let three.js restore;
//    if it does not come back, offer one tap to restart the game.
export const NO_WEBGL_MSG = "This computer can't show the game pictures (3D graphics are turned off). Try Chrome or Edge, turn on hardware acceleration, or use another computer.";
export function makeRenderer(THREE, opts) {
  const tries = [opts, { ...opts, antialias: false, powerPreference: "default" }, { ...opts, antialias: false, powerPreference: "low-power", precision: "mediump", failIfMajorPerformanceCaveat: false }];
  let last = null;
  for (const o of tries) {
    try { const r = new THREE.WebGLRenderer(o); if (r.getContext()) return r; } catch (e) { last = e; }
  }
  const err = new Error(NO_WEBGL_MSG); err.code = "NO_WEBGL"; err.cause = last; throw err;
}
function overlay(host) {
  let el = host.querySelector(":scope > .gl-msg");
  if (!el) {
    el = document.createElement("div"); el.className = "gl-msg";
    el.style.cssText = "position:absolute;inset:0;z-index:50;display:flex;align-items:center;justify-content:center;background:rgba(10,20,40,.82);color:#fff;font:700 20px Fredoka,system-ui,sans-serif;text-align:center;padding:20px";
    host.appendChild(el);
  }
  return el;
}
export function guardContext(renderer, host, { onRestored, waitMs = 3000 } = {}) {
  const canvas = renderer.domElement, state = { lost: false, count: 0 };
  let timer = 0;
  const ask = () => {
    const el = overlay(host);
    el.innerHTML = `<div><p style="margin:0 0 14px">😵 The game pictures stopped.</p><button type="button" style="font:inherit;padding:12px 22px;border:0;border-radius:14px;background:#2ecc71;color:#fff;cursor:pointer">Tap to restart</button></div>`;
    el.querySelector("button").addEventListener("click", () => location.reload());
  };
  canvas.addEventListener("webglcontextlost", (e) => {
    e.preventDefault(); state.lost = true; state.count++;
    overlay(host).innerHTML = "<p>Fixing the pictures… 🔧</p>";
    clearTimeout(timer); timer = setTimeout(() => { if (state.lost) ask(); }, waitMs);
  }, false);
  canvas.addEventListener("webglcontextrestored", () => {
    state.lost = false; clearTimeout(timer);
    const el = host.querySelector(":scope > .gl-msg"); if (el) el.remove();
    try { onRestored && onRestored(state.count); } catch (e) { /* ignore */ }
  }, false);
  return state;
}
// friendly fatal screen with a retry button (used by main.js when boot fails)
export function showGlFatal(app, title, err) {
  const msg = err && err.code === "NO_WEBGL" ? NO_WEBGL_MSG : (err && err.message) || String(err);
  app.innerHTML = `<div class="fatal gl-fallback"><h2></h2><p></p><button type="button" class="go">Try again</button></div>`;
  app.querySelector("h2").textContent = title; app.querySelector("p").textContent = msg;
  app.querySelector("button").addEventListener("click", () => location.reload());
}
