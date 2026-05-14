/**
 * Venue line from publication frontmatter (same rules as publication detail pages).
 */
export function publicationVenueLabel(
  publication?: string | null,
  urlPdf?: string | null
): string {
  const raw = String(publication ?? "").trim();
  if (raw) return raw;
  if (urlPdf && /arxiv\.org/i.test(String(urlPdf))) return "arXiv preprint";
  return "";
}

/** Escape HTML, then turn *segment* into <em> (common in publication frontmatter). */
export function publicationVenueToHtml(label: string): string {
  if (!label) return "";
  return label
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\*([^*]+)\*/g, "<em>$1</em>");
}
