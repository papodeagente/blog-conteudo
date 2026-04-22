export interface Heading {
  id: string;
  text: string;
  level: number;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export function extractHeadings(html: string): Heading[] {
  const headings: Heading[] = [];
  const regex = /<h([23])(?:\s[^>]*)?>(.+?)<\/h[23]>/gi;
  let match;

  while ((match = regex.exec(html)) !== null) {
    const level = parseInt(match[1], 10);
    // Strip inner HTML tags to get plain text
    const text = match[2].replace(/<[^>]*>/g, '').trim();

    // Check if there's an existing id attribute
    const idMatch = match[0].match(/id=["']([^"']+)["']/);
    const id = idMatch ? idMatch[1] : slugify(text);

    if (text) {
      headings.push({ id, text, level });
    }
  }

  return headings;
}

/**
 * Injects id attributes into h2/h3 tags that don't already have them.
 */
export function injectHeadingIds(html: string): string {
  return html.replace(/<h([23])(\s[^>]*)?>(.+?)<\/h[23]>/gi, (fullMatch, level, attrs = '', content) => {
    if (/id=["']/.test(attrs)) return fullMatch;
    const text = content.replace(/<[^>]*>/g, '').trim();
    const id = slugify(text);
    return `<h${level}${attrs} id="${id}">${content}</h${level}>`;
  });
}
