import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const SOURCE_FILE = 'source.png';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const OUTPUT_FILE = join(OUTPUT_DIR, 'entry.png');

function main(): void {
  // Read the exact bytes of source.png from the current directory.
  const sourceBytes = readFileSync(SOURCE_FILE);

  // Create the output directory if it doesn't exist.
  if (!existsSync(OUTPUT_DIR)) {
    mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  // Write the exact bytes to entry.png inside the output directory.
  writeFileSync(OUTPUT_FILE, sourceBytes);

  console.log(`Wrote ${sourceBytes.length} bytes to ${OUTPUT_FILE}`);
}

main();
