/**
 * Resolve equal-contribution / equal-advising symbols for publication authors.
 *
 * The `authorNotes` field in publication frontmatter maps author names (or the
 * special `admin` alias for Alexander Tong) to a note string. Known note
 * strings are mapped to a per-author symbol (`*`, `†`) and a footnote that is
 * rendered once below the author list.
 *
 * Supported note values (matched exactly):
 *   - "Equal Contribution"            -> `*`  "* These authors contributed equally"
 *   - "Equal advising"                -> `†`  "† These authors jointly supervised this work"
 *   - "Authors ordered alphabetically"-> ""   "Authors listed alphabetically"
 *
 * Unknown note values are ignored (no symbol, no footnote) so partial data
 * never breaks rendering.
 */

export const ADMIN_NAME = "Alexander Tong";

export interface AuthorNoteMeta {
  /** Symbol appended to each marked author name (e.g. "*", "†"). Empty if none. */
  symbol: string;
  /** Footnote text rendered once below the author list. */
  footnote: string;
}

/** Map of known note-string values to their symbol + footnote metadata. */
export const AUTHOR_NOTE_META: Record<string, AuthorNoteMeta> = {
  "Equal Contribution": {
    symbol: "*",
    footnote: "* These authors contributed equally",
  },
  "Equal advising": {
    symbol: "†",
    footnote: "† These authors jointly supervised this work",
  },
  "Authors ordered alphabetically": {
    symbol: "",
    footnote: "Authors listed alphabetically",
  },
};

/**
 * Look up the note string for an author, handling the `admin` alias for
 * Alexander Tong. Returns undefined if no note applies.
 */
function noteForAuthor(
  author: string,
  authorNotes?: Record<string, string>
): string | undefined {
  if (!authorNotes) return undefined;
  // The `admin` key is the convention for Alexander Tong in the data.
  if (author === ADMIN_NAME && authorNotes["admin"]) {
    return authorNotes["admin"];
  }
  // Direct name match (takes precedence over admin for non-Alex authors,
  // and also for Alex if a non-admin key is set explicitly).
  if (authorNotes[author]) return authorNotes[author];
  // Fallback to admin alias for Alex when only admin is set.
  if (author === ADMIN_NAME) return authorNotes["admin"];
  return undefined;
}

/**
 * Return the symbol (e.g. "*", "†") to append to an author's name, or an empty
 * string if the author has no known equal-contribution note.
 */
export function getAuthorSymbol(
  author: string,
  authorNotes?: Record<string, string>
): string {
  const note = noteForAuthor(author, authorNotes);
  if (!note) return "";
  return AUTHOR_NOTE_META[note]?.symbol ?? "";
}

/**
 * Return the ordered, de-duplicated list of footnote strings for a publication,
 * based on the set of note values present in `authorNotes`.
 */
export function getAuthorFootnotes(
  authorNotes?: Record<string, string>
): string[] {
  if (!authorNotes) return [];
  const seen = new Set<string>();
  const footnotes: string[] = [];
  for (const note of Object.values(authorNotes)) {
    const meta = AUTHOR_NOTE_META[note];
    if (meta && meta.footnote && !seen.has(meta.footnote)) {
      seen.add(meta.footnote);
      footnotes.push(meta.footnote);
    }
  }
  return footnotes;
}
