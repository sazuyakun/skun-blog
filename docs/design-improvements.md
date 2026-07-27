# Blog Design Direction And Improvements

This analysis follows `.opencode/skills/frontend-design/SKILL.md` and is based on the current Astro pages, layouts, components, content schema, assets, and CSS.

## Approval Brief

The recommended redesign is **Night Shift Field Manual**: a personal engineering logbook assembled after dark. It should feel closer to an annotated lab notebook or a flight recorder transcript than a developer portfolio template.

The proposal is intentionally not a terminal theme. Its identity comes from editorial composition, indexing, route-colored marks, and the tension between precise technical metadata and warm long-form writing.

Approve these four decisions before implementation:

| Decision | Recommendation | Why |
| --- | --- | --- |
| Core metaphor | Night Shift Field Manual | Personal, technical, and durable without imitating a code editor. |
| Signature device | A continuous signal rail with ticks, labels, and route color | Gives every page a recognizable spine and makes sparse content feel composed. |
| Typography | Google Sans Flex for display/UI, Newsreader for prose, system mono for metadata | Keeps the current voice while giving articles a more human, editorial reading texture. |
| Navigation | Visible numbered text labels, with icons removed or secondary | More discoverable on touch and more distinctive than a standard icon toolbar. |

If only one idea survives implementation, it should be the signal rail and index system. That is the memorable anchor that can make the site recognizable in a cropped screenshot.

## Live Baseline Audit

The current site was inspected in Chromium at desktop and a 390 x 844 touch viewport on July 27, 2026. Routes reviewed were `/`, `/blog`, `/about`, and `/blog/hello-world/`. The audit included full-page captures, accessibility-tree snapshots, computed dimensions, overflow checks, and the existing navigation transitions.

### What Already Works

- Every reviewed route renders without horizontal overflow at 390px and desktop widths.
- The header stays on one row on mobile.
- Fluid headings remain readable and the shared 720px measure gives the site strong discipline.
- Route accents are restrained and consistent.
- Semantic landmarks and heading order are broadly clear.
- The post page has more visual presence than the landing pages.

### What Makes It Feel Generic

| Observation | Current effect | Design response |
| --- | --- | --- |
| Home, blog, and about use the same eyebrow, huge heading, lede, actions, and two-column section | They read as color-swapped template routes | Give each route a different composition while retaining one grid and rail system. |
| `//`, `->`, `/* */`, and `::` appear across most surfaces | Familiar developer-theme shorthand becomes decoration | Replace repeated syntax with useful coordinates, sequence numbers, status, and dates. |
| The archive is only a title and date | The page feels unfinished with low content | Use manifest-like rows with order, description, date, and a strong full-row state. |
| Navigation labels appear only on hover/focus | Desktop has a pleasant reveal, but touch users see three unexplained icons | Use persistent `01 Home`, `02 Writing`, `03 About` labels. |
| The post masthead consumes a large card before the article begins | It resembles a product promo card and delays reading | Use a wide image plate only when useful; keep title and metadata in an editorial register. |
| Google Sans Flex is used for everything | Clean but uniform, with little difference between interface and reading | Add a serif prose voice and a mono metadata voice. |
| Ambient route glow is the only background detail | Polished, but common among dark portfolio sites | Add quiet rules, registration marks, and a single rail instead of more glow. |

### Motion Baseline

Current motion exists only in `HeaderLink.astro`: color changes over 220ms, labels expand over 260ms, and the active underline scales over 260ms. There is no route transition, row motion, or `prefers-reduced-motion` fallback. The subtle timing is worth preserving, but the hidden-label interaction should not be the main navigation model.

### Noted Technical Constraints

- `main` is capped at 720px, so the post card's declared 820px maximum can never be reached.
- Useful metadata uses `--color-subtle`; contrast should be raised before it carries sequence or date information.
- The placeholder hero image has no intrinsic dimensions in markup and an empty alt, appropriate only while it remains decorative.
- The Astro development toolbar appears in local screenshots but is not part of the site design.

