# Nick's Chord Helper

A songwriting and melody-writing assistant that runs entirely in the browser — no build step, just open `index.html`.

## Features

- Key picker (major/minor) with a mood filter for progressions (happy, sad, epic, dreamy, tense, nostalgic, romantic, groovy), EN/RU language toggle
- Library of common progressions + a random progression generator
- Capo (fret 0–7): chords are recalculated into the shape you actually finger, with the real sounding chord shown in parentheses
- Guitar chord voicing style: acoustic (open shapes where available) / electric (power chords), or view chords as a mini piano instead
- Optional 7th/sus/add9 chords, sprinkled selectively into a progression (not forced on every chord) — plus manual per-chord color chips
- Guitar chord diagrams (open, barre, power) and a full scale view across the fretboard (15 frets, capo-aware)
- Scale and chord visualization on a labeled piano keyboard, with a 3-tier "safe melody note" guide over the selected chord
- Chord substitution suggestions (relative substitutes, borrowed chords, secondary dominants) to keep a progression from sounding monotonous
- Play the chord progression (adjustable tempo) through a built-in synth
- Generate a melody, bass line, drum pattern, and a lead guitar tab (real string/fret positions, playable on the neck) that fit the progression, play any combination back, and export everything as a real .mid file

## Running it

Just open `index.html` in a browser — everything runs client-side, no server required.

For local development with a dev server (optional):

```bash
python -m http.server 5183 --directory chord-companion
```

Open `http://localhost:5183` in your browser.

## Stack

Plain HTML/CSS/JavaScript, no dependencies, no build step.

## License

[PolyForm Noncommercial License 1.0.0](LICENSE) — free to use, modify, and share for any noncommercial purpose (personal projects, learning, research, nonprofits, etc.). Commercial use, including selling the software or a product built on it, is not permitted without a separate license from the author.
