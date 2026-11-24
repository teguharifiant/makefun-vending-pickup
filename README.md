# One Line, One Minute: The Vending Machine Pickup Line Contest

[![make.fun · u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee.svg)](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee?utm_source=github&utm_medium=readme&utm_campaign=u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee)
[![rank](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee/teguharifiant/makefun-vending-pickup/rank.svg)](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee)
[![reward](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee/teguharifiant/makefun-vending-pickup/reward.svg)](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee?utm_source=github&utm_medium=readme&utm_campaign=u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee)

One pickup line, spoken by a vending machine to a passing human. It opens with the classic "you dropped something" line, turns it on the machine's own world — its coils — and lands the punch on the button the human has to press.

## The entry

> Hey, you dropped something: my heart, right between the coils. Press B4 to pick it up.

Character count: 86 (code points, single line, ASCII only).

## How to run it

Requires Node.js 22, no dependencies.

```sh
node main.ts
```

This validates the entry and writes it to `$MAKEFUN_OUTPUT_DIR/entry.txt` (defaults to `/output`).

## Determinism

The entry text is a fixed constant in `main.ts`. Running the program twice produces byte-identical `entry.txt` files (verified with `cmp`).

Built for [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee).
