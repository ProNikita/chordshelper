# Chord Companion

A songwriting and melody-writing assistant that runs entirely in the browser — no build step, just open `index.html` through a local server.

## Features

- Key picker (major/minor) with a mood filter for progressions (happy, sad, epic, dreamy, tense, nostalgic, romantic, groovy)
- Library of common progressions + a random progression generator
- Capo (fret 0–7): chords are recalculated into the shape you actually finger, with the real sounding chord shown in parentheses
- Guitar chord voicing style: acoustic (open shapes where available) / electric (power chords)
- Guitar chord diagrams (open, barre, power) and a full scale view across the fretboard (15 frets, capo-aware)
- Scale and chord visualization on a labeled piano keyboard
- Chord substitution suggestions (relative substitutes, borrowed chords, secondary dominants) to keep a progression from sounding monotonous

## Running it

```bash
python -m http.server 5183 --directory chord-companion
```

Open `http://localhost:5183` in your browser.

## Stack

Plain HTML/CSS/JavaScript, no dependencies, no build step.

## License

[PolyForm Noncommercial License 1.0.0](LICENSE) — free to use, modify, and share for any noncommercial purpose (personal projects, learning, research, nonprofits, etc.). Commercial use, including selling the software or a product built on it, is not permitted without a separate license from the author.