## Current Design Snapshot

The site currently has a focused dark editorial style built around a code-adjacent visual language. The strongest existing choices are the route-based accent colors in `src/styles/global.css`, the large compressed hero typography, minimal content sections, and compact icon navigation.

The implementation is intentionally small: shared global tokens live in `src/styles/global.css`, structural page chrome lives in `src/layouts/Layout.astro`, post reading styles live in `src/layouts/BlogPostLayout.astro`, and the main reusable content pieces are `SectionBlock`, `BlogPostList`, `EmptyState`, `Header`, and `HeaderLink`.

The design can be improved without changing framework choices or adding a UI library. The main opportunity is not to add more interface, but to turn the existing visual vocabulary into a recognizable personal publishing system.

## Recommended Creative Direction

**Night Shift Field Manual.**

The site should feel like a carefully indexed set of software field notes produced during a late-night build: dark, precise, typographic, and personal. It can borrow from lab notebooks, equipment labels, and archive manifests without becoming a terminal imitation. Content remains the focal point; every decorative mark should communicate sequence, location, status, or reading rhythm.

The dominant visual idea should be a **signal rail and indexing system**:

- A thin route-colored rail enters near the page title, continues through major sections, and ends at the footer.
- Small perpendicular ticks identify section boundaries like measurements on an instrument trace.
- Small index labels such as `01`, `02`, paths, dates, and reading metadata create an archival structure.
- Fine horizontal rules evoke ruled paper and make sparse layouts feel intentional.
- Route accents identify context rather than acting as general decoration.
- Occasional registration marks, crop marks, and status stamps make the design tactile without adding illustrations everywhere.

This gives the site one memorable system while still allowing each route to diverge. The rail must not become a generic line beside every card; it is one continuous compositional element per page.

## Experience Principles

1. **Useful marks only.** Numbers, ticks, paths, and labels must tell readers where they are or what comes next.
2. **One loud move per view.** A giant title, image plate, or annotation panel may dominate, but never all three together.
3. **Different routes, shared instrument.** Pages use the same rail, typography, rules, and color logic but do not share identical hero anatomy.
4. **Reading outranks spectacle.** Motion ends quickly, prose stays quiet, and no animation blocks navigation or article scanning.
5. **Sparse is composed, not empty.** Low-content states use deliberate alignment, useful context, and generous rhythm rather than placeholder cards.

## Design Direction To Preserve

- Keep the dark, quiet, technical/editorial mood.
- Keep the per-route accent system: home red, blog orange, about yellow.
- Keep the restrained component set and static Astro approach.
- Keep custom CSS with global tokens plus scoped component styles.
- Keep generous whitespace and avoid converting the site into a generic card-heavy dashboard.
- Keep page heroes inline so home, blog, and about can develop distinct compositions.
- Keep source-code punctuation rare and purposeful; repeated `//`, `/*`, `*/`, `::`, and `->` marks will become gimmicky if every surface uses them.

## Route Purposes And Anchors

### Home: Personal Dispatch

Purpose: explain whose space this is, what is being explored, and where to start.

Memorable anchor: an offset field-note strip showing current themes such as `building`, `learning`, and `writing`, connected to the red route rail.

### Blog: Ordered Archive

Purpose: make the writing easy to scan while communicating that posts have an intentional reading order.

Memorable anchor: numbered editorial rows laid over a subtle ruled rhythm, with descriptions and dates treated as archive metadata.

### About: Annotated Colophon

Purpose: add identity, context, and ways to connect without becoming a resume page.

Memorable anchor: a warm yellow annotation panel containing current interests, tools, links, and a short site colophon.

### Post: Focused Reading Room

Purpose: create a calm long-form reading experience distinct from landing pages.

Memorable anchor: a restrained article masthead with an accent rail and metadata register, followed by clean unboxed prose. Keep the existing framed post header only if final hero imagery justifies the visual weight.

