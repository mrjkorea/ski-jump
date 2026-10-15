import test from "node:test";
import assert from "node:assert/strict";
import { mrjPost, mrjPostRound, wmDone } from "../app/src/report.js";

function withWindow(fn) {
  const posts = [];
  globalThis.window = {
    MRJ_AUTH: { student: () => "zz_test_mrjmetrics" },
    MRJ_SCORES: { post(opts) { posts.push(opts); } },
  };
  try { fn(); } finally { delete globalThis.window; }
  return posts;
}

test("mrjPost sends pack-scoped itemId", () => {
  const posts = withWindow(() => mrjPost({ pack_id: "packA", title: "Pack A" }, { item_id: "q01" }, true));
  assert.equal(posts.length, 1);
  assert.equal(posts[0].itemId, "packA:q01");
  assert.equal(posts[0].program, "ski-jump");
  assert.equal(posts[0].appName, "MRJ Ski Jump");
  assert.equal(posts[0].itemType, "word");
  assert.equal(posts[0].scoreValue, 1);
  assert.equal(posts[0].scoreMax, 1);
});

test("mrjPost wrong answer is 0/1", () => {
  const posts = withWindow(() => mrjPost({ pack_id: "packA" }, { item_id: "q02" }, false));
  assert.equal(posts[0].correctness, "incorrect");
  assert.equal(posts[0].scoreValue, 0);
});

test("mrjPostRound sends one round row with correct totals", () => {
  const records = [{ correct: true }, { correct: true }, { correct: false }, { correct: true }];
  const c = { records, round: 2, lives: 1, corrects: 3, mrjRoundPosted: false };
  const posts = withWindow(() => {
    mrjPostRound({ pack_id: "packA", title: "Pack A" }, c, 5, false);
    mrjPostRound({ pack_id: "packA", title: "Pack A" }, c, 5, false);
  });
  assert.equal(posts.length, 1);
  assert.equal(posts[0].itemId, "round:packA");
  assert.equal(posts[0].itemType, "round");
  assert.equal(posts[0].scoreValue, 3);
  assert.equal(posts[0].scoreMax, 4);
  assert.equal(posts[0].metadata.round, 2);
  assert.equal(posts[0].metadata.target, 5);
});

test("no student -> nothing posted", () => {
  const posts = [];
  globalThis.window = { MRJ_AUTH: { student: () => "" }, MRJ_SCORES: { post: (o) => posts.push(o) } };
  mrjPost({ pack_id: "p" }, { item_id: "a" }, true);
  delete globalThis.window;
  assert.equal(posts.length, 0);
});

test("wmDone posts mrj-wm-game-done only when every item is done", () => {
  const msgs = [];
  const parent = { postMessage: (m) => msgs.push(m) };
  globalThis.window = { parent };
  wmDone({ roundDone: { a: true }, corrects: 1 }, { items: [{ item_id: "a" }, { item_id: "b" }] });
  wmDone({ roundDone: { a: true, b: true }, corrects: 2 }, { items: [{ item_id: "a" }, { item_id: "b" }] });
  delete globalThis.window;
  assert.equal(msgs.length, 1);
  assert.deepEqual(msgs[0], { type: "mrj-wm-game-done", game: "snowjump", items: 2, correct: 2, finished: true });
});
