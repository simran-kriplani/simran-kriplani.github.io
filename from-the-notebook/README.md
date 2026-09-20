# From the notebook pages

This folder contains the standalone pages for the shorter blog notes linked from the homepage under the "From the notebook" section.

## Purpose

These pages are intentionally lighter than the full case study detail pages: they keep the same visual rhythm and site cohesion, but they are meant for shorter, more reflective writing.

## File structure

- `shared.css` contains the shared styling for these pages.
- Each note gets its own page, for example:
  - `what-good-research-actually-looks-like.html`
  - `why-people-trust-ideas-that-feel-familiar.html`
  - `the-small-design-decisions-that-shape-behaviour.html`

## How to add a new notebook page

1. Create a new HTML file in this folder.
2. Use the same structure as the existing note pages.
3. Add the item to `content.js` under `blog.items` with a matching `slug`.
4. Point the blog title link to the new page via `link.href`.
5. Keep the title, subtitle, tags, and image consistent with the rest of the site.

## Template

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Notebook Title</title>
    <link rel="stylesheet" href="shared.css" />
  </head>
  <body>
    <main class="page-shell">
      <a class="back-link" href="../index.html">← Back to the site</a>

      <article class="article-card" aria-live="polite">
        <header class="article-header">
          <div>
            <span class="eyebrow">From the notebook</span>
            <h1>Notebook Title</h1>
            <p class="subtitle">Essay · 2026</p>
          </div>
          <div class="article-image">
            <img src="../assets/images/headshot.png" alt="Notebook work visual" />
          </div>
        </header>

        <div class="tag-list">
          <span class="tag">Behavioural design</span>
          <span class="tag">Decision-making</span>
        </div>

        <div class="article-body">
          <p>Your full written post goes here.</p>
        </div>
      </article>
    </main>
  </body>
</html>
```

## Notes

- This section is intended for concise, reflective writing that does not need a full feature card on the homepage.
- The format keeps the page feel cohesive with the rest of the site while making the archive easier to maintain.
- A separate folder keeps the blog notes distinct from the main case study pages.
