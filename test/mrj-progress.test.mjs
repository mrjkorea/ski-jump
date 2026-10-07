import test from "node:test";
import assert from "node:assert/strict";
import * as P from "../mrj-progress-core.mjs";

const PROGRAM = "ski-jump";

test("passedMap ignores other programs", () => {
  const rows = [
    { program: "leap-frog", item_id: "a", scoreValue: 1, scoreMax: 1 },
    { program: PROGRAM, item_id: "b", scoreValue: 1, scoreMax: 1 },
  ];
  const map = P.passedMap(rows, PROGRAM);
  assert.equal(map.a, undefined);
  assert.equal(map.b, true);
});

test("passedMap unions passes across many rows (>20)", () => {
  const rows = [];
  for (let i = 0; i < 25; i++) {
    rows.push({
      program: i % 3 === 0 ? "other" : PROGRAM,
      item_id: "item-" + i,
      scoreValue: 1,
      scoreMax: 1,
    });
  }
  const map = P.passedMap(rows, PROGRAM);
  let count = 0;
  for (const k in map) if (map[k]) count++;
  assert.ok(count >= 16);
});

test("applyPassed never un-completes roundDone", () => {
  const roundDone = { x: true, y: true };
  P.applyPassed(roundDone, { x: false, y: false, z: true });
  assert.equal(roundDone.x, true);
  assert.equal(roundDone.y, true);
  assert.equal(roundDone.z, true);
});

test("mergeProgressRows concatenates", () => {
  const a = [{ program: PROGRAM, item_id: "1", scoreValue: 1, scoreMax: 1 }];
  const b = [{ program: PROGRAM, item_id: "2", scoreValue: 1, scoreMax: 1 }];
  const merged = P.mergeProgressRows(a, b);
  assert.equal(merged.length, 2);
});

test("syncCorrects keeps higher local correct count", () => {
  const items = [{ item_id: "a" }, { item_id: "b" }, { item_id: "c" }];
  const roundDone = { a: true };
  const n = P.syncCorrects(roundDone, items, 5, 3);
  assert.equal(n, 3);
});

test("onAuthReady applies initial rows then paged load", async () => {
  const initial = [{ program: PROGRAM, item_id: "a", scoreValue: 1, scoreMax: 1 }];
  const paged = [{ program: PROGRAM, item_id: "b", scoreValue: 1, scoreMax: 1 }];
  const seen = [];
  const mockAuth = {
    loadProgressForApp(program) {
      assert.equal(program, PROGRAM);
      return Promise.resolve({ ok: true, progress: paged });
    },
  };
  globalThis.MRJ_AUTH = mockAuth;
  await new Promise((resolve) => {
    P.onAuthReady({ detail: { progress: initial } }, {
      onRows(rows) {
        seen.push(rows.map((r) => r.item_id));
        if (seen.length === 2) resolve();
      },
    });
  });
  assert.deepEqual(seen[0], ["a"]);
  assert.deepEqual(seen[1], ["a", "b"]);
  delete globalThis.MRJ_AUTH;
});
