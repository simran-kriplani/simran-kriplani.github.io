# Maintaining the site

Internal notes for editing and deploying the portfolio. The public overview is the root [`README.md`](../README.md). This file lives in `.github/`, which the Pages deploy leaves out of the published site.

A static portfolio (no build step). Open `index.html` in a browser, or serve the folder with any static server (`python3 -m http.server`). Pushes to `main` deploy to GitHub Pages via `.github/workflows/pages.yml`, which replaces the `?v=dev` on CSS/JS links with the commit hash so visitors never mix a new page with old cached files. Keep `?v=dev` on any new `css/` or `js/` link you add.

## Project structure

```
index.html            Homepage shell: empty containers that js/site.js fills in
blog-post.html        Template for a blog post, chosen with ?slug=<slug>
case-study.html       Template for a case study, chosen with ?slug=<slug>

css/
  theme.css           Light palette, fonts and widths (edit colours here)
  theme-dark.css      Dark palette (all pages)
  site.css            Homepage styles
  article.css         Styles shared by every standalone article page

js/
  content.js          All homepage text, links and lists (edit copy here)
  icons.js            Inline SVG icon markup
  theme-init.js       Applies the saved light/dark choice before first paint
  site.js             Renders content.js into index.html; theme toggle, carousels, nav menu,
                      hero curve, scroll reveals and count-up figures
  blog-post.js        Renders blog-post.html
  case-study.js       Renders case-study.html
  experiment.js       "Try it yourself" decoy-pricing experiment on the homepage
  comments.js         Browser-local comment box used on blog posts
  article.js          Reading-progress bar and reading time on article pages

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

| To change…                   | Edit in `js/content.js`                              |
| ---------------------------- | ---------------------------------------------------- |
| Hero text, facts, buttons    | `home`                                               |
| Featured carousel            | `home.featured.items`                                |
| Skill cards on the homepage  | `home.skillsPreview.items` (icons are in `icons.js`) |
| Case studies                 | `caseStudies.items`                                  |
| "In the archive" list        | `caseStudies.archive`                                |
| Blog carousel and archive    | `blog.items`                                         |
| Creative Space cards         | `creativeWork.items`                                 |
| "Try it yourself" experiment | `experiment` (plans, reveal copy, study figures)     |
| About, skills, experience    | `about`                                              |
| Contact links, footer        | `contact`, `footer`                                  |

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

Add an item to `blog.items` with a `slug`, `title`, `meta` and a `link.href` pointing at the post's page (copy an existing page in `blog-posts/` or `from-the-notebook/`). Without a `link`, the post falls back to `blog-post.html?slug=<slug>`, which renders its `body` paragraphs. The first six items appear in the carousel (add an `image` for the card), and items from the third onward are also listed under "From the notebook".

## Standalone article pages

Every page in `case-studies/`, `blog-posts/`, `from-the-notebook/`, `in-the-archive/` and `creative-space/` loads the site fonts, `js/theme-init.js`, the theme stylesheets and `article.css`, ends with `<script src="../js/article.js"></script>`, and has a variant class on `<body>`:

```html
<link rel="stylesheet" href="../css/theme.css" />
<link rel="stylesheet" href="../css/theme-dark.css" />
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

Copy an existing page from the same folder as the starting point for a new one; its "Back to the site" link already returns to the right homepage section. The available building blocks (`.article`, `.article-header`, `.article-image`, `.tag-list`, `.article-body`, `.article-figure`, `.references`, `.pdf-note`, `.comments`) are documented by example in `css/article.css`.

## "Try it yourself" experiment

Between Case studies and Blog, visitors choose a café membership. Each visitor is randomly placed (and remembered) in one of two groups: **decoy** (three plans, including a café pass priced the same as the bundle) or **control** (two plans). The reveal explains the decoy effect and shows Ariely's Economist results.

Every choice is sent to Google Analytics as a `decoy_experiment` event with `action` (`choose_plan` / `try_other_version`), `experiment_group` and `plan`. To compare your own visitors' choices, register `experiment_group` and `plan` as event-scoped custom dimensions in GA (Admin → Custom definitions), then use Explore to break `choose_plan` events down by both.
