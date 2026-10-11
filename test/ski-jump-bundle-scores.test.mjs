import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";

const BUNDLE = fs.readFileSync(
  new URL("../assets/index-bjTgEhWE.js", import.meta.url),
  "utf8"
);

function extractFn(name) {
  const start = BUNDLE.indexOf(`function ${name}`);
  if (start < 0) throw new Error(`missing ${name}`);
  let depth = 0;
  let i = BUNDLE.indexOf("{", start);
  for (; i < BUNDLE.length; i++) {
    const ch = BUNDLE[i];
    if (ch === "{") depth++;
    else if (ch === "}") {
      depth--;
      if (depth === 0) return BUNDLE.slice(start, i + 1);
    }
  }
  throw new Error(`unclosed ${name}`);
}

function runMrjPost({ pack_id, item_id, correct }) {
  const posts = [];
  const e = { pack_id, title: "Pack A" };
  const c = { records: [] };
  const code = `
    ${extractFn("mrjPost")}
    mrjPost({item_id:"${item_id}"}, ${correct ? "true" : "false"});
  `;
  const ctx = {
    e,
    c,
    window: {
      MRJ_AUTH: { student: () => "zz_test_mrjmetrics" },
      MRJ_SCORES: {
        post(opts) {
          posts.push(opts);
        },
      },
    },
  };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return posts;
}

function runMrjPostRound({ pack_id, records, round, lives, corrects, target }) {
  const posts = [];
  const e = { pack_id, title: "Pack A" };
  const c = {
    records,
    round,
    lives,
    corrects,
    mrjRoundPosted: false,
  };
  const Ta = target;
  const code = `
    ${extractFn("mrjPostRound")}
    mrjPostRound(false);
    mrjPostRound(false);
  `;
  const ctx = {
    e,
    c,
    Ta,
    window: {
      MRJ_AUTH: { student: () => "zz_test_mrjmetrics" },
      MRJ_SCORES: {
        post(opts) {
          posts.push(opts);
        },
      },
    },
  };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return posts;
}

test("mrjPost sends pack-scoped itemId", () => {
  const posts = runMrjPost({ pack_id: "packA", item_id: "q01", correct: true });
  assert.equal(posts.length, 1);
  assert.equal(posts[0].itemId, "packA:q01");
  assert.equal(posts[0].program, "ski-jump");
  assert.equal(posts[0].appName, "MRJ Ski Jump");
  assert.equal(posts[0].itemType, "word");
});

test("mrjPostRound sends one round row with correct totals", () => {
  const records = [{ correct: true }, { correct: true }, { correct: false }, { correct: true }];
  const posts = runMrjPostRound({
    pack_id: "packA",
    records,
    round: 2,
    lives: 1,
    corrects: 3,
    target: 5,
  });
  assert.equal(posts.length, 1);
  assert.equal(posts[0].itemId, "round:packA");
  assert.equal(posts[0].itemType, "round");
  assert.equal(posts[0].scoreValue, 3);
  assert.equal(posts[0].scoreMax, 4);
  assert.equal(posts[0].metadata.round, 2);
});
