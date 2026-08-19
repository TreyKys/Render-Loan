# How E Be — Loan Apps Episode

Code-rendered, deterministic, synced to `public/vo.mp3` (8m19s). Clean Kanit typography,
minimal chalk dust.

- 1080×1920, 30fps, ~499s
- Compositions: **Loan** (with VO) and **LoanSilent** (picture only)

## Render

Need Node 20+.

```bash
npm install
npx remotion studio         # preview live first
npx remotion render Loan out/loan.mp4
```

On a headless server (no GPU), change `"angle"` to `"swangle"` in `remotion.config.ts`:
```bash
sed -i 's/"angle"/"swangle"/' remotion.config.ts
```

## Structure

- `src/kit.tsx` — primitives: `Txt` (Kanit, clean), `Spray` (red punch), `Draw`, `Strike`, `Rule`
- `src/art.tsx` — phone, contacts, bank, hand, chain, scale, door, bill, person
- `src/scenes.tsx` — 37 scenes + the `CUES` timeline (seconds) at the bottom
- Edit timing: change `at`/`to` in `CUES`. Edit words: edit the scene component.

---

## SFX CUE SHEET (add in CapCut)

CapCut's built-in sound library has all of these — search the term in quotes. Times are
where the hit should LAND (the punch frame), not where you start the clip.

| Time | Beat | SFX type | CapCut search |
|------|------|----------|---------------|
| 0:00 | "145 million" appears | soft rise / boom | "cinematic boom" |
| 0:33 | "BUILT TO BE CRUEL" spray | hard impact | "impact hit" / "punch" |
| 0:47 | "THE MACHINE" | mechanical clank / bass | "mechanical" / "bass drop" |
| 1:28 | "FOR ₦5,000" (the shame payoff) | sad deflate / "fahh" | "sad trombone" / "fart deflate" is too jokey — use "vine boom" or "sad violin sting" |
| 1:35 | "HIV POSITIVE" spray | dark impact | "dark impact" |
| 3:41 | "300%" giant spray | BIG boom + whoosh | "big impact whoosh" |
| 3:56 | "IT WAS THE BUSINESS" | stinger | "dramatic sting" |
| 4:17 | "GSI" reveal (the turn) | reverse whoosh into boom | "reverse whoosh" |
| 4:42 | hand → "SALARY ACCOUNT" grab | swipe / whoosh | "swipe whoosh" |
| 5:16 | "AND DROPPED IT ON YOU" | heavy drop | "heavy impact" |
| 5:30 | "JUST NOT FOR YOU" | cold sting | "cold sting" |
| 6:12 | tweet ₦1.2M → ₦9.6M | notification ping | "notification" / "text pop" |
| 7:16 | "SAME DOOR" | ominous boom | "ominous boom" |
| 7:34 | "1,500+ shut down" | positive whoosh | "positive whoosh" |
| 7:46 | "NO." spray | hard stop | "impact stop" |
| 8:20 | "HOW E BE" outro | signature sting (reuse every ep) | pick one, keep it as the channel sign-off |

The "fahh"/vine-boom TikTok hits work best on: **FOR ₦5,000** (1:28), **300%** (3:41),
and **SAME DOOR** (7:16). Don't overuse — 3-4 big ones land harder than one every scene.

---

## IMAGE / B-ROLL OVERLAY CUE SHEET

Only 5 spots. Everywhere else the typography IS the visual — don't cover it.

| Time | Scene | Suggested overlay |
|------|-------|-------------------|
| 0:52–1:09 | the meme/genre beat | a blurred TikTok loan-skit screenshot, or the "purple vest" meme (crop/blur handles) |
| 1:59–3:24 | Paylater 2016 origin | brief real photo: a hand on a phone, app-store screenshot of an early lender |
| 3:12–3:41 | VC money / $1.5BN | a real photo: trading floor, or Lagos fintech office — cold, corporate |
| 6:12–6:28 | the tweet | the ACTUAL screenshot (blur the handle + name) instead of the drawn card, if you have it |
| 8:16–8:19 | outro | your channel logo still, if you have one |

Everything else: leave the chalk/Kanit graphics clean.

---

## Verify before publishing (numbers move)

- ₦-to-$ conversions (rate shifts weekly) — ₦30k≈$20, ₦5k≈$3 at build time
- "145 million loans", "$1.5bn VC", "300% APR", "$865m disbursed" — all early-2026 estimates
- GSI current scope (CBN has amended it) and the DEON deadline specifics
- The ₦1.2M→₦9.6M tweet stays labeled "unverified" — keep the handle blurred
