# Simran Kriplani — portfolio site

A static portfolio (no build step). Open `index.html` in a browser, or serve the folder with any static server (`python3 -m http.server`). Pushes to `main` deploy to GitHub Pages via `.github/workflows/pages.yml`.

## Project structure

```
index.html            Homepage shell: empty containers that js/site.js fills in
blog-post.html        Template for a blog post, chosen with ?slug=<slug>
case-study.html       Template for a case study, chosen with ?slug=<slug>

css/
  theme.css           Light palette, fonts and widths (edit colours here)
  theme-dark.css      Dark palette (homepage only)
  site.css            Homepage styles
  article.css         Styles shared by every standalone article page

js/
  content.js          All homepage text, links and lists (edit copy here)
  icons.js            Inline SVG icon markup
  site.js             Renders content.js into index.html; theme toggle, carousels, nav
  blog-post.js        Renders blog-post.html
  case-study.js       Renders case-study.html
  comments.js         Browser-local comment box used on blog posts

case-studies/         Full write-ups linked from "Case studies"
blog-posts/           Static versions of the first two blog posts
from-the-notebook/    Static pages for the remaining blog posts
in-the-archive/       Pages linked from "In the archive"
creative-space/       Pages linked from "Creative Space"

assets/
  images/             Photos and illustrations
  case-studies/       Case study PDFs
  SimranKriplani_Resume.pdf, Simran_Kriplani_Resume.tex   Resume and its LaTeX source
```

## Editing content

Almost all homepage text lives in `js/content.js`. Edit the text between the quotes, keeping the commas and brackets intact, then refresh the browser.

| To change…                  | Edit in `js/content.js`                              |
| --------------------------- | ---------------------------------------------------- |
| Hero text, facts, buttons   | `home`                                               |
| Featured carousel           | `home.featured.items`                                |
| Skill cards on the homepage | `home.skillsPreview.items` (icons are in `icons.js`) |
| Case studies                | `caseStudies.items`                                  |
| "In the archive" list       | `caseStudies.archive`                                |
| Blog carousel and archive   | `blog.items`                                         |
| Creative Space cards        | `creativeWork.items`                                 |
| About, skills, experience   | `about`                                              |
| Contact links, footer       | `contact`, `footer`                                  |

### Add a case study

Add an object to `caseStudies.items`:

```js
{
  slug: "my-new-project",            // used for #case-studies:my-new-project links
  title: "My New Project",
  meta: "Independent research project",
  paragraphs: ["First paragraph.", "Second paragraph."],
  tags: ["Research", "Strategy"],
  detail: { href: "case-studies/my-new-project.html", label: "Read the case study" },
  pdf: { href: "assets/case-studies/my-new-project.pdf", label: "View PDF" },
},
```

Then create `case-studies/my-new-project.html` by copying an existing page in that folder, and drop the PDF in `assets/case-studies/`. Link to the case study from anywhere with `href: "#case-studies:my-new-project"`.

### Add a blog post

Add an item to `blog.items` with a `slug`, `title`, `meta`, `body` (array of paragraphs) and a `link.href` of `blog-post.html?slug=<slug>`. The first six items appear in the carousel (add an `image` for the card), and items from the third onward are also listed under "From the notebook". `blog-post.html` renders the post and its comment box automatically.

## Standalone article pages

Every page in `case-studies/`, `blog-posts/`, `from-the-notebook/`, `in-the-archive/` and `creative-space/` uses the same two stylesheets and a variant class on `<body>`:

```html
<link rel="stylesheet" href="../css/theme.css" />
<link rel="stylesheet" href="../css/article.css" />
...
<body class="article-page">
  <!-- case studies, blog posts -->
  <body class="article-page article-page--wide">
    <!-- notebook, archive -->
    <body class="article-page article-page--creative">
      <!-- creative space -->
    </body>
  </body>
</body>
```

Copy an existing page from the same folder as the starting point for a new one. The available building blocks (`.article`, `.article-header`, `.article-image`, `.tag-list`, `.article-body`, `.article-figure`, `.references`, `.pdf-note`, `.comments`) are documented by example in `css/article.css`.
