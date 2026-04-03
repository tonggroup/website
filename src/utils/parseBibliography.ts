import type { Cite as CiteType } from "@citation-js/core";
import "@citation-js/plugin-bibtex";
import "@citation-js/plugin-csl";
import { readFileSync } from "fs";

let Cite: typeof CiteType | null = null;

// Dynamic import for ESM compatibility
async function getCite() {
    if (!Cite) {
        const module = await import("@citation-js/core");
        Cite = module.Cite;
    }
    return Cite;
}

export interface ParsedCitation {
    id: string;
    title?: string;
    author?: Array<{
        family?: string;
        given?: string;
    }>;
    issued?: {
        "date-parts"?: [[number]];
    };
    DOI?: string;
    URL?: string;
    type?: string;
    [key: string]: any;
}

export interface FormattedCitations {
    apa: string;
    ieee: string;
    chicago: string;
}

export interface BibliographyData {
    entries: ParsedCitation[];
    formatted: {
        [key: string]: FormattedCitations;
    };
    totalCount: number;
}

/**
 * Parse a BibTeX file and return structured citation data with formatted citations
 * @param bibPath - Path to the .bib file
 * @returns Structured bibliography data with entries and formatted citations
 */
export async function parseBibliography(bibPath: string): Promise<BibliographyData> {
    try {
        const CiteCtor = await getCite();
        const bibContent = readFileSync(bibPath, "utf-8");

        // Create citation from BibTeX string
        const cite = new CiteCtor(bibContent);

        // Get parsed entries using the get() method
        const entries = cite.get() as ParsedCitation[];

        // Generate formatted citations for each format
        const formatted: { [key: string]: FormattedCitations } = {};

        entries.forEach((entry) => {
            const entryCite = new CiteCtor([entry]);

            formatted[entry.id] = {
                apa: entryCite.format("bibliography", {
                    format: "html",
                    template: "apa",
                    lang: "en-US",
                }) as string,
                ieee: entryCite.format("bibliography", {
                    format: "html",
                    template: "ieee",
                    lang: "en-US",
                }) as string,
                chicago: entryCite.format("bibliography", {
                    format: "html",
                    template: "chicago",
                    lang: "en-US",
                }) as string,
            };
        });

        return {
            entries,
            formatted,
            totalCount: entries.length,
        };
    } catch (error) {
        console.error(`Error parsing bibliography at ${bibPath}:`, error);
        return {
            entries: [],
            formatted: {},
            totalCount: 0,
        };
    }
}

/**
 * Get all formatted citations as a single bibliography string
 * @param bibPath - Path to the .bib file
 * @param format - Citation format: 'apa', 'ieee', or 'chicago'
 * @returns Full bibliography as HTML string
 */
export async function getFormattedBibliography(
    bibPath: string,
    format: "apa" | "ieee" | "chicago" = "apa"
): Promise<string> {
    try {
        const CiteCtor = await getCite();
        const bibContent = readFileSync(bibPath, "utf-8");
        const cite = new CiteCtor(bibContent);

        return cite.format("bibliography", {
            format: "html",
            template: format,
            lang: "en-US",
        }) as string;
    } catch (error) {
        console.error(`Error generating ${format} bibliography:`, error);
        return "";
    }
}

/**
 * Get citations for a specific year
 * @param bibPath - Path to the .bib file
 * @param year - Target year
 * @returns Array of citations from that year
 */
export async function getCitationsByYear(
    bibPath: string,
    year: number
): Promise<ParsedCitation[]> {
    const data = await parseBibliography(bibPath);
    return data.entries.filter((entry) => {
        const entryYear = entry.issued?.["date-parts"]?.[0]?.[0];
        return entryYear === year;
    });
}

/**
 * Get unique publication years from bibliography
 * @param bibPath - Path to the .bib file
 * @returns Sorted array of unique years
 */
export async function getPublicationYears(bibPath: string): Promise<number[]> {
    const data = await parseBibliography(bibPath);
    const years = new Set<number>();

    data.entries.forEach((entry) => {
        const year = entry.issued?.["date-parts"]?.[0]?.[0];
        if (year) {
            years.add(year);
        }
    });

    return Array.from(years).sort((a, b) => b - a);
}
