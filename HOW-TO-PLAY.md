# How to play Ski Jump

Same URL on a **phone, tablet, classroom PC, or laptop**.

## Goal

Ski down the slope and jump onto the **matching word**. Get the pack’s questions right. Wrong jump hits a tree.

Words come from the **JSON pack** (`packs/starter-en.json`), not from a list baked into the game code. Teachers can drop another Excel / CSV / JSON pack on the start screen.

## Controls

**Touch / tablet**

- Tap or hold the **left or right side** of the slope to steer.
- **Slide up** (swipe toward the sky) to go faster / boost into the jump.
- Ski into a word ramp to answer.

**Computer / classroom keyboard**

- `←` `→` or `A` `D` — steer
- `↑` or `W` — faster / boost
- Ski into a word ramp to answer

## Audio

The game uses **baked local mp3 files** in `audio/` (offline). It does not call a TTS server and does not use `speechSynthesis`.

## Combo

Get answers right in a row for a combo: every 3 in a row adds a multiplier (×2, ×3, ×4) to the +100 and the chime goes higher. A wrong ramp still ends the run.

## Sound

Music and sound effects start after the first tap. Use the speaker button (top right) to mute.

## Tips

- Gaps between ramps skip that jump.
- Wrong word = tree. Start again from the results screen.
- Open [HOW-TO-PLAY.html](./HOW-TO-PLAY.html) for the classroom poster version.
