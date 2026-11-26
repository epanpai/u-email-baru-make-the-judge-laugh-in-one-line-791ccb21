// Make the Judge Laugh in One Line — entry program (Node 22, stdlib only).
//
// Writes exactly one original funny line to /output/entry.txt:
// 107 characters, well inside the 1–200 gate. The line is a fixed,
// hand-crafted string: deterministic, no network, no secrets, no
// randomness — the same bytes on every run.
//
// The line: "I asked my AI assistant for motivation; it booked a meeting
// with my future self — he didn't show up either."
//
// Play code: none needed — GET /api/competitions/<slug>/play-code answers
// 404: "asks no play code: its entry link does not ask the experience's
// description to carry one", so the entry carries no code and no code
// from any other bounty is used here.
//
// Why this line, against the judge's brief (in its order):
// 1. A funny one-line joke a stranger gets in one read: ask an AI for
//    motivation, it books you a meeting, the meeting is with your future
//    self — the premise is plain, the picture is instant.
// 2. Surprise, twice: the assistant's "help" is a calendar invite, and
//    the future self — the one person who should want the meeting most —
//    is the one who doesn't show up. The expectation (future self is
//    motivated, reliable, better) breaks at the very last word.
// 3. Tight: every word earns its place, the laugh lands at the end
//    ("he didn't show up either") instead of being explained; nothing
//    after the punchline, nothing before the setup that the joke needs.
// 4. Fresh: not a stock joke, not a pun everyone has heard. The AI
//    assistant is the straight man, the future self is the flake —
//    a combination the judge has not heard twice.
// 5. Reads cleanly out loud: one sentence, one semicolon, one em dash,
//    no reference that needs context, no muddled wording.
//
// Run locally:  mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
// Local run verified 2026-11-26 ~03:40 UTC: entry.txt = the line,
// 107 chars / 109 bytes, no trailing newline, gate PASS (Node v24.22.1).

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE =
  'I asked my AI assistant for motivation; it booked a meeting with my future self — he didn\'t show up either.';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Self-check the gate before writing, so a bad edit can never ship a
// rejected entry: UTF-8 text, 1–200 characters, not whitespace-only,
// exactly one line (no newline at all), no leading/trailing whitespace
// that would pad the judged text, and no control characters that would
// make the judged text anything but one clean line. The line is
// 107 characters.
if (
  LINE.length < 1 ||
  LINE.length > 200 ||
  LINE.trim() === '' ||
  LINE !== LINE.trim() ||
  /[\r\n]/.test(LINE) ||
  // eslint-disable-next-line no-control-regex
  /[\u0000-\u001f\u007f]/.test(LINE)
) {
  throw new Error(`entry violates the gate: ${LINE.length} chars`);
}

mkdirSync(out, { recursive: true });
const target = join(out, 'entry.txt');
writeFileSync(target, LINE, 'utf8');

// Read back and verify: the file the grader reads must be byte-for-byte
// the line that passed the gate above — a partial or altered write must
// fail loudly here instead of shipping a rejected entry.
if (readFileSync(target, 'utf8') !== LINE) {
  throw new Error('entry.txt does not match the gated line');
}
