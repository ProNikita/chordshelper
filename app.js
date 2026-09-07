// ---------- Music theory core ----------

const PITCH_NAMES_FLAT  = ['C','Db','D','Eb','E','F','Gb','G','Ab','A','Bb','B'];
const PITCH_NAMES_SHARP = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];
// which pitch classes are conventionally spelled with a flat
const FLAT_PITCHES = new Set([1,3,8,10]);

function noteName(pitch) {
  pitch = ((pitch % 12) + 12) % 12;
  return FLAT_PITCHES.has(pitch) ? PITCH_NAMES_FLAT[pitch] : PITCH_NAMES_SHARP[pitch];
}

const ROOTS = [0,1,2,3,4,5,6,7,8,9,10,11]; // display uses noteName()

const SCALE_INTERVALS = {
  major: [0,2,4,5,7,9,11],
  minor: [0,2,3,5,7,8,10], // natural minor
};

// ---------- Key-correct (letter-based) spelling ----------
// noteName() alone picks a single global sharp/flat per pitch class, which is
// wrong inside a specific key (e.g. D major must spell its 7th degree "C#",
// never "Db" — every key uses each of the 7 letters A-G exactly once).
// LETTER_INFO gives the conventional tonic letter+accidental for each of the
// 12 chromatic roots; scaleSpelling() then walks the musical alphabet from
// that letter to spell the rest of the scale correctly.

const LETTERS = ['C','D','E','F','G','A','B'];
const LETTER_PITCH = { C:0, D:2, E:4, F:5, G:7, A:9, B:11 };

// tonic spelling used by each of the 12 major keys (standard convention)
const ROOT_LETTER_INFO = {
  0:  { letter:'C', acc:0 },
  1:  { letter:'D', acc:-1 }, // Db
  2:  { letter:'D', acc:0 },
  3:  { letter:'E', acc:-1 }, // Eb
  4:  { letter:'E', acc:0 },
  5:  { letter:'F', acc:0 },
  6:  { letter:'F', acc:1 },  // F#
  7:  { letter:'G', acc:0 },
  8:  { letter:'A', acc:-1 }, // Ab
  9:  { letter:'A', acc:0 },
  10: { letter:'B', acc:-1 }, // Bb
  11: { letter:'B', acc:0 },
};

function accSuffix(acc) {
  return acc === 1 ? '#' : acc === -1 ? 'b' : '';
}

// Spell a major scale starting at rootPitch, walking the letter alphabet so
// every letter A-G is used exactly once (the only way real key signatures work).
function majorScaleSpelling(rootPitch) {
  const startLetter = ROOT_LETTER_INFO[rootPitch].letter;
  const startIdx = LETTERS.indexOf(startLetter);
  const offsets = SCALE_INTERVALS.major;
  return offsets.map((off, i) => {
    const letter = LETTERS[(startIdx + i) % 7];
    const target = (rootPitch + off) % 12;
    let diff = ((target - LETTER_PITCH[letter]) % 12 + 12) % 12;
    if (diff > 6) diff -= 12;
    return { pitch: target, name: letter + accSuffix(diff) };
  });
}

// Full 7-note diatonic spelling for a key (major, or natural minor via its
// relative major's key signature — they always share the same letters).
function scaleSpelling(rootPitch, mode) {
  if (mode === 'major') return majorScaleSpelling(rootPitch);
  const relMajorRoot = (rootPitch + 3) % 12;
  const majorSpelling = majorScaleSpelling(relMajorRoot);
  // natural minor = major scale starting on its 6th degree
  return [5, 6, 0, 1, 2, 3, 4].map(i => majorSpelling[i]);
}

function buildKeyNoteMap(rootPitch, mode) {
  const map = new Map();
  scaleSpelling(rootPitch, mode).forEach(n => map.set(n.pitch, n.name));
  return map;
}

const DEGREE_QUALITY = {
  major: ['maj','min','min','maj','maj','min','dim'],
  minor: ['min','dim','maj','min','min','maj','maj'],
};

const ROMAN = {
  major: ['I','ii','iii','IV','V','vi','vii°'],
  minor: ['i','ii°','III','iv','v','VI','VII'],
};

const CHORD_INTERVALS = {
  maj: [0,4,7],
  min: [0,3,7],
  dim: [0,3,6],
};

function qualitySuffix(q) {
  if (q === 'maj') return '';
  if (q === 'min') return 'm';
  if (q === 'dim') return 'dim';
  return '';
}

function diatonicChord(keyRoot, mode, degreeIndex, keyMap) {
  const scale = SCALE_INTERVALS[mode];
  const quality = DEGREE_QUALITY[mode][degreeIndex];
  const root = (keyRoot + scale[degreeIndex]) % 12;
  const map = keyMap || buildKeyNoteMap(keyRoot, mode);
  return {
    root,
    quality,
    name: (map.get(root) || noteName(root)) + qualitySuffix(quality),
    roman: ROMAN[mode][degreeIndex],
    degreeIndex,
  };
}

