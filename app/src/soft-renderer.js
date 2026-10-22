// SoftRenderer: a tiny three.js-compatible renderer that draws the SAME scene on a plain 2D canvas
// (no WebGL, no GPU). Used automatically when WebGL is missing or keeps getting lost on school PCs.
// Flat-shaded triangles (Lambert light + fog), textured quads (word plates / cards), sprites (glows),
// points (particles, stars). Painter's sort, frustum + back-face + tiny-triangle culling, pixel-ratio cap.
import * as THREE from "three";

const _m = new THREE.Matrix4(), _mv = new THREE.Matrix4(), _vp = new THREE.Matrix4(), _n = new THREE.Matrix3();
const _a = new THREE.Vector3(), _b = new THREE.Vector3(), _c = new THREE.Vector3(), _w = new THREE.Vector3(), _s = new THREE.Sphere();
const _col = new THREE.Color(), _tmpC = new THREE.Color(), _fog = new THREE.Color(), _frustum = new THREE.Frustum(), _im = new THREE.Matrix4();
const lum = (c) => (c.r + c.g + c.b) / 3;
const s8 = (v) => Math.round(255 * Math.min(1, Math.max(0, v <= 0.0031308 ? v * 12.92 : 1.055 * Math.pow(v, 1 / 2.4) - 0.055)));
const avgCache = new WeakMap();
function avgColor(tex) { // average colour of a texture image (linear), cached
  const img = tex && tex.image; if (!img || !(img.width || img.videoWidth)) return null;
  let c = avgCache.get(img); if (c) return c;
  try { const cv = document.createElement("canvas"); cv.width = cv.height = 4; const g = cv.getContext("2d"); g.drawImage(img, 0, 0, 4, 4); const d = g.getImageData(0, 0, 4, 4).data; let r = 0, gg = 0, b = 0, n = 0; for (let i = 0; i < d.length; i += 4) { if (d[i + 3] < 20) continue; r += d[i]; gg += d[i + 1]; b += d[i + 2]; n++; } c = new THREE.Color(); if (n) c.setRGB(r / n / 255, gg / n / 255, b / n / 255, THREE.SRGBColorSpace); else c.setRGB(1, 1, 1); } catch (e) { c = new THREE.Color(1, 1, 1); }
  avgCache.set(img, c); return c;
}
const V = [new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()];
const texCache = new WeakMap(), _ts = new THREE.Color();
function texData(tex) { // small RGBA copy of a texture (Kenney-style palette atlases): sample per triangle
  const img = tex && tex.image; if (!img || !(img.width || img.videoWidth)) return null;
  let d = texCache.get(img); if (d !== undefined) return d;
  try { const w = Math.min(64, img.width || 64), h = Math.min(64, img.height || 64), cv = document.createElement("canvas"); cv.width = w; cv.height = h; const g = cv.getContext("2d"); g.drawImage(img, 0, 0, w, h); d = { w, h, px: g.getImageData(0, 0, w, h).data, wrap: tex.wrapS === THREE.RepeatWrapping }; } catch (e) { d = null; }
  texCache.set(img, d); return d;
}
const LIN = new Float32Array(256).map((_, i) => { const c = i / 255; return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4); });
function texSample(d, u, v, flip) { u = u - Math.floor(u); v = v - Math.floor(v); if (flip) v = 1 - v; const x = Math.min(d.w - 1, (u * d.w) | 0), y = Math.min(d.h - 1, (v * d.h) | 0), i = (y * d.w + x) * 4; return _ts.setRGB(LIN[d.px[i]], LIN[d.px[i + 1]], LIN[d.px[i + 2]]); }
export class SoftRenderer {
  constructor({ maxPixelRatio = 0.75 } = {}) {
    this.isSoft = true; this.domElement = document.createElement("canvas"); this.ctx = this.domElement.getContext("2d", { alpha: false });
    this.pr = Math.min(window.devicePixelRatio || 1, maxPixelRatio); this.maxPR = maxPixelRatio; this.w = 1; this.h = 1;
    this.clear = new THREE.Color(0x000000); this.shadowMap = { enabled: false, type: 0 }; this.outputColorSpace = THREE.SRGBColorSpace;
    this.toneMapping = 0; this.toneMappingExposure = 1; this.info = { render: { triangles: 0, calls: 0 } };
    this.capabilities = { getMaxAnisotropy: () => 1, isWebGL2: false }; this.list = [];
  }
  getContext() { return null; } setClearColor(c) { this.clear.set(c); } getClearColor(t) { return (t || new THREE.Color()).copy(this.clear); }
  setPixelRatio(p) { this.pr = Math.min(p || 1, this.maxPR); this.setSize(this.w, this.h, false); } getPixelRatio() { return this.pr; }
  setSize(w, h, style = true) { this.w = w; this.h = h; this.domElement.width = Math.max(1, Math.round(w * this.pr)); this.domElement.height = Math.max(1, Math.round(h * this.pr)); if (style) { this.domElement.style.width = w + "px"; this.domElement.style.height = h + "px"; } }
  getSize(t) { return (t || new THREE.Vector2()).set(this.w, this.h); } dispose() {} compile() {} setAnimationLoop() {} forceContextLoss() {}
  render(scene, camera) {
    const g = this.ctx, W = this.domElement.width, H = this.domElement.height, hw = W / 2, hh = H / 2;
    if (scene.matrixWorldAutoUpdate !== false) scene.updateMatrixWorld();
    if (camera.parent === null && camera.matrixWorldAutoUpdate !== false) camera.updateMatrixWorld();
    _vp.multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse); _frustum.setFromProjectionMatrix(_vp);
    // lights
    let amb = 0, dir = null, dI = 0; scene.traverseVisible((o) => {
      // three.js r155+ physical units: diffuse = colour * irradiance / PI
      if (o.isAmbientLight) amb += o.intensity; else if (o.isHemisphereLight) amb += o.intensity * 0.5 * (lum(o.color) + lum(o.groundColor));
      else if (o.isDirectionalLight) { if (!dir) { dir = new THREE.Vector3().setFromMatrixPosition(o.matrixWorld).sub(_a.setFromMatrixPosition(o.target.matrixWorld)).normalize(); dI = o.intensity * lum(o.color); } else amb += o.intensity * 0.35 * lum(o.color); }
    });
    amb = Math.max(0.25, amb / Math.PI); dI /= Math.PI; if (!dir) { dir = new THREE.Vector3(0.3, 1, 0.5).normalize(); dI = 0.6; }
    const aces = this.toneMapping === THREE.ACESFilmicToneMapping, ex = this.toneMappingExposure || 1;
    const tm = aces ? (x) => { x *= ex * 0.6; return (x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14); } : (x) => x;
    const fog = scene.fog; if (fog) _fog.copy(fog.color);
    // background
    const bg = scene.background && scene.background.isColor ? scene.background : this.clear;
    const sky = scene.userData.softSky; // optional [top, bottom] gradient
    if (sky) { const gr = g.createLinearGradient(0, 0, 0, H); sky.forEach((c, i) => gr.addColorStop(i / (sky.length - 1), c)); g.fillStyle = gr; }
    else g.fillStyle = `rgb(${s8(bg.r)},${s8(bg.g)},${s8(bg.b)})`;
    g.fillRect(0, 0, W, H);
    const L = this.list; L.length = 0; let tris = 0; const minArea = 0.6 * this.pr * this.pr;
    const proj = (v) => { v.applyMatrix4(_vp); return v; }; // NDC (applyMatrix4 divides by w)
    const shade = (base, nx, ny, nz, mat, depth, op) => {
      let k = mat.isMeshBasicMaterial || mat.isSpriteMaterial || mat.isPointsMaterial || mat.isShaderMaterial ? 1 : amb + dI * Math.max(0, nx * dir.x + ny * dir.y + nz * dir.z);
      let r = base.r * k, gg = base.g * k, b = base.b * k;
      if (mat.emissive) { const e = mat.emissiveIntensity == null ? 1 : mat.emissiveIntensity; r += mat.emissive.r * e; gg += mat.emissive.g * e; b += mat.emissive.b * e; }
      if (mat.toneMapped !== false && !mat.isShaderMaterial) { r = tm(r); gg = tm(gg); b = tm(b); }
      if (fog && mat.fog !== false) { const f = fog.isFogExp2 ? 1 - Math.exp(-((fog.density * depth) ** 2)) : Math.min(1, Math.max(0, (depth - fog.near) / (fog.far - fog.near))); r += (_fog.r - r) * f; gg += (_fog.g - gg) * f; b += (_fog.b - b) * f; }
      return op < 1 ? `rgba(${s8(r)},${s8(gg)},${s8(b)},${op.toFixed(2)})` : `rgb(${s8(r)},${s8(gg)},${s8(b)})`;
    };
    const camPos = _w.setFromMatrixPosition(camera.matrixWorld).clone();
    scene.traverseVisible((o) => {
      const mat = Array.isArray(o.material) ? o.material[0] : o.material; if (!mat || mat.visible === false) return;
      if (o.isSprite) {
        _a.setFromMatrixPosition(o.matrixWorld); const depth = _a.distanceTo(camPos); proj(_a); if (_a.z < -1 || _a.z > 1) return;
        const sx = new THREE.Vector3().setFromMatrixScale(o.matrixWorld), p2 = _b.copy(_c.setFromMatrixPosition(o.matrixWorld)).add(_a.clone().set(0, 0, 0)).applyMatrix4(camera.matrixWorldInverse);
        const f = (camera.projectionMatrix.elements[5] * hh) / Math.max(0.01, -p2.z), rw = sx.x * f * 0.5, rh = sx.y * f * 0.5; if (rw < 0.5) return;
        L.push({ k: 1, z: -p2.z, ro: o.renderOrder || 0, x: (_a.x + 1) * hw, y: (1 - _a.y) * hh, rw, rh, mat, add: mat.blending === THREE.AdditiveBlending, op: (mat.opacity == null ? 1 : mat.opacity), depth });
        return;
      }
      if (o.isPoints) {
        const pos = o.geometry.attributes.position, size = o.geometry.attributes.size, col = o.geometry.attributes.color; if (!pos) return;
        _mv.multiplyMatrices(camera.matrixWorldInverse, o.matrixWorld); _m.multiplyMatrices(_vp, o.matrixWorld);
        const scaleU = mat.uniforms && mat.uniforms.scale ? mat.uniforms.scale.value : 300, n = Math.min(pos.count, 900), base = mat.color || _tmpC.set(1, 1, 1);
        for (let i = 0; i < n; i++) {
          const s = size ? size.getX(i) : mat.size || 1; if (s <= 0) continue;
          _a.fromBufferAttribute(pos, i); _b.copy(_a).applyMatrix4(_mv); if (_b.z >= -0.05) continue; _a.applyMatrix4(_m); if (Math.abs(_a.x) > 1.1 || Math.abs(_a.y) > 1.1) continue;
          const px = size ? (s * scaleU) / -_b.z * this.pr : mat.sizeAttenuation === false ? s * this.pr : (s * hh) / -_b.z;
          const c = col ? _tmpC.setRGB(col.getX(i), col.getY(i), col.getZ(i)) : base;
          L.push({ k: 2, z: -_b.z, ro: o.renderOrder || 0, x: (_a.x + 1) * hw, y: (1 - _a.y) * hh, r: Math.max(0.6, px * 0.35), c: `rgb(${s8(c.r * (col ? 1.4 : 1))},${s8(c.g * (col ? 1.4 : 1))},${s8(c.b * (col ? 1.4 : 1))})`, add: mat.blending === THREE.AdditiveBlending, op: mat.opacity == null ? 1 : mat.opacity });
        }
        return;
      }
      if (!o.isMesh) return;
      const geo = o.geometry, pos = geo && geo.attributes.position; if (!pos) return;
      if (mat.isShaderMaterial && !(mat.userData && mat.userData.softColor)) return; // custom shaders (sky/water) use scene.userData.softSky / softColor
      const inst = o.isInstancedMesh ? o.count : 1;
      if (!geo.boundingSphere) geo.computeBoundingSphere();
      const map = mat.map && mat.map.image, idx = geo.index, triN = idx ? idx.count / 3 : pos.count / 3, side = mat.side;
      const op = mat.transparent ? (mat.opacity == null ? 1 : mat.opacity) : 1; if (op < 0.02) return;
      const baseCol = new THREE.Color().copy(mat.userData && mat.userData.softColor ? new THREE.Color(mat.userData.softColor) : mat.color || _tmpC.set(1, 1, 1));
      const texd = map ? texData(mat.map) : null, uvA = geo.attributes.uv, back = mat.userData && mat.userData.softBack ? 1e9 - mat.userData.softBack : 0;
      const avg = map && !(texd && uvA) ? avgColor(mat.map) : null; if (avg) baseCol.multiply(avg);
      const vcol = mat.vertexColors && geo.attributes.color;
      for (let ii = 0; ii < inst; ii++) {
        if (o.isInstancedMesh) { o.getMatrixAt(ii, _im); _m.multiplyMatrices(o.matrixWorld, _im); } else _m.copy(o.matrixWorld);
        _s.copy(geo.boundingSphere).applyMatrix4(_m); if (o.frustumCulled !== false && !_frustum.intersectsSphere(_s)) continue;
        const ic = o.isInstancedMesh && o.instanceColor ? _tmpC.fromBufferAttribute(o.instanceColor, ii) : null;
        const bc = ic ? baseCol.clone().multiply(ic) : baseCol;
        // textured quad (word plates, cards, labels): draw the real image with an affine transform
        if (map && pos.count === 4 && (map.width || map.videoWidth) && mat.map.repeat.x === 1 && mat.map.repeat.y === 1) {
          const P = []; let zs = 0, ok = true;
          for (let i = 0; i < 4; i++) { _a.fromBufferAttribute(pos, i).applyMatrix4(_m); _b.copy(_a).applyMatrix4(camera.matrixWorldInverse); if (_b.z >= -0.05) { ok = false; break; } zs += -_b.z; proj(_a); P.push([(_a.x + 1) * hw, (1 - _a.y) * hh]); }
          if (ok) { const uv = geo.attributes.uv; const U = []; for (let i = 0; i < 4; i++) U.push([uv.getX(i), uv.getY(i)]);
          L.push({ k: 3, z: back || zs / 4, ro: o.renderOrder || 0, P, U, img: map, op, flip: mat.map.flipY !== false, dt: mat.depthTest === false });
          continue; } // quad reaches behind the camera -> fall through to clipped flat triangles
        }
        _n.getNormalMatrix(_m);
        const step = triN > 4000 ? 2 : 1;
        for (let t = 0; t < triN; t += step) {
          const i0 = idx ? idx.getX(t * 3) : t * 3, i1 = idx ? idx.getX(t * 3 + 1) : t * 3 + 1, i2 = idx ? idx.getX(t * 3 + 2) : t * 3 + 2;
          _a.fromBufferAttribute(pos, i0).applyMatrix4(_m); _b.fromBufferAttribute(pos, i1).applyMatrix4(_m); _c.fromBufferAttribute(pos, i2).applyMatrix4(_m);
          const e1x = _b.x - _a.x, e1y = _b.y - _a.y, e1z = _b.z - _a.z, e2x = _c.x - _a.x, e2y = _c.y - _a.y, e2z = _c.z - _a.z;
          let nx = e1y * e2z - e1z * e2y, ny = e1z * e2x - e1x * e2z, nz = e1x * e2y - e1y * e2x; const nl = Math.hypot(nx, ny, nz) || 1; nx /= nl; ny /= nl; nz /= nl;
          const cx = (_a.x + _b.x + _c.x) / 3, cy = (_a.y + _b.y + _c.y) / 3, cz = (_a.z + _b.z + _c.z) / 3;
          const facing = nx * (camPos.x - cx) + ny * (camPos.y - cy) + nz * (camPos.z - cz);
          if (side === THREE.FrontSide && facing <= 0) continue; if (side === THREE.BackSide && facing >= 0) continue;
          if (facing < 0) { nx = -nx; ny = -ny; nz = -nz; }
          const depth = Math.hypot(camPos.x - cx, camPos.y - cy, camPos.z - cz);
          // view space + near-plane clipping (big ground / water triangles reach behind the camera)
          V[0].copy(_a).applyMatrix4(camera.matrixWorldInverse); V[1].copy(_b).applyMatrix4(camera.matrixWorldInverse); V[2].copy(_c).applyMatrix4(camera.matrixWorldInverse);
          const zN = -Math.max(0.05, camera.near); let poly;
          if (V[0].z <= zN && V[1].z <= zN && V[2].z <= zN) poly = V;
          else if (V[0].z > zN && V[1].z > zN && V[2].z > zN) continue;
          else { poly = []; for (let k = 0; k < 3; k++) { const P0 = V[k], P1 = V[(k + 1) % 3], in0 = P0.z <= zN, in1 = P1.z <= zN; if (in0) poly.push(P0.clone()); if (in0 !== in1) { const t2 = (zN - P0.z) / (P1.z - P0.z); poly.push(P0.clone().lerp(P1, t2)); } } if (poly.length < 3) continue; }
          const pts = new Array(poly.length * 2); let minx = 1e9, maxx = -1e9, miny = 1e9, maxy = -1e9, zsum = 0;
          for (let k = 0; k < poly.length; k++) { _w.copy(poly[k]); zsum -= _w.z; _w.applyMatrix4(camera.projectionMatrix); const X = (_w.x + 1) * hw, Y = (1 - _w.y) * hh; pts[k * 2] = X; pts[k * 2 + 1] = Y; if (X < minx) minx = X; if (X > maxx) maxx = X; if (Y < miny) miny = Y; if (Y > maxy) maxy = Y; }
          if (maxx < 0 || minx > W || maxy < 0 || miny > H) continue;
          if (poly === V) { const area = Math.abs((pts[2] - pts[0]) * (pts[5] - pts[1]) - (pts[4] - pts[0]) * (pts[3] - pts[1])) * 0.5; if (area < minArea) continue; }
          let base = bc;
          if (vcol) base = _col.fromBufferAttribute(vcol, i0).multiply(bc);
          else if (texd && uvA) { base = _col.copy(bc).multiply(texSample(texd, (uvA.getX(i0) + uvA.getX(i1) + uvA.getX(i2)) / 3, (uvA.getY(i0) + uvA.getY(i1) + uvA.getY(i2)) / 3, mat.map.flipY !== false)); }
          L.push({ k: 0, z: back || zsum / poly.length, ro: o.renderOrder || 0, pts, c: shade(base, nx, ny, nz, mat, depth, op), add: mat.blending === THREE.AdditiveBlending }); tris++;
        }
      }
    });
    L.sort((p, q) => (p.ro - q.ro) || (q.z - p.z));
    for (const it of L) {
      if (it.k === 0) { const q = it.pts; g.globalCompositeOperation = it.add ? "lighter" : "source-over"; g.fillStyle = it.c; g.strokeStyle = it.c; g.lineWidth = 0.6; g.beginPath(); g.moveTo(q[0], q[1]); for (let k = 2; k < q.length; k += 2) g.lineTo(q[k], q[k + 1]); g.closePath(); g.fill(); if (!it.add) g.stroke(); }
      else if (it.k === 1) { const m = it.mat, c = m.color || _tmpC.set(1, 1, 1), a = it.op; g.globalCompositeOperation = it.add ? "lighter" : "source-over";
        const img = m.map && m.map.image; const isGlow = !img || (img.width <= 64 && it.add);
        if (isGlow) { const gr = g.createRadialGradient(it.x, it.y, 0, it.x, it.y, Math.max(it.rw, it.rh)); gr.addColorStop(0, `rgba(${s8(c.r)},${s8(c.g)},${s8(c.b)},${a})`); gr.addColorStop(0.35, `rgba(${s8(c.r)},${s8(c.g)},${s8(c.b)},${a * 0.45})`); gr.addColorStop(1, `rgba(${s8(c.r)},${s8(c.g)},${s8(c.b)},0)`); g.fillStyle = gr; g.save(); g.translate(it.x, it.y); g.scale(1, it.rh / Math.max(0.01, it.rw)); g.translate(-it.x, -it.y); g.beginPath(); g.arc(it.x, it.y, it.rw, 0, 6.283); g.fill(); g.restore(); }
        else { g.globalAlpha = a; try { g.drawImage(img, it.x - it.rw, it.y - it.rh, it.rw * 2, it.rh * 2); } catch (e) {} g.globalAlpha = 1; } }
      else if (it.k === 2) { g.globalCompositeOperation = it.add ? "lighter" : "source-over"; g.globalAlpha = it.op; g.fillStyle = it.c; g.beginPath(); g.arc(it.x, it.y, it.r, 0, 6.283); g.fill(); g.globalAlpha = 1; }
      else { // affine textured quad: map uv (0..1) image corners to screen using triangle (0,1,2) of the quad
        const img = it.img, iw = img.width || img.videoWidth, ih = img.height || img.videoHeight; g.globalCompositeOperation = "source-over"; g.globalAlpha = it.op;
        const [p0, p1, p2] = it.P, [u0, u1, u2] = it.U.map(([u, v]) => [u * iw, (it.flip ? 1 - v : v) * ih]);
        const den = u0[0] * (u1[1] - u2[1]) + u1[0] * (u2[1] - u0[1]) + u2[0] * (u0[1] - u1[1]);
        if (Math.abs(den) > 1e-6) { const a = (p0[0] * (u1[1] - u2[1]) + p1[0] * (u2[1] - u0[1]) + p2[0] * (u0[1] - u1[1])) / den, b = (p0[1] * (u1[1] - u2[1]) + p1[1] * (u2[1] - u0[1]) + p2[1] * (u0[1] - u1[1])) / den,
          c = (p0[0] * (u2[0] - u1[0]) + p1[0] * (u0[0] - u2[0]) + p2[0] * (u1[0] - u0[0])) / den, d = (p0[1] * (u2[0] - u1[0]) + p1[1] * (u0[0] - u2[0]) + p2[1] * (u1[0] - u0[0])) / den,
          e = (p0[0] * (u1[0] * u2[1] - u2[0] * u1[1]) + p1[0] * (u2[0] * u0[1] - u0[0] * u2[1]) + p2[0] * (u0[0] * u1[1] - u1[0] * u0[1])) / den, f = (p0[1] * (u1[0] * u2[1] - u2[0] * u1[1]) + p1[1] * (u2[0] * u0[1] - u0[0] * u2[1]) + p2[1] * (u0[0] * u1[1] - u1[0] * u0[1])) / den;
          g.save(); g.beginPath(); g.moveTo(it.P[0][0], it.P[0][1]); for (const q of [it.P[1], it.P[3], it.P[2]]) g.lineTo(q[0], q[1]); g.closePath(); g.clip(); g.setTransform(a, b, c, d, e, f); try { g.drawImage(img, 0, 0); } catch (x) {} g.restore(); }
        g.globalAlpha = 1; }
    }
    g.globalCompositeOperation = "source-over"; this.info.render.triangles = tris; this.info.render.calls = L.length;
  }
}
