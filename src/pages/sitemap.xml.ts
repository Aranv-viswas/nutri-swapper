import { SWAP_PAIRS } from "../data/foods.ts";
import { LOCALES, localizePath } from "../i18n/ui.ts";

export const prerender = true;

const SITE = "https://nutriswapper.com";

// Pages that exist in every locale (en at root, es/hi prefixed).
const localizedPaths = [
  "/",
  ...SWAP_PAIRS.map(([a, b]) => `/swap/${a}-to-${b}`),
];

// English-only utility pages.
const staticPaths = ["/about", "/contact", "/privacy", "/terms"];

const xmlEscape = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** hreflang <xhtml:link> set for a localized canonical path. */
function alternates(path: string): string {
  const links = LOCALES.map(
    (l) =>
      `    <xhtml:link rel="alternate" hreflang="${l}" href="${xmlEscape(
        SITE + localizePath(path, l),
      )}"/>`,
  );
  links.push(
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${xmlEscape(
      SITE + path,
    )}"/>`,
  );
  return links.join("\n");
}

function urlEntry(loc: string, alt?: string): string {
  return `  <url>\n    <loc>${xmlEscape(loc)}</loc>${
    alt ? `\n${alt}` : ""
  }\n  </url>`;
}

export function GET() {
  const entries: string[] = [];

  for (const path of localizedPaths) {
    const alt = alternates(path);
    for (const lang of LOCALES) {
      entries.push(urlEntry(SITE + localizePath(path, lang), alt));
    }
  }
  for (const path of staticPaths) {
    entries.push(urlEntry(SITE + path));
  }

  const xml =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n` +
    entries.join("\n") +
    `\n</urlset>\n`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
