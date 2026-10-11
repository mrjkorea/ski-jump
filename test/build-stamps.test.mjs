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
  assert.match(html, new RegExp(`index-bjTgEhWE\\.js\\?v=${BUILD}`));
  assert.match(html, new RegExp(`mrj-scores\\.js\\?v=${BUILD}`));
});
