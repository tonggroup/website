import fs from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import yaml from 'js-yaml';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Function to fetch JSON from GitHub API
async function fetchGitHubAPI(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to fetch ${url}: ${response.status}`);
    }
    return response.json();
}

// Function to fetch raw file content
async function fetchRawFile(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to fetch ${url}: ${response.status}`);
    }
    return response.text();
}

// Function to parse frontmatter
function parseFrontmatter(content) {
    const lines = content.split('\n');
    const frontmatterStart = lines.findIndex(line => line.trim() === '---');
    const frontmatterEnd = lines.findIndex((line, index) => index > frontmatterStart && line.trim() === '---');

    if (frontmatterStart === -1 || frontmatterEnd === -1) {
        throw new Error('Invalid frontmatter format');
    }

    const frontmatterContent = lines.slice(frontmatterStart + 1, frontmatterEnd).join('\n');
    return yaml.load(frontmatterContent);
}

// Function to convert to target format
function convertToTargetFormat(sourceData) {
  let dateStr = "2023-01-01";
  if (sourceData.date && sourceData.date !== "undefined") {
    if (typeof sourceData.date === "string") {
      const match = sourceData.date.match(/^(\d{4}-\d{2}-\d{2})/);
      if (match) {
        dateStr = match[1];
      }
    } else if (sourceData.date instanceof Date) {
      dateStr = sourceData.date.toISOString().split("T")[0];
    }
  }

  const target = {
    title: sourceData.title,
    date: dateStr,
    featured: sourceData.featured ?? false,
    authors: (sourceData.authors || []).map(author =>
      author === "admin" ? "Alexander Tong" : author
    ),
        tags: sourceData.tags || [],
        publication: (sourceData.publication_short || sourceData.publication || '').replace(/<br\s*\/?>/gi, ' ').replace(/\n/g, ' '),
        abstract: sourceData.abstract,
        urlPdf: (sourceData.url_pdf && sourceData.url_pdf !== 'undefined') ? sourceData.url_pdf : undefined,
        links: []
    };

    // Add links
    if (sourceData.url_pdf && sourceData.url_pdf !== 'undefined') {
        target.links.push({ name: 'Paper', url: sourceData.url_pdf });
    }
    if (sourceData.url_code) {
        target.links.push({ name: 'Code', url: sourceData.url_code });
    }

    // Handle author notes
    if (sourceData.author_notes && sourceData.author_notes.length > 0) {
        target.authorNotes = {};
        sourceData.authors.forEach((author, index) => {
            if (sourceData.author_notes[index]) {
                target.authorNotes[author] = sourceData.author_notes[index];
            }
        });
    }

    return target;
}

// Function to generate filename
function generateFilename(sourceData) {
  let firstAuthor = (sourceData.authors && sourceData.authors[0]) ? sourceData.authors[0].toLowerCase().replace(/[^a-z]/g, '') : 'unknown';
  if (firstAuthor === 'admin' || firstAuthor === 'alexandertong') {
    firstAuthor = 'tong';
  }
  let year = '2023'; // default
  if (sourceData.date) {
    if (typeof sourceData.date === 'string') {
      year = sourceData.date.split('-')[0];
    } else if (sourceData.date instanceof Date) {
      year = sourceData.date.getFullYear().toString();
    }
  }
  const titleWords = sourceData.title ? sourceData.title.toLowerCase().split(' ').slice(0, 3).join('').replace(/[^a-z]/g, '') : 'untitled';
  return `${firstAuthor}${year}${titleWords}.md`;
}

// Main conversion function
async function convertPublications() {
    const repo = 'atong01/website';
    const path = 'content/publication';

    console.log('Fetching publication directories...');

    const contents = await fetchGitHubAPI(`https://api.github.com/repos/${repo}/contents/${path}`);

    const directories = contents.filter(item => item.type === 'dir');

    console.log(`Found ${directories.length} publication directories`);

    const outputDir = join(__dirname, 'src', 'data', 'publications');

    // Ensure output directory exists
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    for (const dir of directories) {
        try {
            console.log(`Converting ${dir.name}...`);

            const indexUrl = `https://raw.githubusercontent.com/${repo}/main/${path}/${dir.name}/index.md`;
            const content = await fetchRawFile(indexUrl);

let sourceData;
      try {
        sourceData = parseFrontmatter(content);
      } catch (error) {
        console.error(`Failed to parse frontmatter for ${dir.name}:`, error.message);
        continue;
      }
            const targetData = convertToTargetFormat(sourceData);

            // Generate frontmatter
            const frontmatter = [
                '---',
                `title: ${targetData.title}`,
                'authors:',
                ...targetData.authors.map(author => `  - ${author}`),
                `date: ${targetData.date}`,
                `featured: ${targetData.featured}`,
                'tags:',
                ...targetData.tags.map(tag => `  - ${tag}`),
                `publication: "${targetData.publication.replace(/"/g, '\\"')}"`,
                ...(targetData.abstract ? [
                    'abstract: >',
                    `  ${targetData.abstract.replace(/\n/g, '\n  ')}`
                ] : []),
                ...(targetData.urlPdf ? [
                    `urlPdf: ${targetData.urlPdf}`
                ] : []),
                ...(targetData.links.length > 0 ? [
                    'links:',
                    ...targetData.links.map(link => `  - name: ${link.name}\n    url: ${link.url}`)
                ] : []),
                ...(targetData.authorNotes ? [
                    'authorNotes:',
                    ...Object.entries(targetData.authorNotes).map(([author, note]) => `  ${author}: ${note}`)
                ] : []),
                '---',
                '',
                sourceData.abstract || ''
            ].join('\n');

            const filename = generateFilename(sourceData);
            const outputPath = join(outputDir, filename);

            fs.writeFileSync(outputPath, frontmatter);

            console.log(`Converted to ${filename}`);

        } catch (error) {
            console.error(`Failed to convert ${dir.name}:`, error.message);
        }
    }

    console.log('Conversion complete!');
}

// Run the converter
convertPublications().catch(console.error);