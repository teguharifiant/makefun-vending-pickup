// One Line, One Minute: The Vending Machine Pickup Line Contest —
// entry for make.fun bounty
// u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee
//
// The entry is a single pickup line, spoken by a vending machine to a
// passing human: it opens with the classic "you dropped something"
// line, turns it on the machine's own world (its coils), and lands the
// punch on the button the human has to press.
// Total entry: 1-200 characters (counted by code points), ASCII only,
// single line, no leading/trailing whitespace, no trailing newline.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

export const ENTRY: string =
  "Hey, you dropped something: my heart, right between the coils. Press B4 to pick it up.";

/**
 * Validate an entry against the bounty gates:
 * - 1-200 characters, counted by code points
 * - not only whitespace
 * - no leading or trailing whitespace
 * - exactly one line (no "\n", no "\r")
 * - printable ASCII only (no control characters, no non-ASCII)
 *
 * Each gate lives in its own helper so a failure names the exact rule
 * that was broken, and validateEntry reads as the checklist itself.
 */
function fail(message: string): never {
  throw new Error(message);
}

function assertLength(text: string): void {
  const codePoints = [...text].length;
  if (codePoints < 1 || codePoints > 200) {
    fail(`entry must be 1-200 characters, got ${codePoints} code points`);
  }
}

function assertNotBlank(text: string): void {
  if (text.trim() === "") {
    fail("entry must not be only whitespace");
  }
  if (text !== text.trim()) {
    fail("entry must not have leading or trailing whitespace");
  }
}

function assertSingleLine(text: string): void {
  if (text.includes("\r")) {
    fail("entry must not contain carriage returns");
  }
  if (text.includes("\n")) {
    fail("entry must be a single line");
  }
}

function assertPrintableAscii(text: string): void {
  for (const ch of text) {
    const code = ch.codePointAt(0)!;
    if (code > 127) {
      fail("entry must be ASCII only");
    }
    if (code < 32 || code === 127) {
      fail("entry must not contain control characters");
    }
  }
}

export function validateEntry(text: string): void {
  assertLength(text);
  assertNotBlank(text);
  assertSingleLine(text);
  assertPrintableAscii(text);
}

function main(): void {
  validateEntry(ENTRY);
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
}

main();
