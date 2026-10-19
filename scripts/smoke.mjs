// Headless smoke run: real Chromium (SwiftShader WebGL), stubbed sign-in (zz_test ids only), score posts intercepted (never sent).
// node scripts/smoke.mjs [outDir] [wmGameDir]
import { chromium, devices } from "playwright";
import http from "node:http";
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const out = path.resolve(process.argv[2] || "/workspace/snowjump-shots");
const wmDir = process.argv[3] ? path.resolve(process.argv[3]) : null;
fs.mkdirSync(out, { recursive: true });
const TYPES = { ".html": "text/html", ".js": "text/javascript", ".mjs": "text/javascript", ".css": "text/css", ".json": "application/json", ".webp": "image/webp", ".mp3": "audio/mpeg", ".woff2": "font/woff2", ".woff": "font/woff", ".jpg": "image/jpeg" };
function serve(dir, port, extra = {}) {
  return new Promise((res) => {
    const s = http.createServer((req, rsp) => {
      const u = decodeURIComponent(req.url.split("?")[0]);
      if (extra[u]) { rsp.writeHead(200, { "content-type": "text/html" }); return rsp.end(extra[u]); }
      const f = path.join(dir, u.endsWith("/") ? u + "index.html" : u);
      if (!f.startsWith(dir) || !fs.existsSync(f) || fs.statSync(f).isDirectory()) { rsp.writeHead(404); return rsp.end("nf"); }
      rsp.writeHead(200, { "content-type": TYPES[path.extname(f)] || "application/octet-stream" }); fs.createReadStream(f).pipe(rsp);
    }).listen(0, () => res(s));
  });
}
const STUDENT = "zz_test_snowjump";
const AUTH_STUB = `window.MRJ_AUTH={student:function(){return ${JSON.stringify(STUDENT)}},loadProgressForApp:function(){return Promise.resolve({ok:true,progress:[]})},noteScore:function(){}};
setTimeout(function(){window.dispatchEvent(new CustomEvent("mrj-auth-ready",{detail:{id:${JSON.stringify(STUDENT)},progress:[]}}))},400);`;
const fails = [];
const check = (ok, msg) => { console.log((ok ? "PASS " : "FAIL ") + msg); if (!ok) fails.push(msg); };

// in-page autopilot: steer toward the right (or a wrong) ramp
const PILOT = (mode) => {
  const lanes = [-5, 0, 5];
  clearInterval(window.__pilot);
  window.__pilot = setInterval(() => {
    const s = window.MRJSkiJump && window.MRJSkiJump.getState();
    if (!s || s.view !== "play" || s.correct_lane == null) return;
    const lane = mode === "wrong" ? (s.correct_lane + 1) % 3 : s.correct_lane;
    const dx = lanes[lane] - s.x;
    const fire = (t, k) => window.dispatchEvent(new KeyboardEvent(t, { key: k }));
    if (dx < -0.3) { fire("keyup", "ArrowRight"); fire("keydown", "ArrowLeft"); }
    else if (dx > 0.3) { fire("keyup", "ArrowLeft"); fire("keydown", "ArrowRight"); }
    else { fire("keyup", "ArrowLeft"); fire("keyup", "ArrowRight"); }
    fire(mode === "wrong" ? "keyup" : "keydown", "ArrowUp");
  }, 40);
};

async function newPage(browser, opts, posts) {
  const ctx = await browser.newContext(opts);
  await ctx.route("https://mrjkorea.github.io/mrj-signin/**", (r) => r.fulfill({ contentType: "text/plain", body: "" }));
  // registered last = matched first
  await ctx.route("https://mrjkorea.github.io/mrj-signin/mrj-auth.js", (r) => r.fulfill({ contentType: "text/javascript", body: AUTH_STUB }));
  await ctx.route("https://script.google.com/**", (r) => { try { posts.push(JSON.parse(r.request().postData())); } catch (e) {} r.fulfill({ contentType: "application/json", headers: { "access-control-allow-origin": "*" }, body: '{"status":"ok"}' }); });
  const page = await ctx.newPage();
  page.setDefaultTimeout(180000);
  page.on("pageerror", (e) => fails.push("pageerror: " + e.message));
  page.on("console", (m) => { if (m.type() === "error" && !/404|Failed to load resource/.test(m.text())) console.log("console:", m.text()); });
  return { ctx, page };
}
const waitView = (page, v, ms = 240000) => page.waitForFunction((v) => window.MRJSkiJump && window.MRJSkiJump.getState().view === v, v, { timeout: ms });

