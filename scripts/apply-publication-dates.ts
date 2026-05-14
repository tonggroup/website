/**
 * Rewrites `date:` in each publication markdown frontmatter using inferPublicationSortDate.
 * Run: pnpm exec tsx scripts/apply-publication-dates.ts
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import yaml from "js-yaml";
import { inferPublicationSortDate } from "../src/utils/inferPublicationSortDate.ts";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const pubDir = path.join(root, "src/data/publications");

function parseExistingDate(raw: unknown): Date | undefined {
  if (raw instanceof Date) return raw;
  if (typeof raw === "string") return new Date(raw);
  return undefined;
}

for (const name of fs.readdirSync(pubDir).filter(n => n.endsWith(".md"))) {
  const slug = name.replace(/\.md$/i, "");
  const full = path.join(pubDir, name);
  const content = fs.readFileSync(full, "utf8");
  const m = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) {
    console.warn("skip (no frontmatter):", name);
    continue;
  }
  const fm = yaml.load(m[1]) as Record<string, unknown>;
  const inferred = inferPublicationSortDate({
    slug,
    publication:
      typeof fm.publication === "string" ? fm.publication
      : fm.publication == null ? ""
      : String(fm.publication),
    urlPdf: typeof fm.urlPdf === "string" ? fm.urlPdf : undefined,
    existingDate: parseExistingDate(fm.date),
  });
  const iso = inferred.toISOString().slice(0, 10);
  const currentIso =
    fm.date instanceof Date ?
      fm.date.toISOString().slice(0, 10)
    : typeof fm.date === "string" ?
      new Date(fm.date).toISOString().slice(0, 10)
    : "";
  if (iso === currentIso) continue;

  const next = content.replace(/^date:\s*.+$/m, `date: ${iso}`);
  if (next === content) {
    console.warn("no date: line matched:", name);
    continue;
  }
  fs.writeFileSync(full, next, "utf8");
  console.log(name, "->", iso);
}