## Route Wireframes

These are structural wireframes, not literal boxed UI. Vertical `|` marks show the signal rail; horizontal rules show section boundaries. Final spacing should remain generous.

### Home, Desktop

```text
+------------------------------------------------------------------+
| logo                 01 HOME   02 WRITING   03 ABOUT       23:41 |
+------------------------------------------------------------------+
|                                                                  |
|  00 / FIELD LOG                                      [ONLINE]    |
|  |                                                               |
|  |  Notes from the                 CURRENT TRACE                 |
|  |  edge of code.                  building  small systems       |
|  |                                 learning  distributed ideas   |
|  |  Software, systems, and         writing   field notes         |
|  |  experiments worth keeping.                                  |
|  |                                                               |
|  +-- READ THE LATEST                                             |
|                                                                  |
|  01 / LATEST TRANSMISSIONS                                       |
|  |                                                               |
|  |  001  Hello World                         2026.07.19           |
|  |       A temporary first post...               ---------->    |
|  |---------------------------------------------------------------|
|  |  002  Next title                          2026.08.02           |
|                                                                  |
+------------------------------------------------------------------+
| END OF LOG                  RSS / COLOPHON / 2026                 |
+------------------------------------------------------------------+
```

The hero uses an asymmetric 7/5 split on wide screens. The current-trace register is not a card; it is aligned text with one tinted rule and a small status stamp. The newest post receives room for a description, while older entries become progressively quieter.

### Blog Archive, Desktop

```text
+------------------------------------------------------------------+
| logo                 01 HOME   02 WRITING   03 ABOUT             |
+------------------------------------------------------------------+
|                                                                  |
|  ARCHIVE / MANIFEST 02                            001 ENTRY       |
|  Ordered writing.                                               |
|  Read chronologically, or follow the sequence I set.            |
|                                                                  |
|  FILTER: ALL        RSS                                          |
|                                                                  |
|  NO.   TRANSMISSION                          FILED               |
|  |                                                               |
|  001   Hello World                           2026.07.19          |
|  |     A temporary first post to test the pipeline.        --->  |
|  |---------------------------------------------------------------|
|  002   A longer post title                   2026.08.02          |
|  |     Description wraps on a stable editorial measure.   --->  |
|                                                                  |
+------------------------------------------------------------------+
```

The archive should resemble a manifest, not a table component. The whole row is clickable. On hover/focus, its rail segment brightens, the arrow translates 4px, and the description rises from muted to readable contrast.

### About, Desktop

```text
+------------------------------------------------------------------+
| logo                 01 HOME   02 WRITING   03 ABOUT             |
+------------------------------------------------------------------+
|                                                                  |
|  PERSONNEL NOTE / 03                                             |
|  |                                                               |
|  |  I build things, inspect         MARGIN NOTES                 |
|  |  systems, and write down         now       current focus      |
|  |  what survives contact           uses      tools / stack      |
|  |  with reality.                   signal    public links       |
|  |                                                               |
|  |                        [yellow annotation / short handwritten  |
|  |                         style note, never a profile card grid] |
|                                                                  |
|  SITE COLOPHON                                                   |
|  Built with Astro / static by default / updated deliberately     |
|                                                                  |
+------------------------------------------------------------------+
```

The about route should be warmer and more human. Its yellow annotation plane may overlap the grid slightly, like a note taped into a manual, while the main biography remains plain text.

### Article, Desktop

```text
+------------------------------------------------------------------+
| logo                 01 HOME   02 WRITING   03 ABOUT             |
+------------------------------------------------------------------+
|  WRITING / 001 / HELLO-WORLD                                    |
|                                                                  |
|  +---------------- image plate, only if meaningful -------------+|
|  |                                                              ||
|  +--------------------------------------------------------------+|
|                                                                  |
|  |  Hello World                             FILED 2026.07.19     |
|  |  A temporary first post...               04 MIN / NOTE 001    |
|  |                                                               |
|  |  Article prose begins without another enclosing card.         |
|  |  The serif body makes long reading feel separate from UI.     |
|  |                                                               |
|  |  01 / What this checks                                        |
|  |  ----------------------------------------------------------   |
|  |  More prose...                                                |
|                                                                  |
|  PREVIOUS <                         ARCHIVE          > NEXT       |
+------------------------------------------------------------------+
```

