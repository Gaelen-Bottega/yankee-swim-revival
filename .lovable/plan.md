
## Yankee Swim League — Site Rebuild Plan

Modern, responsive, static rebuild of yankeeswimleague.org using the existing TanStack Start + Tailwind v4 template. Archive content will be recovered from Wayback where snapshots are available; gaps are shown as clearly labeled placeholders.

### Design system
- Palette: navy `#001F5B`, royal `#0055B8`, white `#FFFFFF`, red accent `#E63946`
- Typography: bold sans-serif display (Oswald/Bebas-style) for headings, Inter for body — loaded via `<link>` in `__root.tsx`
- Tokens defined in `src/styles.css` under `@theme` (semantic: background, foreground, primary=navy, secondary=royal, accent=red)
- Athletic sports-league feel: strong hero with pool/lane imagery, diagonal accent shapes, uppercase section labels, stat blocks, card-based schedule/results

### Pages (each its own route with unique head() metadata)
```
src/routes/
  index.tsx          Home — hero, league snapshot, upcoming meets teaser, teams strip, news/announcements
  about.tsx          About — league history, mission, governance/board (placeholders where unknown)
  teams.tsx          Teams — grid of member team cards (name, town, colors, coach, link)
  schedule.tsx       Schedule — season calendar, meet dates, locations, times
  results.tsx        Results — season-by-season meet results tables
  records.tsx        Records — league records by event/age group/gender (tabbed tables)
  registration.tsx   Registration — how to register, deadlines, fees, downloadable forms
  documents.tsx      Documents — bylaws, rules, forms, meet templates (downloadable PDFs)
  contact.tsx        Contact — board contacts, mailing address, general inquiry info (no form)
```
Shared header/footer live in `__root.tsx` around `<Outlet />`.

### Content sourcing
- Pull recoverable Wayback snapshots (2011–2021 range) for: league history, team list, past schedules, records, board contacts
- For each page, extract archive text and normalize into TS data modules under `src/data/` (teams.ts, schedule.ts, results.ts, records.ts, documents.ts, contact.ts)
- Where a section can't be recovered, render a styled "Historical content unavailable — placeholder" card so gaps are obvious but the page still looks complete

### Documents / PDFs
- Any downloadable forms found in the archive are re-hosted under `public/documents/` with original filenames where possible
- If a form's file is not recoverable, the Documents page lists it with a "Coming soon" state (no dead links)

### Components
- `SiteHeader` (sticky nav, mobile hamburger via existing shadcn Sheet)
- `SiteFooter`
- `Hero`, `SectionHeader`, `StatBlock`, `TeamCard`, `MeetCard`, `RecordsTable`, `DocumentList`, `PlaceholderCard`
- Reuse existing shadcn primitives (Button, Card, Table, Tabs, Accordion)

### SEO & metadata
- Distinct title/description/og:* per route
- Sitewide defaults + Organization JSON-LD in `__root.tsx`
- Replace placeholder `index.tsx` with real Home page
- Favicon + social image (generated hero) added at leaf routes only

### Responsive & accessibility
- Mobile-first layouts, grid → flex breakpoints, `min-w-0`/`shrink-0`/`truncate` on header rows
- Semantic landmarks, alt text on all imagery, focus-visible states, WCAG AA contrast verified against the palette

### Out of scope (per your answers)
- No backend, no admin editor, no contact form submission, no auth (static site only)

### Build order
1. Design tokens + fonts + header/footer shell in `__root.tsx`
2. Scrape Wayback for each page, save normalized data modules
3. Home + About
4. Teams, Schedule, Results, Records
5. Registration, Documents (with recovered PDFs), Contact
6. SEO metadata pass + responsive/a11y QA via Playwright screenshots at mobile + desktop

