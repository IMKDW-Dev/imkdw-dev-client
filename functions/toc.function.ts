interface TocItem {
  id: string;
  text: string;
  level: number;
}

function getHeadings(html: string) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');

  return doc.querySelectorAll('h2, h3');
}

export default function getTocItems(html: string) {
  const headings = getHeadings(html);

  return Array.from(headings).map((_heading, index) => {
    const heading = _heading;
    const id = `heading-${index + 1}`;
    heading.id = id;
    return {
      id,
      text: heading.textContent ?? '',
      level: +heading.tagName.charAt(1),
    };
  });
}