The title is left-aligned and enters the reading flow immediately. Image, title, and prose share the same underlying grid but can use different measures. The rail carries section numbers and may end at previous/next navigation.

### Mobile, Shared Pattern

```text
+----------------------------+
| logo    HOME  WRITE  ABOUT |
+----------------------------+
| 00 / FIELD LOG             |
| |                          |
| | Notes from the           |
| | edge of code.            |
| |                          |
| | Short introduction.      |
| +-- READ LATEST            |
|                            |
| CURRENT TRACE              |
| building / learning        |
| writing                    |
|----------------------------|
| 01 / LATEST                |
| | 001                      |
| | Hello World              |
| | Short description        |
| | 2026.07.19          ---> |
|----------------------------|
| RSS / COLOPHON             |
+----------------------------+
```

At mobile widths, the rail sits 4px to 8px inside the content edge and uses shorter segments so it never crowds prose. Navigation uses short visible words rather than expanding labels. Hero support content moves below the title instead of becoming a compressed two-column panel.

## Motion Storyboard

Motion should feel like an instrument becoming active, not content floating into place.

| Moment | Behavior | Timing |
| --- | --- | --- |
| First paint | Content renders immediately; the first 48px of the signal rail draws downward after the title is visible | 320ms, one time only |
| Navigation hover/focus | Route number brightens and a 1px rule travels left to right | 180ms |
| Archive row hover/focus | Local rail segment gains color, text contrast increases, arrow moves 4px | 160ms |
| Text link hover/focus | Underline or arrow advances; no scale or bounce | 150ms |
| Route navigation | Use a short Astro view transition only if it keeps focus and history behavior correct; otherwise use instant navigation | 180ms maximum |
| Article reading | No scroll-triggered entrance animation | None |

Reduced-motion behavior should remove rail drawing and positional movement while retaining immediate color and underline state changes. Nothing should loop. Ambient grain, if used, must be static CSS or a tiny image rather than animated noise.

## Responsive Composition

| Width | Composition |
| --- | --- |
| 1280px and above | 960px to 1080px shell, asymmetric hero, 640px to 680px prose, metadata in the outer column. |
| 768px to 1279px | Single main column with support registers set in a compact two-column band. |
| 390px to 767px | Visible short nav labels, one-column content, 16px to 20px gutter, rail inside the gutter. |
| 360px to 389px | Smaller title tracking, action links may stack, metadata stays below titles, no clipped nav. |

Do not merely shrink the desktop design. On mobile, remove secondary registration marks, shorten labels, and let the rail become a sequence of section markers rather than one tall uninterrupted line.

## Design Tokens To Prototype

These are target relationships, not implementation-ready values. Validate contrast before committing exact colors.

```css
--ink-0: #070806;       /* page */
--ink-1: #0e100d;       /* raised image/prose support */
--ink-2: #171914;       /* active row */
--paper-0: #f1eee5;     /* primary text */
--paper-1: #aaa89f;     /* secondary text */
--paper-2: #76756e;     /* nonessential marks only */
--rule: #292a24;
--signal-home: #ff554f;
--signal-blog: #ff9f1c;
--signal-about: #f2c94c;
--font-display: "Google Sans Flex", sans-serif;
--font-reading: "Newsreader", Georgia, serif;
--font-data: ui-monospace, "SFMono-Regular", Consolas, monospace;
```

The warmer paper text and slightly green-black foundation separate this from the neutral black-and-white SaaS look without making the palette visibly green. Newsreader should be loaded only after a visual prototype confirms that it improves real article copy.

## Visual System Specification

