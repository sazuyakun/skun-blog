# Skun Blog Site Plan

## Goal

Build a personal blog for a software and coding enthusiast. The site should prioritize readability, personality, aesthetics, and a smooth writing/reading experience.

## Routes

- `/` - Homepage
- `/about` - Personal details and ways to connect
- `/blog` - Blog index
- `/rss.xml` - RSS feed

## Design Direction

Minimal, but not generic. The site should have tasteful artistic choices and feel like a personal journal maintained by someone who enjoys software, coding, and thoughtful writing.

## Theme

Dark-only theme built from layered black and gray tones. Avoid pure black as the only surface; use near-black backgrounds, charcoal surfaces, light gray text, muted gray secondary text, and low-contrast borders.

Primary font: Google Sans Flex, loaded from Google Fonts for v1.

Page accents:

- `/` - Red
- `/blog` - Orange
- `/about` - Yellow

Accent usage should be precise and restrained: CTAs, active navigation, focus states, page markers, and small interactive details. Avoid large loud color blocks in v1.

Artistic detail direction: balanced coding journal. Use a mix of subtle coding and journal-like details, such as thin accent carets/bars, small code glyphs, quiet metadata labels, and deliberate spacing. The site should feel personal and technical without becoming a full terminal theme.

## Homepage Plan

Use the homepage as a quiet entrance into the writing. It should provide a concise site introduction and surface latest writing, without duplicating the full personal details that belong on `/about`.

V1 homepage structure:

- Short site/intent statement
- Latest writing
- Link to the full blog archive
- Small links to About and RSS if useful

Do not include an extra personal journal sentence for now.

## About Page Plan

Keep dummy/basic content for now. The about page should use the shared visual system, but the real personal details and contact/connect content will be planned later.

## Blog Page Plan

V1 should use a plain ordered list. Until posts exist, show a simple empty archive state with an RSS link.

Posts are stored as Markdown files in `src/content/blog/` using Astro content collections. Blog posts require `title`, `description`, `order`, and `pubDate` frontmatter. Optional fields are `updatedDate`, `heroImageUrl`, and `draft`.

The `/blog` route sorts published posts by ascending `order`. `order: 1` appears first in the list.

The `_template.md` file is a draft-only writing template. It is excluded from `/blog`, post routes, and RSS.

## Blog Post Layout

Individual blog posts should not reuse the same landing-page shape as `/`, `/blog`, and `/about`. Post pages should feel more like a focused article: temporary hero image first, then centered title, description, and date metadata below the image. Keep blog titles smaller than the landing-page hero titles. Preserve the dark theme, orange blog accent, and balanced coding-journal details.

Use `heroImageUrl` for temporary images during early design. It can point to a local `/public` path or a remote URL. Later, replace the placeholder with final static/local images.

## RSS Plan

RSS should use the same blog content collection as `/blog`, excluding drafts.

## Open Questions
