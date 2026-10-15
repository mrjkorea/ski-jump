import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";

const BUILD = JSON.parse(
  fs.readFileSync(new URL("../version.json", import.meta.url), "utf8")
).build;
const html = fs.readFileSync(new URL("../index.html", import.meta.url), "utf8");

test("index.html cache stamps match version.json build", () => {
  assert.match(html, new RegExp(`content="${BUILD}"`));
  assert.match(html, new RegExp(`mrj-progress-boot\\.mjs\\?v=${BUILD}`));
  assert.match(html, new RegExp(`assets/index-[\\w-]+\\.js\\?v=${BUILD}`));
  assert.match(html, new RegExp(`mrj-scores\\.js\\?v=${BUILD}`));
});

test("index.html points at a published bundle that exists", () => {
  const js = html.match(/assets\/(index-[\w-]+\.js)/)[1];
  const css = html.match(/assets\/(index-[\w-]+\.css)/)[1];
  assert.ok(fs.existsSync(new URL(`../assets/${js}`, import.meta.url)), js);
  assert.ok(fs.existsSync(new URL(`../assets/${css}`, import.meta.url)), css);
});

test("published bundle has no frog leftovers, TTS or local save", () => {
  const js = html.match(/assets\/(index-[\w-]+\.js)/)[1];
  const src = fs.readFileSync(new URL(`../assets/${js}`, import.meta.url), "utf8");
  for (const bad of ["frog-ribbit", "splash-heavy", "splash-dunk", "MRJLeapFrog", "speechSynthesis", "/api/tts", "localStorage"]) {
    assert.ok(!src.includes(bad), `bundle contains ${bad}`);
  }
  assert.ok(src.includes("mrj.wm.gamepack"));
  assert.ok(src.includes("mrj-auth-ready"));
});

test("textures are webp only (no duplicate PNGs)", () => {
  const files = fs.readdirSync(new URL("../textures/", import.meta.url));
  assert.ok(!files.some((f) => f.endsWith(".png")), files.join(","));
  assert.ok(files.includes("snow.webp") && files.includes("crowd.webp"));
});
