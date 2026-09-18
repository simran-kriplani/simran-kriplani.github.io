# Creative space pages

Each creative work has two versions:

1. A short preview in the main Creative Space section on the homepage
2. A full standalone page in this folder for the longer write-up and media

## Files

- `shared.css` contains the shared styling for all creative work pages
- Each creative work page is its own HTML file, for example:
  - `from-city-to-sanctuary.html`
  - `research-to-storytelling-projects.html`

## How to add a new creative work page

1. Create a new HTML file in this folder using the same structure as the existing pages.
2. Update the relevant item in `content.js` so its `link.href` points to the new file.
3. Keep the short summary in the homepage list as-is.
4. Use the standalone page for the longer description and any photo or video embed.

## Template

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Creative Work Title</title>
    <link rel="stylesheet" href="shared.css" />
  </head>
  <body>
    <main class="page-shell">
      <a class="back-link" href="../index.html">← Back to the site</a>

      <article class="article">
        <header class="article-header">
          <div>
            <span class="eyebrow">Creative work</span>
            <h1>Creative Work Title</h1>
            <p class="subtitle">Project metadata</p>
          </div>

          <div class="article-image">
            <img src="../assets/images/your-image.jpg" alt="Creative work image" />
          </div>
        </header>

        <div class="article-body">
          <p>Write 2-3 sentences here about the work.</p>
          <p>Use this space to describe the concept, the process, or the intent behind the piece.</p>
        </div>

        <div class="article-video">
          <iframe
            src="https://www.youtube.com/embed/VIDEO_ID"
            title="Creative work video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </article>
    </main>
  </body>
</html>
```

## Notes

- Use either an image or a YouTube embed for the media section.
- The page stays modular so each creative work is edited independently.
- You can swap the media source per file as needed.
