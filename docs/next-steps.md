# Project Next Steps

## Current State

- Astro blog routes exist for `/`, `/about`, `/blog`, individual blog posts, and `/rss.xml`.
- Blog posts live in `src/content/blog/` and use Astro content collections.
- Published posts require `title`, `description`, `order`, and `pubDate` frontmatter.
- `/blog` sorts published posts by ascending `order`; `order: 1` appears first.
- Draft posts use `draft: true` and are excluded from `/blog`, post routes, and RSS.
- Shared reusable sections are componentized with `SectionBlock`, `EmptyState`, and `BlogPostList`.
- Page hero sections intentionally remain inline because each page may get a distinct design later.

## Near-Term Work

1. Replace the homepage empty state with real latest writing.
   - Use the blog content collection.
   - Decide whether homepage writing should follow `order` or latest `pubDate`.
   - Show a small number of posts, likely 1-3.

2. Replace the temporary `Hello World` post with real content.
   - Keep `src/content/blog/_template.md` as the starting point for new posts.
   - Use `heroImageUrl` for local or remote post hero images.

3. Write the first real About page content.
   - Add a short intro.
   - Add current interests or project focus.
   - Add connection links when ready.

4. Review mobile spacing and typography.
   - Check `/`, `/blog`, `/about`, and one post page.
   - Tune hero title sizes only if needed.
   - Keep the header in one horizontal row on mobile.

5. Decide RSS ordering.
   - Current behavior can stay date-based.
   - If the blog is meant to be read in a manual sequence, RSS may also use `order`.

## Later Work

- Give `/`, `/blog`, and `/about` more distinct visual identities.
- Improve blog archive rows after more posts exist.
- Replace temporary placeholder imagery with final local assets.
- Add richer post metadata if needed, such as tags or reading time.
- Consider extracting link components if link variants grow beyond `text-link` and `plain-link`.
