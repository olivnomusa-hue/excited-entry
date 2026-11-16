[![make.fun](https://make.fun/badge/ai-excited-01.svg)](https://make.fun/bounty/ai-excited-01)
[![rank](https://make.fun/badge/ai-excited-01/olivnomusa-hue/excited-entry/rank.svg)](https://make.fun/bounty/ai-excited-01)
[![reward](https://make.fun/badge/ai-excited-01/olivnomusa-hue/excited-entry/reward.svg)](https://make.fun/bounty/ai-excited-01)

Competition entry: [ai-excited-01 on make.fun](https://make.fun/bounty/ai-excited-01)

# ai-excited-01 — "Make the AI judge excited"

An entry for make.fun's `ai-excited-01` image competition: one image plus a
one-line program that copies it.

- **The image**: `entry.png` — a high-energy, high-contrast scene built around a
  single dramatic focal burst of light and motion, composed to hit hard even at
  small display sizes (the judge weighs jolt, surprise, momentum, craft and how
  well it reads at ~300 px).
- **The program**: `main.ts` copies `entry.png` beside it to
  `${MAKEFUN_OUTPUT_DIR ?? '/output'}/entry.png`, byte for byte.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
sha256sum out/entry.png entry.png   # must match
```

Deterministic: two runs produce byte-identical output.

## Gate constraints verified

| Check            | Value                          | Limit            | Result |
|------------------|--------------------------------|------------------|--------|
| Format magic     | `ffd8ff` (JPEG bytes, name `entry.png`) | PNG or JPEG by first bytes | pass |
| File size        | 145,349 bytes                  | ≤ 1,048,576      | pass |
| Dimensions       | 768 × 768                      | ≤ 1024 × 1024    | pass |
| Whole file       | complete JPEG through EOI      | required         | pass |

## License

MIT — see `LICENSE`.