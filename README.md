# ski-jump

MRJ kid English game (static GitHub Pages). Same URL on phone, tablet, classroom PC, and laptop.

Live: https://mrjkorea.github.io/ski-jump/

How to play: [HOW-TO-PLAY.html](./HOW-TO-PLAY.html) · completeness: [COMPLETENESS.md](./COMPLETENESS.md)

## Source (2026-10 rebuild)

Clean Vite + three.js source lives in `app/src/`:

| file | what |
| --- | --- |
| `main.js` | boot, pack loading (`?pack=session` = Word Master words only, `?pack=<url>`, default from `<meta name="sj-default-pack">`) |
| `game.js` | learning loop (definition → 3 word ramps → +100 / tree ends run), HUD, controls, combo |
| `report.js` | MRJ hooks: `MRJ_SCORES.post` rows, `mrj-auth-ready` progress seeding, Word Master `mrj-wm-game-done` |
| `pack.js` | JSON / Excel / CSV pack parsing (same formats as before; SheetJS loads only when a sheet is dropped) |
| `world.js` | 3D scene: sky, layered mountains, instanced pines + gates, ramps, finish, camera, slow-mo, shake, auto quality |
| `skier.js` | low-poly skier with ski / crouch / jump / tuck / land / crash / cheer poses + squash & stretch |
| `fx.js` | pooled particles (spray, bursts, confetti) and falling snow |
| `audio.js` | WebAudio SFX + CC0 music loop, mute, iOS unlock on first tap |

```
npm install
npm run build      # vite build + scripts/publish.mjs -> index.html + assets/ at repo root (what Pages serves)
npm test           # node tests (progress core, scores, report hooks, packs, build stamps)
npm run smoke      # headless Chromium run with screenshots (zz_test ids, score posts intercepted)
node scripts/publish.mjs --wm ../word-master/games/snow-jump   # Word Master copy (no sign-in scripts)
```

URL options: `?student=Name` (skip name box), `?pack=<url>`, `?q=low` / `?q=high` (force quality).
