// WebGL safety net (shared by the MRJ 3D games). No student action is ever needed:
// 1) makeRenderer: try normal -> safe -> low-power WebGL. Detect weak/software GPUs (SwiftShader, llvmpipe,
//    Microsoft Basic Render, old Intel HD/GMA) and flag them so the game starts in its lightest mode.
//    If WebGL is missing entirely, return a SoftRenderer that draws the same scene on a plain 2D canvas.
// 2) guardContext: if the GPU drops the WebGL context, wait briefly for three.js to restore it; if it does not come
//    back, or keeps getting lost, switch to the SoftRenderer automatically (onFallback).
import { SoftRenderer } from "./soft-renderer.js";
export { SoftRenderer };
export const WEAK_GPU_RE = /swiftshader|llvmpipe|softpipe|basic render|microsoft basic|software|mesa offscreen|intel.*(gma|hd graphics( [2-5]\d{3}|\s*$|\)|,)|g41|g45|q45)/i;
const wantSoft = () => { try { return /[?&]gl=soft\b/.test(location.search); } catch (e) { return false; } };
export function gpuName(r) {
  try { const gl = r.getContext(); const ext = gl.getExtension("WEBGL_debug_renderer_info"); return String(ext ? gl.getParameter(ext.UNMASKED_RENDERER_WEBGL) : gl.getParameter(gl.RENDERER)); } catch (e) { return ""; }
}
export function makeRenderer(THREE, opts) {
  if (!wantSoft()) {
    const tries = [opts, { ...opts, antialias: false, powerPreference: "default" }, { ...opts, antialias: false, powerPreference: "low-power", precision: "mediump", failIfMajorPerformanceCaveat: false }];
    for (const o of tries) {
      try { const r = new THREE.WebGLRenderer(o); if (r.getContext()) { r.mrjGpu = gpuName(r); r.mrjWeak = WEAK_GPU_RE.test(r.mrjGpu); return r; } } catch (e) { /* next */ }
    }
  }
  const s = new SoftRenderer(); s.mrjGpu = "canvas2d"; s.mrjWeak = true; return s;
}
function overlay(host) {
  let el = host.querySelector(":scope > .gl-msg");
  if (!el) {
    el = document.createElement("div"); el.className = "gl-msg";
    el.style.cssText = "position:absolute;inset:0;z-index:50;display:flex;align-items:center;justify-content:center;background:rgba(10,20,40,.55);color:#fff;font:700 20px Fredoka,system-ui,sans-serif;text-align:center;padding:20px;pointer-events:none";
    host.appendChild(el);
  }
  return el;
}
export function clearGlMsg(host) { const el = host.querySelector(":scope > .gl-msg"); if (el) el.remove(); }
export function guardContext(renderer, host, { onRestored, onFallback, waitMs = 2500 } = {}) {
  const state = { lost: false, count: 0 };
  if (renderer.isSoft) return state;
  const canvas = renderer.domElement; let timer = 0, done = false;
  const fallback = () => { if (done) return; done = true; clearTimeout(timer); state.lost = false; clearGlMsg(host); try { onFallback && onFallback(); } catch (e) { console.error(e); } };
  canvas.addEventListener("webglcontextlost", (e) => {
    if (done) return; e.preventDefault(); state.lost = true; state.count++;
    if (state.count >= 2) { fallback(); return; } // keeps getting lost -> stop relying on the GPU
    overlay(host).innerHTML = "<p>Loading pictures… 🔧</p>";
    clearTimeout(timer); timer = setTimeout(() => { if (state.lost) fallback(); }, waitMs);
  }, false);
  canvas.addEventListener("webglcontextrestored", () => {
    if (done) return; state.lost = false; clearTimeout(timer); clearGlMsg(host);
    try { onRestored && onRestored(state.count); } catch (e) { /* ignore */ }
  }, false);
  return state;
}
// last-resort screen for non-graphics boot errors (graphics problems never reach here any more)
export function showGlFatal(app, title, err) {
  const msg = "Something went wrong loading the game. Tap to try again.";
  app.innerHTML = `<div class="fatal gl-fallback"><h2></h2><p></p><button type="button" class="go">Try again</button></div>`;
  app.querySelector("h2").textContent = title; app.querySelector("p").textContent = msg;
  app.querySelector("button").addEventListener("click", () => location.reload());
}
