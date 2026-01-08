# Breadcrumbs

Breadcrumbs is a minimalist browser game about navigating knowledge.

You start on one article and are given a completely different target article.  
Your only tool is the links inside the articles themselves.

Every click leaves a breadcrumb.  
Your goal is simple: reach the target in as few moves as possible.

This is a game of curiosity, intuition, and pattern-spotting rather than speed or reflexes.

---

## What is the game?

Breadcrumbs is inspired by the classic “Wikipedia navigation” challenge people play informally in pubs, classrooms, and online forums.

The rules are intentionally strict:

- You may only click links inside article content
- No search
- No typing URLs
- No backtracking unless the game allows it
- Every move counts

Some runs feel obvious.  
Others take you through unexpected corners of history, geography, science, or culture.

That moment when everything suddenly connects is the game.

---

## How to play

1. Open the game in your browser  
   (either via GitHub Pages or by opening `index.html` locally)

2. You will be given:
   - a **Start** article
   - a **Target** article

3. Click links inside the article text to move between pages

4. Reach the target article in as few moves as possible

Your path is recorded as you play so you can review how you got there.

---

## Why Breadcrumbs?

- No accounts
- No timers
- No ads
- No tracking
- No backend

Breadcrumbs is designed to feel calm and focused.  
The content *is* the interface.

It’s as much about exploration as it is about optimisation.

---

## Technical overview

Breadcrumbs is intentionally lightweight and transparent.

- Written in **vanilla HTML, CSS, and JavaScript**
- Uses the **Wikipedia MediaWiki API** (`action=parse`)
- Runs entirely client-side
- Single-file implementation
- Hosted as a static site via GitHub Pages

There are no external dependencies and no build step.

---

## Content and attribution

All article content is provided by Wikipedia and is licensed under:

**Creative Commons Attribution-ShareAlike (CC BY-SA)**

This project is not affiliated with, endorsed by, or sponsored by Wikipedia or the Wikimedia Foundation.

---

## Project status

This is the initial public release.

The current version focuses on:
- core gameplay
- clean UI
- session-based runs
- reliability and simplicity

Future versions may explore additional game modes, daily challenges, statistics, and quality-of-life improvements.

---

## License

The game code is released under the repository’s license.  
Wikipedia content remains under its original CC BY-SA license.

---

## Final note

Breadcrumbs works best when you let yourself wander.

Sometimes the shortest path is not the most obvious one.

## Tech

- Vanilla HTML, CSS, and JavaScript
- Wikipedia MediaWiki API (`action=parse`)
- Single-file implementation

---

## Attribution

Content is provided by Wikipedia and licensed under  
Creative Commons Attribution-ShareAlike (CC BY-SA).

This project is not affiliated with Wikipedia.
