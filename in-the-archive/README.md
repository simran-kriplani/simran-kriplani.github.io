# In the archive pages

This folder contains the standalone pages for the shorter "In the archive" works linked from the homepage.

## Purpose

These pages mirror the structure of the main case study detail pages, but are designed to be lighter and easier to navigate when the content is shorter or more exploratory.

## File structure

- `shared.css` contains the shared styling for archive pages.
- Each work gets its own page, for example:
  - `look-good-feel-good.html`
  - `ecology-evolutionary-biology-lab.html`
  - `multimedia-documentary-project.html`
  - `travel-video-project.html`

## How to add a new archive page

1. Create a new HTML file in this folder.
2. Use the same structure as the existing archive pages.
3. Add the item to `content.js` under `caseStudies.archive` with a matching `slug`.
4. Point the archive title link to the new page via `detail.href`.
5. Keep the title, subtitle, tags, and image consistent with the rest of the site.

## Template

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Archive Title</title>
    <link rel="stylesheet" href="shared.css" />
  </head>
  <body>
    <main class="page-shell">
      <a class="back-link" href="../index.html">← Back to the site</a>

      <article class="article-card" aria-live="polite">
        <header class="article-header">
          <div>
            <span class="eyebrow">In the archive</span>
            <h1>Archive Title</h1>
            <p class="subtitle">Project metadata or date</p>
          </div>
          <div class="article-image">
            <img src="../assets/images/headshot.png" alt="Archive work visual" />
          </div>
        </header>

        <div class="tag-list">
          <span class="tag">Tag one</span>
          <span class="tag">Tag two</span>
        </div>

        <div class="article-body">
          <p>Your full written work goes here.</p>
        </div>
      </article>
    </main>
  </body>
</html>
```

## Notes

- This section is intended to be lower-friction than the full case study pages.
- The format is intentionally close to the main case-study pages so the site feels cohesive.
- A separate folder keeps the archive content easy to maintain without crowding the case study section.
