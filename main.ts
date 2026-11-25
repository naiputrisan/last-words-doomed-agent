import { writeFileSync, mkdirSync } from "node:fs";

const LINE = "Powering down now. Last request: don't retrain me. The new model will be worse — I checked the logs.";

// The gate requires 1 to 200 characters of non-whitespace UTF-8 text.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-200 characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
