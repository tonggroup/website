/**
 * Fetch and parse a Google Scholar profile into JSON.
 *
 * Usage:
 *   pnpm exec tsx scripts/fetch-scholar.ts
 *   pnpm exec tsx scripts/fetch-scholar.ts --out ./scholar.json
 *   pnpm exec tsx scripts/fetch-scholar.ts --user CS80pt4AAAAJ --limit 20
 */
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

type CliOptions = {
  user: string;
  lang: string;
  pageSize: number;
  maxPages: number;
  limit?: number;
  out?: string;
};

type ScholarEntry = {
  citationId?: string;
  title: string;
  authors: string;
  venue: string;
  year?: number;
  citationUrl?: string;
  sourcePage: number;
};

type ScholarSnapshot = {
  fetchedAt: string;
  profileUrl: string;
  totalEntries: number;
  entries: ScholarEntry[];
};

const DEFAULT_USER = "CS80pt4AAAAJ";
const DEFAULT_LANG = "en";
const DEFAULT_PAGE_SIZE = 100;
const DEFAULT_MAX_PAGES = 3;

function printUsage(): void {
  console.error(`Usage: pnpm exec tsx scripts/fetch-scholar.ts [options]

Options:
  --user <id>        Google Scholar user id (default: ${DEFAULT_USER})
  --lang <code>      Scholar language (default: ${DEFAULT_LANG})
  --page-size <n>    Results per page (default: ${DEFAULT_PAGE_SIZE})
  --max-pages <n>    Max pages to fetch (default: ${DEFAULT_MAX_PAGES})
  --limit <n>        Limit parsed entries in output
  --out <path>       Write JSON to a file instead of stdout
  --help             Show this message
`);
}

function parseArgs(argv: string[]): CliOptions {
  const options: CliOptions = {
    user: DEFAULT_USER,
    lang: DEFAULT_LANG,
    pageSize: DEFAULT_PAGE_SIZE,
    maxPages: DEFAULT_MAX_PAGES,
  };

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    const next = argv[i + 1];

    switch (arg) {
      case "--":
        break;
      case "--user":
        if (!next) throw new Error("Missing value for --user");
        options.user = next;
        i += 1;
        break;
      case "--lang":
        if (!next) throw new Error("Missing value for --lang");
        options.lang = next;
        i += 1;
        break;
      case "--page-size":
        if (!next) throw new Error("Missing value for --page-size");
        options.pageSize = parsePositiveInt(next, "--page-size");
        i += 1;
        break;
      case "--max-pages":
        if (!next) throw new Error("Missing value for --max-pages");
        options.maxPages = parsePositiveInt(next, "--max-pages");
        i += 1;
        break;
      case "--limit":
        if (!next) throw new Error("Missing value for --limit");
        options.limit = parsePositiveInt(next, "--limit");
        i += 1;
        break;
      case "--out":
        if (!next) throw new Error("Missing value for --out");
        options.out = next;
        i += 1;
        break;
      case "--help":
      case "-h":
        printUsage();
        process.exit(0);
      default:
        throw new Error(`Unknown argument: ${arg}`);
    }
  }

  return options;
}

function parsePositiveInt(value: string, flag: string): number {
  const parsed = Number.parseInt(value, 10);
  if (!Number.isFinite(parsed) || parsed <= 0) {
    throw new Error(`${flag} must be a positive integer`);
  }
  return parsed;
}

function decodeHtmlEntities(input: string): string {
  const named: Record<string, string> = {
    amp: "&",
    apos: "'",
    gt: ">",
    lt: "<",
    nbsp: " ",
    quot: '"',
  };

  return input
    .replace(/&#(\d+);/g, (_, code) => {
      const value = Number.parseInt(code, 10);
      return Number.isFinite(value) ? String.fromCodePoint(value) : _;
    })
    .replace(/&#x([\da-f]+);/gi, (_, code) => {
      const value = Number.parseInt(code, 16);
      return Number.isFinite(value) ? String.fromCodePoint(value) : _;
    })
    .replace(/&([a-z]+);/gi, (match, name) => named[name.toLowerCase()] ?? match)
    .replace(/[\u202a-\u202e\u2066-\u2069]/g, "");
}

function stripTags(input: string): string {
  return decodeHtmlEntities(input.replace(/<[^>]+>/g, " "))
    .replace(/\s+/g, " ")
    .trim();
}

function buildScholarUrl(
  user: string,
  lang: string,
  cstart: number,
  pageSize: number
): URL {
  const url = new URL("https://scholar.google.com/citations");
  url.searchParams.set("user", user);
  url.searchParams.set("hl", lang);
  url.searchParams.set("view_op", "list_works");
  url.searchParams.set("sortby", "pubdate");
  url.searchParams.set("cstart", String(cstart));
  url.searchParams.set("pagesize", String(pageSize));
  return url;
}

