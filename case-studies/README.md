# Case study pages

Each case study has two versions:

1. A short summary in the main case studies section on the homepage
2. A full standalone page in this folder for the longer write-up

## Files

- `shared.css` contains the shared styling for all case study pages
- Each case study page is its own HTML file, for example:
  - `grocery-oligopoly.html`
  - `brand-anthropomorphism.html`
  - `campus-leadership.html`

## How to add a new case study page

1. Make a new HTML file in this folder using the same structure as the existing pages.
2. Link the file from `content.js` under the relevant case study's `detail.href`.
3. Keep the short summary in the main site page as-is for the overview.
4. Use the standalone page for the full written work.

## Template

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Case Study Title</title>
    <link rel="stylesheet" href="shared.css" />
  </head>
  <body>
    <main class="page-shell">
      <a class="back-link" href="../index.html">← Back to the site</a>

      <article class="article">
        <span class="eyebrow">Case study</span>
        <h1>Case Study Title</h1>
        <p class="subtitle">Project metadata or subtitle</p>

        <div class="tag-list">
          <span class="tag">Tag one</span>
          <span class="tag">Tag two</span>
        </div>

        <div class="article-body">
          <p>Your full written work goes here.</p>
        </div>

        <p class="pdf-note">
          Found this interesting? Read the full literature review
          <a href="../assets/case-studies/your-file.pdf" target="_blank" rel="noopener">here</a>
        </p>
      </article>
    </main>
  </body>
</html>
```

## Notes

- The shared CSS keeps the pages visually consistent.
- You can edit the long-form text without changing the summary content on the homepage.
- The final PDF link should remain in the footer for readers who want the full literature review.
