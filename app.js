// ---------- i18n ----------

const MOOD_EMOJI = { all: '', happy: '😊', sad: '😢', epic: '🔥', dreamy: '💭', tense: '⚡', nostalgic: '🕰', romantic: '💜', groovy: '🕺' };
const MOOD_KEYS = ['all', 'happy', 'sad', 'epic', 'dreamy', 'tense', 'nostalgic', 'romantic', 'groovy'];

const STRINGS = {
  en: {
    subtitle: 'a songwriting & melody-writing assistant',
    settingsTitle: 'Settings',
    keyLabel: 'Key',
    major: 'Major',
    minor: 'Minor',
    moodLabel: 'Progression mood',
    chordViewLabel: 'Chord diagrams',
    guitar: 'Guitar',
    piano: 'Piano',
    richLabel: 'Chord color',
    triadsOpt: 'Triads',
    extendedOpt: '7th & sus',
    capoLabel: 'Capo',
    voicingLabel: 'Chord voicing (guitar)',
    acoustic: 'Acoustic',
    electric: 'Electric',
    randomBtn: '🎲 Random progression',
    surpriseBtn: '🎲 Surprise me (any key)',
    progressionsInKey: 'Progressions in this key',
    currentProgression: 'Current progression',
    chordSubstitutions: 'Chord substitutions',
    chordSubstitutionsSub: "so the progression doesn't sound monotonous",
    pianoTitle: 'Piano',
    showScale: 'Show scale',
    fretboardTitle: 'Melody notes on the guitar fretboard',
    footer: "Click a chord below to see its notes on the keyboard. Capo only changes the shape you finger on guitar — the actual sounding key and the piano keyboard don't change.",
    play: '▶ Play',
    stop: '■ Stop',
    bpmLabel: 'Tempo',
    legendRoot: 'Root',
    legendChord: 'Chord tone',
    legendScale: 'Safe note',
    melodyTitle: 'Arrangement generator',
    melodySub: 'melody, bass, drums & guitar tab for this progression',
    generateMelody: '🎲 Generate melody',
    generateBass: '🎸 Generate bass',
    generateDrums: '🥁 Generate drums',
    generateTab: '🎼 Generate tab',
    playMelody: '▶ Play melody',
    playBass: '▶ Play bass',
    playDrums: '▶ Play drums',
    playTab: '▶ Play tab',
    playAll: '▶ Play all',
    downloadMidi: '⬇ Download MIDI',
    melodyPlaceholder: 'Click "Generate melody", "Generate bass", "Generate drums", or "Generate tab" to create parts that fit this progression.',
    legendMelody: 'Melody',
    legendBass: 'Bass',
    removeMelody: 'Remove melody',
    removeBass: 'Remove bass',
    removeDrums: 'Remove drums',
    removeTab: 'Remove tab',
    noCapo: 'No capo',
    fretN: n => `Fret ${n}`,
    capoWord: 'capo',
    moodNames: {
      all: 'Any mood', happy: 'Happy', sad: 'Sad', epic: 'Epic', dreamy: 'Dreamy',
      tense: 'Tense', nostalgic: 'Nostalgic', romantic: 'Romantic', groovy: 'Groovy',
    },
    moodEmptyNote: moodName => `No progressions tagged "${moodName}" in this mode — showing all instead.`,
    voicingOpen: 'open',
    voicingBarre: shapeName => `barre, ${shapeName}`,
    voicingApprox: ' (triad shape)',
    shapeLetter: (letter, suf) => `${letter}${suf}-shape`,
    powerLowE: 'power chord (low E string)',
    powerA: 'power chord (A string)',
    subBadge: 'sub',
    revertTo: name => `↺ revert to ${name}`,
    notesLabel: list => `Notes: ${list}`,
    pianoScaleInfo: (root, mode, notes) => `Scale: ${root} ${mode} — ${notes}`,
    pianoChordInfo: (name, notes, safe) => `Chord: ${name} — chord tones ${notes} · also safe: ${safe}`,
    fretboardCapoInfo: (root, mode, capo) => `${root} ${mode} — actual sounding notes; the dimmed zone before the capo (fret ${capo}) is unplayable`,
    fretboardInfo: (root, mode) => `${root} ${mode} across the whole neck`,
    fretboardChordInfo: name => `Melody notes over ${name} — chord tones + other safe scale notes`,
    fretboardChordCapoInfo: (name, capo) => `Melody notes over ${name} — dimmed zone before the capo (fret ${capo}) is unplayable`,
    relativeLabel: roman => `${roman} · relative substitute (shared tones)`,
    sub_maj_iv: 'borrowed from the parallel minor — sadder',
    sub_maj_bVII: 'bVII — rock/pop cadence instead of V',
    sub_maj_bVI: 'bVI — borrowed, cinematic',
    sub_min_IV: 'borrowed from the parallel major — brighter',
    sub_min_V: 'harmonic minor — pulls into the tonic more strongly',
    sub_min_vii: 'leading tone (harmonic minor) — sharper before i',
    sub_min_I: 'Picardy third — bright major ending',
    secondaryDom: name => `secondary dominant — pulls into the next chord, ${name}`,
    colorTriadTag: 'triad',
    colorTriadLabel: 'plain triad — simpler, more universal',
    colorExtLabel: 'diatonic 7th — extra color, same function',
    colorSus4Label: 'sus4 — suspended tension that wants to resolve',
  },
  ru: {
    subtitle: 'помощник в написании мелодий и песен',
    settingsTitle: 'Настройки',
    keyLabel: 'Тональность',
    major: 'Мажор',
    minor: 'Минор',
    moodLabel: 'Настроение прогрессии',
    chordViewLabel: 'Вид аккордов',
    guitar: 'Гитара',
    piano: 'Пианино',
    richLabel: 'Окраска аккордов',
    triadsOpt: 'Трезвучия',
    extendedOpt: 'Септ и sus',
    capoLabel: 'Капо',
    voicingLabel: 'Тип аккордов (гитара)',
    acoustic: 'Акустика',
    electric: 'Электро',
    randomBtn: '🎲 Случайная прогрессия',
    surpriseBtn: '🎲 Удиви меня (любая тональность)',
    progressionsInKey: 'Прогрессии в этой тональности',
    currentProgression: 'Текущая прогрессия',
    chordSubstitutions: 'Замены аккордов',
    chordSubstitutionsSub: 'чтобы прогрессия не звучала однообразно',
    pianoTitle: 'Пианино',
    showScale: 'Показать гамму',
    fretboardTitle: 'Ноты мелодии на грифе гитары',
    footer: 'Кликните на аккорд ниже, чтобы увидеть его ноты на клавиатуре. Капо меняет только форму (аппликатуру) для гитары — реальная звучащая тональность и клавиатура пианино не меняются.',
    play: '▶ Играть',
    stop: '■ Стоп',
    bpmLabel: 'Темп',
    legendRoot: 'Тоника',
    legendChord: 'Тон аккорда',
    legendScale: 'Безопасная нота',
    melodyTitle: 'Генератор аранжировки',
    melodySub: 'мелодия, бас, барабаны и табы для этой прогрессии',
    generateMelody: '🎲 Сгенерировать мелодию',
    generateBass: '🎸 Сгенерировать бас',
    generateDrums: '🥁 Сгенерировать барабаны',
    generateTab: '🎼 Сгенерировать табы',
    playMelody: '▶ Играть мелодию',
    playBass: '▶ Играть бас',
    playDrums: '▶ Играть барабаны',
    playTab: '▶ Играть табы',
    playAll: '▶ Играть всё',
    downloadMidi: '⬇ Скачать MIDI',
    melodyPlaceholder: 'Нажми «Сгенерировать мелодию», «Сгенерировать бас», «Сгенерировать барабаны» или «Сгенерировать табы», чтобы создать партии под эту прогрессию.',
    legendMelody: 'Мелодия',
    legendBass: 'Бас',
    removeMelody: 'Убрать мелодию',
    removeBass: 'Убрать бас',
    removeDrums: 'Убрать барабаны',
    removeTab: 'Убрать табы',
    noCapo: 'Без капо',
    fretN: n => `${n} лад`,
    capoWord: 'капо',
    moodNames: {
      all: 'Любое настроение', happy: 'Радостная', sad: 'Грустная', epic: 'Эпичная', dreamy: 'Мечтательная',
      tense: 'Тревожная', nostalgic: 'Ностальгическая', romantic: 'Романтичная', groovy: 'Танцевальная',
    },
    moodEmptyNote: moodName => `Нет прогрессий с настроением «${moodName}» в этом ладу — показаны все.`,
    voicingOpen: 'открытая',
    voicingBarre: shapeName => `барре, ${shapeName}`,
    voicingApprox: ' (форма трезвучия)',
    shapeLetter: (letter, suf) => `форма ${letter}${suf}`,
    powerLowE: 'пауэр-аккорд (6-я струна)',
    powerA: 'пауэр-аккорд (5-я струна)',
    subBadge: 'замена',
    revertTo: name => `↺ вернуть ${name}`,
    notesLabel: list => `Ноты: ${list}`,
    pianoScaleInfo: (root, mode, notes) => `Гамма: ${root} ${mode} — ${notes}`,
    pianoChordInfo: (name, notes, safe) => `Аккорд: ${name} — тона аккорда ${notes} · также безопасны: ${safe}`,
    fretboardCapoInfo: (root, mode, capo) => `${root} ${mode} — реальные ноты на грифе; затемнённая зона до капо (${capo} лад) недоступна`,
    fretboardInfo: (root, mode) => `${root} ${mode} по всему грифу`,
    fretboardChordInfo: name => `Ноты мелодии над ${name} — тона аккорда + другие безопасные ноты гаммы`,
    fretboardChordCapoInfo: (name, capo) => `Ноты мелодии над ${name} — затемнённая зона до капо (${capo} лад) недоступна`,
    relativeLabel: roman => `${roman} · родственная замена (общие ноты)`,
    sub_maj_iv: 'заимствован из параллельного минора — печальнее',
    sub_maj_bVII: 'bVII — рок/поп каденция вместо V',
    sub_maj_bVI: 'bVI — заимствованный, кинематографичный',
    sub_min_IV: 'заимствован из параллельного мажора — светлее',
    sub_min_V: 'гармонический минор — сильнее тянет в тонику',
    sub_min_vii: 'вводный тон (гарм. минор) — острее перед i',
    sub_min_I: 'пикардийская терция — светлый мажорный исход',
    secondaryDom: name => `вторичная доминанта — тянет в следующий ${name}`,
    colorTriadTag: 'триада',
    colorTriadLabel: 'простое трезвучие — проще и универсальнее',
    colorExtLabel: 'диатонический септаккорд — больше окраски, та же функция',
    colorSus4Label: 'sus4 — подвешенное напряжение, тянет к разрешению',
  },
};

