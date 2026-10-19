// Copy the Vite build (dist/) into the GitHub Pages tree (repo root) and write index.html with cache stamps.
// Usage: node scripts/publish.mjs            -> ski-jump repo root (with mrj-signin + scores)
//        node scripts/publish.mjs --wm <dir> -> Word Master games/snow-jump folder (no sign-in; Word Master reports)
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const dist = path.join(root, "dist");
const args = process.argv.slice(2);
const wmIdx = args.indexOf("--wm");
const wmDir = wmIdx >= 0 ? path.resolve(args[wmIdx + 1]) : null;
const outDir = wmDir || root;
const build = JSON.parse(fs.readFileSync(path.join(root, "version.json"), "utf8")).build;
const manifest = JSON.parse(fs.readFileSync(path.join(dist, ".vite/manifest.json"), "utf8"));
const entry = manifest["index.html"];
const js = entry.file, css = (entry.css || [])[0];

// assets: remove only files from our previous publish (listed in .build-files.json), then copy new ones
const assetsOut = path.join(outDir, "assets");
fs.mkdirSync(assetsOut, { recursive: true });
const listFile = path.join(assetsOut, ".build-files.json");
if (fs.existsSync(listFile)) for (const f of JSON.parse(fs.readFileSync(listFile, "utf8"))) fs.rmSync(path.join(outDir, f), { force: true });
const copied = [];
for (const f of fs.readdirSync(path.join(dist, "assets"))) {
  fs.copyFileSync(path.join(dist, "assets", f), path.join(assetsOut, f));
  copied.push("assets/" + f);
}
fs.writeFileSync(listFile, JSON.stringify(copied, null, 1) + "\n");

const head = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover, maximum-scale=1" />
    <meta name="mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="theme-color" content="#9fd2ff" />
    <meta http-equiv="Cache-Control" content="no-store" />
    <title>Ski Jump — MRJ English</title>
    <meta name="mrj-build" content="${build}" />
    <link rel="preload" href="./textures/snow.webp" as="image" type="image/webp" />`;
const html = wmDir
  ? `${head}
    <script type="module" crossorigin src="./${js}?v=${build}"></script>
    <link rel="stylesheet" crossorigin href="./${css}?v=${build}">
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>
`
  : `${head}
    <meta name="sj-default-pack" content="./packs/starter-en.json" />
    <script type="module" src="./mrj-progress-boot.mjs?v=${build}"></script>
    <script type="module" crossorigin src="./${js}?v=${build}"></script>
    <link rel="stylesheet" crossorigin href="./${css}?v=${build}">
  </head>
  <body>
    <link rel="stylesheet" href="https://mrjkorea.github.io/mrj-signin/mrj-auth.css">
    <script src="https://mrjkorea.github.io/mrj-signin/mrj-auth.js"></script>
    <script src="https://mrjkorea.github.io/mrj-signin/mrj-auth-boot.js" data-mrj-app="ski-jump"></script>
    <script src="./mrj-scores.js?v=${build}"></script>
    <div id="app"></div>
  </body>
</html>
`;
fs.writeFileSync(path.join(outDir, "index.html"), html);

if (wmDir) {
  // runtime files the game fetches: textures (webp), SFX + music, credits
  const copy = (rel) => { fs.mkdirSync(path.dirname(path.join(wmDir, rel)), { recursive: true }); fs.copyFileSync(path.join(root, rel), path.join(wmDir, rel)); };
  for (const t of ["snow.webp", "crowd.webp", "pine.webp"]) copy("textures/" + t);
  for (const a of ["snow-whoosh.mp3", "ski-jump.mp3", "crowd-cheer.mp3", "tree-crash.mp3", "snow-thud.mp3", "music-christmas-synths.mp3", "CREDITS.txt"]) copy("audio/" + a);
}
console.log(`published ${js} ${css} -> ${outDir} (build ${build})`);
