# Friendship Day Interactive Card

A single-page, scene-by-scene experience matching your screenshots: soft mint graph-paper background, deep green serif headings, handwritten script accents, coral/orange highlights.

## Scenes (in order)

**1. Intro — "Happy Friendship Day"**
Serif headline, a floating hot-air balloon illustration with tiny hearts drifting up, caption "a delivery for you...". Gentle float animation, then auto-advances.

**2. The envelope**
A mint envelope with a "HAPPY FRIENDSHIP DAY" stamp, orange heart seal, and a small animal peeking from the side. A note slides out reading "Hey You! / I made a little something just for you...". Prompt: "TAP ANYWHERE TO BEGIN".

**3. The Memory Wall — "flip one over"**
6 polaroid-style photo cards on pins, in a 3×2 grid. Tapping a card flips it to a lined notepaper back with a handwritten memory line. Footer counter changes to "that's the whole wall" once all are flipped. Button: "scratch to reveal →".

**4. Six Little Truths — "scratch these open"**
6 mint scratch-off tiles in a 3×2 grid. Rubbing/dragging with mouse or finger erases the overlay to reveal a numbered card ("01 you show up…"). Counter shows "1 of 6 uncovered". Button: "read the letter →".

**5. A Note For You**
Taped paper letter on lined stationery in handwritten script, a small row of photo thumbnails, signature "your friend", the peeking animal, "MADE WITH LOVE BY ME", and a "replay it again" button that restarts from scene 1.

## Design system
- Background: mint-tinted graph paper (CSS grid pattern), soft vignette
- Colors: deep pine green, sea-glass mint, coral/orange accents, warm cream
- Type: serif display for headings, handwritten script for captions/letter, clean sans for body
- Motion: soft floats, fades, card flips, scroll-in reveals — nothing bouncy

## Content
I'll write warm placeholder copy in the same tone as your screenshots (memories, truths, letter). You can send me your friend's name, your name, real photos, and your own lines afterward and I'll swap them in. Photos: I'll generate cute illustration-style placeholders in that pastel sticker aesthetic until you upload real ones.

## Technical notes
- One page at `/`, built as separate scene components with a scene-state controller in a single route
- Scratch-off uses a `<canvas>` per tile with pointer events and a reveal-threshold check
- Card flip via CSS 3D transforms; all state client-side, no backend needed
- Fully responsive — the grids collapse to a single/two-column stack on mobile

Optional add-on (say the word): background music with a mute toggle.