function t(key, ...args) {
  const entry = STRINGS[state.lang][key] ?? STRINGS.en[key];
  return typeof entry === 'function' ? entry(...args) : entry;
}

function modeWord(mode) {
  return mode === 'major' ? t('major') : t('minor');
}

function moodLabel(key) {
  const name = STRINGS[state.lang].moodNames[key] ?? STRINGS.en.moodNames[key];
  const emoji = MOOD_EMOJI[key];
  return emoji ? `${emoji} ${name}` : name;
}

function applyStaticI18n() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
  document.getElementById('langToggle').querySelectorAll('.seg-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === state.lang);
  });
}

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

// Standard diatonic 7th-chord harmonization, used instead of DEGREE_QUALITY
// when state.richChords is on.
const DEGREE_QUALITY_EXT = {
  major: ['maj7','m7','m7','maj7','dom7','m7','m7b5'],
  minor: ['m7','m7b5','maj7','m7','m7','maj7','dom7'],
};

const ROMAN = {
  major: ['I','ii','iii','IV','V','vi','vii°'],
  minor: ['i','ii°','III','iv','v','VI','VII'],
};

const CHORD_INTERVALS = {
  maj: [0,4,7],
  min: [0,3,7],
  dim: [0,3,6],
  dom7: [0,4,7,10],
  maj7: [0,4,7,11],
  m7: [0,3,7,10],
  m7b5: [0,3,6,10],
  sus2: [0,2,7],
  sus4: [0,5,7],
  add9: [0,4,7,14],
};

function qualitySuffix(q) {
  if (q === 'maj') return '';
  if (q === 'min') return 'm';
  if (q === 'dim') return 'dim';
  if (q === 'dom7') return '7';
  return q; // maj7, m7, m7b5, sus2, sus4, add9 already read correctly appended to a root name
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

// Re-quality a chord to its diatonic 7th form (used both for the light
// automatic sprinkle below and for the manual "color" substitution chips).
function extendedVariant(chord, mode, keyMap) {
  const quality = DEGREE_QUALITY_EXT[mode][chord.degreeIndex];
  const name = (keyMap.get(chord.root) || noteName(chord.root)) + qualitySuffix(quality);
  return { ...chord, quality, name };
}

// Sprinkle 7th/color chords into an otherwise plain-triad progression instead
// of forcing every chord — real songs mostly stay triads and reach for a 7th
// at a specific spot (the V leading into a resolution, a jazzy final tonic).
function applyRichColoring(chords, mode, keyMap) {
  if (!state.richChords) return chords;
  return chords.map((c, i) => {
    const isLast = i === chords.length - 1;
    let colorChance = 0.16; // occasional color anywhere
    if (c.degreeIndex === 4) colorChance = 0.65;               // V -> V7 is the classic move
    else if (isLast && c.degreeIndex === 0) colorChance = 0.35; // jazzy tonic ending
    return Math.random() < colorChance ? extendedVariant(c, mode, keyMap) : c;
  });
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
    return { root: c.root, quality: c.quality, name: c.name, kind: 'relative', tag: c.roman, label: t('relativeLabel', c.roman) };
  });
}

function borrowedSubstitute(keyRoot, mode, degreeIndex, chordRoot) {
  if (mode === 'major') {
    if (degreeIndex === 3) return { root: chordRoot, quality: 'min', name: noteName(chordRoot) + 'm', kind: 'borrowed', tag: 'iv', label: t('sub_maj_iv') };
    if (degreeIndex === 4) { const r = (keyRoot + 10) % 12; return { root: r, quality: 'maj', name: noteName(r), kind: 'borrowed', tag: 'bVII', label: t('sub_maj_bVII') }; }
    if (degreeIndex === 5) { const r = (keyRoot + 8) % 12; return { root: r, quality: 'maj', name: noteName(r), kind: 'borrowed', tag: 'bVI', label: t('sub_maj_bVI') }; }
  } else {
    if (degreeIndex === 3) return { root: chordRoot, quality: 'maj', name: noteName(chordRoot), kind: 'borrowed', tag: 'IV', label: t('sub_min_IV') };
    if (degreeIndex === 4) return { root: chordRoot, quality: 'maj', name: noteName(chordRoot), kind: 'borrowed', tag: 'V', label: t('sub_min_V') };
    if (degreeIndex === 6) { const r = (keyRoot + 11) % 12; return { root: r, quality: 'dim', name: noteName(r) + 'dim', kind: 'borrowed', tag: 'vii°', label: t('sub_min_vii') }; }
    if (degreeIndex === 0) return { root: chordRoot, quality: 'maj', name: noteName(chordRoot), kind: 'borrowed', tag: 'I', label: t('sub_min_I') };
  }
  return null;
}

function secondaryDominantSubstitute(nextChord) {
  if (!nextChord) return null;
  const root = (nextChord.root + 7) % 12;
  return { root, quality: 'maj', name: noteName(root), kind: 'secondary', tag: `V/${nextChord.name}`, label: t('secondaryDom', nextChord.name) };
}

