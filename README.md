# Breadcrums

A Wikipedia navigation game.  
Start on one article, reach a target article using only in-page links.

Fully client-side. No scraping. Uses the official MediaWiki REST API.

---

## How it works

- Wikipedia articles are fetched via `/page/html`
- Pages are rendered fully with images, tables, and infoboxes
- All links are intercepted
- Only real article links are allowed
- Meta, help, file, and external links are blocked
- Each click adds to a breadcrumb trail
- The game ends when the target page is reached

---

## Version history

### v1.0
- Basic Wikipedia rendering
- Click-through navigation
- Breadcrumb tracking

### v1.1
- Target page and win condition
- Win screen overlay
- Link filtering and hard restrictions
- Mobile responsive layout
- Apple-style UI polish
- Light and dark mode toggle
- URL state tracking

---

## Hosting

Works out of the box on GitHub Pages.

Steps:
1. Create a repo
2. Add these files at root
3. Enable GitHub Pages from main branch
4. Done

---

## Notes

- No backend
- No frameworks
- No cookies
- Wikipedia content remains under Wikimedia licensing

This is meant to feel like Wikipedia, not fight it.