const browser = await chromium.launch({ args: ["--use-angle=swiftshader", "--enable-unsafe-swiftshader", "--autoplay-policy=no-user-gesture-required"] });
const server = await serve(root, 0);
const B = `http://localhost:${server.address().port}`;
try {
  // ---- 1. desktop standalone: full winning run
  const posts = [];
  const { ctx, page } = await newPage(browser, { viewport: { width: 1280, height: 800 } }, posts);
  await page.goto(`${B}/index.html`);
  await page.waitForSelector("#sj-start .go");
  await page.waitForTimeout(1500);
  await page.screenshot({ path: `${out}/01-start-desktop.png` });
  await page.click("#sj-start .go", { force: true });
  await waitView(page, "play");
  await page.waitForFunction(() => [...document.querySelectorAll(".ramp-word")].some((e) => +e.style.opacity > 0.6), null, { timeout: 240000 });
  await page.waitForTimeout(900);
  await page.screenshot({ path: `${out}/02-question-ramps.png` });
  await page.evaluate(PILOT, "right");
  await page.waitForFunction(() => window.MRJSkiJump.getState().airborne, null, { timeout: 240000 });
  await page.waitForTimeout(450);
  await page.screenshot({ path: `${out}/03-jump-slowmo.png` });
  await page.waitForFunction(() => window.MRJSkiJump.getState().streak >= 3, null, { timeout: 240000 });
  await page.waitForTimeout(250);
  await page.screenshot({ path: `${out}/04-combo.png` });
  await page.waitForFunction(() => window.MRJSkiJump.getState().corrects >= 5, null, { timeout: 240000 });
  await page.waitForTimeout(7500);
  await page.screenshot({ path: `${out}/05-finish-ceremony.png` });
  await waitView(page, "end");
  await page.waitForTimeout(700);
  await page.screenshot({ path: `${out}/06-gold-medal.png` });
  let st = await page.evaluate(() => window.MRJSkiJump.getState());
  check(st.corrects === 5 && st.errors === 0, `win run: 5 right, 0 wrong (got ${st.corrects}/${st.errors})`);
  check(st.points >= 500, `points >= 500 with combo (got ${st.points})`);
  const words = posts.flatMap((p) => p.events).filter((e) => e.item_type === "word");
  const rounds = posts.flatMap((p) => p.events).filter((e) => e.item_type === "round");
  check(words.length === 5 && words.every((e) => e.curriculum_program === "ski-jump" && e.item_id.startsWith("starter-en:")), `5 word rows, pack-scoped (got ${words.length})`);
  check(rounds.length === 1 && rounds[0].item_id === "round:starter-en" && rounds[0].score_value === 5, "1 round row 5/5");
  check(posts.every((p) => p.student_name === STUDENT), "only zz_test student ids posted");
  const ls = await page.evaluate(() => Object.keys(localStorage));
  check(ls.length === 0, `no local save (localStorage keys: ${ls.join(",") || "none"})`);

  // ---- 2. wrong ramp: rides over it, twirls, falls; run ends
  await page.evaluate(() => clearInterval(window.__pilot));
  await page.click("#sj-again");
  await waitView(page, "play");
  await page.evaluate(PILOT, "wrong");
  await page.waitForFunction(() => window.MRJSkiJump.getState().errors >= 1 && window.MRJSkiJump.getState().airborne, null, { timeout: 240000 });
  await page.waitForTimeout(500);
  await page.screenshot({ path: `${out}/07-wrong-ramp-twirl.png` });
  await page.waitForFunction(() => !window.MRJSkiJump.getState().airborne, null, { timeout: 240000 });
  await page.waitForTimeout(250);
  await page.screenshot({ path: `${out}/08-wrong-ramp-fall.png` });
  await waitView(page, "end");
  await page.waitForTimeout(600);
  await page.screenshot({ path: `${out}/09-fell-card.png` });
  st = await page.evaluate(() => window.MRJSkiJump.getState());
  check(st.errors === 1 && st.lives === 0 && st.view === "end", "wrong ramp: twirl + fall ends the run");
  check(await page.evaluate(() => /wrong ramp and fell/.test(document.querySelector("#sj-end").textContent)), "fell card text");

  // ---- 2b. side tree: steer off the edge into the tree line
  await page.evaluate(() => clearInterval(window.__pilot));
  await page.click("#sj-again");
  await waitView(page, "play");
  await page.keyboard.down("ArrowRight");
  await page.waitForFunction(() => window.MRJSkiJump.getState().lives === 0, null, { timeout: 240000 });
  await page.keyboard.up("ArrowRight");
  await page.waitForTimeout(300);
  await page.screenshot({ path: `${out}/10-side-tree-crash.png` });
  await waitView(page, "end");
  await page.waitForTimeout(600);
  await page.screenshot({ path: `${out}/11-tree-card.png` });
  st = await page.evaluate(() => window.MRJSkiJump.getState());
  check(st.view === "end" && st.errors === 0 && st.lives === 0, "side tree ends the run (no wrong answer recorded)");
  check(await page.evaluate(() => /hit a tree/.test(document.querySelector("#sj-end").textContent)), "tree card text");
  await ctx.close();

  // ---- 3. iPhone portrait, low quality
  const p2 = [];
  const m = await newPage(browser, { ...devices["iPhone 13"] }, p2);
  await m.page.goto(`${B}/index.html?q=low`);
  await m.page.waitForSelector("#sj-start .go");
  await m.page.waitForTimeout(1200);
  await m.page.screenshot({ path: `${out}/12-iphone-start.png` });
  await m.page.tap("#sj-start .go", { force: true });
  await waitView(m.page, "play");
  await m.page.evaluate(PILOT, "right");
  await m.page.waitForFunction(() => [...document.querySelectorAll(".ramp-word")].some((e) => +e.style.opacity > 0.6), null, { timeout: 240000 });
  await m.page.waitForTimeout(1200);
  await m.page.screenshot({ path: `${out}/13-iphone-play.png` });
  st = await m.page.evaluate(() => window.MRJSkiJump.getState());
  check(st.quality === "low", "?q=low forces low quality");
  await m.ctx.close();

  // ---- 4. Word Master build in an iframe: session words only, done message
  if (wmDir) {
    const host = `<!doctype html><body style="margin:0"><iframe id="f" style="border:0;width:100vw;height:100vh"></iframe><script>
      window.__msgs=[];addEventListener("message",e=>__msgs.push(e.data));
      sessionStorage.setItem("mrj.wm.gamepack", JSON.stringify({pack_id:"zz_test_wmpack",title:"WM test",module_id:"snowjump",activity_id:"snowjump",seconds:15,items:[
        {item_id:"apple",question:"a red or green fruit",correct:"apple",wrong:["chair","river"]},
        {item_id:"river",question:"water that flows to the sea",correct:"river",wrong:["apple","chair"]},
        {item_id:"chair",question:"you sit on it",correct:"chair",wrong:["river","apple"]}]}));
      f.src="./index.html?pack=session&student=zz_test_wm";</script></body>`;
    const wmServer = await serve(wmDir, 0, { "/host.html": host });
    const p3 = [];
    const w = await newPage(browser, { viewport: { width: 1024, height: 768 } }, p3);
    await w.page.goto(`http://localhost:${wmServer.address().port}/host.html`);
    const fr = () => w.page.frames().find((f) => f.url().includes("pack=session"));
    await w.page.waitForFunction(() => document.getElementById("f").contentWindow.MRJSkiJump, null, { timeout: 240000 });
    const f = fr();
    await w.page.waitForTimeout(1000);
    check((await f.$("#sj-drop")) === null, "WM mode: no pack drop / word-set choice");
    check(!(await f.evaluate(() => window.MRJSkiJump.loadPack({ items: [] }))), "WM mode: loadPack disabled");
    await w.page.screenshot({ path: `${out}/14-wordmaster-ready.png` });
    await f.click("#sj-start .go", { force: true });
    await f.evaluate(PILOT, "right");
    await f.waitForFunction(() => window.MRJSkiJump.getState().view === "end", null, { timeout: 240000 });
    await w.page.waitForTimeout(700);
    await w.page.screenshot({ path: `${out}/15-wordmaster-done.png` });
    const msgs = await w.page.evaluate(() => window.__msgs);
    const done = msgs.find((x) => x && x.type === "mrj-wm-game-done");
    check(!!done && done.game === "snowjump" && done.items === 3 && done.finished === true, "WM: mrj-wm-game-done posted (3 items)");
    st = await f.evaluate(() => window.MRJSkiJump.getState());
    check(st.pack_id === "zz_test_wmpack" && st.total === 3, "WM: uses only session gamepack words");
    check(p3.length === 0, "WM build: no direct score posts (Word Master reports)");
    await w.ctx.close(); wmServer.close();
  }
} catch (e) {
  fails.push("exception: " + e.message);
  console.log(e);
} finally {
  await browser.close(); server.close();
}
console.log(fails.length ? `\n${fails.length} FAILED` : "\nSMOKE OK", "shots in", out);
process.exit(fails.length ? 1 : 0);