// ---------- Chord substitutions ----------
// Suggest chords that could replace one in a progression to avoid monotony:
// diatonic "relative" swaps (share 2 common tones), chords borrowed from the
// parallel major/minor, and secondary dominants that pull into the next chord.

const RELATIVE_SUB_DEGREES = {
  major: { 0: [5, 2], 1: [3], 2: [0, 5], 3: [1], 4: [6], 5: [0, 2], 6: [4] },
  minor: { 0: [2, 5], 1: [3], 2: [0, 5], 3: [1], 4: [6], 5: [0, 2], 6: [4] },
};

function relativeSubstitutes(keyRoot, mode, degreeIndex, keyMap) {
  const degrees = RELATIVE_SUB_DEGREES[mode][degreeIndex] || [];
  return degrees.map(d => {
    const c = diatonicChord(keyRoot, mode, d, keyMap);
    return { root: c.root, quality: c.quality, name: c.name, kind: 'relative', tag: c.roman, label: `${c.roman} · relative substitute (shared tones)` };
  });
}

function borrowedSubstitute(keyRoot, mode, degreeIndex, chordRoot) {
  if (mode === 'major') {
    if (degreeIndex === 3) return { root: chordRoot, quality: 'min', name: noteName(chordRoot) + 'm', kind: 'borrowed', tag: 'iv', label: 'borrowed from the parallel minor — sadder' };
    if (degreeIndex === 4) { const r = (keyRoot + 10) % 12; return { root: r, quality: 'maj', name: noteName(r), kind: 'borrowed', tag: 'bVII', label: 'bVII — rock/pop cadence instead of V' }; }
    if (degreeIndex === 5) { const r = (keyRoot + 8) % 12; return { root: r, quality: 'maj', name: noteName(r), kind: 'borrowed', tag: 'bVI', label: 'bVI — borrowed, cinematic' }; }
  } else {
    if (degreeIndex === 3) return { root: chordRoot, quality: 'maj', name: noteName(chordRoot), kind: 'borrowed', tag: 'IV', label: 'borrowed from the parallel major — brighter' };
    if (degreeIndex === 4) return { root: chordRoot, quality: 'maj', name: noteName(chordRoot), kind: 'borrowed', tag: 'V', label: 'harmonic minor — pulls into the tonic more strongly' };
    if (degreeIndex === 6) { const r = (keyRoot + 11) % 12; return { root: r, quality: 'dim', name: noteName(r) + 'dim', kind: 'borrowed', tag: 'vii°', label: 'leading tone (harmonic minor) — sharper before i' }; }
    if (degreeIndex === 0) return { root: chordRoot, quality: 'maj', name: noteName(chordRoot), kind: 'borrowed', tag: 'I', label: 'Picardy third — bright major ending' };
  }
  return null;
}

function secondaryDominantSubstitute(nextChord) {
  if (!nextChord) return null;
  const root = (nextChord.root + 7) % 12;
  return { root, quality: 'maj', name: noteName(root), kind: 'secondary', tag: `V/${nextChord.name}`, label: `secondary dominant — pulls into the next chord, ${nextChord.name}` };
}

