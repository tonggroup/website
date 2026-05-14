/**
 * Infer a sortable "publication date" for lab publications.
 * Conference papers use approximate conference start dates.
 * arXiv-only items use the month encoded in the arXiv id (YYMM).
 * Journals use mid-year defaults when only a year is known.
 */

export type PublicationDateInput = {
  /** Collection id / file basename without .md */
  slug: string;
  publication?: string | null;
  urlPdf?: string | null;
  /** Parsed frontmatter date (Jan 1 is treated as a placeholder). */
  existingDate?: Date | null;
};

function ymdUTC(year: number, month1to12: number, day: number): Date {
  return new Date(Date.UTC(year, month1to12 - 1, day));
}

function slugYear(slug: string): number | undefined {
  const m = slug.match(/(\d{4})/);
  return m ? parseInt(m[1], 10) : undefined;
}

/** Text before secondary venues (“Also …”) so workshop years do not override the main paper. */
function primaryPublicationText(publication: string): string {
  const m = publication.match(/\b(also presented|also at)\b/i);
  return m?.index === undefined ? publication.trim() : publication.slice(0, m.index).trim();
}

/** arXiv new-style id YYMM.NNNNN from abs or pdf URL */
function parseArxivIdDate(text: string): Date | null {
  const m = text.match(/arxiv\.org\/(?:abs|pdf)\/(\d{2})(\d{2})\.\d+(?:v\d+)?/i);
  if (!m) return null;
  const yy = parseInt(m[1], 10);
  const mm = parseInt(m[2], 10);
  if (mm < 1 || mm > 12) return null;
  const year = 2000 + yy;
  return ymdUTC(year, mm, 1);
}

function isJan1Placeholder(d: Date | null | undefined): boolean {
  if (!d || Number.isNaN(d.getTime())) return true;
  return d.getUTCMonth() === 0 && d.getUTCDate() === 1;
}

/**
 * Returns UTC date for sorting / display (use toLocaleDateString as needed).
 */
export function inferPublicationSortDate(input: PublicationDateInput): Date {
  const slug = String(input.slug ?? "");
  const pubRaw = String(input.publication ?? "").trim();
  const pub = pubRaw.replace(/\*/g, "");
  const primary = primaryPublicationText(pub);
  const pdf = String(input.urlPdf ?? "");
  const blob = `${pub} ${pdf}`;
  const primaryBlob = `${primary} ${pdf}`;
  const sy = slugYear(slug);
  const existing = input.existingDate ?? undefined;

  const neuripsY = primaryBlob.match(/NeurIPS\s*(\d{4})/i);
  if (neuripsY) return ymdUTC(parseInt(neuripsY[1], 10), 12, 10);

  const iclrY = primaryBlob.match(/ICLR\s*(\d{4})/i);
  if (iclrY) return ymdUTC(parseInt(iclrY[1], 10), 5, 7);

  const tmlrY =
    primaryBlob.match(/TMLR[^\d\n]{0,24}(\d{4})/i) ||
    primaryBlob.match(
      /Transactions on Machine Learning Research[^\d\n]{0,40}(\d{4})/i
    );
  if (tmlrY) {
    if (existing && !isJan1Placeholder(existing)) return existing;
    return ymdUTC(parseInt(tmlrY[1], 10), 8, 1);
  }

  const jspsY = primaryBlob.match(
    /Journal of Signal Processing Systems[^0-9]{0,16}\(?\s*(\d{4})\s*\)?/i
  );
  if (jspsY) return ymdUTC(parseInt(jspsY[1], 10), 6, 15);

  const aistatsY = primaryBlob.match(/AISTATS\s*(\d{4})/i);
  if (aistatsY) return ymdUTC(parseInt(aistatsY[1], 10), 5, 4);

  const icmlY =
    primaryBlob.match(/ICML[^\d\n]{0,24}(\d{4})/i) ||
    primaryBlob.match(/\bICML\s+(\d{4})\b/i);
  if (icmlY) return ymdUTC(parseInt(icmlY[1], 10), 7, 21);

  if (/GenBio/i.test(primaryBlob) && sy) return ymdUTC(sy, 7, 23);

  const icmlHead = primary.split(/also presented/i)[0] ?? primary;
  if (/\bICML\b/i.test(primary) && !/workshop/i.test(icmlHead) && sy) {
    return ymdUTC(sy, 7, 21);
  }

  if (/\bNeurIPS\b/i.test(primary) && sy) return ymdUTC(sy, 12, 10);

  if (/\bICLR\b/i.test(primary) && sy) return ymdUTC(sy, 5, 7);

  if (/\bISMB\b/i.test(primary) && sy) return ymdUTC(sy, 7, 14);

  if (/\bICASSP\b/i.test(primary) && sy) return ymdUTC(sy, 5, 15);

  if (/IEEE\s+Big\s+Data/i.test(primary) && sy) return ymdUTC(sy, 12, 5);

  if (/\bDISC\b/i.test(primary) && sy) return ymdUTC(sy, 10, 15);

  if (/\bIDA\b/i.test(primary) && sy) return ymdUTC(sy, 10, 20);

  if (/IEEE\s+MLSP/i.test(primary) && sy) return ymdUTC(sy, 9, 1);

  if (/NeurIPS\s+Datasets/i.test(primary) && sy) return ymdUTC(sy, 12, 12);

  if (/\bSAMPTA\b/i.test(primary) && sy) return ymdUTC(sy, 7, 10);

  if (/\bSIMODS\b/i.test(primary) && sy) return ymdUTC(sy, 5, 15);

  if (/\bAACR\b/i.test(primary) && sy) return ymdUTC(sy, 4, 15);

  if (
    /Nature\s+Biotechnology|Nature\s+Communications|\bCell\b|JCI\s+Insight|\bJMLR\b|IEEE\s+Transactions\s+on\s+Signal/i.test(
      primary
    ) &&
    sy
  ) {
    return ymdUTC(sy, 6, 15);
  }

  if (/bioRxiv|BioRxiv/i.test(primary) && sy) return ymdUTC(sy, 4, 1);

  const arxivDate = parseArxivIdDate(blob);
  if (arxivDate) {
    if (
      existing &&
      !isJan1Placeholder(existing) &&
      existing.getUTCFullYear() === arxivDate.getUTCFullYear() &&
      existing.getUTCMonth() === arxivDate.getUTCMonth()
    ) {
      return new Date(Math.max(existing.getTime(), arxivDate.getTime()));
    }
    return arxivDate;
  }

  if (/\barXiv\b/i.test(primary) && sy) return ymdUTC(sy, 6, 1);

  if (existing && !isJan1Placeholder(existing)) return existing;

  if (sy) return ymdUTC(sy, 6, 15);

  return existing ?? ymdUTC(1970, 1, 1);
}