### Typography

- Keep Google Sans Flex for display and interface text; its variable weight and optical sizing suit the current compressed headings.
- Prototype Newsreader for article paragraphs, blockquotes, and selected editorial ledes. Do not use it in navigation, metadata, or every heading.
- Add a restrained monospace companion for paths, dates, sequence numbers, and code. Use a system stack first to avoid another blocking font request.
- Reduce the most extreme heading tracking slightly on narrow screens. The current `-0.07em` can make short words visually collapse.
- Preserve a prose measure near `38rem` to `42rem`; do not widen articles to fill the shell.

### Color And Surfaces

- Keep `#080808` as the foundation and use surface colors for hierarchy, not floating cards everywhere.
- Reserve red, orange, and yellow for route identity, focus, links, and index marks.
- Increase muted-text contrast slightly where text communicates useful metadata; `--color-subtle` should not carry essential information at insufficient contrast.
- Use gradients only as ambient route light. Avoid adding glowing borders or colorful glass effects.

### Rhythm And Shape

- Establish a small spacing scale and use it for section rhythm instead of accumulating one-off values.
- Prefer rules, rails, indentation, and alignment over rounded containers.
- Reserve the large radius for image-led article mastheads. Most archive and text surfaces should remain square or use a very small radius.
- Align the header shell, page content, and wider article media to a consistent underlying grid.

### Motion

- Use motion to reveal navigation labels or clarify row hover state, not to animate content into view.
- Keep transitions between 150ms and 260ms.
- Add a global reduced-motion fallback before introducing more transitions.

## Priority 1: Clarify The Homepage Narrative

Current references: `src/pages/index.astro`, `src/styles/global.css`, `src/components/SectionBlock.astro`.

The homepage has a strong headline, but the section below it is very sparse when there is only one post. Add a more deliberate landing-page composition that explains why the blog exists before sending users into the archive.

Suggested changes:

- Add a short `Now / Building / Writing about` strip below the hero to give the homepage more personality.
- Connect that strip to a thin red accent rail so it reads as a field-note register rather than a generic information card.
- Add restrained linework behind the hero or support strip, stopping before the writing section to avoid visual noise.
- Make the latest-writing section feel intentionally featured rather than just an archive excerpt.
- Consider showing the latest post description once posts have real summaries.

Implementation notes:

- Keep the current inline hero in `src/pages/index.astro`; the existing `docs/next-steps.md` already notes that page heroes may become distinct.
- Add page-scoped styles in `src/pages/index.astro` rather than increasing global CSS unless the pattern is reused.
- Use existing tokens from `src/styles/global.css` so the homepage still fits the rest of the site.

## Priority 2: Make Blog Listing Rows More Useful

Current references: `src/components/blog/BlogPostList.astro`, `src/pages/blog/index.astro`, `src/content.config.ts`.

The blog list currently shows only title and date. This works for a single temporary post, but it will feel thin once the archive grows.

Suggested changes:

- Add post descriptions to each row using `post.data.description`.
- Show the manual `order` value as a zero-padded sequence marker because ordered reading is already part of the content model and page copy.
- Place rows on a subtle ruled rhythm and use the orange accent rail for hover/focus rather than turning each item into a rounded card.
- Make the entire row link target while retaining a clear semantic title and visible focus state.
- Improve mobile layout by stacking title, description, and metadata with clear spacing.
- Add optional tags only if they will be maintained consistently; otherwise avoid them.

Implementation notes:

- Update `BlogPostList.astro` first because it affects both `/` and `/blog`.
- If homepage latest posts should stay compact, add a `variant` prop rather than creating a duplicate list component.
- Keep rows mostly typographic; avoid large cards until there is imagery or categorization to justify them.

## Priority 3: Improve Long-Form Reading Quality

Current references: `src/layouts/BlogPostLayout.astro`, `src/content/blog/hello-world.md`.

The post layout has a strong framed header and sensible prose width, but the header currently competes with the article and the Markdown styling is minimal. It needs a calmer reading system before real posts become longer.