// Suggestions are always derived from the slot's original diatonic chord, so
// they stay stable no matter what is currently substituted in.
function generateSubstitutes(progression, idx, keyRoot, mode, keyMap) {
  const slot = progression[idx];
  const base = slot.baseOriginal || slot;
  const list = [];
  relativeSubstitutes(keyRoot, mode, base.degreeIndex, keyMap).forEach(c => list.push(c));
  const borrowed = borrowedSubstitute(keyRoot, mode, base.degreeIndex, base.root);
  if (borrowed) list.push(borrowed);
  const nextChord = progression[idx + 1];
  const secDom = secondaryDominantSubstitute(nextChord);
  if (secDom) list.push(secDom);
  // drop any suggestion identical to the base chord or a duplicate root+quality
  const seen = new Set([`${base.root}-${base.quality}`]);
  return list.filter(c => {
    const key = `${c.root}-${c.quality}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

// ---------- Progression library (scale-degree indices, 0-based) ----------

const MOODS = {
  all:       { label: 'Any mood' },
  happy:     { label: '😊 Happy' },
  sad:       { label: '😢 Sad' },
  epic:      { label: '🔥 Epic' },
  dreamy:    { label: '💭 Dreamy' },
  tense:     { label: '⚡ Tense' },
  nostalgic: { label: '🕰 Nostalgic' },
  romantic:  { label: '💜 Romantic' },
  groovy:    { label: '🕺 Groovy' },
};

const PROGRESSIONS = {
  major: [
    { pattern: [0,4,5,3], moods: ['happy', 'epic'] },
    { pattern: [5,3,0,4], moods: ['nostalgic', 'romantic'] },
    { pattern: [0,3,4,0], moods: ['happy', 'groovy'] },
    { pattern: [1,4,0],   moods: ['romantic', 'dreamy'] },
    { pattern: [0,5,1,4], moods: ['nostalgic', 'romantic'] },
    { pattern: [0,5,3,4], moods: ['nostalgic', 'happy'] },
    { pattern: [3,0,4,5], moods: ['happy', 'epic'] },
    { pattern: [0,3,5,4], moods: ['dreamy', 'happy'] },
    { pattern: [5,4,3,4], moods: ['sad', 'tense'] },
    { pattern: [0,4,3,4], moods: ['epic', 'happy'] },
    { pattern: [0,3,0,4], moods: ['happy', 'groovy'] },
    { pattern: [5,1,4,0], moods: ['romantic', 'dreamy'] },
  ],
  minor: [
    { pattern: [0,5,2,6], moods: ['epic', 'tense'] },
    { pattern: [0,3,4],   moods: ['sad', 'tense'] },
    { pattern: [0,6,5,6], moods: ['epic', 'tense'] },
    { pattern: [0,3,6,2], moods: ['dreamy', 'sad'] },
    { pattern: [0,5,3,4], moods: ['epic', 'tense'] },
    { pattern: [0,2,6,5], moods: ['nostalgic', 'sad'] },
    { pattern: [0,4,5,4], moods: ['sad', 'dreamy'] },
    { pattern: [0,3,0,4], moods: ['sad', 'groovy'] },
    { pattern: [0,2,3,4], moods: ['epic', 'tense'] },
  ],
};

function progressionsForMode(mode, mood) {
  const list = PROGRESSIONS[mode];
  if (!mood || mood === 'all') return list;
  const filtered = list.filter(p => p.moods.includes(mood));
  return filtered.length ? filtered : list;
}

function progressionToChords(keyRoot, mode, degreeSeq) {
  const keyMap = buildKeyNoteMap(keyRoot, mode);
  return degreeSeq.map(d => diatonicChord(keyRoot, mode, d, keyMap));
}

function randomProgression(keyRoot, mode, mood) {
  const list = progressionsForMode(mode, mood);
  const entry = list[Math.floor(Math.random() * list.length)];
  return progressionToChords(keyRoot, mode, entry.pattern);
}

// ---------- Guitar chord shapes ----------
// String order everywhere: low E, A, D, G, B, high e
// fret value: -1 = muted, 0 = open, N = fretted at N

const OPEN_SHAPES = {
  // key: "<pitch>-<quality>"
  '0-maj':  { frets:[-1,3,2,0,1,0], fingers:[0,3,2,0,1,0] },      // C
  '2-maj':  { frets:[-1,-1,0,2,3,2], fingers:[0,0,0,1,3,2] },     // D
  '4-maj':  { frets:[0,2,2,1,0,0], fingers:[0,2,3,1,0,0] },       // E
  '7-maj':  { frets:[3,2,0,0,0,3], fingers:[3,2,0,0,0,4] },       // G
  '9-maj':  { frets:[-1,0,2,2,2,0], fingers:[0,0,1,2,3,0] },      // A
  '2-min':  { frets:[-1,-1,0,2,3,1], fingers:[0,0,0,2,3,1] },     // Dm
  '4-min':  { frets:[0,2,2,0,0,0], fingers:[0,2,3,0,0,0] },       // Em
  '9-min':  { frets:[-1,0,2,2,1,0], fingers:[0,0,2,3,1,0] },      // Am
};

function barreShape(rootPitch, quality) {
  // choose between E-shape (root on low E string) and A-shape (root on A string),
  // pick whichever gives the lower (easier) fret.
  const fretFromE = ((rootPitch - 4) % 12 + 12) % 12; // low E open = pitch 4
  const fretFromA = ((rootPitch - 9) % 12 + 12) % 12; // A open = pitch 9

  const useAShape = fretFromA < fretFromE || (fretFromA <= fretFromE && fretFromA !== 0 && fretFromE === 0);
  if (fretFromE === 0) {
    // root note itself is E -> just use open E/Em shape territory, but keep barre form for consistency at fret 0 only if quality matches open dict
  }

  if (!useAShape) {
    const f = fretFromE;
    const shape = quality === 'min' ? [0,2,2,0,0,0] : [0,2,2,1,0,0];
    return {
      frets: shape.map(v => v === -1 ? -1 : v + f),
      barre: f > 0 ? { fret: f, from: 0, to: 5 } : null,
      baseFretHint: f,
      shapeName: 'E' + (quality === 'min' ? 'm' : '') + '-shape',
    };
  } else {
    const f = fretFromA;
    const shape = quality === 'min' ? [-1,0,2,2,1,0] : [-1,0,2,2,2,0];
    return {
      frets: shape.map(v => v === -1 ? -1 : v + f),
      barre: f > 0 ? { fret: f, from: 1, to: 5 } : null,
      baseFretHint: f,
      shapeName: 'A' + (quality === 'min' ? 'm' : '') + '-shape',
    };
  }
}

function powerChordShape(rootPitch) {
  const fretFromE = ((rootPitch - 4) % 12 + 12) % 12;
  const fretFromA = ((rootPitch - 9) % 12 + 12) % 12;
  if (fretFromE <= fretFromA) {
    const f = fretFromE;
    return { frets: [f, f + 2, f + 2, -1, -1, -1], baseFretHint: f, shapeName: 'power chord (low E string)' };
  } else {
    const f = fretFromA;
    return { frets: [-1, f, f + 2, f + 2, -1, -1], baseFretHint: f, shapeName: 'power chord (A string)' };
  }
}

// Compute the diagram to show given the *actual target chord*, capo position and style.
// The returned shape describes what to physically FINGER (relative to the capo,
// which acts as a movable nut) — not the note that actually sounds.
// Returns { frets, barre, baseFret, shapeChordName, voicingType, capoFret, isPower }
function resolveGuitarShape(targetRoot, quality, capoFret, style) {
  const shapeRoot = ((targetRoot - capoFret) % 12 + 12) % 12;

  if (style === 'electric') {
    const pc = powerChordShape(shapeRoot);
    return finalizeDiagram(pc.frets, null, `${noteName(shapeRoot)}5`, pc.shapeName, capoFret, true);
  }

  // acoustic: prefer open shape for the *shape* chord
  const key = `${shapeRoot}-${quality}`;
  if (OPEN_SHAPES[key]) {
    const s = OPEN_SHAPES[key];
    const shapeChordName = noteName(shapeRoot) + qualitySuffix(quality);
    return finalizeDiagram(s.frets, null, shapeChordName, 'open', capoFret, false);
  }
  const b = barreShape(shapeRoot, quality);
  const shapeChordName = noteName(shapeRoot) + qualitySuffix(quality);
  return finalizeDiagram(b.frets, b.barre, shapeChordName, 'barre, ' + b.shapeName, capoFret, false);
}

function finalizeDiagram(frets, barre, shapeChordName, voicingType, capoFret, isPower) {
  const played = frets.filter(f => f > 0);
  let baseFret = 1;
  const maxFret = played.length ? Math.max(...played) : 0;
  if (maxFret > 4) {
    baseFret = Math.min(...played);
  }
  return { frets, barre, baseFret, shapeChordName, voicingType, capoFret, isPower };
}

// ---------- SVG rendering: guitar chord diagram ----------

function renderChordSVG(shape) {
  const strings = 6, fretsShown = 4;
  const w = 130, h = 150;
  const left = 18, top = 26;
  const stringGap = (w - left - 10) / (strings - 1);
  const fretGap = (h - top - 14) / fretsShown;

  let svg = `<svg viewBox="0 0 ${w} ${h}" width="130" height="150">`;

  // nut or base fret label
  if (shape.baseFret <= 1) {
    svg += `<rect x="${left}" y="${top - 3}" width="${stringGap * (strings - 1)}" height="4" fill="var(--text)"/>`;
  } else {
    svg += `<text x="${left - 12}" y="${top + fretGap * 0.7}" font-size="10" fill="var(--text-dim)">${shape.baseFret}fr</text>`;
  }

  // frets (horizontal lines)
  for (let i = 0; i <= fretsShown; i++) {
    const y = top + i * fretGap;
    svg += `<line x1="${left}" y1="${y}" x2="${left + stringGap * (strings - 1)}" y2="${y}" stroke="var(--border)" stroke-width="1"/>`;
  }
  // strings (vertical lines)
  for (let i = 0; i < strings; i++) {
    const x = left + i * stringGap;
    svg += `<line x1="${x}" y1="${top}" x2="${x}" y2="${top + fretGap * fretsShown}" stroke="var(--border)" stroke-width="1"/>`;
  }

  // barre
  if (shape.barre) {
    const relFret = shape.barre.fret - shape.baseFret + 1;
    if (relFret >= 1 && relFret <= fretsShown) {
      const y = top + (relFret - 0.5) * fretGap;
      const x1 = left + shape.barre.from * stringGap;
      const x2 = left + shape.barre.to * stringGap;
      svg += `<line x1="${x1}" y1="${y}" x2="${x2}" y2="${y}" stroke="var(--accent-2)" stroke-width="7" stroke-linecap="round" opacity="0.85"/>`;
    }
  }

  // string markers (open / muted / fretted dot)
  shape.frets.forEach((f, i) => {
    const x = left + i * stringGap;
    if (f === -1) {
      svg += `<text x="${x}" y="${top - 9}" font-size="11" fill="var(--danger)" text-anchor="middle">×</text>`;
    } else if (f === 0) {
      svg += `<circle cx="${x}" cy="${top - 9}" r="3.5" fill="none" stroke="var(--text)" stroke-width="1.3"/>`;
    } else {
      const relFret = f - shape.baseFret + 1;
      const y = top + (relFret - 0.5) * fretGap;
      svg += `<circle cx="${x}" cy="${y}" r="6" fill="var(--accent)"/>`;
    }
  });

  svg += `</svg>`;
  return svg;
}

// ---------- SVG rendering: piano ----------

const WHITE_PC = [0,2,4,5,7,9,11];
const BLACK_PC = new Set([1,3,6,8,10]);

function renderPianoSVG(highlightSet, rootPc, nameMap) {
  // highlightSet: Set of pitch classes to highlight, rootPc: pitch class treated as root (distinct color)
  // nameMap: pitch -> correctly-spelled note name for the current key (falls back to noteName())
  const label = pc => (nameMap && nameMap.get(pc)) || noteName(pc);
  const startOctaveSemitone = 0; // start at C
  const totalSemitones = 25; // 2 octaves inclusive (C..C..C)
  const whiteW = 34, whiteH = 130, blackW = 20, blackH = 82;

  let whiteIndex = 0;
  const whiteRects = [];
  const blackRects = [];

  for (let s = 0; s <= totalSemitones; s++) {
    const pc = ((startOctaveSemitone + s) % 12 + 12) % 12;
    if (BLACK_PC.has(pc)) {
      const x = whiteIndex * whiteW - blackW / 2;
      blackRects.push({ x, pc });
    } else {
      whiteRects.push({ x: whiteIndex * whiteW, pc });
      whiteIndex++;
    }
  }

  const totalWidth = whiteIndex * whiteW;
  let svg = `<svg viewBox="0 0 ${totalWidth} ${whiteH + 4}" width="${totalWidth}" height="${whiteH + 4}" xmlns="http://www.w3.org/2000/svg">`;

  whiteRects.forEach(k => {
    const isHi = highlightSet.has(k.pc);
    const isRoot = isHi && k.pc === rootPc;
    const fill = isRoot ? 'var(--root-color)' : (isHi ? 'var(--accent)' : '#f4f4f6');
    svg += `<rect x="${k.x}" y="0" width="${whiteW - 1.5}" height="${whiteH}" rx="3" fill="${fill}" stroke="#0002" stroke-width="1"/>`;
    const labelColor = isHi ? '#10131a' : '#556';
    svg += `<text x="${k.x + (whiteW - 1.5) / 2}" y="${whiteH - 10}" font-size="10.5" text-anchor="middle" fill="${labelColor}" font-weight="${isHi ? 700 : 400}">${label(k.pc)}</text>`;
  });

  blackRects.forEach(k => {
    const isHi = highlightSet.has(k.pc);
    const isRoot = isHi && k.pc === rootPc;
    const fill = isRoot ? 'var(--root-color)' : (isHi ? 'var(--accent-2)' : '#1a1c22');
    svg += `<rect x="${k.x}" y="0" width="${blackW}" height="${blackH}" rx="2" fill="${fill}" stroke="#0004" stroke-width="1"/>`;
    if (isHi) {
      svg += `<text x="${k.x + blackW / 2}" y="${blackH - 8}" font-size="8.5" text-anchor="middle" fill="#10131a" font-weight="700">${label(k.pc)}</text>`;
    }
  });

  svg += `</svg>`;
  return svg;
}

// ---------- SVG rendering: full guitar fretboard scale ----------

// low E, A, D, G, B, high e (same order used for chord shapes)
const STRING_OPEN_PC = [4, 9, 2, 7, 11, 4];
const FRET_MARKERS = new Set([3, 5, 7, 9, 15, 17, 19, 21]);
const DOUBLE_FRET_MARKERS = new Set([12, 24]);

function renderFretboardSVG(rootPc, keySet, keyMap, capoFret) {
  const numFrets = 15;
  const left = 26, top = 18, right = 16, bottom = 26;
  const fretGap = 42;
  const stringGap = 26;
  const w = left + numFrets * fretGap + right;
  const h = top + 5 * stringGap + bottom;

  // strings drawn top-to-bottom in standard tab order: high e, B, G, D, A, low E
  const stringsTopDown = [...STRING_OPEN_PC].reverse();

  let svg = `<svg viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">`;

  // dim the frets that are unplayable behind the capo
  if (capoFret > 0) {
    const x1 = left, x2 = left + capoFret * fretGap;
    svg += `<rect x="${x1}" y="${top - 8}" width="${x2 - x1}" height="${5 * stringGap + 16}" fill="#000" opacity="0.35"/>`;
  }

  // fret position markers (dots between strings, like a real neck)
  for (let f = 1; f <= numFrets; f++) {
    const x = left + (f - 0.5) * fretGap;
    if (DOUBLE_FRET_MARKERS.has(f)) {
      svg += `<circle cx="${x}" cy="${top + 1.5 * stringGap}" r="3" fill="var(--border)"/>`;
      svg += `<circle cx="${x}" cy="${top + 3.5 * stringGap}" r="3" fill="var(--border)"/>`;
    } else if (FRET_MARKERS.has(f)) {
      svg += `<circle cx="${x}" cy="${top + 2.5 * stringGap}" r="3" fill="var(--border)"/>`;
    }
  }

  // fret wires (vertical)
  for (let f = 0; f <= numFrets; f++) {
    const x = left + f * fretGap;
    svg += `<line x1="${x}" y1="${top}" x2="${x}" y2="${top + 5 * stringGap}" stroke="var(--border)" stroke-width="${f === 0 ? 4 : 1}"/>`;
  }
  // strings (horizontal), thicker for lower-pitched strings
  stringsTopDown.forEach((pc, i) => {
    const y = top + i * stringGap;
    const thickness = 1 + i * 0.35;
    svg += `<line x1="${left}" y1="${y}" x2="${left + numFrets * fretGap}" y2="${y}" stroke="var(--text-dim)" stroke-width="${thickness}" opacity="0.6"/>`;
  });

  // capo bar
  if (capoFret > 0) {
    const x = left + capoFret * fretGap - fretGap / 2 + fretGap / 2;
    const xCapo = left + capoFret * fretGap;
    svg += `<rect x="${xCapo - 3}" y="${top - 8}" width="6" height="${5 * stringGap + 16}" rx="3" fill="var(--root-color)" opacity="0.9"/>`;
    svg += `<text x="${xCapo}" y="${top - 12}" font-size="10" text-anchor="middle" fill="var(--root-color)">capo</text>`;
  }

  // fret number labels
  for (let f = 0; f <= numFrets; f++) {
    if (f !== 0 && !FRET_MARKERS.has(f) && !DOUBLE_FRET_MARKERS.has(f)) continue;
    const x = left + (f === 0 ? 0 : (f - 0.5) * fretGap);
    svg += `<text x="${x}" y="${top + 5 * stringGap + 16}" font-size="10" text-anchor="middle" fill="var(--text-dim)">${f}</text>`;
  }

  // note dots
  stringsTopDown.forEach((openPc, i) => {
    const y = top + i * stringGap;
    for (let f = 0; f <= numFrets; f++) {
      const pc = (openPc + f) % 12;
      if (!keySet.has(pc)) continue;
      const x = left + (f === 0 ? 0 : (f - 0.5) * fretGap);
      const isRoot = pc === rootPc;
      const fill = isRoot ? 'var(--root-color)' : 'var(--accent)';
      const r = f === 0 ? 8 : 9;
      svg += `<circle cx="${x}" cy="${y}" r="${r}" fill="${fill}" stroke="var(--bg)" stroke-width="1.5"/>`;
      svg += `<text x="${x}" y="${y + 3.5}" font-size="9" text-anchor="middle" fill="#10131a" font-weight="700">${keyMap.get(pc) || noteName(pc)}</text>`;
    }
  });

  svg += `</svg>`;
  return svg;
}

function renderFretboardScale() {
  const container = document.getElementById('fretboardContainer');
  const info = document.getElementById('fretboardInfo');
  const keyMap = buildKeyNoteMap(state.root, state.mode);
  const keySet = new Set(keyMap.keys());
  const spell = pc => keyMap.get(pc) || noteName(pc);

  container.innerHTML = renderFretboardSVG(state.root, keySet, keyMap, state.capo);
  info.textContent = state.capo > 0
    ? `${spell(state.root)} ${state.mode === 'major' ? 'major' : 'minor'} — actual sounding notes; the dimmed zone before the capo (fret ${state.capo}) is unplayable`
    : `${spell(state.root)} ${state.mode === 'major' ? 'major' : 'minor'} across the whole neck`;
}

function renderSubstitutions() {
  const container = document.getElementById('subsContainer');
  container.innerHTML = '';
  if (!state.progression) return;
  const keyMap = buildKeyNoteMap(state.root, state.mode);

  state.progression.forEach((chord, idx) => {
    const base = chord.baseOriginal || chord;
    const candidates = generateSubstitutes(state.progression, idx, state.root, state.mode, keyMap);

    const slot = document.createElement('div');
    slot.className = 'sub-slot' + (chord.isSubstituted ? ' is-substituted' : '');

    const origDiv = document.createElement('div');
    origDiv.className = 'sub-original';
    origDiv.innerHTML = `${base.roman}<br><b>${base.name}</b>`;
    slot.appendChild(origDiv);

    const optionsDiv = document.createElement('div');
    optionsDiv.className = 'sub-options';

    candidates.forEach(cand => {
      const isActive = chord.isSubstituted && chord.root === cand.root && chord.quality === cand.quality;
      const chip = document.createElement('button');
      chip.className = 'sub-chip' + (isActive ? ' active' : '');
      chip.innerHTML = `${cand.name} <span class="sub-tag">${cand.tag}</span>`;
      chip.title = cand.label;
      chip.addEventListener('click', () => applySubstitute(idx, cand));
      optionsDiv.appendChild(chip);
    });

    if (chord.isSubstituted) {
      const resetChip = document.createElement('button');
      resetChip.className = 'sub-chip reset';
      resetChip.textContent = `↺ revert to ${base.name}`;
      resetChip.addEventListener('click', () => resetSubstitute(idx));
      optionsDiv.appendChild(resetChip);
    }

    slot.appendChild(optionsDiv);
    container.appendChild(slot);
  });
}

function applySubstitute(idx, cand) {
  const current = state.progression[idx];
  const baseOriginal = current.baseOriginal || { root: current.root, quality: current.quality, name: current.name, roman: current.roman, degreeIndex: current.degreeIndex };
  state.progression[idx] = {
    root: cand.root,
    quality: cand.quality,
    name: cand.name,
    roman: baseOriginal.roman,
    degreeIndex: baseOriginal.degreeIndex,
    isSubstituted: true,
    subLabel: cand.label,
    baseOriginal,
  };
  renderChordCards();
  renderSubstitutions();
  renderPiano();
}

function resetSubstitute(idx) {
  const current = state.progression[idx];
  const base = current.baseOriginal;
  if (!base) return;
  state.progression[idx] = { ...base };
  renderChordCards();
  renderSubstitutions();
  renderPiano();
}

// ---------- App state & wiring ----------

const state = {
  root: 0,
  mode: 'major',
  mood: 'all',
  capo: 0,
  style: 'acoustic',
  progression: null,       // array of chord objects
  progressionLabel: '',
  selectedChordIndex: null,
  showScale: true,
};

function populateSelects() {
  const rootSelect = document.getElementById('rootSelect');
  ROOTS.forEach(p => {
    const opt = document.createElement('option');
    opt.value = p;
    opt.textContent = noteName(p);
    rootSelect.appendChild(opt);
  });
  rootSelect.value = state.root;

  const capoSelect = document.getElementById('capoSelect');
  for (let i = 0; i <= 7; i++) {
    const opt = document.createElement('option');
    opt.value = i;
    opt.textContent = i === 0 ? 'No capo' : `Fret ${i}`;
    capoSelect.appendChild(opt);
  }
  capoSelect.value = state.capo;

  const moodSelect = document.getElementById('moodSelect');
  Object.entries(MOODS).forEach(([key, m]) => {
    const opt = document.createElement('option');
    opt.value = key;
    opt.textContent = m.label;
    moodSelect.appendChild(opt);
  });
  moodSelect.value = state.mood;
}

function renderProgressionList() {
  const container = document.getElementById('progressionList');
  container.innerHTML = '';
  const fullList = PROGRESSIONS[state.mode];
  const list = progressionsForMode(state.mode, state.mood);

  if (state.mood !== 'all' && list === fullList) {
    const note = document.createElement('div');
    note.className = 'mood-empty-note';
    note.textContent = `No progressions tagged "${MOODS[state.mood].label.replace(/^\S+\s/, '')}" in this mode — showing all instead.`;
    container.appendChild(note);
  }

  list.forEach(entry => {
    const chords = progressionToChords(state.root, state.mode, entry.pattern);
    const div = document.createElement('div');
    div.className = 'prog-item';
    const moodTags = entry.moods.map(m => `<span class="prog-mood">${MOODS[m].label}</span>`).join('');
    div.innerHTML = `<div>${chords.map(c => c.name).join(' – ')}</div>
      <div class="roman">${chords.map(c => c.roman).join(' – ')}</div>
      <div class="prog-moods">${moodTags}</div>`;
    div.addEventListener('click', () => {
      setProgression(chords, chords.map(c => c.roman).join(' – '));
    });
    container.appendChild(div);
  });
}

function setProgression(chords, label) {
  state.progression = chords;
  state.progressionLabel = label;
  state.selectedChordIndex = null;
  renderChordCards();
  updateActiveProgItem();
  renderPiano();
  renderSubstitutions();
}

function updateActiveProgItem() {
  const items = document.querySelectorAll('.prog-item');
  items.forEach(el => {
    const roman = el.querySelector('.roman').textContent;
    el.classList.toggle('active', roman === state.progressionLabel);
  });
  document.getElementById('currentProgLabel').textContent = state.progressionLabel
    ? `${noteName(state.root)} ${state.mode === 'major' ? 'major' : 'minor'} · ${state.progressionLabel}`
    : '';
}

function renderChordCards() {
  const container = document.getElementById('chordCards');
  container.innerHTML = '';
  if (!state.progression) return;

  state.progression.forEach((chord, idx) => {
    const shape = resolveGuitarShape(chord.root, chord.quality, state.capo, state.style);
    const title = shape.shapeChordName === chord.name
      ? chord.name
      : `${shape.shapeChordName} <span class="creal">(${chord.name})</span>`;
    const card = document.createElement('div');
    card.className = 'chord-card' + (state.selectedChordIndex === idx ? ' selected' : '');
    const romanLine = chord.isSubstituted ? `${chord.roman} <span class="csub-badge">sub</span>` : chord.roman;
    card.innerHTML = `
      <div class="cname">${title}</div>
      <div class="croman">${romanLine}</div>
      ${renderChordSVG(shape)}
      <div class="cshape-label">${shape.voicingType}</div>
    `;
    card.addEventListener('click', () => {
      state.selectedChordIndex = idx;
      state.showScale = false;
      document.getElementById('showScaleBtn').classList.remove('active');
      renderChordCards();
      renderPiano();
    });
    container.appendChild(card);
  });
}

function renderPiano() {
  const container = document.getElementById('pianoContainer');
  const info = document.getElementById('pianoInfo');
  const keyMap = buildKeyNoteMap(state.root, state.mode);
  const spell = pc => keyMap.get(pc) || noteName(pc);
  let highlightSet = new Set();
  let rootPc = state.root;

  if (state.showScale || state.selectedChordIndex === null) {
    const scale = SCALE_INTERVALS[state.mode].map(iv => (state.root + iv) % 12);
    highlightSet = new Set(scale);
    rootPc = state.root;
    info.textContent = `Scale: ${spell(state.root)} ${state.mode === 'major' ? 'major' : 'minor'} — ${scale.map(spell).join(', ')}`;
  } else if (state.progression) {
    const chord = state.progression[state.selectedChordIndex];
    const notes = CHORD_INTERVALS[chord.quality].map(iv => (chord.root + iv) % 12);
    highlightSet = new Set(notes);
    rootPc = chord.root;
    info.textContent = `Chord: ${chord.name} — notes ${notes.map(spell).join(', ')}`;
  }

  container.innerHTML = renderPianoSVG(highlightSet, rootPc, keyMap);
}

function refreshAll() {
  renderProgressionList();
  if (!state.progression) {
    const chords = randomProgression(state.root, state.mode, state.mood);
    setProgression(chords, chords.map(c => c.roman).join(' – '));
  } else {
    // re-derive current progression's chords in new key/mode using same degree pattern length as fallback: just regenerate cards with existing progression roots recomputed
    const degreeSeq = state.progression.map(c => c.degreeIndex);
    const chords = progressionToChords(state.root, state.mode, degreeSeq);
    setProgression(chords, chords.map(c => c.roman).join(' – '));
  }
  renderFretboardScale();
}

function wireEvents() {
  document.getElementById('rootSelect').addEventListener('change', e => {
    state.root = parseInt(e.target.value, 10);
    refreshAll();
  });
  document.getElementById('modeSelect').addEventListener('change', e => {
    state.mode = e.target.value;
    state.progression = null;
    refreshAll();
  });
  document.getElementById('capoSelect').addEventListener('change', e => {
    state.capo = parseInt(e.target.value, 10);
    renderChordCards();
    renderFretboardScale();
  });
  document.getElementById('moodSelect').addEventListener('change', e => {
    state.mood = e.target.value;
    renderProgressionList();
  });
  document.querySelectorAll('.seg-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.seg-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.style = btn.dataset.style;
      renderChordCards();
    });
  });
  document.getElementById('randomBtn').addEventListener('click', () => {
    const chords = randomProgression(state.root, state.mode, state.mood);
    setProgression(chords, chords.map(c => c.roman).join(' – '));
  });
  document.getElementById('surpriseBtn').addEventListener('click', () => {
    state.root = ROOTS[Math.floor(Math.random() * ROOTS.length)];
    state.mode = Math.random() < 0.5 ? 'major' : 'minor';
    document.getElementById('rootSelect').value = state.root;
    document.getElementById('modeSelect').value = state.mode;
    renderProgressionList();
    const chords = randomProgression(state.root, state.mode, state.mood);
    setProgression(chords, chords.map(c => c.roman).join(' – '));
    renderFretboardScale();
  });
  document.getElementById('showScaleBtn').addEventListener('click', () => {
    state.showScale = true;
    state.selectedChordIndex = null;
    document.getElementById('showScaleBtn').classList.add('active');
    renderChordCards();
    renderPiano();
  });
}

populateSelects();
wireEvents();
refreshAll();
