import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const dir = path.dirname(fileURLToPath(import.meta.url));

test("mrj-teacher uses MRJSignin isTeacher only", () => {
  const src = fs.readFileSync(path.join(dir, "../app/src/mrj-teacher.js"), "utf8");
  assert.match(src, /isTeacher\(\)/);
  assert.doesNotMatch(src, /localStorage/);
});
