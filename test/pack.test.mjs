import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import { normalizePack, rowsToPack } from "../app/src/pack.js";

test("starter pack loads with same fields as before", () => {
  const p = normalizePack(JSON.parse(fs.readFileSync(new URL("../packs/starter-en.json", import.meta.url), "utf8")));
  assert.equal(p.pack_id, "starter-en");
  assert.ok(p.items.length >= 5);
  for (const it of p.items) { assert.ok(it.question && it.correct); assert.ok(it.wrong.length >= 1 && it.wrong.length <= 2); }
});

test("Word Master gamepack shape (word + definition) is accepted", () => {
  const p = normalizePack({ pack_id: "nouns100", items: [{ item_id: "time", question: "what clocks measure", correct: "time", wrong: ["year", "people"], word: "time" }] });
  assert.equal(p.items[0].item_id, "time");
  assert.deepEqual(p.items[0].wrong, ["year", "people"]);
});

test("Excel/CSV rows: question, correct, wrong1, wrong2 (header optional)", () => {
  const p = rowsToPack([["question", "correct", "wrong1", "wrong2"], ["a fruit", "apple", "chair", "river"], ["", "", "", ""]], "My Pack");
  assert.equal(p.pack_id, "my-pack");
  assert.equal(p.items.length, 1);
  assert.equal(p.items[0].item_id, "q01");
  assert.deepEqual(p.items[0].wrong, ["chair", "river"]);
});

test("unusable pack throws", () => {
  assert.throws(() => normalizePack({ items: [{ question: "x" }] }));
});
