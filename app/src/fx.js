import * as THREE from "three";

function dotTexture() {
  const c = document.createElement("canvas"); c.width = c.height = 64;
  const g = c.getContext("2d"), gr = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  gr.addColorStop(0, "rgba(255,255,255,1)"); gr.addColorStop(0.45, "rgba(255,255,255,0.85)"); gr.addColorStop(1, "rgba(255,255,255,0)");
  g.fillStyle = gr; g.fillRect(0, 0, 64, 64);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}

const VERT = `
attribute float size; attribute float alpha; attribute vec3 color;
varying float vA; varying vec3 vC; uniform float scale;
void main(){ vA = alpha; vC = color; vec4 mv = modelViewMatrix * vec4(position,1.0);
  gl_PointSize = size * scale / max(0.1, -mv.z); gl_Position = projectionMatrix * mv; }`;
const FRAG = `
uniform sampler2D map; varying float vA; varying vec3 vC;
void main(){ vec4 t = texture2D(map, gl_PointCoord); gl_FragColor = vec4(vC, t.a * vA); if (gl_FragColor.a < 0.02) discard; }`;

// Pooled particle system: snow spray, landing bursts, crash puffs, confetti.
export function createParticles(max = 500) {
  const geo = new THREE.BufferGeometry();
  const pos = new Float32Array(max * 3), col = new Float32Array(max * 3), size = new Float32Array(max), alpha = new Float32Array(max);
  geo.setAttribute("position", new THREE.BufferAttribute(pos, 3).setUsage(THREE.DynamicDrawUsage));
  geo.setAttribute("color", new THREE.BufferAttribute(col, 3).setUsage(THREE.DynamicDrawUsage));
  geo.setAttribute("size", new THREE.BufferAttribute(size, 1).setUsage(THREE.DynamicDrawUsage));
  geo.setAttribute("alpha", new THREE.BufferAttribute(alpha, 1).setUsage(THREE.DynamicDrawUsage));
  const mat = new THREE.ShaderMaterial({
    uniforms: { map: { value: dotTexture() }, scale: { value: 300 } },
    vertexShader: VERT, fragmentShader: FRAG, transparent: true, depthWrite: false,
  });
  const points = new THREE.Points(geo, mat); points.frustumCulled = false;
  const P = [];
  for (let i = 0; i < max; i++) P.push({ life: 0, max: 1, x: 0, y: 0, z: 0, vx: 0, vy: 0, vz: 0, g: 0, drag: 0, s: 1, r: 1, gg: 1, b: 1, world: 1, spin: 0 });
  let head = 0, budget = 1;
  const tmp = new THREE.Color();

  function emit(o) {
    if (Math.random() > budget && !o.force) return;
    const p = P[head]; head = (head + 1) % max;
    p.life = p.max = o.life || 0.8;
    p.x = o.x; p.y = o.y; p.z = o.z; p.vx = o.vx || 0; p.vy = o.vy || 0; p.vz = o.vz || 0;
    p.g = o.g == null ? 9 : o.g; p.drag = o.drag == null ? 1.5 : o.drag; p.s = o.size || 0.35;
    tmp.set(o.color == null ? 0xffffff : o.color); p.r = tmp.r; p.gg = tmp.g; p.b = tmp.b;
    p.world = o.world == null ? 1 : o.world; p.spin = o.spin || 0;
  }
  function burst(x, y, z, n, o = {}) {
    for (let i = 0; i < n; i++) {
      const a = Math.random() * Math.PI * 2, sp = (o.speed || 5) * (0.4 + Math.random() * 0.8);
      emit({
        x: x + (Math.random() - 0.5) * (o.spread || 0.6), y: y + Math.random() * 0.2, z: z + (Math.random() - 0.5) * (o.spread || 0.6),
        vx: Math.cos(a) * sp, vz: Math.sin(a) * sp, vy: (o.up || 4) * (0.5 + Math.random()),
        life: (o.life || 0.9) * (0.6 + Math.random() * 0.6), size: (o.size || 0.45) * (0.6 + Math.random() * 0.8),
        color: o.colors ? o.colors[(Math.random() * o.colors.length) | 0] : o.color, g: o.g, drag: o.drag, world: o.world, force: o.force,
      });
    }
  }
  function update(dt, worldSpeed) {
    for (let i = 0; i < max; i++) {
      const p = P[i];
      if (p.life > 0) {
        p.life -= dt;
        const d = Math.exp(-p.drag * dt);
        p.vx *= d; p.vz *= d; p.vy = p.vy * d - p.g * dt;
        p.x += p.vx * dt; p.y += p.vy * dt; p.z += (p.vz + worldSpeed * p.world) * dt;
        if (p.y < 0.03 && p.g > 0) { p.y = 0.03; p.vy *= -0.2; p.vx *= 0.6; p.vz *= 0.6; }
        if (p.spin) p.x += Math.sin(p.life * 12 + i) * p.spin * dt;
      }
      const k = Math.max(0, p.life / p.max);
      pos[i * 3] = p.x; pos[i * 3 + 1] = p.life > 0 ? p.y : -999; pos[i * 3 + 2] = p.z;
      col[i * 3] = p.r; col[i * 3 + 1] = p.gg; col[i * 3 + 2] = p.b;
      size[i] = p.s * (0.6 + 0.6 * (1 - k)); alpha[i] = Math.min(1, k * 1.6);
    }
    for (const n of ["position", "color", "size", "alpha"]) geo.attributes[n].needsUpdate = true;
  }
  return { points, emit, burst, update, setBudget(b) { budget = b; }, setScale(s) { mat.uniforms.scale.value = s; } };
}

// Falling snow around the camera; wraps in a box and drifts past with the world speed.
export function createSnowfall(count = 900) {
  const geo = new THREE.BufferGeometry();
  const pos = new Float32Array(count * 3), seed = new Float32Array(count);
  for (let i = 0; i < count; i++) {
    pos[i * 3] = (Math.random() - 0.5) * 50; pos[i * 3 + 1] = Math.random() * 22; pos[i * 3 + 2] = -Math.random() * 70 + 10; seed[i] = Math.random();
  }
  geo.setAttribute("position", new THREE.BufferAttribute(pos, 3).setUsage(THREE.DynamicDrawUsage));
  const mat = new THREE.PointsMaterial({ size: 0.16, map: dotTexture(), transparent: true, depthWrite: false, opacity: 0.9, color: 0xffffff });
  const pts = new THREE.Points(geo, mat); pts.frustumCulled = false;
  let t = 0;
  function update(dt, worldSpeed, cx) {
    t += dt;
    const n = geo.drawRange.count === Infinity ? count : geo.drawRange.count;
    for (let i = 0; i < n; i++) {
      const s = seed[i];
      pos[i * 3 + 1] -= (1.2 + s * 1.6) * dt;
      pos[i * 3] += Math.sin(t * (0.6 + s) + s * 20) * 0.6 * dt;
      pos[i * 3 + 2] += worldSpeed * 0.9 * dt;
      if (pos[i * 3 + 1] < 0) pos[i * 3 + 1] += 22;
      if (pos[i * 3 + 2] > 12) pos[i * 3 + 2] -= 72;
      const dx = pos[i * 3] - cx;
      if (dx > 25) pos[i * 3] -= 50; else if (dx < -25) pos[i * 3] += 50;
    }
    geo.attributes.position.needsUpdate = true;
  }
  return { points: pts, update, setCount(n) { geo.setDrawRange(0, Math.min(count, n)); } };
}
