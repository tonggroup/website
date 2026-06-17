/**
 * Link publication author names to team member pages.
 *
 * Author strings in publication frontmatter vary (middle initials,
 * diacritics, abbreviated first names), so we match on a normalized
 * first-initial + last-name key. All team members have distinct last
 * names, so this is collision-free for the current team.
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

/** Build a "first-initial + last-name" key from a full name string. */
function authorKey(name: string): string | null {
  const tokens = normalize(name).split(/\s+/).filter(Boolean);
  if (tokens.length === 0) return null;
  const first = tokens[0][0]; // first letter of first token
  const last = tokens[tokens.length - 1];
  if (!first || !last) return null;
  return `${first}-${last}`;
}

export type AuthorLinkMap = Map<string, string>; // authorKey -> team slug

/** Build a lookup map from the team collection. */
export function buildAuthorLinkMap(
  team: CollectionEntry<"team">[]
): AuthorLinkMap {
  const map: AuthorLinkMap = new Map();
  for (const member of team) {
    const key = authorKey(member.data.name);
    if (key) map.set(key, member.id);
  }
  return map;
}

/** Return the team page slug for an author name, or null if not a member. */
export function resolveAuthorSlug(
  author: string,
  map: AuthorLinkMap
): string | null {
  const key = authorKey(author);
  if (!key) return null;
  return map.get(key) ?? null;
}
