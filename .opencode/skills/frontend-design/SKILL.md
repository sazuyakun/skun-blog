---
name: frontend-design
description: Use when improving frontend design, styling, Astro pages, components, layouts, typography, responsive behavior, or visual polish for this blog. Guides distinctive, production-grade UI work that avoids generic AI-looking designs.
license: MIT
compatibility: opencode
metadata:
  source: adapted from public OpenCode frontend-design skill patterns
  project: skun-blog
---

# Frontend Design

Use this skill when the user asks to improve the visual design of the blog, redesign a page, style an Astro component, tune responsive behavior, or make the site feel less basic.

The goal is not to generate generic component layouts. The goal is to make this blog feel designed, personal, technical, readable, and memorable.

## Project Context

- The site is an Astro personal blog.
- The current theme is dark-only with restrained route accents.
- Home uses red, blog uses orange, and about uses yellow.
- The current font is Google Sans Flex.
- Page hero sections intentionally remain inline because each route may diverge visually later.
- Reusable lower-page pieces currently include `SectionBlock`, `EmptyState`, and `BlogPostList`.
- Preserve semantic HTML, accessibility, fast static output, and mobile readability.

## Design Direction

Before editing code, choose a clear aesthetic direction for the specific change. Do not default to safe SaaS layouts.

Good directions for this project include:

- Quiet coding journal
- Editorial minimalism
- Industrial notebook
- Terminal-adjacent, but not a terminal clone
- Darkroom archive
- Personal field notes for software experiments

Avoid:

- Generic card grids without a concept
- Purple gradient AI/SaaS visuals
- Decoration that does not support the writing experience
- Copy-pasted symmetry across every route
- Making all pages share one hero component just because they currently look similar

## Design Process

1. Identify the user-facing purpose of the page or component.
2. Pick one dominant visual idea.
3. Preserve or improve readability.
4. Make one memorable design anchor visible in the final UI.
5. Keep the implementation minimal enough to maintain.

Examples of memorable anchors:

- A quiet ruled-paper or notebook rhythm behind archive rows
- A precise accent rail that changes by route
- Editorial post rows with strong typographic hierarchy
- Layered dark surfaces with subtle grain or linework
- A distinctive article header that does not resemble the landing pages

## Implementation Rules

- Inspect existing Astro files and CSS before changing design.
- Prefer small, coherent edits over broad rewrites.
- Keep page-specific hero designs inside each page unless reuse is clearly stable.
- Extract components only for repeated structures that are likely to stay repeated.
- Use CSS variables when introducing colors, rhythm, or reusable tokens.
- Use CSS-first motion, and only when it adds meaning.
- Maintain keyboard focus states and sufficient contrast.
- Check mobile layouts; do not let the header wrap vertically.
- Avoid unused styles, unused components, and speculative abstraction.

## Astro Notes

- Shared page shell lives in `src/layouts/Layout.astro`.
- Blog post layout lives in `src/layouts/BlogPostLayout.astro`.
- Main routes live in `src/pages/index.astro`, `src/pages/blog/index.astro`, and `src/pages/about/index.astro`.
- Shared global styles live in `src/styles/global.css`.
- Header components live in `src/components/header/`.
- Blog list component lives in `src/components/blog/BlogPostList.astro`.

## Quality Bar

A design change is successful when:

- The page is more distinctive than before.
- The visual choices match the blog's writing-focused purpose.
- The design works on desktop and mobile.
- The code remains understandable.
- `pnpm build` passes.

## When Unsure

Ask one concise question only if the design direction cannot be inferred. Otherwise, choose a tasteful direction, implement it, verify it, and explain the result.