// Manual "color" chips: switch this one chord between a plain triad, its
// diatonic 7th, and a sus4 — independent of whatever the automatic sprinkle
// in applyRichColoring() landed on for this slot. Only offered when the
// "7th & sus" toggle is on.
function colorSubstitutes(base, mode, keyMap) {
  const list = [];
  const plainQuality = DEGREE_QUALITY[mode][base.degreeIndex];
  const richQuality = DEGREE_QUALITY_EXT[mode][base.degreeIndex];
  const nameFor = q => (keyMap.get(base.root) || noteName(base.root)) + qualitySuffix(q);

  if (base.quality !== plainQuality) {
    list.push({ root: base.root, quality: plainQuality, name: nameFor(plainQuality), kind: 'color', tag: t('colorTriadTag'), label: t('colorTriadLabel') });
  }
  if (base.quality !== richQuality) {
    list.push({ root: base.root, quality: richQuality, name: nameFor(richQuality), kind: 'color', tag: qualitySuffix(richQuality), label: t('colorExtLabel') });
  }
  if (base.quality !== 'sus4') {
    list.push({ root: base.root, quality: 'sus4', name: nameFor('sus4'), kind: 'color', tag: 'sus4', label: t('colorSus4Label') });
  }
  return list;
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
  if (state.richChords) colorSubstitutes(base, mode, keyMap).forEach(c => list.push(c));
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
  const chords = degreeSeq.map(d => diatonicChord(keyRoot, mode, d, keyMap));
  return applyRichColoring(chords, mode, keyMap);
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

// Movable barre-chord templates (fret offsets relative to the barre fret),
// derived from the well-known open E/A CAGED shapes. Only qualities with a
// genuinely playable movable barre form are listed here; anything else
// (m7b5, add9, sus2) falls back to the closest triad shape below — the
// audio/piano/fretboard/MIDI still use the exact chord, only the guitar
// diagram simplifies.
const E_SHAPE_PATTERNS = {
  maj:   [0,2,2,1,0,0],
  min:   [0,2,2,0,0,0],
  dom7:  [0,2,0,1,0,0],
  maj7:  [0,2,1,1,0,0],
  m7:    [0,2,0,0,0,0],
  sus4:  [0,2,2,2,0,0],
};
const A_SHAPE_PATTERNS = {
  maj:   [-1,0,2,2,2,0],
  min:   [-1,0,2,2,1,0],
  dom7:  [-1,0,2,0,2,0],
  maj7:  [-1,0,2,1,2,0],
  m7:    [-1,0,2,0,1,0],
  sus4:  [-1,0,2,2,3,0],
};
const SHAPE_QUALITY_FALLBACK = { m7b5: 'min', add9: 'maj', sus2: 'maj' };

function barreShape(rootPitch, quality) {
  const shapeQuality = E_SHAPE_PATTERNS[quality] ? quality : (SHAPE_QUALITY_FALLBACK[quality] || 'maj');
  const isApprox = shapeQuality !== quality;

  // choose between E-shape (root on low E string) and A-shape (root on A string),
  // pick whichever gives the lower (easier) fret.
  const fretFromE = ((rootPitch - 4) % 12 + 12) % 12; // low E open = pitch 4
  const fretFromA = ((rootPitch - 9) % 12 + 12) % 12; // A open = pitch 9
  const useAShape = fretFromA < fretFromE;

  const letter = useAShape ? 'A' : 'E';
  const suf = qualitySuffix(shapeQuality);
  const shapeName = t('shapeLetter', letter, suf) + (isApprox ? t('voicingApprox') : '');

  if (!useAShape) {
    const f = fretFromE;
    const shape = E_SHAPE_PATTERNS[shapeQuality];
    return {
      frets: shape.map(v => v === -1 ? -1 : v + f),
      barre: f > 0 ? { fret: f, from: 0, to: 5 } : null,
      baseFretHint: f,
      shapeName,
    };
  } else {
    const f = fretFromA;
    const shape = A_SHAPE_PATTERNS[shapeQuality];
    return {
      frets: shape.map(v => v === -1 ? -1 : v + f),
      barre: f > 0 ? { fret: f, from: 1, to: 5 } : null,
      baseFretHint: f,
      shapeName,
    };
  }
}

function powerChordShape(rootPitch) {
  const fretFromE = ((rootPitch - 4) % 12 + 12) % 12;
  const fretFromA = ((rootPitch - 9) % 12 + 12) % 12;
  if (fretFromE <= fretFromA) {
    const f = fretFromE;
    return { frets: [f, f + 2, f + 2, -1, -1, -1], baseFretHint: f, shapeName: t('powerLowE') };
  } else {
    const f = fretFromA;
    return { frets: [-1, f, f + 2, f + 2, -1, -1], baseFretHint: f, shapeName: t('powerA') };
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
    return finalizeDiagram(s.frets, null, shapeChordName, t('voicingOpen'), capoFret, false);
  }
  const b = barreShape(shapeRoot, quality);
  const shapeChordName = noteName(shapeRoot) + qualitySuffix(quality);
  return finalizeDiagram(b.frets, b.barre, shapeChordName, t('voicingBarre', b.shapeName), capoFret, false);
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

function renderPianoSVG(highlightSet, rootPc, nameMap, opts) {
  // highlightSet: Set of pitch classes highlighted as "chord tone" (root gets its own color)
  // opts.extraSet: Set of additional pitch classes highlighted as "safe scale tone" (a third, dimmer tier)
  // nameMap: pitch -> correctly-spelled note name for the current key (falls back to noteName())
  const o = Object.assign({ octaves: 2, whiteW: 34, whiteH: 130, blackW: 20, blackH: 82, showAllLabels: true, extraSet: null }, opts);
  const label = pc => (nameMap && nameMap.get(pc)) || noteName(pc);
  const startOctaveSemitone = 0; // start at C
  const totalSemitones = o.octaves * 12 + 1; // N octaves inclusive (C..C)

  let whiteIndex = 0;
  const whiteRects = [];
  const blackRects = [];

  for (let s = 0; s <= totalSemitones; s++) {
    const pc = ((startOctaveSemitone + s) % 12 + 12) % 12;
    if (BLACK_PC.has(pc)) {
      const x = whiteIndex * o.whiteW - o.blackW / 2;
      blackRects.push({ x, pc });
    } else {
      whiteRects.push({ x: whiteIndex * o.whiteW, pc });
      whiteIndex++;
    }
  }

  const tierOf = pc => {
    if (highlightSet.has(pc)) return pc === rootPc ? 'root' : 'chord';
    if (o.extraSet && o.extraSet.has(pc)) return 'scale';
    return 'none';
  };

  const totalWidth = whiteIndex * o.whiteW;
  let svg = `<svg viewBox="0 0 ${totalWidth} ${o.whiteH + 4}" width="${totalWidth}" height="${o.whiteH + 4}" xmlns="http://www.w3.org/2000/svg">`;

  whiteRects.forEach(k => {
    const tier = tierOf(k.pc);
    const fill = tier === 'root' ? 'var(--root-color)' : tier === 'chord' ? 'var(--accent)' : tier === 'scale' ? 'var(--accent-2)' : '#f4f4f6';
    svg += `<rect x="${k.x}" y="0" width="${o.whiteW - 1.5}" height="${o.whiteH}" rx="3" fill="${fill}" stroke="#0002" stroke-width="1"/>`;
    if (o.showAllLabels || tier !== 'none') {
      const labelColor = tier !== 'none' ? '#10131a' : '#556';
      const fontSize = o.whiteW < 26 ? 8 : 10.5;
      svg += `<text x="${k.x + (o.whiteW - 1.5) / 2}" y="${o.whiteH - 10}" font-size="${fontSize}" text-anchor="middle" fill="${labelColor}" font-weight="${tier !== 'none' ? 700 : 400}">${label(k.pc)}</text>`;
    }
  });

  blackRects.forEach(k => {
    const tier = tierOf(k.pc);
    const fill = tier === 'root' ? 'var(--root-color)' : tier === 'chord' ? 'var(--accent)' : tier === 'scale' ? 'var(--accent-2)' : '#1a1c22';
    svg += `<rect x="${k.x}" y="0" width="${o.blackW}" height="${o.blackH}" rx="2" fill="${fill}" stroke="#0004" stroke-width="1"/>`;
    if (tier !== 'none') {
      const fontSize = o.blackW < 16 ? 7 : 8.5;
      svg += `<text x="${k.x + o.blackW / 2}" y="${o.blackH - 8}" font-size="${fontSize}" text-anchor="middle" fill="#10131a" font-weight="700">${label(k.pc)}</text>`;
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

function renderFretboardSVG(rootPc, keySet, keyMap, capoFret, extraSet) {
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
    const xCapo = left + capoFret * fretGap;
    svg += `<rect x="${xCapo - 3}" y="${top - 8}" width="6" height="${5 * stringGap + 16}" rx="3" fill="var(--root-color)" opacity="0.9"/>`;
    svg += `<text x="${xCapo}" y="${top - 12}" font-size="10" text-anchor="middle" fill="var(--root-color)">${t('capoWord')}</text>`;
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
      const isChord = keySet.has(pc);
      const isExtra = !isChord && extraSet && extraSet.has(pc);
      if (!isChord && !isExtra) continue;
      const x = left + (f === 0 ? 0 : (f - 0.5) * fretGap);
      const isRoot = isChord && pc === rootPc;
      const fill = isRoot ? 'var(--root-color)' : isChord ? 'var(--accent)' : 'var(--accent-2)';
      const r = isExtra ? (f === 0 ? 6.5 : 7.5) : (f === 0 ? 8 : 9);
      const opacity = isExtra ? '0.9' : '1';
      svg += `<circle cx="${x}" cy="${y}" r="${r}" fill="${fill}" opacity="${opacity}" stroke="var(--bg)" stroke-width="1.5"/>`;
      svg += `<text x="${x}" y="${y + 3.5}" font-size="${isExtra ? 8 : 9}" text-anchor="middle" fill="#10131a" font-weight="700">${keyMap.get(pc) || noteName(pc)}</text>`;
    }
  });

  svg += `</svg>`;
  return svg;
}

function renderFretboardScale() {
  const container = document.getElementById('fretboardContainer');
  const info = document.getElementById('fretboardInfo');
  const keyMap = buildKeyNoteMap(state.root, state.mode);
  const scaleSet = new Set(keyMap.keys());
  const spell = pc => keyMap.get(pc) || noteName(pc);

  if ((state.showScale || state.selectedChordIndex === null) || !state.progression) {
    container.innerHTML = renderFretboardSVG(state.root, scaleSet, keyMap, state.capo);
    info.textContent = state.capo > 0
      ? t('fretboardCapoInfo', spell(state.root), modeWord(state.mode), state.capo)
      : t('fretboardInfo', spell(state.root), modeWord(state.mode));
  } else {
    const chord = state.progression[state.selectedChordIndex];
    const chordSet = new Set(CHORD_INTERVALS[chord.quality].map(iv => (chord.root + iv) % 12));
    const extraSet = new Set([...scaleSet].filter(pc => !chordSet.has(pc)));
    container.innerHTML = renderFretboardSVG(chord.root, chordSet, keyMap, state.capo, extraSet);
    info.textContent = state.capo > 0
      ? t('fretboardChordCapoInfo', chord.name, state.capo)
      : t('fretboardChordInfo', chord.name);
  }
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
      resetChip.textContent = t('revertTo', base.name);
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

// ---------- Audio playback (Web Audio API) ----------

let audioCtx = null;
let playbackTimeouts = [];
let activeOscillators = [];

function getAudioContext() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  if (audioCtx.state === 'suspended') audioCtx.resume();
  return audioCtx;
}

function midiToFreq(midi) {
  return 440 * Math.pow(2, (midi - 69) / 12);
}

function playNoteAt(ctx, freq, when, duration, peakGain = 0.15, waveType = 'triangle') {
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = waveType;
  osc.frequency.setValueAtTime(freq, when);
  gain.gain.setValueAtTime(0, when);
  gain.gain.linearRampToValueAtTime(peakGain, when + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, when + duration);
  osc.connect(gain).connect(ctx.destination);
  osc.start(when);
  osc.stop(when + duration + 0.05);
  activeOscillators.push(osc);
  osc.addEventListener('ended', () => {
    activeOscillators = activeOscillators.filter(o => o !== osc);
  });
}

function getBpm() {
  return Math.min(220, Math.max(40, parseInt(document.getElementById('bpmInput').value, 10) || 96));
}

// ---------- Drum synthesis ----------
// A synthesized kick (sine sweep) plus filtered white noise for
// snare/hi-hat/crash — no samples, no dependencies.

let noiseBuffer = null;
function getNoiseBuffer(ctx) {
  if (noiseBuffer) return noiseBuffer;
  const size = ctx.sampleRate; // 1 second, sliced as needed per hit
  noiseBuffer = ctx.createBuffer(1, size, ctx.sampleRate);
  const data = noiseBuffer.getChannelData(0);
  for (let i = 0; i < size; i++) data[i] = Math.random() * 2 - 1;
  return noiseBuffer;
}

function playKick(ctx, when) {
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = 'sine';
  osc.frequency.setValueAtTime(150, when);
  osc.frequency.exponentialRampToValueAtTime(42, when + 0.12);
  gain.gain.setValueAtTime(0.9, when);
  gain.gain.exponentialRampToValueAtTime(0.001, when + 0.2);
  osc.connect(gain).connect(ctx.destination);
  osc.start(when);
  osc.stop(when + 0.22);
  activeOscillators.push(osc);
  osc.addEventListener('ended', () => { activeOscillators = activeOscillators.filter(o => o !== osc); });
}

function playNoiseHit(ctx, when, duration, highpassFreq, peakGain) {
  const src = ctx.createBufferSource();
  src.buffer = getNoiseBuffer(ctx);
  const filter = ctx.createBiquadFilter();
  filter.type = 'highpass';
  filter.frequency.value = highpassFreq;
  const gain = ctx.createGain();
  gain.gain.setValueAtTime(peakGain, when);
  gain.gain.exponentialRampToValueAtTime(0.001, when + duration);
  src.connect(filter).connect(gain).connect(ctx.destination);
  src.start(when);
  src.stop(when + duration + 0.02);
  activeOscillators.push(src);
  src.addEventListener('ended', () => { activeOscillators = activeOscillators.filter(o => o !== src); });
}

function playDrumHit(type, when) {
  const ctx = getAudioContext();
  if (type === 'kick') playKick(ctx, when);
  else if (type === 'snare') playNoiseHit(ctx, when, 0.15, 1000, 0.5);
  else if (type === 'hihat') playNoiseHit(ctx, when, 0.05, 7000, 0.25);
  else if (type === 'crash') playNoiseHit(ctx, when, 0.6, 3000, 0.35);
}

// Open voicing: root in the bass, fifth in the middle, third (or sus tone)
// on top. The third is what decides major vs minor — keeping it as the
// highest, most exposed note (instead of sandwiched next to the root, where
// its pitch gets masked by the root's own low harmonics) makes that call
// obvious to the ear instead of ambiguous. A 4th interval (7th/9th on
// extended chords) is added on top of that, an octave up, as extra color.
function chordVoicing(chord) {
  const iv = CHORD_INTERVALS[chord.quality];
  const rootMidi = 48 + chord.root;
  const notes = [
    { midi: rootMidi, gain: 0.16 },          // root
    { midi: rootMidi + iv[2], gain: 0.12 },  // fifth
    { midi: rootMidi + iv[1] + 12, gain: 0.19 }, // third/sus tone, an octave up
  ];
  if (iv.length > 3) {
    notes.push({ midi: rootMidi + iv[3] + 12, gain: 0.13 }); // 7th/9th, color on top
  }
  return notes;
}

function playChordNow(chord, duration = 1.1) {
  const ctx = getAudioContext();
  const now = ctx.currentTime;
  chordVoicing(chord).forEach(v => playNoteAt(ctx, midiToFreq(v.midi), now, duration, v.gain));
}

function playNotesSequence(midiNotes, noteDuration = 0.32) {
  const ctx = getAudioContext();
  const now = ctx.currentTime;
  midiNotes.forEach((midi, i) => playNoteAt(ctx, midiToFreq(midi), now + i * noteDuration, noteDuration * 0.95));
}

// Several buttons ("Play progression", "Play melody", "Play melody + chords")
// share one audio timeline. state.activePlayer names whichever is running so
// each button can show its own Stop label, and starting any one of them
// cleanly cancels whatever was playing before.
function stopPlayback() {
  playbackTimeouts.forEach(id => clearTimeout(id));
  playbackTimeouts = [];
  activeOscillators.forEach(o => { try { o.stop(); } catch (e) { /* already stopped */ } });
  activeOscillators = [];
  state.activePlayer = null;
  updateAllPlayButtonsUI();
  clearPlayingHighlight();
}

function clearPlayingHighlight() {
  document.querySelectorAll('.chord-card.playing').forEach(el => el.classList.remove('playing'));
}

function highlightPlayingCard(idx) {
  clearPlayingHighlight();
  const cards = document.querySelectorAll('.chord-card');
  if (cards[idx]) cards[idx].classList.add('playing');
}

function setPlayBtnState(btn, isActive, idleLabelKey) {
  if (!btn) return;
  btn.textContent = isActive ? t('stop') : t(idleLabelKey);
  btn.classList.toggle('playing', isActive);
}

function updateAllPlayButtonsUI() {
  setPlayBtnState(document.getElementById('playBtn'), state.activePlayer === 'progression', 'play');
  setPlayBtnState(document.getElementById('melodyPlayBtn'), state.activePlayer === 'melody', 'playMelody');
  setPlayBtnState(document.getElementById('bassPlayBtn'), state.activePlayer === 'bass', 'playBass');
  setPlayBtnState(document.getElementById('drumsPlayBtn'), state.activePlayer === 'drums', 'playDrums');
  setPlayBtnState(document.getElementById('tabPlayBtn'), state.activePlayer === 'tab', 'playTab');
  setPlayBtnState(document.getElementById('playAllBtn'), state.activePlayer === 'all', 'playAll');
}

function scheduleChordsPlayback(bpm) {
  const secondsPerChord = (60 / bpm) * 4; // one bar per chord
  state.progression.forEach((chord, i) => {
    const id = setTimeout(() => {
      highlightPlayingCard(i);
      playChordNow(chord, secondsPerChord * 0.92);
    }, i * secondsPerChord * 1000);
    playbackTimeouts.push(id);
  });
  return state.progression.length * secondsPerChord;
}

function scheduleNotesPlayback(notes, bpm, waveType, peakGain) {
  const secPerBeat = 60 / bpm;
  let maxEnd = 0;
  notes.forEach(n => {
    const endBeat = n.startBeat + n.duration;
    if (endBeat > maxEnd) maxEnd = endBeat;
    if (n.midi == null) return; // rest
    const id = setTimeout(() => {
      playNoteAt(getAudioContext(), midiToFreq(n.midi), getAudioContext().currentTime, n.duration * secPerBeat * 0.88, peakGain, waveType);
    }, n.startBeat * secPerBeat * 1000);
    playbackTimeouts.push(id);
  });
  return maxEnd * secPerBeat;
}

function scheduleMelodyPlayback(bpm) {
  return scheduleNotesPlayback(state.melody, bpm, 'square', 0.14);
}

function scheduleBassPlayback(bpm) {
  return scheduleNotesPlayback(state.bass, bpm, 'sine', 0.22);
}

function scheduleTabPlayback(bpm) {
  return scheduleNotesPlayback(state.tab, bpm, 'sawtooth', 0.13);
}

function scheduleDrumsPlayback(bpm) {
  const secPerBeat = 60 / bpm;
  let maxEnd = 0;
  state.drums.forEach(hit => {
    if (hit.startBeat > maxEnd) maxEnd = hit.startBeat;
    const id = setTimeout(() => {
      playDrumHit(hit.type, getAudioContext().currentTime);
    }, hit.startBeat * secPerBeat * 1000);
    playbackTimeouts.push(id);
  });
  return (maxEnd + 1) * secPerBeat; // pad past the last hit, which has no explicit duration
}

function togglePlayer(kind) {
  if (state.activePlayer === kind) {
    stopPlayback();
    return;
  }
  if (!state.progression || !state.progression.length) return;
  if (kind === 'melody' && !state.melody) return;
  if (kind === 'bass' && !state.bass) return;
  if (kind === 'drums' && !state.drums) return;
  if (kind === 'tab' && !state.tab) return;
  if (kind === 'all' && !state.melody && !state.bass && !state.drums && !state.tab) return;
  stopPlayback();
  getAudioContext();
  state.activePlayer = kind;
  updateAllPlayButtonsUI();
  const bpm = getBpm();

  let totalSeconds = 0;
  if (kind === 'progression') {
    totalSeconds = scheduleChordsPlayback(bpm);
  } else if (kind === 'melody') {
    totalSeconds = scheduleMelodyPlayback(bpm);
  } else if (kind === 'bass') {
    totalSeconds = scheduleBassPlayback(bpm);
  } else if (kind === 'drums') {
    totalSeconds = scheduleDrumsPlayback(bpm);
  } else if (kind === 'tab') {
    totalSeconds = scheduleTabPlayback(bpm);
  } else if (kind === 'all') {
    const ends = [scheduleChordsPlayback(bpm)];
    if (state.melody) ends.push(scheduleMelodyPlayback(bpm));
    if (state.bass) ends.push(scheduleBassPlayback(bpm));
    if (state.drums) ends.push(scheduleDrumsPlayback(bpm));
    if (state.tab) ends.push(scheduleTabPlayback(bpm));
    totalSeconds = Math.max(...ends);
  }

  const endId = setTimeout(() => {
    state.activePlayer = null;
    updateAllPlayButtonsUI();
    clearPlayingHighlight();
  }, totalSeconds * 1000);
  playbackTimeouts.push(endId);
}

function playPianoPanel() {
  if (state.showScale || state.selectedChordIndex === null) {
    const base = 60 + state.root;
    const midiSeq = [...SCALE_INTERVALS[state.mode], 12].map(off => base + off);
    playNotesSequence(midiSeq);
  } else if (state.progression) {
    const chord = state.progression[state.selectedChordIndex];
    playChordNow(chord, 1.4);
  }
}

// ---------- Melody generator ----------
// A small rule-based generator: chord tones land on the strong downbeat of
// each bar, other beats mix in chord tones and scale (passing) tones, and
// every pitch is placed in whichever octave keeps it close to the previous
// note — so the line has a singable, stepwise shape instead of jumping
// around randomly. It always resolves to the key's tonic on the final note.

const MELODY_MIN = 57, MELODY_MAX = 76; // roughly A3–E5, a comfortable lead register
const RHYTHM_PATTERNS = [
  [1, 1, 1, 1],
  [2, 1, 1],
  [1, 1, 2],
  [2, 2],
  [1, 0.5, 0.5, 1, 1],
  [0.5, 0.5, 1, 1, 1],
  [4],
];

// pick the octave of targetPc that lands closest to prevMidi, clamped to [min,max]
function nearestOctaveNote(targetPc, prevMidi, min, max) {
  let best = targetPc, bestDist = Infinity;
  for (let oct = -1; oct <= 10; oct++) {
    const midi = ((targetPc % 12) + 12) % 12 + oct * 12;
    const dist = Math.abs(midi - prevMidi);
    if (dist < bestDist) { bestDist = dist; best = midi; }
  }
  while (best < min) best += 12;
  while (best > max) best -= 12;
  return best;
}

function generateMelody(progression, keyRoot, mode) {
  const scalePcs = SCALE_INTERVALS[mode].map(iv => (keyRoot + iv) % 12);
  const notes = [];
  let beatCursor = 0;
  let prevMidi = nearestOctaveNote(keyRoot, 65, MELODY_MIN, MELODY_MAX);

  progression.forEach((chord, barIdx) => {
    const chordPcs = CHORD_INTERVALS[chord.quality].map(iv => (chord.root + iv) % 12);
    const pattern = RHYTHM_PATTERNS[Math.floor(Math.random() * RHYTHM_PATTERNS.length)];
    const isLastBar = barIdx === progression.length - 1;

    pattern.forEach((dur, i) => {
      const isDownbeat = i === 0;
      const isFinalNote = isLastBar && i === pattern.length - 1;

      if (!isDownbeat && !isFinalNote && Math.random() < 0.1) {
        notes.push({ startBeat: beatCursor, duration: dur, midi: null }); // rest
        beatCursor += dur;
        return;
      }

      let midi;
      if (isFinalNote) {
        midi = nearestOctaveNote(keyRoot, prevMidi, MELODY_MIN, MELODY_MAX); // resolve to the tonic
      } else if (isDownbeat) {
        const r = Math.random();
        const targetPc = r < 0.45 ? chordPcs[0] : r < 0.8 ? chordPcs[1] : chordPcs[2];
        midi = nearestOctaveNote(targetPc, prevMidi, MELODY_MIN, MELODY_MAX);
      } else {
        const pool = Math.random() < 0.55 ? chordPcs : scalePcs;
        const candidates = pool
          .map(pc => nearestOctaveNote(pc, prevMidi, MELODY_MIN, MELODY_MAX))
          .sort((a, b) => Math.abs(a - prevMidi) - Math.abs(b - prevMidi));
        midi = candidates[Math.floor(Math.random() * Math.min(2, candidates.length))];
      }

      notes.push({ startBeat: beatCursor, duration: dur, midi });
      prevMidi = midi;
      beatCursor += dur;
    });
  });

  return notes;
}

// ---------- Bass line generator ----------
// Bass mostly anchors on the chord root (and occasionally the fifth), in a
// register clearly below the chords and melody. A handful of preset rhythm
// patterns (root whole-note holds, root-fifth alternation, walking) are
// picked per bar, and the last beat can turn into a chromatic "approach"
// note a half-step below the next bar's root — the classic way a bass line
// leads the ear into the next chord change.

const BASS_MIN = 28, BASS_MAX = 46; // E1–Bb2, a plain bass-guitar register

const BASS_PATTERNS = [
  [{ dur: 4, tone: 'root' }],
  [{ dur: 1, tone: 'root' }, { dur: 1, tone: 'root' }, { dur: 1, tone: 'root' }, { dur: 1, tone: 'root' }],
  [{ dur: 1, tone: 'root' }, { dur: 1, tone: 'root' }, { dur: 1, tone: 'fifth' }, { dur: 1, tone: 'root' }],
  [{ dur: 2, tone: 'root' }, { dur: 2, tone: 'fifth' }],
  [{ dur: 1, tone: 'root' }, { dur: 1, tone: 'fifth' }, { dur: 1, tone: 'root' }, { dur: 1, tone: 'fifth' }],
  [{ dur: 2, tone: 'root' }, { dur: 1, tone: 'root' }, { dur: 1, tone: 'approach' }],
  [{ dur: 1, tone: 'root' }, { dur: 1, tone: 'root' }, { dur: 1, tone: 'root' }, { dur: 1, tone: 'approach' }],
];

function generateBassLine(progression, keyRoot, mode) {
  const notes = [];
  let beatCursor = 0;
  let prevMidi = nearestOctaveNote(keyRoot, 36, BASS_MIN, BASS_MAX);

  progression.forEach((chord, barIdx) => {
    const nextChord = progression[barIdx + 1];
    const fifthIv = CHORD_INTERVALS[chord.quality][2]; // index 2 is always the 5th, triad or extended
    const fifthPc = (chord.root + fifthIv) % 12;
    const pattern = BASS_PATTERNS[Math.floor(Math.random() * BASS_PATTERNS.length)];

    pattern.forEach(step => {
      let midi;
      if (step.tone === 'fifth') {
        midi = nearestOctaveNote(fifthPc, prevMidi, BASS_MIN, BASS_MAX);
      } else if (step.tone === 'approach' && nextChord) {
        const approachPc = ((nextChord.root - 1) % 12 + 12) % 12; // half-step below the next root
        midi = nearestOctaveNote(approachPc, prevMidi, BASS_MIN, BASS_MAX);
      } else {
        midi = nearestOctaveNote(chord.root, prevMidi, BASS_MIN, BASS_MAX);
      }
      notes.push({ startBeat: beatCursor, duration: step.dur, midi });
      prevMidi = midi;
      beatCursor += step.dur;
    });
  });

  return notes;
}

function renderMelodyBassSVG(melodyNotes, bassNotes, progression, keyRoot, mode) {
  const keyMap = buildKeyNoteMap(keyRoot, mode);
  const beatW = 26;
  const rowH = 7;
  const allPitches = [...melodyNotes, ...bassNotes].filter(n => n.midi != null).map(n => n.midi);
  const pMax = allPitches.length ? Math.max(...allPitches) : MELODY_MAX;
  const pMin = allPitches.length ? Math.min(...allPitches) : MELODY_MIN;
  const rows = pMax - pMin + 2;
  const totalBeats = progression.length * 4;
  const left = 4, top = 22;
  const w = left + totalBeats * beatW + 4;
  const h = top + rows * rowH + 6;

  let svg = `<svg viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">`;

  // bar dividers + chord names on top
  progression.forEach((chord, i) => {
    const x = left + i * 4 * beatW;
    svg += `<line x1="${x}" y1="${top}" x2="${x}" y2="${h - 4}" stroke="var(--border)" stroke-width="1"/>`;
    svg += `<text x="${x + 4}" y="14" font-size="11" fill="var(--text-dim)" font-weight="600">${chord.name}</text>`;
  });
  svg += `<line x1="${left + totalBeats * beatW}" y1="${top}" x2="${left + totalBeats * beatW}" y2="${h - 4}" stroke="var(--border)" stroke-width="1"/>`;

  function drawLayer(notes, colorTone) {
    notes.forEach(n => {
      if (n.midi == null) return;
      const x = left + n.startBeat * beatW + 1;
      const width = n.duration * beatW - 2;
      const y = top + (pMax - n.midi) * rowH;
      const isRoot = ((n.midi % 12) + 12) % 12 === keyRoot;
      const fill = isRoot ? 'var(--root-color)' : colorTone;
      svg += `<rect x="${x}" y="${y}" width="${Math.max(width, 3)}" height="${rowH - 2}" rx="2" fill="${fill}"/>`;
      if (width > 14) {
        svg += `<text x="${x + width / 2}" y="${y + rowH - 3}" font-size="6.5" text-anchor="middle" fill="#10131a" font-weight="700">${keyMap.get(((n.midi % 12) + 12) % 12) || noteName(n.midi % 12)}</text>`;
      }
    });
  }
  drawLayer(bassNotes, 'var(--bass-color)');
  drawLayer(melodyNotes, 'var(--accent)');

  svg += `</svg>`;
  return svg;
}

// ---------- Drum pattern generator ----------
// One consistent groove for the whole progression (real drum parts loop,
// they don't reshuffle every bar the way the bass/melody do) chosen from a
// few standard pop/rock patterns, with a crash accent on beat one and
// another on the final bar for a natural lift at the end.

const DRUM_MIDI = { kick: 36, snare: 38, hihat: 42, crash: 49 }; // General MIDI percussion notes
const DRUM_ROWS = ['crash', 'hihat', 'snare', 'kick'];
const DRUM_PATTERNS = [
  { kick: [0, 2], snare: [1, 3], hihat: [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5] },           // basic rock
  { kick: [0, 1, 2, 3], snare: [1, 3], hihat: [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5] },     // four on the floor
  { kick: [0, 1.5, 2], snare: [1, 3], hihat: [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5] },      // syncopated kick
];

function generateDrumPattern(progression) {
  const pattern = DRUM_PATTERNS[Math.floor(Math.random() * DRUM_PATTERNS.length)];
  const hits = [];
  progression.forEach((chord, bar) => {
    const barStart = bar * 4;
    pattern.hihat.forEach(b => hits.push({ startBeat: barStart + b, type: 'hihat' }));
    pattern.kick.forEach(b => hits.push({ startBeat: barStart + b, type: 'kick' }));
    pattern.snare.forEach(b => hits.push({ startBeat: barStart + b, type: 'snare' }));
  });
  hits.push({ startBeat: 0, type: 'crash' });
  if (progression.length > 1) hits.push({ startBeat: (progression.length - 1) * 4, type: 'crash' });
  return hits;
}

function renderDrumSVG(drums, progression) {
  const beatW = 26, rowH = 15;
  const totalBeats = progression.length * 4;
  const left = 20, top = 4;
  const w = left + totalBeats * beatW + 4;
  const h = top + DRUM_ROWS.length * rowH + 4;

  let svg = `<svg viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">`;

  DRUM_ROWS.forEach((row, i) => {
    const y = top + i * rowH + rowH / 2 + 3;
    svg += `<text x="0" y="${y}" font-size="9" fill="var(--text-dim)" font-weight="600">${row[0].toUpperCase()}</text>`;
    svg += `<line x1="${left}" y1="${top + i * rowH + rowH}" x2="${left + totalBeats * beatW}" y2="${top + i * rowH + rowH}" stroke="var(--border)" stroke-width="0.5"/>`;
  });
  for (let bar = 0; bar <= progression.length; bar++) {
    const x = left + bar * 4 * beatW;
    svg += `<line x1="${x}" y1="${top}" x2="${x}" y2="${h - 4}" stroke="var(--border)" stroke-width="1"/>`;
  }

  const rowColor = { kick: 'var(--root-color)', snare: 'var(--accent)', hihat: 'var(--accent-2)', crash: 'var(--bass-color)' };
  drums.forEach(hit => {
    const rowIdx = DRUM_ROWS.indexOf(hit.type);
    if (rowIdx < 0) return;
    const x = left + hit.startBeat * beatW;
    const y = top + rowIdx * rowH + rowH / 2;
    svg += `<circle cx="${x}" cy="${y}" r="4.5" fill="${rowColor[hit.type]}"/>`;
  });

  svg += `</svg>`;
  return svg;
}

// ---------- Guitar tab generator ----------
// A single-note lead line — same note-choice logic as the melody generator
// (chord tones anchor the downbeat, scale tones fill passing beats, every
// pitch lands in whichever octave keeps it close to the last note, real
// rhythmic variety from held notes down to rests) but mapped onto actual
// string+fret positions on the neck, favoring whichever string keeps the
// hand near its previous position — so it reads like a simple solo/riff
// instead of an arpeggio mechanically bouncing across the chord shape.

const STRING_OPEN_MIDI = [40, 45, 50, 55, 59, 64]; // low E,A,D,G,B,e in standard tuning
const TAB_MIN = 45, TAB_MAX = 69; // A2–A4 — an easy-going riff/lead register with room on every string

// Choose the string+fret for a target pitch that keeps the *fret* close to
// wherever the hand already is — real lead lines move across adjacent
// strings within roughly the same few frets ("position playing"), not up
// and down a single string. A mild penalty for higher frets keeps the line
// in a comfortable, common range instead of drifting toward the top of the
// neck, and caps out at fret 12 so it never needs an uncomfortable stretch.
function pickStringFret(midi, prevFret, prevString, capo) {
  let best = null, bestScore = Infinity;
  for (let s = 0; s < 6; s++) {
    const fret = midi - STRING_OPEN_MIDI[s] - capo;
    if (fret < 0 || fret > 12) continue;
    const fretDist = prevFret == null ? Math.abs(fret - 3) : Math.abs(fret - prevFret);
    const stringJump = prevString == null ? 0 : Math.abs(s - prevString) * 0.3;
    const highFretPenalty = fret > 7 ? (fret - 7) * 0.35 : 0;
    const score = fretDist * 1.5 + stringJump + highFretPenalty;
    if (score < bestScore) { bestScore = score; best = { string: s, fret }; }
  }
  return best;
}

function generateGuitarTab(progression, keyRoot, mode, capo) {
  const scalePcs = SCALE_INTERVALS[mode].map(iv => (keyRoot + iv) % 12);
  const events = [];
  let beatCursor = 0;
  let prevMidi = nearestOctaveNote(keyRoot, 67, TAB_MIN, TAB_MAX);
  let prevFret = null;
  let prevString = null;

  progression.forEach((chord, barIdx) => {
    const chordPcs = CHORD_INTERVALS[chord.quality].map(iv => (chord.root + iv) % 12);
    const pattern = RHYTHM_PATTERNS[Math.floor(Math.random() * RHYTHM_PATTERNS.length)];
    const isLastBar = barIdx === progression.length - 1;

    pattern.forEach((dur, i) => {
      const isDownbeat = i === 0;
      const isFinalNote = isLastBar && i === pattern.length - 1;

      if (!isDownbeat && !isFinalNote && Math.random() < 0.12) {
        beatCursor += dur; // rest — breathing room instead of nonstop notes
        return;
      }

      let midi;
      if (isFinalNote) {
        midi = nearestOctaveNote(keyRoot, prevMidi, TAB_MIN, TAB_MAX); // resolve to the tonic
      } else if (isDownbeat) {
        const r = Math.random();
        const targetPc = r < 0.45 ? chordPcs[0] : r < 0.8 ? chordPcs[1] : chordPcs[2];
        midi = nearestOctaveNote(targetPc, prevMidi, TAB_MIN, TAB_MAX);
      } else {
        const pool = Math.random() < 0.55 ? chordPcs : scalePcs;
        const candidates = pool
          .map(pc => nearestOctaveNote(pc, prevMidi, TAB_MIN, TAB_MAX))
          .sort((a, b) => Math.abs(a - prevMidi) - Math.abs(b - prevMidi));
        midi = candidates[Math.floor(Math.random() * Math.min(2, candidates.length))];
      }

      const pos = pickStringFret(midi, prevFret, prevString, capo);
      if (!pos) { beatCursor += dur; return; } // out of playable range, skip this note

      events.push({ startBeat: beatCursor, duration: dur, string: pos.string, fret: pos.fret, midi });
      prevMidi = midi;
      prevFret = pos.fret;
      prevString = pos.string;
      beatCursor += dur;
    });
  });

  return events;
}

function renderTabSVG(tab, progression, keyRoot) {
  const beatW = 26, rowH = 14;
  const totalBeats = progression.length * 4;
  const left = 14, top = 22;
  const w = left + totalBeats * beatW + 4;
  const h = top + 6 * rowH + 6;
  const stringLabels = ['e', 'B', 'G', 'D', 'A', 'E']; // high to low, top to bottom (standard tab order)

  let svg = `<svg viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">`;

  progression.forEach((chord, i) => {
    const x = left + i * 4 * beatW;
    svg += `<line x1="${x}" y1="${top}" x2="${x}" y2="${h - 4}" stroke="var(--border)" stroke-width="1"/>`;
    svg += `<text x="${x + 4}" y="14" font-size="11" fill="var(--text-dim)" font-weight="600">${chord.name}</text>`;
  });
  svg += `<line x1="${left + totalBeats * beatW}" y1="${top}" x2="${left + totalBeats * beatW}" y2="${h - 4}" stroke="var(--border)" stroke-width="1"/>`;

  stringLabels.forEach((label, i) => {
    const y = top + i * rowH + rowH / 2;
    svg += `<text x="0" y="${y + 3}" font-size="9" fill="var(--text-dim)" font-weight="600">${label}</text>`;
    svg += `<line x1="${left}" y1="${y}" x2="${left + totalBeats * beatW}" y2="${y}" stroke="var(--border)" stroke-width="0.75"/>`;
  });

  tab.forEach(ev => {
    const rowIdx = 5 - ev.string; // string5=high e drawn on top
    const x = left + ev.startBeat * beatW;
    const y = top + rowIdx * rowH + rowH / 2;
    const isRoot = ((ev.midi % 12) + 12) % 12 === keyRoot;
    const fill = isRoot ? 'var(--root-color)' : 'var(--accent)';
    svg += `<rect x="${x - 8}" y="${y - 7}" width="16" height="14" rx="3" fill="${fill}"/>`;
    svg += `<text x="${x}" y="${y + 3.5}" font-size="9" text-anchor="middle" fill="#10131a" font-weight="700">${ev.fret}</text>`;
  });

  svg += `</svg>`;
  return svg;
}

function renderMelodyPanel() {
  const container = document.getElementById('melodyContainer');
  const drumsContainer = document.getElementById('drumsContainer');
  const tabContainer = document.getElementById('tabContainer');
  const melodyPlayBtn = document.getElementById('melodyPlayBtn');
  const bassPlayBtn = document.getElementById('bassPlayBtn');
  const drumsPlayBtn = document.getElementById('drumsPlayBtn');
  const tabPlayBtn = document.getElementById('tabPlayBtn');
  const playAllBtn = document.getElementById('playAllBtn');
  const downloadBtn = document.getElementById('downloadMidiBtn');
  const removeMelodyBtn = document.getElementById('removeMelodyBtn');
  const removeBassBtn = document.getElementById('removeBassBtn');
  const removeDrumsBtn = document.getElementById('removeDrumsBtn');
  const removeTabBtn = document.getElementById('removeTabBtn');

  const hasAny = state.melody || state.bass || state.drums || state.tab;
  melodyPlayBtn.disabled = !state.melody;
  bassPlayBtn.disabled = !state.bass;
  drumsPlayBtn.disabled = !state.drums;
  tabPlayBtn.disabled = !state.tab;
  playAllBtn.disabled = !hasAny;
  downloadBtn.disabled = !hasAny;
  removeMelodyBtn.disabled = !state.melody;
  removeBassBtn.disabled = !state.bass;
  removeDrumsBtn.disabled = !state.drums;
  removeTabBtn.disabled = !state.tab;
  removeMelodyBtn.title = t('removeMelody');
  removeBassBtn.title = t('removeBass');
  removeDrumsBtn.title = t('removeDrums');
  removeTabBtn.title = t('removeTab');

  if (!hasAny) {
    container.innerHTML = `<p class="melody-placeholder">${t('melodyPlaceholder')}</p>`;
    drumsContainer.innerHTML = '';
    tabContainer.innerHTML = '';
    return;
  }
  container.innerHTML = (state.melody || state.bass)
    ? `<div class="melody-roll">${renderMelodyBassSVG(state.melody || [], state.bass || [], state.progression, state.root, state.mode)}</div>`
    : '';
  drumsContainer.innerHTML = state.drums
    ? `<div class="melody-roll">${renderDrumSVG(state.drums, state.progression)}</div>`
    : '';
  tabContainer.innerHTML = state.tab
    ? `<div class="melody-roll">${renderTabSVG(state.tab, state.progression, state.root)}</div>`
    : '';
}

function regenerateMelody() {
  if (!state.progression || !state.progression.length) return;
  stopPlayback();
  state.melody = generateMelody(state.progression, state.root, state.mode);
  renderMelodyPanel();
}

function regenerateTab() {
  if (!state.progression || !state.progression.length) return;
  stopPlayback();
  state.tab = generateGuitarTab(state.progression, state.root, state.mode, state.capo);
  renderMelodyPanel();
}

function removeLayer(layer) {
  stopPlayback();
  state[layer] = null;
  renderMelodyPanel();
}

function regenerateBass() {
  if (!state.progression || !state.progression.length) return;
  stopPlayback();
  state.bass = generateBassLine(state.progression, state.root, state.mode);
  renderMelodyPanel();
}

function regenerateDrums() {
  if (!state.progression || !state.progression.length) return;
  stopPlayback();
  state.drums = generateDrumPattern(state.progression);
  renderMelodyPanel();
}

// ---------- MIDI file export ----------

function midiVarLen(value) {
  let buffer = value & 0x7f;
  while ((value >>>= 7) > 0) {
    buffer <<= 8;
    buffer |= 0x80 | (value & 0x7f);
  }
  const bytes = [];
  while (true) {
    bytes.push(buffer & 0xff);
    if (buffer & 0x80) buffer >>>= 8;
    else break;
  }
  return bytes;
}

// General MIDI program numbers so a DAW picks a sensible sound per channel
// without the user having to reassign instruments by hand.
const GM_PROGRAM = { chords: 0, melody: 80, bass: 33, tabAcoustic: 25, tabElectric: 27 };

function buildMidiFile(progression, melody, bass, drums, tab, tabStyle, bpm) {
  const PPQ = 480;
  const barTicks = PPQ * 4;
  const events = []; // {tick, on, note, velocity, channel}

  progression.forEach((chord, i) => {
    const startTick = i * barTicks;
    chordVoicing(chord).forEach(v => {
      events.push({ tick: startTick, on: true, note: v.midi, velocity: 78, channel: 0 });
      events.push({ tick: startTick + barTicks - 10, on: false, note: v.midi, velocity: 0, channel: 0 });
    });
  });

  (melody || []).forEach(n => {
    if (n.midi == null) return;
    const startTick = Math.round(n.startBeat * PPQ);
    const endTick = startTick + Math.round(n.duration * PPQ * 0.9);
    events.push({ tick: startTick, on: true, note: n.midi, velocity: 100, channel: 1 });
    events.push({ tick: endTick, on: false, note: n.midi, velocity: 0, channel: 1 });
  });

  (bass || []).forEach(n => {
    if (n.midi == null) return;
    const startTick = Math.round(n.startBeat * PPQ);
    const endTick = startTick + Math.round(n.duration * PPQ * 0.92);
    events.push({ tick: startTick, on: true, note: n.midi, velocity: 96, channel: 2 });
    events.push({ tick: endTick, on: false, note: n.midi, velocity: 0, channel: 2 });
  });

  (drums || []).forEach(hit => {
    const startTick = Math.round(hit.startBeat * PPQ);
    const dur = Math.round((hit.type === 'crash' ? PPQ * 1.5 : PPQ * 0.2));
    const velocity = hit.type === 'crash' ? 110 : hit.type === 'hihat' ? 70 : 100;
    events.push({ tick: startTick, on: true, note: DRUM_MIDI[hit.type], velocity, channel: 9 });
    events.push({ tick: startTick + dur, on: false, note: DRUM_MIDI[hit.type], velocity: 0, channel: 9 });
  });

  (tab || []).forEach(ev => {
    const startTick = Math.round(ev.startBeat * PPQ);
    const endTick = startTick + Math.round(ev.duration * PPQ * 0.9);
    events.push({ tick: startTick, on: true, note: ev.midi, velocity: 92, channel: 3 });
    events.push({ tick: endTick, on: false, note: ev.midi, velocity: 0, channel: 3 });
  });

  events.sort((a, b) => a.tick - b.tick || (a.on ? 1 : -1)); // note-offs before note-ons at the same tick

  const track = [];
  const usPerQuarter = Math.round(60000000 / bpm);
  track.push(...midiVarLen(0), 0xff, 0x51, 0x03, (usPerQuarter >> 16) & 0xff, (usPerQuarter >> 8) & 0xff, usPerQuarter & 0xff);
  track.push(...midiVarLen(0), 0xc0 | 0, GM_PROGRAM.chords);
  if (melody && melody.length) track.push(...midiVarLen(0), 0xc0 | 1, GM_PROGRAM.melody);
  if (bass && bass.length) track.push(...midiVarLen(0), 0xc0 | 2, GM_PROGRAM.bass);
  if (tab && tab.length) track.push(...midiVarLen(0), 0xc0 | 3, tabStyle === 'electric' ? GM_PROGRAM.tabElectric : GM_PROGRAM.tabAcoustic);

  let lastTick = 0;
  events.forEach(e => {
    track.push(...midiVarLen(Math.max(0, e.tick - lastTick)));
    lastTick = e.tick;
    track.push((e.on ? 0x90 : 0x80) | e.channel, e.note, e.velocity);
  });
  track.push(...midiVarLen(0), 0xff, 0x2f, 0x00);

  const header = [0x4d, 0x54, 0x68, 0x64, 0, 0, 0, 6, 0, 0, 0, 1, (PPQ >> 8) & 0xff, PPQ & 0xff];
  const trackHeader = [
    0x4d, 0x54, 0x72, 0x6b,
    (track.length >>> 24) & 0xff, (track.length >>> 16) & 0xff, (track.length >>> 8) & 0xff, track.length & 0xff,
  ];
  return new Uint8Array([...header, ...trackHeader, ...track]);
}

function downloadMelodyMidi() {
  if (!state.progression || (!state.melody && !state.bass && !state.drums && !state.tab)) return;
  const bytes = buildMidiFile(state.progression, state.melody, state.bass, state.drums, state.tab, state.style, getBpm());
  const blob = new Blob([bytes], { type: 'audio/midi' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  const keyName = noteName(state.root) + (state.mode === 'minor' ? 'm' : '');
  a.href = url;
  a.download = `chord-companion-${keyName}.mid`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

// ---------- App state & wiring ----------

const state = {
  lang: 'en',
  root: 0,
  mode: 'major',
  mood: 'all',
  capo: 0,
  style: 'acoustic',
  chordView: 'guitar', // 'guitar' | 'piano'
  richChords: false,   // false = triads, true = diatonic 7th chords (maj7/m7/7/m7b5)
  progression: null,       // array of chord objects
  progressionLabel: '',
  selectedChordIndex: null,
  showScale: true,
  activePlayer: null, // null | 'progression' | 'melody' | 'bass' | 'drums' | 'tab' | 'all'
  melody: null,       // array of {startBeat, duration, midi} once generated
  bass: null,         // same shape, once generated
  drums: null,        // array of {startBeat, type} once generated
  tab: null,          // array of {startBeat, duration, string, fret, midi} once generated — tied to capo/style
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

  updateCapoOptions();
  updateMoodOptions();
}

function updateCapoOptions() {
  const capoSelect = document.getElementById('capoSelect');
  const prevValue = capoSelect.value;
  capoSelect.innerHTML = '';
  for (let i = 0; i <= 7; i++) {
    const opt = document.createElement('option');
    opt.value = i;
    opt.textContent = i === 0 ? t('noCapo') : t('fretN', i);
    capoSelect.appendChild(opt);
  }
  capoSelect.value = prevValue || state.capo;
}

function updateMoodOptions() {
  const moodSelect = document.getElementById('moodSelect');
  const prevValue = moodSelect.value;
  moodSelect.innerHTML = '';
  MOOD_KEYS.forEach(key => {
    const opt = document.createElement('option');
    opt.value = key;
    opt.textContent = moodLabel(key);
    moodSelect.appendChild(opt);
  });
  moodSelect.value = prevValue || state.mood;
}

function renderProgressionList() {
  const container = document.getElementById('progressionList');
  container.innerHTML = '';
  const fullList = PROGRESSIONS[state.mode];
  const list = progressionsForMode(state.mode, state.mood);

  if (state.mood !== 'all' && list === fullList) {
    const note = document.createElement('div');
    note.className = 'mood-empty-note';
    note.textContent = t('moodEmptyNote', moodLabel(state.mood).replace(/^\S+\s/, ''));
    container.appendChild(note);
  }

  list.forEach(entry => {
    const chords = progressionToChords(state.root, state.mode, entry.pattern);
    const div = document.createElement('div');
    div.className = 'prog-item';
    const moodTags = entry.moods.map(m => `<span class="prog-mood">${moodLabel(m)}</span>`).join('');
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
  stopPlayback();
  state.progression = chords;
  state.progressionLabel = label;
  state.selectedChordIndex = null;
  state.melody = null;
  state.bass = null;
  state.drums = null;
  state.tab = null;
  renderChordCards();
  updateActiveProgItem();
  renderPiano();
  renderFretboardScale();
  renderSubstitutions();
  renderMelodyPanel();
}

function updateActiveProgItem() {
  const items = document.querySelectorAll('.prog-item');
  items.forEach(el => {
    const roman = el.querySelector('.roman').textContent;
    el.classList.toggle('active', roman === state.progressionLabel);
  });
  document.getElementById('currentProgLabel').textContent = state.progressionLabel
    ? `${noteName(state.root)} ${modeWord(state.mode)} · ${state.progressionLabel}`
    : '';
}

function renderChordCards() {
  const container = document.getElementById('chordCards');
  container.innerHTML = '';
  if (!state.progression) return;
  const keyMap = buildKeyNoteMap(state.root, state.mode);

  state.progression.forEach((chord, idx) => {
    const card = document.createElement('div');
    card.className = 'chord-card' + (state.selectedChordIndex === idx ? ' selected' : '');
    const romanLine = chord.isSubstituted ? `${chord.roman} <span class="csub-badge">${t('subBadge')}</span>` : chord.roman;

    if (state.chordView === 'piano') {
      const notes = CHORD_INTERVALS[chord.quality].map(iv => (chord.root + iv) % 12);
      const notesList = notes.map(pc => keyMap.get(pc) || noteName(pc)).join(', ');
      const pianoSvg = renderPianoSVG(new Set(notes), chord.root, keyMap, { octaves: 1, whiteW: 18, whiteH: 82, blackW: 11, blackH: 52, showAllLabels: false });
      card.innerHTML = `
        <div class="cname">${chord.name}</div>
        <div class="croman">${romanLine}</div>
        <div class="card-piano">${pianoSvg}</div>
        <div class="cshape-label">${t('notesLabel', notesList)}</div>
      `;
    } else {
      const shape = resolveGuitarShape(chord.root, chord.quality, state.capo, state.style);
      const title = shape.shapeChordName === chord.name
        ? chord.name
        : `${shape.shapeChordName} <span class="creal">(${chord.name})</span>`;
      card.innerHTML = `
        <div class="cname">${title}</div>
        <div class="croman">${romanLine}</div>
        ${renderChordSVG(shape)}
        <div class="cshape-label">${shape.voicingType}</div>
      `;
    }

    const playBtn = document.createElement('button');
    playBtn.className = 'card-play-btn';
    playBtn.textContent = '▶';
    playBtn.title = t('play');
    playBtn.addEventListener('click', e => {
      e.stopPropagation();
      stopPlayback();
      playChordNow(chord, 1.1);
      highlightPlayingCard(idx);
      setTimeout(clearPlayingHighlight, 1100);
    });
    card.appendChild(playBtn);

    card.addEventListener('click', () => {
      state.selectedChordIndex = idx;
      state.showScale = false;
      document.getElementById('showScaleBtn').classList.remove('active');
      renderChordCards();
      renderPiano();
      renderFretboardScale();
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
  let extraSet = null;
  let rootPc = state.root;

  if (state.showScale || state.selectedChordIndex === null) {
    const scale = SCALE_INTERVALS[state.mode].map(iv => (state.root + iv) % 12);
    highlightSet = new Set(scale);
    rootPc = state.root;
    info.textContent = t('pianoScaleInfo', spell(state.root), modeWord(state.mode), scale.map(spell).join(', '));
  } else if (state.progression) {
    const chord = state.progression[state.selectedChordIndex];
    const notes = CHORD_INTERVALS[chord.quality].map(iv => (chord.root + iv) % 12);
    highlightSet = new Set(notes);
    rootPc = chord.root;
    const scaleNotes = SCALE_INTERVALS[state.mode].map(iv => (state.root + iv) % 12);
    extraSet = new Set(scaleNotes.filter(pc => !highlightSet.has(pc)));
    info.textContent = t('pianoChordInfo', chord.name, notes.map(spell).join(', '), [...extraSet].map(spell).join(', '));
  }

  container.innerHTML = renderPianoSVG(highlightSet, rootPc, keyMap, { extraSet });
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

function setChordViewVisibility() {
  const isGuitar = state.chordView === 'guitar';
  document.getElementById('capoGroup').classList.toggle('hidden', !isGuitar);
  document.getElementById('voicingGroup').classList.toggle('hidden', !isGuitar);
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
    if (state.tab) removeLayer('tab'); // fret positions are capo-relative, now stale
    renderChordCards();
    renderFretboardScale();
  });
  document.getElementById('moodSelect').addEventListener('change', e => {
    state.mood = e.target.value;
    renderProgressionList();
  });
  document.querySelectorAll('#styleToggle .seg-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#styleToggle .seg-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.style = btn.dataset.style;
      renderChordCards();
    });
  });
  document.querySelectorAll('#chordViewToggle .seg-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#chordViewToggle .seg-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.chordView = btn.dataset.view;
      setChordViewVisibility();
      renderChordCards();
    });
  });
  document.querySelectorAll('#richToggle .seg-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const rich = btn.dataset.rich === 'on';
      if (rich === state.richChords) return;
      document.querySelectorAll('#richToggle .seg-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.richChords = rich;
      refreshAll();
    });
  });
  document.querySelectorAll('#langToggle .seg-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.dataset.lang === state.lang) return;
      stopPlayback();
      state.lang = btn.dataset.lang;
      applyStaticI18n();
      updateCapoOptions();
      updateMoodOptions();
      refreshAll();
    });
  });
  document.getElementById('playBtn').addEventListener('click', () => togglePlayer('progression'));
  document.getElementById('pianoPlayBtn').addEventListener('click', playPianoPanel);
  document.getElementById('genMelodyBtn').addEventListener('click', regenerateMelody);
  document.getElementById('genBassBtn').addEventListener('click', regenerateBass);
  document.getElementById('genDrumsBtn').addEventListener('click', regenerateDrums);
  document.getElementById('genTabBtn').addEventListener('click', regenerateTab);
  document.getElementById('removeMelodyBtn').addEventListener('click', () => removeLayer('melody'));
  document.getElementById('removeBassBtn').addEventListener('click', () => removeLayer('bass'));
  document.getElementById('removeDrumsBtn').addEventListener('click', () => removeLayer('drums'));
  document.getElementById('removeTabBtn').addEventListener('click', () => removeLayer('tab'));
  document.getElementById('melodyPlayBtn').addEventListener('click', () => togglePlayer('melody'));
  document.getElementById('bassPlayBtn').addEventListener('click', () => togglePlayer('bass'));
  document.getElementById('drumsPlayBtn').addEventListener('click', () => togglePlayer('drums'));
  document.getElementById('tabPlayBtn').addEventListener('click', () => togglePlayer('tab'));
  document.getElementById('playAllBtn').addEventListener('click', () => togglePlayer('all'));
  document.getElementById('downloadMidiBtn').addEventListener('click', downloadMelodyMidi);
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
    renderFretboardScale();
  });
}

applyStaticI18n();
populateSelects();
setChordViewVisibility();
wireEvents();
refreshAll();
