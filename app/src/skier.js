import * as THREE from "three";

// Low-poly skier built from simple shapes, posed by joint angles that blend toward a target pose.
const POSES = {
  ski:    { knee: 0.75, lean: 0.42, arm: 0.55, elbow: -0.7, spread: 0.18, head: 0.32 },
  crouch: { knee: 1.45, lean: 0.85, arm: 0.35, elbow: -1.1, spread: 0.12, head: 0.7 },
  jump:   { knee: 0.25, lean: 0.15, arm: 2.5,  elbow: -0.3, spread: 0.55, head: 0.1 },
  tuck:   { knee: 1.7,  lean: 0.95, arm: 1.25, elbow: -1.7, spread: 0.02, head: 0.75 },
  land:   { knee: 1.55, lean: 0.55, arm: 0.95, elbow: -0.6, spread: 0.7,  head: 0.45 },
  crash:  { knee: 0.6,  lean: -0.2, arm: 2.2,  elbow: -0.2, spread: 1.25, head: -0.3 },
  twirl:  { knee: 0.9,  lean: 0.05, arm: 1.6,  elbow: -0.2, spread: 1.35, head: 0.0 },
  cheer:  { knee: 0.15, lean: -0.05, arm: 2.95, elbow: -0.15, spread: 0.45, head: -0.15 },
};

function mat(color, extra = {}) {
  return new THREE.MeshLambertMaterial({ color, flatShading: true, ...extra });
}

