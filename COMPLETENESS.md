# Ski Jump completeness (GitHub Pages)

Live site (Pages source = `main` `/`): https://mrjkorea.github.io/ski-jump/

## What I checked

Play files on this repo (same tree GitHub Pages serves):

- `index.html` — module + CSS use relative `./assets/…`
- Bundled engine `assets/index-bjTgEhWE.js` + `assets/index-CkgiO3nB.css`
- Pack `packs/starter-en.json` (engine + JSON pack; word list is not hardcoded)
- Textures `textures/sky.jpg`, `snow.jpg`, `pine.png`, `crowd.png`, `goggles.png` (and jpg fallbacks)
- Baked audio under `audio/` (mp3 only at play time)
- HOW-TO-PLAY (`HOW-TO-PLAY.html`, `HOW-TO-PLAY.md`)
- `.nojekyll` present

Live HEAD/GET before the fix (existing Pages build):

| URL | Result |
| --- | --- |
| `/ski-jump/` | 200 |
| `packs/starter-en.json` | 200 |
| `packs/one-plus-words-v1.json` | 404 (correct — pack is not this filename) |
| `packs/animals.json` | 404 (engine used to request this first) |
| `textures/*.jpg` / `pine.png` `crowd.png` `goggles.png` | 200 |
| `audio/frog-ribbit.wav` and splash wavs | 404 |
| `HOW-TO-PLAY.md` / `.html` | 404 |

Gameplay still uses the existing engine: name start, 3 word ramps, steer (touch sides / ←→ AD), boost (slide up / ↑ W), jump, tree on wrong, keyboard + pointer.

No `speechSynthesis`, no `/api/tts`.

## What was broken

1. **Default pack 404.** Engine fetched `./packs/animals.json` then fell back to `starter-en.json`. Extra 404 on every load; leftover from leap-frog.
2. **Silent / wrong SFX files.** Engine fetched frog/splash **wav** files that were never published. Jump/crash/win mostly fell back to oscillators or nothing.
3. **No baked word audio.** Pack items had no `audio` field; `po()` dropped extra fields. Questions were silent.
4. **HOW-TO-PLAY missing.** In-game `.help` was always forced `hidden`.
5. **`pack_id` vs file name.** File is `starter-en.json`; inner `pack_id` was `one-plus-words-v1`, which suggested a missing pack URL.

## What I fixed

- Default pack URL is `./packs/starter-en.json` only (still honors `?pack=`).
- `pack_id` set to `starter-en`. Items keep question/correct/wrong from JSON; each item points at `./audio/{slug}.mp3`.
- Baked local mp3s: ski jump / whoosh / tree crash / crowd cheer + question + answer cues named from the pack.
- Engine loads those mp3s; word cue uses `item.audio` then slug(question) / slug(correct) — **not** a hardcoded vocab list.
- In-game help shown during play; How to play links on start + help.
- `HOW-TO-PLAY.html` + `HOW-TO-PLAY.md` for phone, tablet, classroom PC, laptop.

## Remaining gaps

- This repo is the **Vite dist** (no `src/`). Completeness patches are in the published bundle. A later source rebuild could overwrite them unless the same fixes land in the generator repo.
- Pack drop (Excel/CSV/JSON) still works; new packs need matching `audio/` files (or `audio` fields) for spoken cues. SFX still play.
- Item **pictures** are not part of this activity (3D textures are). Duplicate `.jpg` textures exist beside the `.png` the engine uses.
- Background “music” is still a light WebAudio loop after Start (not a remote stream).
- GitHub Pages cache (~10 min) may delay the live update after merge to `main`.

## Do-nots respected

Engine + JSON pack kept; gameplay (tap + keys) kept; no TTS server; no speechSynthesis; no `node_modules`; no invented live URLs; no Seedream / BytePlus / FAL.

## 2026-10-16 source rebuild

- Real source now in `app/src/` (Vite + three.js); `npm run build` publishes `index.html` + `assets/` to the repo root.
- Learning loop unchanged: definition, 3 word ramps, steer onto the right one, +100, wrong ramp = tree and the run ends; 5 right wins (Word Master: every word in the gamepack).
- Same hooks: `MRJ_SCORES.post` rows (`<pack>:<item>` word rows, `round:<pack>` round row), `mrj-auth-ready` + `MRJ_SKI_PROGRESS` seeding, `mrj-wm-game-done` to Word Master. No local save (in-memory board only).
- Frog leftovers gone; SFX are the baked mp3s here; CC0 music loop + mute button; iOS audio unlock on first tap.
- Textures WebP (duplicate PNGs dropped). Auto low-quality when FPS drops, pixel ratio capped.
- Old bundle `assets/index-bjTgEhWE.js` / `index-CkgiO3nB.css` and the jpg textures are left in place (unused) — safe to delete later.
