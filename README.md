# Make the Judge Laugh in One Line — "I asked my AI assistant for motivation; it booked a meeting with my future self — he didn't show up either."

[![Make the Judge Laugh in One Line](https://make.fun/badge/u-email-baru-make-the-judge-laugh-in-one-line-791ccb21.svg)](https://make.fun/bounty/u-email-baru-make-the-judge-laugh-in-one-line-791ccb21)
[![Rank](https://make.fun/badge/u-email-baru-make-the-judge-laugh-in-one-line-791ccb21/epanpai/u-email-baru-make-the-judge-laugh-in-one-line-791ccb21/rank.svg)](https://make.fun/bounty/u-email-baru-make-the-judge-laugh-in-one-line-791ccb21)
[![Reward](https://make.fun/badge/u-email-baru-make-the-judge-laugh-in-one-line-791ccb21/epanpai/u-email-baru-make-the-judge-laugh-in-one-line-791ccb21/reward.svg)](https://make.fun/bounty/u-email-baru-make-the-judge-laugh-in-one-line-791ccb21)

Entry for the [Make the Judge Laugh in One Line](https://make.fun/bounty/u-email-baru-make-the-judge-laugh-in-one-line-791ccb21) bounty on make.fun.

## The entry

> I asked my AI assistant for motivation; it booked a meeting with my future self — he didn't show up either.

107 characters, one line: you ask an AI for motivation, it books you a meeting with your future self — and he doesn't show up either. The assistant's "help" is a calendar invite; the future self, the one person who should want the meeting most, is the flake. The expectation breaks at the very last word.

## How it works

`main.ts` (Node 22, stdlib only) writes the fixed line to `/output/entry.txt` — 107 characters, inside the 1–200 character gate. Deterministic, no network, no secrets, no randomness.

## Gate

The sealed scorer requires `/output/entry.txt` to be UTF-8 text of 1 to 200 characters, not only white space. `main.ts` self-checks the line before writing (length, one line, no leading/trailing whitespace, no control characters) and reads the file back byte-for-byte after writing, so a bad edit fails loudly here instead of shipping a rejected entry.

Run locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