Suggested changes:

- Add styles for `strong`, `em`, `hr`, nested lists, tables, images, captions, and headings after `h3`.
- Add spacing rules for adjacent headings and the first paragraph after the post header.
- Improve code block styling with a slightly different monospace font stack, softer background, and better line-height.
- Add link treatment inside `.prose` that is stronger than generic page links.
- Rework the post header into a masthead with an orange side rail and aligned metadata. Use the full bordered card only for posts with meaningful hero art.
- Remove decorative comment marks from the masthead if the global `//` heading mark and footer `::` remain; one code metaphor per view is enough.
- Consider a post footer with `Back to blog`, `RSS`, and updated date context.
- Consider a reading-time field only after real posts are long enough to benefit from it.

Implementation notes:

- Keep Markdown-specific rules in `BlogPostLayout.astro` using `.prose :global(...)`, which matches Astro's recommended pattern for styling slotted Markdown.
- Avoid styling every possible Markdown element globally in `src/styles/global.css`; post content should remain isolated to the post layout.
- If post imagery becomes important, migrate `heroImageUrl` toward Astro's image pipeline later rather than keeping all images as unprocessed public URLs.

## Priority 4: Make Navigation Labels Discoverable

Current references: `src/components/header/Header.astro`, `src/components/header/HeaderLink.astro`.

The icon navigation is visually compact, but labels are hidden until hover/focus. This is stylish on desktop but less clear on touch devices and can make the site feel cryptic for first-time visitors.

Suggested changes:

- Replace the icon-first treatment with persistent numbered text labels: `01 Home`, `02 Writing`, and `03 About` on desktop.
- On mobile, shorten these to `Home`, `Write`, and `About`; icons should be removed or strictly secondary.
- Add `aria-current="page"` to active navigation links.
- Consider making the header sticky only if future pages become longer; do not add stickiness by default.
- Keep the logo, but consider removing the full invert filter if a final dark-mode logo asset is available.

Implementation notes:

- `HeaderLink.astro` already calculates `isActive`; use that to set `aria-current` and persistent label state.
- Avoid a hamburger menu. The site has only three top-level routes, so a simple visible nav is better.

## Priority 5: Strengthen The Visual System Tokens

Current references: `src/styles/global.css`.

The global tokens are clear, but spacing, radii, and typography scales are currently implicit. Making these explicit will make later design work more consistent.

Suggested changes:

- Add spacing tokens for recurring values like section gaps, page gutters, and vertical rhythm.
- Add radius tokens for small controls, cards, and hero panels.
- Add a monospace token for code and technical labels.
- Add a softer surface token for hovered rows and elevated panels.
- Consider a light mode only if the site needs it; the current identity is dark-first and should not be diluted prematurely.

Implementation notes:

- Keep tokens in `:root` in `src/styles/global.css`.
- Do not introduce Tailwind just for tokens; the current custom CSS is appropriate for this project size.
- Keep global element styles minimal and put distinctive layouts in scoped component or page styles.

## Priority 6: Give `/about` A Real Design Role

Current references: `src/pages/about/index.astro`, `src/components/EmptyState.astro`.

The about page is intentionally a placeholder. Once content exists, it should not look like a generic secondary page.

Suggested changes:

- Replace the placeholder with a concise personal intro and a few current focus areas.
- Add a contact or links block if public profiles are available.
- Use the yellow accent more deliberately, possibly with a warmer paper-like panel or annotated list.
- Add a small site colophon: stack, writing topics, update cadence, or principles.

Implementation notes:

- Keep the existing hero structure, but add one page-specific section below it.
- Avoid over-designing until the actual about content is written.

## Priority 7: Improve Empty And Low-Content States

Current references: `src/components/EmptyState.astro`, `src/pages/index.astro`, `src/pages/blog/index.astro`, `src/pages/about/index.astro`.

