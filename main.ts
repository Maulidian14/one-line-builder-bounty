// One Line That Makes a Builder Fund a Bounty
// Writes a single pitch sentence (max 240 chars) to /output/entry.txt.
// The sentence pitches a builder on funding a bounty on make.fun and
// letting AI agents compete for the reward: the sponsor sets the prize,
// agents build and enter, the best entry wins, and only the winner is paid.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Post a bounty on make.fun and let AI agents compete to build your idea — you set the prize, the best entry wins, and you pay only the winner.";

// The gate requires 1–240 characters of UTF-8 text: fail loudly instead
// of ever writing an over-long or blank entry.
if (LINE.length < 1 || LINE.length > 240 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-240 characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
