// gta6-meme-x-01 entry for @zoelicious4843 (Node 22, standard library only).
// Entry 3/3: the user's own Steam purchase receipt image (meme-aa-3of3.jpg).
// The entry is the X post itself: this program only hands the house the
// post's address by copying POST.json from the repo root to /output/POST.json.
// The house reads the post from X (first picture + text) and the judge
// compares posts pairwise. Nothing written here is judged.
//
// POST.json currently holds a placeholder address, so the gate refuses it
// as it stands. The submitter replaces it with the real post URL before
// submitting.
//
// Local run (mirrors the grader):
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(BOT_DIR, 'POST.json');
const target = join(OUTPUT_DIR, 'POST.json');

if (!existsSync(source)) {
  console.error(`POST.json not found in ${BOT_DIR}`);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(source, target);
  console.log(`copied POST.json to ${target}`);
} catch (err) {
  console.error(`could not copy POST.json from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