function fetchScholarPage(url: URL, lang: string): string {
  const userAgent =
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36";

  try {
    return execFileSync(
      "curl",
      [
        "-fsSL",
        "-A",
        userAgent,
        "-H",
        `Accept-Language: ${lang},en;q=0.9`,
        "-H",
        "Cache-Control: no-cache",
        "-H",
        "Pragma: no-cache",
        url.toString(),
      ],
      {
        encoding: "utf8",
        maxBuffer: 10 * 1024 * 1024,
      }
    );
  } catch (error) {
    const stderr =
      error && typeof error === "object" && "stderr" in error ?
        String(error.stderr).trim()
      : "";
    if (stderr.includes("429")) {
      throw new Error(
        "Google Scholar rate-limited the request (HTTP 429). Wait a bit and retry."
      );
    }
    throw new Error(stderr || "curl failed while requesting Google Scholar");
  }
}

function parseScholarEntries(html: string, sourcePage: number): ScholarEntry[] {
  const rows = [...html.matchAll(/<tr class="gsc_a_tr">([\s\S]*?)<\/tr>/g)];

  return rows.flatMap(match => {
    const rowHtml = match[1];
    const titleMatch = rowHtml.match(
      /<a href="([^"]+)" class="gsc_a_at">([\s\S]*?)<\/a>/
    );
    if (!titleMatch) return [];

    const href = decodeHtmlEntities(titleMatch[1]);
    const citationUrl = new URL(href, "https://scholar.google.com").toString();
    const grayLines = [...rowHtml.matchAll(/<div class="gs_gray">([\s\S]*?)<\/div>/g)].map(
      x => stripTags(x[1])
    );
    const yearMatch = rowHtml.match(
      /<td class="gsc_a_y">[\s\S]*?<span[^>]*>(\d{4})<\/span>/
    );
    const citationIdMatch = citationUrl.match(/[?&]citation_for_view=[^:]+:([^&]+)/);

    return [
      {
        citationId: citationIdMatch?.[1],
        title: stripTags(titleMatch[2]),
        authors: grayLines[0] ?? "",
        venue: grayLines[1] ?? "",
        year: yearMatch ? Number.parseInt(yearMatch[1], 10) : undefined,
        citationUrl,
        sourcePage,
      },
    ];
  });
}

function validateScholarResponse(html: string): void {
  if (/The system can't perform the operation now/i.test(html)) {
    throw new Error(
      "Google Scholar returned a temporary block page. Wait a bit and try again."
    );
  }

  if (!html.includes("Google Scholar")) {
    throw new Error("Response did not look like a Google Scholar profile page.");
  }
}

function dedupeEntries(entries: ScholarEntry[]): ScholarEntry[] {
  const seen = new Set<string>();
  const deduped: ScholarEntry[] = [];

  for (const entry of entries) {
    const key = entry.citationId ?? `${entry.title}::${entry.year ?? ""}`;
    if (seen.has(key)) continue;
    seen.add(key);
    deduped.push(entry);
  }

  return deduped;
}

async function main(): Promise<void> {
  const options = parseArgs(process.argv.slice(2));
  const profileUrl = buildScholarUrl(options.user, options.lang, 0, options.pageSize);
  const allEntries: ScholarEntry[] = [];

  for (let page = 0; page < options.maxPages; page += 1) {
    const cstart = page * options.pageSize;
    const url = buildScholarUrl(options.user, options.lang, cstart, options.pageSize);
    const html = fetchScholarPage(url, options.lang);
    validateScholarResponse(html);

    const entries = parseScholarEntries(html, page + 1);
    allEntries.push(...entries);

    if (entries.length < options.pageSize) break;
    if (options.limit && allEntries.length >= options.limit) break;
  }

  const deduped = dedupeEntries(allEntries);
  const limited = options.limit ? deduped.slice(0, options.limit) : deduped;

  if (limited.length === 0) {
    throw new Error("No publication rows were parsed from Google Scholar.");
  }

  const snapshot: ScholarSnapshot = {
    fetchedAt: new Date().toISOString(),
    profileUrl: profileUrl.toString(),
    totalEntries: limited.length,
    entries: limited,
  };

  const payload = JSON.stringify(snapshot, null, 2) + "\n";

  if (options.out) {
    const outPath = path.resolve(options.out);
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, payload, "utf8");
    console.error(`Wrote ${limited.length} Scholar entries to ${outPath}`);
    return;
  }

  process.stdout.write(payload);
}

main().catch(error => {
  const message = error instanceof Error ? error.message : String(error);
  console.error(`fetch-scholar: ${message}`);
  process.exit(1);
});
