# Porting Plan: Next.js + Tailwind Prototype to Custom WordPress Theme (Gutenberg Blocks)

## Overview
This document outlines the plan for porting the Knoll Crane website from a Next.js + Tailwind CSS prototype to a custom WordPress theme using native Gutenberg blocks. The goal is to preserve the exact design, structure, and user experience, while enabling content management through the WordPress block editor.

---

## Goals
- **Preserve the current design and layout** as closely as possible.
- **Enable client-friendly content editing** using native Gutenberg blocks (not just ACF fields).
- **Leverage Tailwind CSS** for styling within the WordPress theme.
- **Use custom blocks** for highly visual/structured sections (hero, carousel, stats, etc.).
- **Maintain a clean, scalable, and future-proof codebase.**

---

## High-Level Steps

1. **Separate Codebases**
   - Keep the Next.js prototype as a reference.
   - Create a new, separate WordPress theme (in its own repo or `/wp-theme` folder).

2. **Set Up Tailwind CSS in the WordPress Theme**
   - Copy the Tailwind config from the Next.js project.
   - Set up PostCSS and Tailwind in the WP theme build process.
   - Ensure all block and theme styles use Tailwind classes.

3. **Rebuild Next.js Components as Gutenberg Blocks**
   - For each major section (hero, carousel, stats, etc.):
     - Create a custom block using `@wordpress/scripts` (React-based).
     - Use the same markup and Tailwind classes as the Next.js components.
     - Expose all necessary fields as block attributes (editable in the block editor).
     - Support block patterns for reusable layouts.

4. **Content Migration**
   - Manually recreate pages in WordPress using the new blocks.
   - Ensure all content is editable and matches the prototype.

5. **Testing & QA**
   - Compare the WordPress site to the Next.js prototype for pixel-perfect accuracy.
   - Test block editing experience for client usability.

6. **Deployment**
   - Deploy the custom theme to the production WordPress site.
   - Remove the Next.js prototype from production (if not using headless).

---

## Key Principles
- **Use Gutenberg blocks for all visual/structured content.**
- **Avoid ACF for main page content** (use only for site options/settings if needed).
- **Keep Tailwind config/design tokens in sync** between projects if possible.
- **Document all custom blocks and patterns** for future maintainers.

---

## Example Block Mapping
| Next.js Component | WordPress Block Name         | Block Fields/Attributes                |
|-------------------|-----------------------------|----------------------------------------|
| Hero              | `knoll-crane/hero`          | Title, Subtitle, BG Image, Stats Array |
| Carousel          | `knoll-crane/carousel`      | Slides (image, caption, link, etc.)    |
| Stats             | `knoll-crane/stats`         | Array of label/value pairs             |
| ...               | ...                         | ...                                    |

---

## Resources
- [Tailwind CSS + WordPress Guide](https://tailwindcss.com/docs/installation/using-postcss#wordpress)
- [Gutenberg Block Development](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/)
- [@wordpress/scripts](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-scripts/)
- [Block Patterns](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-patterns/)

---

## Next Steps for LLM or Developer
1. Set up the WordPress theme with Tailwind and a build process.
2. For each Next.js component, create a matching Gutenberg block with the same markup and classes.
3. Test the editing experience and visual output.
4. Document any design or implementation decisions in this file.

---

**This plan is designed to ensure a smooth, maintainable, and future-proof migration from a modern React prototype to a best-practice WordPress site.** 