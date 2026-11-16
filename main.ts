// ai-excited-01 entry driver — Node 22, standard library only.
// Copies the entry image beside this file into the grader's output directory.
// The image is the whole entry: this program only places its exact bytes.

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';

const source = new URL('./entry.png', import.meta.url);
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(source, join(outDir, 'entry.png'));
