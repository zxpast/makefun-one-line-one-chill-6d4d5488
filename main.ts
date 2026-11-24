import { mkdirSync, writeFileSync } from "node:fs";

// One Line, One Chill (u-azazex-one-line-one-chill-6d4d5488)
// One sentence of horror: a night nurse, a nine-year routine, and the
// night the routine breaks. The dread is in what is withheld — who lay
// in an empty bed — and the last word lands the blow.
const LINE =
  "For nine years the night nurse has checked room 7's empty bed, and tonight the blanket was still warm.";

// Gate: /output/entry.txt must be UTF-8, 1-200 characters, one line.
// Written with no trailing newline so the file holds exactly the line.
const OUTPUT = "/output/entry.txt";

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT, LINE, "utf8");
