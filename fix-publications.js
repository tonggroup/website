import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicationsDir = path.join(__dirname, 'src', 'data', 'publications');

// Read all markdown files
const files = fs.readdirSync(publicationsDir).filter(f => f.endsWith('.md'));

console.log(`Processing ${files.length} files...`);

let fixedCount = 0;

files.forEach(file => {
  const filePath = path.join(publicationsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  const originalContent = content;
  
  // Extract year from filename (e.g., tong2020fixingbiasin.md -> 2020)
  const yearMatch = file.match(/\d{4}/);
  const year = yearMatch ? yearMatch[0] : '2023';
  const date = `${year}-01-01`;
  
  // Replace date: undefined with actual date
  content = content.replace(/^date: undefined$/m, `date: ${date}`);
  
  // Remove featured: undefined line
  content = content.replace(/^featured: undefined\n/m, '');
  
  // Remove tags: line if followed by nothing or null
  content = content.replace(/^tags:\s*(null)?\n/m, '');
  
  // Fix tags that appear after date without a "tags:" header
  // Pattern: date: YYYY-MM-DD\n  - something
  content = content.replace(/^(date: \d{4}-\d{2}-\d{2})\n(  - .+)$/m, '$1\ntags:\n$2');
  
  // Fix tags that appear after featured without a "tags:" header
  // Pattern: featured: true/false\n  - something
  content = content.replace(/^(featured: (?:true|false))\n(  - .+)$/m, '$1\ntags:\n$2');
  
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content);
    fixedCount++;
    console.log(`Fixed: ${file}`);
  }
});

console.log(`\nDone! Fixed ${fixedCount} files.`);
