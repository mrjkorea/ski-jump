import * as THREE from "three";
import { makeRenderer, guardContext, SoftRenderer, clearGlMsg } from "./gl-guard.js";
import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js";
import { createSkier } from "./skier.js";
import { createParticles, createSnowfall } from "./fx.js";

const LANES = [-5, 0, 5];
const RAMP_W = 3.4, RAMP_L = 5, RAMP_H = 1.25, HIT_HALF = 1.85;
const ROW_START = -72, BASE_SPEED = 13, BOOST_SPEED = 9;
const TRACK = 10.5;

function colorGeo(g, hex) {
  const c = new THREE.Color(hex), n = g.attributes.position.count, a = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) { a[i * 3] = c.r; a[i * 3 + 1] = c.g; a[i * 3 + 2] = c.b; }
  g.setAttribute("color", new THREE.BufferAttribute(a, 3));
  return g;
}
function rampGeometry() {
  const w = RAMP_W / 2, L = RAMP_L, H = RAMP_H;
  const v = [
    -w, 0, 0,  w, 0, 0,  w, H, -L,   -w, 0, 0,  w, H, -L,  -w, H, -L,      // slope top
    -w, 0, -L, w, H, -L, w, 0, -L,   -w, 0, -L, -w, H, -L,  w, H, -L,      // lip face
    w, 0, 0,  w, 0, -L,  w, H, -L,   -w, 0, 0, -w, H, -L, -w, 0, -L,       // sides
  ];
  const g = new THREE.BufferGeometry(); g.setAttribute("position", new THREE.Float32BufferAttribute(v, 3));
  const c = []; const top = new THREE.Color(0xe9f6ff), lip = new THREE.Color(0x2f6df6), side = new THREE.Color(0x4d8dff);
  for (let i = 0; i < 18; i++) { const k = i < 6 ? top : i < 12 ? lip : side; c.push(k.r, k.g, k.b); }
  g.setAttribute("color", new THREE.Float32BufferAttribute(c, 3)); g.computeVertexNormals();
  return g;
}
function mountainLayer(seed, width, peak, base, colTop, colBottom, segs = 70) {
  const pos = [], col = [];
  const rnd = (i) => { const x = Math.sin(i * 127.1 + seed * 311.7) * 43758.5453; return x - Math.floor(x); };
  const top = [];
  for (let i = 0; i <= segs; i++) {
    const t = i / segs, x = (t - 0.5) * width;
    const y = base + peak * (0.45 + 0.35 * Math.sin(t * 7.1 + seed) + 0.2 * Math.sin(t * 17.3 + seed * 2) + 0.25 * (rnd(i) - 0.5));
    top.push([x, Math.max(base + 2, y)]);
  }
  const cT = new THREE.Color(colTop), cB = new THREE.Color(colBottom), snow = new THREE.Color(0xffffff);
  for (let i = 0; i < segs; i++) {
    const [x0, y0] = top[i], [x1, y1] = top[i + 1];
    const quad = [[x0, -6], [x1, -6], [x1, y1], [x0, -6], [x1, y1], [x0, y0]];
    for (const [x, y] of quad) {
      pos.push(x, y, 0);
      const h = (y + 6) / (peak + base + 6);
      const c = cB.clone().lerp(cT, Math.min(1, h * 1.2));
      const sn = THREE.MathUtils.smoothstep(y, base + peak * 0.55, base + peak * 0.75); c.lerp(snow, sn * 0.9);
      col.push(c.r, c.g, c.b);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute("color", new THREE.Float32BufferAttribute(col, 3));
  return new THREE.Mesh(g, new THREE.MeshBasicMaterial({ vertexColors: true, fog: false }));
}
function blobTexture() {
  const c = document.createElement("canvas"); c.width = c.height = 64;
  const g = c.getContext("2d"), gr = g.createRadialGradient(32, 32, 2, 32, 32, 32);
  gr.addColorStop(0, "rgba(40,60,110,0.55)"); gr.addColorStop(1, "rgba(40,60,110,0)");
  g.fillStyle = gr; g.fillRect(0, 0, 64, 64); return new THREE.CanvasTexture(c);
}
function bannerTexture(text) {
  const c = document.createElement("canvas"); c.width = 1024; c.height = 160;
  const g = c.getContext("2d");
  const gr = g.createLinearGradient(0, 0, 1024, 0); gr.addColorStop(0, "#ff4d6d"); gr.addColorStop(0.5, "#ffb703"); gr.addColorStop(1, "#ff4d6d");
  g.fillStyle = gr; g.fillRect(0, 0, 1024, 160);
  for (let x = 0; x < 1024; x += 64) { g.fillStyle = (x / 64) % 2 ? "#111" : "#fff"; g.fillRect(x, 0, 64, 18); g.fillStyle = (x / 64) % 2 ? "#fff" : "#111"; g.fillRect(x, 142, 64, 18); }
  g.font = "700 96px Fredoka, 'Arial Rounded MT Bold', sans-serif"; g.textAlign = "center"; g.textBaseline = "middle";
  g.lineWidth = 10; g.strokeStyle = "#7a2e00"; g.strokeText(text, 512, 84); g.fillStyle = "#fff"; g.fillText(text, 512, 84);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}

export function createWorld(container, labels, { quality: forceQ } = {}) {
  const dpr = window.devicePixelRatio || 1;
  let renderer = makeRenderer(THREE, { antialias: dpr < 1.5, powerPreference: "high-performance", alpha: false }); // WebGL, or a 2D-canvas SoftRenderer if WebGL is missing
  // weak / software GPU (SwiftShader, llvmpipe, Basic Render, old Intel HD) or no GPU at all: lightest mode from the first frame
  let weak = !!renderer.mrjWeak, fpsCap = renderer.isSoft ? 24 : weak ? 30 : 0, lastDraw = 0, drawN = 0, drawT = 0;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.setClearColor(0xbfe3ff);
  container.appendChild(renderer.domElement);
  renderer.domElement.className = "stage";

  const scene = new THREE.Scene();
  const HORIZON = new THREE.Color(0xd7ecff);
  scene.fog = new THREE.Fog(HORIZON, 45, 190);
  const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 900);

  // sky dome
  const sky = new THREE.Mesh(new THREE.SphereGeometry(700, 24, 12), new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false, fog: false,
    uniforms: { top: { value: new THREE.Color(0x3d8bff) }, mid: { value: new THREE.Color(0x9fd2ff) }, bot: { value: HORIZON }, sun: { value: new THREE.Vector3(0.35, 0.32, -1).normalize() } },
    vertexShader: "varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",
    fragmentShader: `uniform vec3 top; uniform vec3 mid; uniform vec3 bot; uniform vec3 sun; varying vec3 vP;
      void main(){ float h = vP.y; vec3 c = h > 0.12 ? mix(mid, top, smoothstep(0.12, 0.7, h)) : mix(bot, mid, smoothstep(-0.02, 0.12, h));
      float s = max(0.0, dot(normalize(vP), sun)); c += vec3(1.0,0.93,0.75) * (pow(s, 600.0) * 1.2 + pow(s, 12.0) * 0.25);
      gl_FragColor = vec4(c, 1.0); }`,
  }));
  scene.add(sky); scene.userData.softSky = ["#3d8bff", "#9fd2ff", "#d7ecff"]; // 2D-canvas fallback sky

  // layered mountains (parallax against steering)
  const mountains = [
    mountainLayer(1.3, 1500, 120, 10, 0x8fb0e0, 0xc4d8f3),
    mountainLayer(4.1, 1100, 80, 2, 0x5f86c4, 0xa9c3ea),
    mountainLayer(7.7, 800, 46, -2, 0x3f6aa8, 0x9ab8e2),
  ];
  const mz = [-560, -430, -300], mpar = [0.02, 0.06, 0.12];
  mountains.forEach((m, i) => { m.position.set(0, -4, mz[i]); m.renderOrder = -1; scene.add(m); });

  // lights
  scene.add(new THREE.HemisphereLight(0xeaf5ff, 0x9fb7d9, 1.6));
  const sunL = new THREE.DirectionalLight(0xfff3dc, 1.6); sunL.position.set(8, 14, 6); scene.add(sunL);

  // snow ground
  const tl = new THREE.TextureLoader();
  const snowTex = tl.load("./textures/snow.webp");
  snowTex.wrapS = snowTex.wrapT = THREE.RepeatWrapping; snowTex.repeat.set(10, 50); snowTex.colorSpace = THREE.SRGBColorSpace;
  snowTex.anisotropy = Math.min(4, renderer.capabilities.getMaxAnisotropy());
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(240, 320), new THREE.MeshLambertMaterial({ map: snowTex, color: 0xffffff, emissive: 0x52617a }));
  ground.rotation.x = -Math.PI / 2; ground.position.z = -120; scene.add(ground); ground.material.userData.softBack = 1; // 2D-canvas fallback: always behind
  // groomed track (slightly bluer corduroy) + edge lines
  const trackTex = snowTex.clone(); trackTex.repeat.set(3, 60); trackTex.needsUpdate = true;
  const track = new THREE.Mesh(new THREE.PlaneGeometry(TRACK * 2, 320), new THREE.MeshLambertMaterial({ map: trackTex, color: 0xeef6ff, emissive: 0x4a5c7a }));
  track.rotation.x = -Math.PI / 2; track.position.set(0, 0.01, -120); scene.add(track); track.material.userData.softBack = 2;

  // instanced pines + gates
  // detailed pines: the original painted pine texture on camera-facing instanced quads
  const pineTex = tl.load("./textures/pine.webp"); pineTex.colorSpace = THREE.SRGBColorSpace;
  pineTex.anisotropy = Math.min(4, renderer.capabilities.getMaxAnisotropy());
  const PINE_H = 7, PINE_W = PINE_H * (356 / 640);
  const pineGeo = new THREE.PlaneGeometry(PINE_W, PINE_H).translate(0, PINE_H / 2 - 0.15, 0);
  const pineMat = new THREE.MeshBasicMaterial({ map: pineTex, alphaTest: 0.5, color: 0xf2f7ff });
  const PINES = 190;
  const pines = new THREE.InstancedMesh(pineGeo, pineMat, PINES); pines.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  scene.add(pines);
  const pineData = [];
  const placePine = (p, z) => {
    const side = Math.random() < 0.5 ? -1 : 1;
    const edge = Math.random() < 0.42; // tree line right at the track edge (can be hit)
    p.x = side * (edge ? TRACK + 1.6 + Math.random() * 2.6 : TRACK + 4.5 + Math.pow(Math.random(), 1.6) * 60);
    p.z = z; p.s = 0.75 + Math.random() * 0.75; p.edge = edge;
  };
  for (let i = 0; i < PINES; i++) { const p = {}; placePine(p, 20 - Math.random() * 260); pineData.push(p); }
  const POLES = 40;
  const poleGeo = colorGeo(new THREE.CylinderGeometry(0.06, 0.06, 1.6, 5).translate(0, 0.8, 0), 0xffffff);
  const poles = new THREE.InstancedMesh(poleGeo, new THREE.MeshLambertMaterial({ vertexColors: true }), POLES);
  poles.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  const poleZ = []; const pc = new THREE.Color();
  for (let i = 0; i < POLES; i++) { poleZ.push(20 - (i >> 1) * 13); poles.setColorAt(i, pc.set(((i >> 1) % 2) ? 0xff3b5c : 0x2f6df6)); }
  scene.add(poles);
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), v3 = new THREE.Vector3(), sc = new THREE.Vector3(), up = new THREE.Vector3(0, 1, 0);

  // ramps
  const rampGeo = rampGeometry();
  const rampMat = new THREE.MeshLambertMaterial({ vertexColors: true, flatShading: true });
  const flagGeo = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 0, 0), new THREE.Vector3(0.9, -0.3, 0), new THREE.Vector3(0, -0.6, 0)]);
  const ramps = LANES.map((x) => {
    const g = new THREE.Group(); g.position.x = x;
    g.add(new THREE.Mesh(rampGeo, rampMat));
    for (const s of [-1, 1]) {
      const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 2.2, 5), new THREE.MeshLambertMaterial({ color: 0xffffff }));
      pole.position.set(s * (RAMP_W / 2 + 0.15), 1.1 + RAMP_H, -RAMP_L); g.add(pole);
      const flag = new THREE.Mesh(flagGeo, new THREE.MeshBasicMaterial({ color: 0xffb703, side: THREE.DoubleSide }));
      flag.position.set(s * (RAMP_W / 2 + 0.15), 2.2 + RAMP_H, -RAMP_L); flag.rotation.y = s > 0 ? Math.PI : 0; g.add(flag); g.userData.flags = (g.userData.flags || []).concat(flag);
    }
    scene.add(g); g.visible = false; return g;
  });

  // finish arch + crowd
  const finish = new THREE.Group(); finish.visible = false; scene.add(finish);
  {
    const postM = new THREE.MeshLambertMaterial({ color: 0x2f6df6 });
    for (const s of [-1, 1]) { const p = new THREE.Mesh(new THREE.BoxGeometry(0.6, 6, 0.6), postM); p.position.set(s * 9, 3, 0); finish.add(p); }
    const banTex = bannerTexture("FINISH");
    for (const ry of [0, Math.PI]) {
      const ban = new THREE.Mesh(new THREE.PlaneGeometry(18.6, 2.9), new THREE.MeshBasicMaterial({ map: banTex }));
      ban.position.set(0, 6.2, ry ? -0.05 : 0.05); ban.rotation.y = ry; finish.add(ban);
    }
    const crowdTex = tl.load("./textures/crowd.webp"); crowdTex.colorSpace = THREE.SRGBColorSpace;
    for (const s of [-1, 1]) {
      const cr = new THREE.Mesh(new THREE.PlaneGeometry(10, 5.6), new THREE.MeshBasicMaterial({ map: crowdTex, transparent: true, alphaTest: 0.1, side: THREE.DoubleSide }));
      cr.position.set(s * 15, 2.8, 2); cr.rotation.y = s * 0.5; finish.add(cr);
    }
  }

  // skier + blob shadow
  const skier = createSkier(); scene.add(skier.root);
  const blob = new THREE.Mesh(new THREE.PlaneGeometry(1.8, 2.6), new THREE.MeshBasicMaterial({ map: blobTexture(), transparent: true, depthWrite: false }));
  blob.rotation.x = -Math.PI / 2; blob.position.y = 0.03; scene.add(blob);

  const fx = createParticles(520); scene.add(fx.points);
  const snow = createSnowfall(900); scene.add(snow.points);

  // ---- state
  const S = {
    x: 0, vx: 0, y: 0, vy: 0, steer: 0, boost: 0, speed: 0, skiing: false, mode: "idle", // idle|ski|ramp|air|crash|ceremony
    rowZ: null, rowVisible: false, rowLane: -1, rowDecided: false, treeLane: -1,
    timeScale: 1, tsTarget: 1, trauma: 0, fovKick: 0, crashT: 0, cerT: 0, cerCb: null, t: 0, landed: false,
    airLane: -1,
  };
  const events = [];
  let quality = forceQ || (weak ? "ultra" : "high"), fpsAcc = 0, fpsN = 0, fpsWin = 0, lowLocked = !!forceQ || weak;

  function setQuality(q) {
    quality = q;
    const cap = q === "high" ? 1.75 : q === "low" ? 1 : weak ? 0.6 : 0.75, soft = !!renderer.isSoft;
    renderer.setPixelRatio(Math.min(dpr, cap));
    pines.count = soft ? 36 : q === "high" ? PINES : q === "low" ? 100 : 60;
    snow.setCount(soft ? 70 : q === "high" ? 900 : q === "low" ? 350 : 150);
    fx.setBudget(q === "high" ? 1 : q === "low" ? 0.5 : 0.3);
    resize();
  }
  function resize() {
    const w = container.clientWidth || window.innerWidth, h = container.clientHeight || window.innerHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.userData.baseFov = w / h < 0.8 ? 72 : 60; // portrait phones see more slope
    camera.updateProjectionMatrix();
    fx.setScale((h * renderer.getPixelRatio()) / (2 * Math.tan((camera.fov * Math.PI) / 360)));
  }
  window.addEventListener("resize", resize);
  setQuality(quality);
  // GPU dropped the context: pause drawing + message; on restore continue in low quality
  // never restored / lost again -> switch to the 2D-canvas renderer (same scene, no student action)
  function toSoft() {
    const old = renderer.domElement, soft = new SoftRenderer(); soft.mrjGpu = "canvas2d"; soft.mrjWeak = true;
    soft.domElement.className = old.className; soft.setClearColor(0xbfe3ff); old.replaceWith(soft.domElement);
    try { renderer.dispose(); } catch (e) { /* ignore */ }
    renderer = soft; weak = true; fpsCap = 24; lowLocked = true; glState = { lost: false, count: 0 }; clearGlMsg(container); setQuality("ultra");
  }
  let glState = guardContext(renderer, container, { onRestored: () => { if (quality === "high") setQuality("low"); }, onFallback: toSoft });

  // ---- API
  function showRow() {
    S.rowZ = ROW_START; S.rowVisible = true; S.rowDecided = false; S.treeLane = -1;
    ramps.forEach((r) => { r.visible = true; r.scale.set(1, 1, 1); });
  }
  function hideRow() { S.rowVisible = false; ramps.forEach((r) => (r.visible = false)); }
  function launch(lane, streak = 1) {
    S.mode = "ramp"; S.airLane = lane; S.streak = streak;
    ramps.forEach((r, i) => { if (i !== lane) r.visible = true; });
    skier.setPose("crouch");
  }
  function crash(lane) {
    // wrong ramp: ride over it, twirl in the air, then fall onto the snow
    S.mode = "ramp"; S.airLane = lane; S.wrong = true;
    skier.setPose("crouch");
  }
  function groundCrash(big) {
    S.mode = "crash"; S.crashT = 0; S.crashDone = false; S.vy = 0;
    skier.setPose("crash"); skier.kick(-4);
    S.trauma = 1;
    fx.burst(S.x, 0.4, -0.4, big ? 90 : 70, { speed: 7, up: 6, size: 0.65, life: 1.3, colors: [0xffffff, 0xe8f3ff, 0xdfeaff], force: true });
  }
  function treeCrash(p) {
    S.airLane = -1;
    groundCrash(false);
    fx.burst(p.x, 3, 0, 30, { speed: 3, up: 2, size: 0.5, life: 1.6, colors: [0xffffff, 0xf2f7ff], g: 5, force: true }); // snow off the branches
    fx.burst(p.x, 2.2, 0, 16, { speed: 3, up: 2.5, size: 0.3, life: 1.3, colors: [0x2a6b3f, 0x1f5a35, 0x6b4a2a], g: 6, force: true });
    events.push({ type: "treecrash" });
  }

  function ceremony(cb) {
    S.mode = "ceremony"; S.cerT = 0; S.cerCb = cb; hideRow();
    finish.visible = true; finish.position.set(0, 0, -17);
  }
  function reset() {
    S.x = 0; S.vx = 0; S.y = 0; S.vy = 0; S.mode = S.skiing ? "ski" : "idle"; S.rowZ = null; S.timeScale = 1; S.tsTarget = 1;
    S.trauma = 0; S.wrong = false; finish.visible = false; hideRow(); skier.reset(); events.length = 0;
  }
  function setSkiing(on) { S.skiing = !!on; if (on && (S.mode === "idle" || S.mode === "crash" || S.mode === "ceremony")) S.mode = "ski"; if (!on && S.mode === "ski") S.mode = "idle"; }
  function pullEvents() { return events.splice(0, events.length); }

  const proj = new THREE.Vector3();
  function toScreen(x, y, z) {
    proj.set(x, y, z).project(camera);
    const w = container.clientWidth, h = container.clientHeight;
    return { x: (proj.x * 0.5 + 0.5) * w, y: (-proj.y * 0.5 + 0.5) * h, vis: proj.z < 1 && proj.z > -1 };
  }
  function skierScreen() { return toScreen(S.x, S.y + 2.4, 0); }

  // ---- simulation
  function stepSim(dt) {
    S.t += dt;
    // forward speed
    let want = 0;
    if (S.mode === "ski" || S.mode === "ramp" || S.mode === "air") want = BASE_SPEED + BOOST_SPEED * S.boost;
    if (S.mode === "crash") want = 0;
    if (S.mode === "ceremony") want = Math.max(0, BASE_SPEED * (1 - S.cerT / 3));
    const accel = S.mode === "crash" ? 10 : S.mode === "ceremony" ? 50 : 3.5;
    S.speed += (want - S.speed) * Math.min(1, dt * accel);
    if (S.mode === "ceremony") S.speed = want;
    const dz = S.speed * dt;

    // steering (ground only)
    if (S.mode === "ski") {
      const target = S.steer * 9;
      S.vx += (target - S.vx) * Math.min(1, dt * 6);
      S.x = THREE.MathUtils.clamp(S.x + S.vx * dt, -TRACK - 4.5, TRACK + 4.5);
    } else if (S.mode === "air" || S.mode === "ramp") {
      S.vx *= Math.exp(-dt * 3); S.x += S.vx * dt;
      if (S.airLane >= 0) S.x += (LANES[S.airLane] - S.x) * Math.min(1, dt * 3);
    } else S.vx *= Math.exp(-dt * 4);

    // row of ramps moving toward the skier
    if (S.rowVisible && S.rowZ != null) {
      S.rowZ += dz;
      ramps.forEach((r, i) => {
        r.position.z = S.rowZ;
        for (const f of r.userData.flags) f.rotation.z = Math.sin(S.t * 8 + i) * 0.15;
      });
      if (!S.rowDecided && S.rowZ >= 0 && S.mode === "ski") {
        S.rowDecided = true;
        let lane = -1;
        LANES.forEach((lx, i) => { if (Math.abs(S.x - lx) < HIT_HALF) lane = i; });
        events.push(lane >= 0 ? { type: "hit", lane } : { type: "pending-miss" });
      }
      if (S.rowDecided && S.rowZ > RAMP_L + 4 && S.mode === "ski") {
        hideRow();
        if (S._pendingMiss) { S._pendingMiss = false; events.push({ type: "missed" }); }
      }
      if (S.rowZ > 40) hideRow();
    }

    // vertical: ramp ride → flight → landing
    if (S.mode === "ramp") {
      const over = S.rowZ; // distance into the ramp
      S.y = THREE.MathUtils.clamp(over / RAMP_L, 0, 1) * RAMP_H;
      if (over >= RAMP_L) {
        S.mode = "air"; S.vy = 9.5; skier.setPose(S.wrong ? "twirl" : "jump"); skier.kick(1.2);
        fx.burst(S.x, RAMP_H, 0, 30, { speed: 3, up: 4, size: 0.4, life: 0.8, colors: [0xffffff, 0xe0efff] });
        S.fovKick = 1;
      }
    } else if (S.mode === "air") {
      S.vy -= 13 * dt; S.y += S.vy * dt;
      if (S.wrong) S.tsTarget = 1;
      else if (S.vy < 5 && S.vy > -4) { skier.setPose("tuck"); S.tsTarget = 0.38; } else S.tsTarget = 1;
      if (S.y <= 0 && S.wrong) {
        S.y = 0; S.wrong = false; S.airLane = -1; S.tsTarget = 1;
        groundCrash(true); events.push({ type: "fall" });
      } else if (S.y <= 0) {
        S.y = 0; S.vy = 0; S.mode = "ski"; S.tsTarget = 1; S.airLane = -1;
        skier.setPose("land"); skier.kick(-3.2); S.trauma = Math.max(S.trauma, 0.25);
        fx.burst(S.x, 0.1, 0.2, 60, { speed: 6, up: 3.5, size: 0.55, life: 0.9, colors: [0xffffff, 0xeaf4ff, 0xd8e9ff] });
        events.push({ type: "land" }); S.landT = 0.35;
      }
    } else if (S.mode === "crash") {
      S.crashT += dt; S.y = Math.max(0, Math.sin(Math.min(1, S.crashT * 2.2) * Math.PI) * 0.45);
      if (S.crashT < 0.6 && Math.random() < dt * 30) fx.emit({ x: S.x + (Math.random() - 0.5), y: 0.2, z: (Math.random() - 0.5), vx: (Math.random() - 0.5) * 4, vy: 2 + Math.random() * 2, vz: 2, life: 0.7, size: 0.5, color: 0xffffff, force: true });
      if (S.crashT > 1.7 && !S.crashDone) { S.crashDone = true; events.push({ type: "crashdone" }); }
    } else if (S.mode === "ceremony") {
      S.cerT += dt; S.y = 0;
      finish.position.z += dz;
      if (S.cerT > 2.6) skier.setPose("cheer");
      if (S.cerT > 2.6 && Math.random() < dt * 10) {
        fx.burst(S.x + (Math.random() - 0.5) * 10, 6 + Math.random() * 3, -2 + Math.random() * 4, 14,
          { speed: 3, up: 3, size: 0.32, life: 2.2, g: 2.2, drag: 1.2, world: 0, colors: [0xff4d6d, 0xffb703, 0x2fb8ff, 0x15d1a6, 0xffffff, 0xb15cff], force: true });
      }
      if (S.cerT > 5 && S.cerCb) { const cb = S.cerCb; S.cerCb = null; cb(); }
    }
    if (S.mode !== "crash") S.crashDone = false;
    if (S.landT > 0) { S.landT -= dt; if (S.landT <= 0 && S.mode === "ski") skier.setPose(S.boost > 0.3 ? "crouch" : "ski"); }
    if (S.mode === "ski" && !(S.landT > 0)) skier.setPose(S.boost > 0.3 ? "crouch" : "ski");

    // spray from skis while carving
    if ((S.mode === "ski" || S.mode === "ceremony") && S.speed > 2) {
      const carve = Math.min(1, Math.abs(S.vx) / 7);
      const n = (S.speed / BASE_SPEED) * (1 + carve * 4) * dt * 30;
      for (let i = 0; i < n; i++) {
        const side = S.vx >= 0 ? -1 : 1;
        fx.emit({ x: S.x + (Math.random() - 0.5) * 0.4, y: 0.08, z: 0.6 + Math.random() * 0.4,
          vx: side * carve * (2 + Math.random() * 3) + (Math.random() - 0.5), vy: 1 + Math.random() * 2 * (0.4 + carve), vz: 1 + Math.random() * 2,
          life: 0.45 + Math.random() * 0.4, size: 0.22 + carve * 0.3 + Math.random() * 0.15, color: 0xffffff, g: 7, drag: 2.5 });
      }
    }
    // scenery treadmill
    for (let i = 0; i < pineData.length; i++) {
      const p = pineData[i]; p.z += dz; if (p.z > 45) placePine(p, p.z - 270);
      v3.set(p.x, 0, p.z); q.setFromAxisAngle(up, Math.atan2(camPos.x - p.x, camPos.z - p.z)); sc.setScalar(p.s); m4.compose(v3, q, sc); pines.setMatrixAt(i, m4);
      if (S.mode === "ski" && i < pines.count && Math.abs(p.z) < 0.75 && Math.abs(p.x - S.x) < 0.5 * p.s + 0.35) treeCrash(p);
    }
    pines.instanceMatrix.needsUpdate = true;
    for (let i = 0; i < POLES; i++) {
      poleZ[i] += dz; if (poleZ[i] > 22) poleZ[i] -= (POLES / 2) * 13;
      v3.set((i % 2 ? 1 : -1) * (TRACK + 0.3), 0, poleZ[i]); q.identity(); sc.setScalar(1); m4.compose(v3, q, sc); poles.setMatrixAt(i, m4);
    }
    poles.instanceMatrix.needsUpdate = true;
    snowTex.offset.y += dz / (320 / 50); trackTex.offset.y += dz / (320 / 60);
    fx.update(dt, S.speed);

    skier.root.position.set(S.x, S.y, 0);
    skier.update(dt, { steer: S.mode === "ski" ? S.vx / 9 : 0 });
    blob.position.x = S.x; const bs = 1 / (1 + S.y * 0.35); blob.scale.set(bs, bs, 1); blob.material.opacity = bs;
  }

  // ---- camera
  const camPos = new THREE.Vector3(0, 3.6, 8), camLook = new THREE.Vector3(0, 1.2, -8);
  const tp = new THREE.Vector3(), tl2 = new THREE.Vector3();
  function stepCamera(dtReal) {
    if (S.mode === "ceremony" && S.cerT > 1.8) {
      const a = Math.min(1, (S.cerT - 1.8) / 1.5), ang = a * Math.PI * 0.62 + S.cerT * 0.02;
      tp.set(S.x + Math.sin(ang) * 6.5, 2.2 + a * 0.6, Math.cos(ang) * 6.5); tl2.set(S.x, 1.4, 0);
    } else {
      tp.set(S.x * 0.75, 3.5 + S.y * 0.55, 7.8 - S.boost * 1.2); tl2.set(S.x * 0.9, 1.3 + S.y * 0.6, -9);
    }
    const k = 1 - Math.exp(-dtReal * 5);
    camPos.lerp(tp, k); camLook.lerp(tl2, k);
    camera.position.copy(camPos);
    if (S.trauma > 0) {
      const s = S.trauma * S.trauma * 0.55, t = S.t * 40;
      camera.position.x += Math.sin(t * 1.3) * s; camera.position.y += Math.sin(t * 1.7 + 1) * s; camera.position.z += Math.sin(t * 1.1 + 2) * s * 0.5;
      S.trauma = Math.max(0, S.trauma - dtReal * 1.4);
    }
    camera.lookAt(camLook);
    S.fovKick = Math.max(0, S.fovKick - dtReal * 1.2);
    const fov = (camera.userData.baseFov || 60) + S.boost * 9 + S.fovKick * 6 + (S.speed / BASE_SPEED - 1) * 4;
    if (Math.abs(camera.fov - fov) > 0.05) { camera.fov += (fov - camera.fov) * Math.min(1, dtReal * 4); camera.updateProjectionMatrix(); }
    mountains.forEach((m, i) => { m.position.x = -camPos.x * mpar[i] * 10; });
    sky.position.copy(camera.position);
  }

  // ---- labels on ramps (DOM, crisp text)
  const labelW = [0, 0, 0];
  function stepLabels() {
    const show = S.rowVisible && S.rowZ != null && S.rowZ <= 2 && (S.mode === "ski" || S.mode === "ramp");
    let spacing = 0;
    if (show) {
      const a = toScreen(LANES[0], RAMP_H + 2.6, S.rowZ - RAMP_L), b = toScreen(LANES[1], RAMP_H + 2.6, S.rowZ - RAMP_L);
      spacing = Math.abs(b.x - a.x);
    }
    let maxW = 1;
    labels.forEach((el, i) => { if (!labelW[i] || el.dataset.w !== el.textContent) { labelW[i] = el.offsetWidth || 120; el.dataset.w = el.textContent; } maxW = Math.max(maxW, labelW[i]); });
    const scale = THREE.MathUtils.clamp((spacing * 0.94) / maxW, 0.32, 1.15);
    const fade = show ? THREE.MathUtils.clamp((S.rowZ + 62) / 10, 0, 1) : 0;
    labels.forEach((el, i) => {
      if (!show) { el.style.opacity = "0"; return; }
      const p = toScreen(LANES[i], RAMP_H + 2.6, S.rowZ - RAMP_L);
      el.style.opacity = p.vis ? fade.toFixed(2) : "0";
      el.style.transform = `translate(-50%, -100%) translate(${p.x.toFixed(1)}px, ${p.y.toFixed(1)}px) scale(${scale.toFixed(3)})`;
    });
  }

  // ---- adaptive quality
  function watchFps(dtReal) {
    if (lowLocked || !S.skiing) return;
    fpsAcc += dtReal; fpsN++; fpsWin += dtReal;
    if (fpsWin >= 2) {
      const fps = fpsN / fpsAcc; fpsAcc = 0; fpsN = 0; fpsWin = 0;
      if (fps < 42 && quality === "high") setQuality("low");
      else if (fps < 28 && quality === "low") { setQuality("ultra"); lowLocked = true; }
    }
  }

  function tick(dtReal) {
    S.timeScale += (S.tsTarget - S.timeScale) * Math.min(1, dtReal * (S.tsTarget < 1 ? 10 : 4));
    const dt = dtReal * S.timeScale;
    stepSim(dt);
    stepCamera(dtReal);
    stepLabels();
    snow.update(dtReal, S.speed, camPos.x);
    watchFps(dtReal);
    if (glState.lost) return;
    const now = performance.now(); if (fpsCap && now - lastDraw < 1000 / fpsCap - 4) return; // frame-rate cap on weak PCs
    lastDraw = now; drawN++; if (now - drawT >= 1000) { diag.drawFps = (drawN * 1000) / (now - drawT); drawN = 0; drawT = now; }
    renderer.render(scene, camera);
  }

  // A miss is reported after the row passes (so the kid sees the gap).
  const _push = events.push.bind(events);
  events.push = (e) => { if (e.type === "pending-miss") { S._pendingMiss = true; return events.length; } return _push(e); };

  resize();
  const diag = { get renderer() { return renderer; }, get gpu() { return renderer.mrjGpu || ""; }, get weak() { return weak; }, get soft() { return !!renderer.isSoft; }, get quality() { return quality; }, get fpsCap() { return fpsCap; }, drawFps: 0 };
  window.MRJ_STAGE3D = diag; // read-only diagnostics for tests
  return {
    get renderer() { return renderer; }, camera, scene, S,
    showRow, hideRow, launch, crash, ceremony, reset, setSkiing, pullEvents, tick, skierScreen, toScreen,
    setSteer(v) { S.steer = THREE.MathUtils.clamp(v, -1, 1); },
    setBoost(b) { S.boost = b; },
    setQuality, get quality() { return quality; },
    isAirborne: () => S.mode === "air" || S.mode === "ramp",
    lanes: LANES,
  };
}