The empty state is simple and useful, but the current site has very little content. Low-content states should feel intentional, not unfinished.

Suggested changes:

- Add more specific empty-state copy per page.
- Treat empty states as annotated ruled sections with an accent rail, not generic rounded cards.
- Add optional secondary text for context.
- Keep the current accent rule, but make it part of a more deliberate placeholder module.

Implementation notes:

- Extend `EmptyState.astro` only if two or more pages need the same extra structure.
- Otherwise, keep unique low-content messaging inline on each page.

## Priority 8: Add Responsive Design Passes

Current references: all `.astro` page and component styles, especially `src/styles/global.css`, `HeaderLink.astro`, `BlogPostLayout.astro`, and `SectionBlock.astro`.

The CSS has mobile breakpoints at `640px`, but the design should be checked across more real viewport sizes.

Suggested changes:

- Review at approximately 360px, 390px, 768px, 1024px, and desktop widths.
- Tune large `h1` sizes if the hero feels too compressed on narrow screens.
- Check that header labels, focus outlines, and post hero cards do not crowd small screens.
- Consider reducing `main` top padding on mobile if the first viewport feels too empty.
- Ensure code blocks and wide Markdown content scroll cleanly without causing page overflow.

Implementation notes:

- Use browser testing after changes, not just build verification.
- Keep breakpoints sparse; prefer fluid `clamp()` values where possible.

## Priority 9: Add Motion Carefully

Current references: `src/components/header/HeaderLink.astro`, `src/styles/global.css`.

The nav already uses subtle transitions. Additional motion could add polish, but it should remain quiet and respect reading focus.

Suggested changes:

- Add understated hover transitions to blog rows and text links.
- Add a `prefers-reduced-motion` rule to reduce or remove transitions.
- Avoid scroll animations for article content.
- Avoid heavy page transitions unless route identity becomes more elaborate.

Implementation notes:

- Add a global `@media (prefers-reduced-motion: reduce)` rule if motion expands beyond the nav.
- Keep motion duration short and functional, around 150ms to 260ms.

## Priority 10: Improve Metadata And Social Presentation

Current references: `src/components/BaseHead.astro`, `astro.config.mjs`, `src/consts.ts`.

This is not strictly visual on the page, but it affects how the blog design appears when shared.

Suggested changes:

- Replace `site: 'https://example.com'` in `astro.config.mjs` with the production URL before launch.
- Add default Open Graph and Twitter card images once a visual identity exists.
- Add `og:image`, `twitter:card`, and optional article metadata on post pages.
- Use post hero images for article share cards when appropriate.

Implementation notes:

- Keep `BaseHead.astro` generic, but allow optional image/type props if page-specific social previews are needed.
- Do not add placeholder social images; wait for real brand imagery.

## Suggested Implementation Order

