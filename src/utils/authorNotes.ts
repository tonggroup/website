/**
 * Resolve equal-contribution / equal-advising symbols for publication authors.
 *
 * The `authorNotes` field in publication frontmatter maps author names (or the
 * special `admin` alias for Alexander Tong) to a note string. Known note
 * strings are mapped to a per-author symbol:
 *
 *   - "Equal Contribution"            -> `*` (co-first, at start of list)
 *                                     -> `†` (co-last, at end of list)
 *   - "Equal advising"                -> `†`
 *   - "Authors ordered alphabetically"-> ""
 *
 * The position rule: when the contiguous group of "Equal Contribution" authors
 * includes the LAST author of the list, that group uses `†` (daggers) instead
 * of `*` (stars). This matches the common academic convention where co-first
 * authors get `*` and co-last / co-senior authors get `†`.
 *
 * Unknown note values are ignored (no symbol) so partial data never breaks
 * rendering.
 */

export const ADMIN_NAME = "Alexander Tong";

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
  // Direct name match.
  if (authorNotes[author]) return authorNotes[author];
  return undefined;
}

/**
 * Check if an author index falls within the contiguous "Equal Contribution"
 * group at the END of the author list. If the last author has an
 * "Equal Contribution" note, walk backwards to find the contiguous run and
 * check membership.
 */
function isInLastEqualGroup(
  authorIndex: number,
  authors: string[],
  authorNotes?: Record<string, string>
): boolean {
  const lastIndex = authors.length - 1;
  const lastNote = noteForAuthor(authors[lastIndex], authorNotes);
  if (lastNote !== "Equal Contribution") return false;

  let groupStart = lastIndex;
  while (
    groupStart > 0 &&
    noteForAuthor(authors[groupStart - 1], authorNotes) === "Equal Contribution"
  ) {
    groupStart--;
  }
  return authorIndex >= groupStart && authorIndex <= lastIndex;
}

/**
 * Return the symbol (e.g. "*", "†") to append to an author's name, or an empty
 * string if the author has no known equal-contribution note.
 *
 * Position-aware: "Equal Contribution" authors at the end of the list get `†`,
 * all others get `*`. "Equal advising" always gets `†`.
 */
export function getAuthorSymbol(
  author: string,
  authorIndex: number,
  authors: string[],
  authorNotes?: Record<string, string>
): string {
  const note = noteForAuthor(author, authorNotes);
  if (!note) return "";

  if (note === "Equal Contribution") {
    return isInLastEqualGroup(authorIndex, authors, authorNotes) ? "†" : "*";
  }
  if (note === "Equal advising") {
    return "†";
  }
  // "Authors ordered alphabetically" and unknown notes -> no symbol.
  return "";
}
