import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";

const SCORES_SRC = fs.readFileSync(new URL("../mrj-scores.js", import.meta.url), "utf8");

function loadScores(mocks) {
  const posts = [];
  const notes = [];
  const ctx = {
    fetch(url, opts) {
      posts.push({ url, body: JSON.parse(opts.body) });
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ status: "ok" }),
      });
    },
    localStorage: {
      _data: {},
      getItem(k) {
        return this._data[k] ?? null;
      },
      setItem(k, v) {
        this._data[k] = String(v);
      },
    },
    addEventListener() {},
    MRJ_AUTH: {
      student: () => mocks.student ?? "",
      noteScore: (opts) => notes.push(opts),
    },
  };
  ctx.window = ctx;
  vm.createContext(ctx);
  vm.runInContext(SCORES_SRC, ctx);
  return { MRJ_SCORES: ctx.MRJ_SCORES, posts, notes };
}

test("mrj-scores post uses id_key student_email for non-email sign-in", async () => {
  const { MRJ_SCORES, posts } = loadScores({ student: "zz_test_mrjmetrics" });
  await MRJ_SCORES.post({
    program: "ski-jump",
    itemId: "packA:q01",
    scoreValue: 1,
    scoreMax: 1,
  });
  assert.equal(posts.length, 1);
  assert.equal(posts[0].body.student_email, "zz_test_mrjmetrics");
  assert.equal(posts[0].body.session_id, "ski-jump-zz_test_mrjmetrics-" + MRJ_SCORES.localDate());
  assert.equal(posts[0].body.events[0].identity_method, "mrj_signin");
});

test("mrj-scores post skips when no student", async () => {
  const { MRJ_SCORES, posts } = loadScores({ student: "" });
  const res = await MRJ_SCORES.post({
    program: "ski-jump",
    itemId: "packA:q01",
    scoreValue: 1,
    scoreMax: 1,
  });
  assert.equal(res.status, "skipped");
  assert.equal(posts.length, 0);
});