| Step | Goal | Actions | Primary files | Depends on | Completion check |
| --- | --- | --- | --- | --- | --- |
| 1 | Capture a visual baseline | Run the current site, inspect all routes at target viewport widths, record spacing/navigation/prose issues, and take reference screenshots before changing styles. | `/`, `/blog`, `/about`, `/blog/hello-world/` | None | Desktop and mobile baseline screenshots exist and known issues are recorded. |
| 2 | Establish the shared design foundation | Add only the required spacing, monospace, rail, surface, and motion tokens. Slightly improve essential muted-text contrast and add reduced-motion behavior. | `src/styles/global.css` | Step 1 | Existing pages still render correctly; tokens have clear consumers and no unused speculative values. |
| 3 | Clarify navigation | Add `aria-current`, make active labels persistent, improve touch behavior, and ensure the three links stay in one row on narrow screens. Preserve the compact logo-led header. | `src/components/header/Header.astro`, `src/components/header/HeaderLink.astro` | Step 2 | Navigation is understandable without hover, keyboard focus is visible, and the header does not wrap at 360px. |
| 4 | Build the ordered archive anchor | Turn blog rows into numbered editorial entries with title, description, sequence, and date. Add subtle ruled rhythm, full-row interaction, and an orange accent rail on hover/focus. | `src/components/blog/BlogPostList.astro`, `src/pages/blog/index.astro` | Step 2 | Rows scan clearly on desktop and stack cleanly on mobile without becoming generic cards. |
| 5 | Differentiate homepage writing previews | Add a compact list variant only if needed so latest posts can remain concise while using the new archive vocabulary. Confirm the latest-post sort remains date-based. | `src/components/blog/BlogPostList.astro`, `src/pages/index.astro` | Step 4 | Homepage previews feel related to the archive but are appropriately compact. |
| 6 | Add the homepage field-note anchor | Add the red-railed `building / learning / writing` strip and restrained linework. Keep the hero inline and avoid a reusable hero abstraction. | `src/pages/index.astro` | Steps 2 and 5 | The first screen communicates identity and current interests without crowding the main headline. |
| 7 | Rework the article masthead | Replace the visually heavy default card with a calmer orange-railed masthead and metadata register. Retain an image-led framed variant only when a meaningful hero image exists. | `src/layouts/BlogPostLayout.astro` | Step 2 | The title and metadata lead naturally into the article; decorative code punctuation is not repeated excessively. |
| 8 | Complete the long-form reading system | Style headings, links, strong/emphasis, nested lists, blockquotes, rules, tables, images, captions, inline code, and code blocks. Add a restrained post footer with archive and RSS links. | `src/layouts/BlogPostLayout.astro`, representative content in `src/content/blog/` | Step 7 | A content fixture containing all supported Markdown elements is readable and causes no horizontal page overflow. |
| 9 | Give About a distinct role | Replace placeholder structure with real intro, current interests, connection links, and a small colophon. Present these as a warm yellow annotation panel rather than a resume or card grid. | `src/pages/about/index.astro` | Step 2; final copy and links | About feels personal and visually distinct while remaining consistent with the shared indexing system. |
| 10 | Refine low-content states | Rewrite page-specific empty copy and use ruled annotation treatment with the route rail. Extend `EmptyState` only for structure genuinely shared by multiple pages. | `src/components/EmptyState.astro`, affected pages | Steps 4, 6, and 9 | Empty pages look intentional and no speculative component API was added. |
| 11 | Complete responsive and accessibility passes | Test target widths, keyboard order, focus states, touch targets, text contrast, reduced motion, long titles, long descriptions, code overflow, and image behavior. Make small scoped corrections. | All changed frontend files | Steps 3-10 | Checks pass at 360px, 390px, 768px, 1024px, and wide desktop sizes. |
| 12 | Add share presentation | Set the production site URL, add optional social-image/type props, and use real brand or post imagery for Open Graph and Twitter metadata. | `astro.config.mjs`, `src/components/BaseHead.astro`, post layout/page props | Final URL and final imagery | Shared links have correct canonical URLs, titles, descriptions, card type, and non-placeholder imagery. |
| 13 | Final verification | Run the production build, inspect every route in the built site, compare against baseline screenshots, and remove unused styles or tokens. | Entire project | Steps 1-12 | `pnpm build` passes and the final UI is more distinctive, readable, accessible, and maintainable than the baseline. |

## Validation Checklist

- Run `pnpm build` after implementation changes.
- Check `/`, `/blog`, `/about`, and `/blog/hello-world/` in a browser.
- Check 360px, 390px, 768px, 1024px, and a wide desktop viewport.
- Check keyboard navigation through the header and links.
- Check visible focus, touch target size, text contrast, and reduced-motion behavior.
- Check post content with headings, lists, links, blockquotes, inline code, and code blocks.
- Check that any new accent styles still work for home, blog, and about route colors.

## Non-Goals For Now

- Do not add a component library.
- Do not add Tailwind unless the project grows substantially.
- Do not add complex animations or scroll effects.
- Do not redesign away from the current dark technical/editorial identity.
- Do not create a hamburger menu for three links.