export function createSkier() {
  const M = {
    jacket: mat(0xff4d3d), jacket2: mat(0xffc93c), pants: mat(0x23336b), skin: mat(0xf2c39b),
    helmet: mat(0x2fb8ff), goggle: mat(0xffd34d, { emissive: 0x7a4c00 }), dark: mat(0x1d2433),
    ski: mat(0x15d1a6), pole: mat(0xdfe6ee), bib: mat(0xffffff),
  };
  const root = new THREE.Group();
  const body = new THREE.Group(); root.add(body);   // roll / squash
  const hips = new THREE.Group(); body.add(hips);
  const box = (w, h, d, m) => new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m);
  const cap = (r, l, m) => new THREE.Mesh(new THREE.CapsuleGeometry(r, l, 2, 6), m);

  // pelvis
  const pelvis = box(0.44, 0.2, 0.28, M.pants); hips.add(pelvis);
  // torso
  const torso = new THREE.Group(); hips.add(torso);
  const chest = box(0.5, 0.58, 0.32, M.jacket); chest.position.y = 0.36; torso.add(chest);
  const stripe = box(0.52, 0.1, 0.34, M.jacket2); stripe.position.y = 0.28; torso.add(stripe);
  const bib = box(0.3, 0.26, 0.02, M.bib); bib.position.set(0, 0.42, -0.17); torso.add(bib);
  const collar = box(0.36, 0.1, 0.28, M.jacket2); collar.position.y = 0.68; torso.add(collar);
  // head
  const neck = new THREE.Group(); neck.position.y = 0.72; torso.add(neck);
  const head = new THREE.Mesh(new THREE.IcosahedronGeometry(0.19, 0), M.skin); head.position.y = 0.17; neck.add(head);
  const helm = new THREE.Mesh(new THREE.SphereGeometry(0.215, 7, 5, 0, Math.PI * 2, 0, Math.PI * 0.55), M.helmet);
  helm.position.y = 0.2; neck.add(helm);
  const gog = box(0.36, 0.1, 0.08, M.goggle); gog.position.set(0, 0.2, -0.17); neck.add(gog);
  const strap = box(0.42, 0.05, 0.36, M.dark); strap.position.set(0, 0.2, 0); neck.add(strap);

  function arm(side) {
    const sh = new THREE.Group(); sh.position.set(0.31 * side, 0.6, 0); torso.add(sh);
    const up = cap(0.075, 0.26, M.jacket); up.position.y = -0.17; sh.add(up);
    const el = new THREE.Group(); el.position.y = -0.34; sh.add(el);
    const fo = cap(0.065, 0.22, M.jacket); fo.position.y = -0.14; el.add(fo);
    const hand = new THREE.Mesh(new THREE.IcosahedronGeometry(0.085, 0), M.dark); hand.position.y = -0.3; el.add(hand);
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.018, 1.25, 4), M.pole);
    pole.position.set(0, -0.3, 0.35); pole.rotation.x = 1.25; el.add(pole);
    const basket = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.02, 6), M.dark);
    basket.position.set(0, -0.48, 0.85); basket.rotation.x = 1.25; el.add(basket);
    return { sh, el };
  }
  function leg(side) {
    const hp = new THREE.Group(); hp.position.set(0.13 * side, -0.05, 0); hips.add(hp);
    const th = cap(0.1, 0.27, M.pants); th.position.y = -0.22; hp.add(th);
    const kn = new THREE.Group(); kn.position.y = -0.45; hp.add(kn);
    const sh = cap(0.09, 0.27, M.pants); sh.position.y = -0.2; kn.add(sh);
    const an = new THREE.Group(); an.position.y = -0.43; kn.add(an);
    const boot = box(0.16, 0.16, 0.3, M.jacket2); boot.position.set(0, -0.02, -0.03); an.add(boot);
    const ski = box(0.13, 0.04, 1.7, M.ski); ski.position.set(0, -0.12, -0.12); an.add(ski);
    const tip = box(0.13, 0.04, 0.22, M.ski); tip.position.set(0, -0.08, -1.02); tip.rotation.x = 0.45; an.add(tip);
    return { hp, kn, an };
  }
  const L = { arm: [arm(-1), arm(1)], leg: [leg(-1), leg(1)] };
  root.traverse((o) => { if (o.isMesh) o.castShadow = false; });

  const cur = { ...POSES.ski };
  let target = "ski", t = 0, steer = 0, crashSpin = 0, twirl = 0;
  const squash = { v: 1, vel: 0 };

  function setPose(name) { if (POSES[name]) target = name; }
  function kick(amount) { squash.vel += amount; }  // squash & stretch impulse

  function update(dt, opts = {}) {
    t += dt;
    const P = POSES[target];
    const k = 1 - Math.exp(-dt * (target === "crash" ? 6 : 11));
    for (const key in P) cur[key] += (P[key] - cur[key]) * k;
    steer += ((opts.steer || 0) - steer) * (1 - Math.exp(-dt * 8));

    // spring for squash/stretch
    squash.vel += (1 - squash.v) * 180 * dt; squash.vel *= Math.exp(-dt * 12); squash.v += squash.vel * dt;
    const s = THREE.MathUtils.clamp(squash.v, 0.6, 1.4);
    body.scale.set(1 / Math.sqrt(s), s, 1 / Math.sqrt(s));

    const a = cur.knee / 2;
    const legLen = 0.45;
    const sway = target === "ski" ? Math.sin(t * 6) * 0.04 : 0;
    hips.position.y = 0.16 + 2 * legLen * Math.cos(a) + 0.08;
    hips.position.z = 0;
    torso.rotation.x = -cur.lean;
    torso.rotation.z = -steer * 0.15;
    neck.rotation.x = cur.head * 0.8;
    for (let i = 0; i < 2; i++) {
      const side = i ? 1 : -1;
      const lg = L.leg[i];
      lg.hp.rotation.x = a + sway * side;
      lg.kn.rotation.x = -2 * a;
      lg.an.rotation.x = a - sway * side;
      lg.hp.rotation.z = (target === "crash" ? cur.spread * 0.35 : 0.02) * side;
      const ar = L.arm[i];
      let raise = cur.arm;
      if (target === "cheer") raise += Math.sin(t * 9 + i * 1.7) * 0.25;
      if (target === "crash") raise += Math.sin(t * 17 + i * 2) * 0.8;
      ar.sh.rotation.x = raise;
      ar.sh.rotation.z = cur.spread * side + (target === "ski" ? Math.sin(t * 6 + i * Math.PI) * 0.05 : 0);
      ar.el.rotation.x = -cur.elbow;
    }
    // body roll into turns; crash tumble
    if (target === "twirl") {
      twirl += dt * 15;
      body.rotation.set(Math.sin(t * 7) * 0.45, twirl, Math.cos(t * 5) * 0.5);
    } else if (target === "crash") {
      crashSpin += dt * 9 * Math.max(0, 1 - crashSpin / 9);
      body.rotation.set(-crashSpin * 0.9, crashSpin * 0.4, crashSpin * 0.7);
    } else {
      crashSpin = 0; twirl = 0;
      body.rotation.set(0, -steer * 0.25, -steer * 0.32);
    }
  }
  function reset() {
    Object.assign(cur, POSES.ski); target = "ski"; crashSpin = 0;
    body.rotation.set(0, 0, 0); squash.v = 1; squash.vel = 0;
  }
  return { root, setPose, kick, update, reset, get pose() { return target; } };
}
