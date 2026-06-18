/**
 * Link publication author names to team member pages.
 *
 * Author strings in publication frontmatter vary (middle initials,
 * diacritics, abbreviated first names), so we match on a normalized
 * first-initial + last-name key, then disambiguate same-key collisions
 * (e.g. "Stefan Bauer" vs "Sebastian Bauer") by comparing the full first
 * name when it is available on both sides.
 */
import type { CollectionEntry } from "astro:content";

/** Remove diacritics, lowercase, drop periods/commas. */
function normalize(name: string): string {
  return name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // strip combining diacritical marks
    .toLowerCase()
    .replace(/[.,]/g, "")
    .trim();
}

/** Tokenize a normalized name into non-empty parts. */
function tokensOf(name: string): string[] {
  return normalize(name).split(/\s+/).filter(Boolean);
}

/** Build a "first-initial + last-name" key from a full name string. */
function authorKey(name: string): string | null {
  const tokens = tokensOf(name);
  if (tokens.length === 0) return null;
  const first = tokens[0][0]; // first letter of first token
  const last = tokens[tokens.length - 1];
  if (!first || !last) return null;
  return `${first}-${last}`;
}

export type AuthorLinkMap = Map<
  string,
  { slug: string; firstName: string }[]
>; // authorKey -> candidate members

/** Build a lookup map from the team collection. */
export function buildAuthorLinkMap(
  team: CollectionEntry<"team">[]
): AuthorLinkMap {
  const map: AuthorLinkMap = new Map();
  for (const member of team) {
    const key = authorKey(member.data.name);
    if (!key) continue;
    const firstName = tokensOf(member.data.name)[0] ?? "";
    const entries = map.get(key) ?? [];
    entries.push({ slug: member.id, firstName });
    map.set(key, entries);
  }
  return map;
}

/**
 * Return the team page slug for an author name, or null if not a member.
 *
 * When multiple team members share the same first-initial + last-name key,
 * disambiguate by preferring an exact full first-name match. If the author's
 * first name is abbreviated to an initial (e.g. "S. Bauer"), it matches any
 * candidate only when there is a single one — otherwise it stays unresolved
 * to avoid misattributing publications.
 */
export function resolveAuthorSlug(
  author: string,
  map: AuthorLinkMap
): string | null {
  const key = authorKey(author);
  if (!key) return null;
  const candidates = map.get(key);
  if (!candidates || candidates.length === 0) return null;

  const authorTokens = tokensOf(author);
  const authorFirst = authorTokens[0] ?? "";

  // Exact full first-name match wins.
  const exact = candidates.find(c => c.firstName === authorFirst);
  if (exact) return exact.slug;

  // Author first name is a bare initial (length 1) — only resolve when
  // unambiguous (single candidate).
  if (authorFirst.length === 1 && candidates.length === 1) {
    return candidates[0].slug;
  }

  return null;
}
