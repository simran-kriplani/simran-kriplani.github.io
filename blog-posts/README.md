# Blog post pages

Each blog item has two versions:

1. A short preview in the main blog section on the homepage
2. A full standalone page in this folder for the longer post

## Files

- `shared.css` contains the shared styling for all blog post pages
- Each blog page is its own HTML file, for example:
  - `why-behavioural-thinking-makes-strategy-clearer.html`
  - `the-hidden-psychology-behind-pricing.html`

## How to add a new blog post page

1. Create a new HTML file in this folder following the same structure as the existing posts.
2. Update the relevant blog item in `content.js` so its `link.href` points to the new page.
3. Keep the short preview summary in the homepage list as-is.
4. Use the standalone page for the longer written post and the comment section.

## Template

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Blog Post Title</title>
    <link rel="stylesheet" href="shared.css" />
  </head>
  <body>
    <main class="page-shell">
      <a class="back-link" href="../index.html">← Back to the site</a>

      <article class="article">
        <span class="eyebrow">Blog post</span>
        <h1>Blog Post Title</h1>
        <p class="subtitle">Essay · 2026</p>

        <div class="article-body">
          <p>Your full blog post goes here.</p>
        </div>

        <section class="comments" aria-label="Comments section">
          <h2>Thoughts</h2>
          <textarea id="comment-box" placeholder="Share your thoughts..."></textarea>
          <div class="comment-actions">
            <button type="button" id="comment-submit">Post comment</button>
          </div>
          <ul class="comment-list" id="comment-list"></ul>
        </section>
      </article>
    </main>

    <script>
      (function () {
        const key = 'your-post-slug';
        const commentBox = document.getElementById('comment-box');
        const submitButton = document.getElementById('comment-submit');
        const commentList = document.getElementById('comment-list');

        function renderComments() {
          const comments = JSON.parse(localStorage.getItem('simran-blog-comments') || '{}');
          const items = comments[key] || [];
          commentList.innerHTML = '';
          items.forEach(function (comment) {
            const li = document.createElement('li');
            li.textContent = comment;
            commentList.appendChild(li);
          });
        }

        submitButton.addEventListener('click', function () {
          const value = commentBox.value.trim();
          if (!value) return;
          const comments = JSON.parse(localStorage.getItem('simran-blog-comments') || '{}');
          comments[key] = comments[key] || [];
          comments[key].push(value);
          localStorage.setItem('simran-blog-comments', JSON.stringify(comments));
          commentBox.value = '';
          renderComments();
        });

        renderComments();
      })();
    </script>
  </body>
</html>
```

## Notes

- The shared CSS keeps the pages visually consistent.
- Each standalone page can be edited independently from the homepage summary.
- The comment section stores entries in `localStorage` per post slug.
