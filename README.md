# Site Content Guide

This site is intentionally simple: most of the writing and page content lives in one file called `content.js`. If you want to update text, add a new project, or add a new case study, you usually only need to edit that file.

You do not need to be a developer to make most content changes. Think of `content.js` as the website's content sheet.

## Where things live

- `index.html` = page structure and main sections
- `content.js` = all the text, headings, links, and content blocks
- `site.js` = code that reads the content from `content.js` and turns it into the page
- `assets/case-studies/` = PDF files for case studies
- `assets/images/` = image files such as headshots or social preview images

## The golden rule

If you want to change text on the site, start in `content.js`.

If you want to add a completely new section that does not already exist on the page, you may also need to update `index.html` and `site.js`.

For most updates, though, you can keep it to one file: `content.js`.

---

## 1) How to add or edit content

Open `content.js`.

You will see a large object like this:

```js
window.siteContent = {
  home: {
    title: "...",
    lede: "...",
    facts: [
      ["Location", "Toronto, Canada"],
    ],
  },
  caseStudies: {
    items: [
      {
        title: "Sample case study",
        paragraphs: ["..."],
      },
    ],
  },
};
```

This is where the website gets almost all of its text.

### Simple editing examples

#### Change a homepage heading
Find the `home` section and edit the `title` or `lede` values.

#### Add a new fact in the homepage summary
Inside `home.facts`, add a new pair like this:

```js
["Award", "Dean's List 2025"]
```

#### Change a case study title or paragraph
Look under `caseStudies.items` and edit the relevant item.

---

## 2) How to add a new case study

Case studies are listed in the `caseStudies.items` array.

Add a new object in the same style as the existing ones:

```js
{
  slug: "my-new-project",
  title: "My New Project",
  meta: "Independent research project · University of Toronto",
  paragraphs: [
    "This is the first paragraph of the case study.",
    "This is the second paragraph.",
  ],
  tags: [
    "Research",
    "Strategy",
    "Data",
  ],
  pdf: {
    href: "assets/case-studies/my-new-project.pdf",
    label: "View case study PDF",
  },
},
```

### Important notes

- `slug` is the internal name used in links.
- `title` is the visible title on the page.
- `paragraphs` are the body text blocks.
- `tags` are short labels that help categorize the work.
- `pdf.href` must match the actual PDF file name in the folder.

### Link the case study from elsewhere

If you want a button or hyperlink to open that specific case study, use a hash link like this:

```js
href: "#case-studies:my-new-project"
```

This tells the site to open the matching case study panel automatically.

Example from the existing site:

```js
href: "#case-studies:grocery-oligopoly"
```

---

## 3) How to add a PDF to a case study

The PDFs live in the folder:

`assets/case-studies/`

### Step-by-step

1. Put your PDF file in `assets/case-studies/`
2. Give it a clear filename, for example:
   - `my-new-project.pdf`
3. In `content.js`, add the matching `pdf.href` path:

```js
pdf: {
  href: "assets/case-studies/my-new-project.pdf",
  label: "View case study PDF",
}
```

### Existing naming pattern

The site already uses files like:

- `grocery-oligopoly.pdf`
- `brand-anthropomorphism.pdf`
- `campus-leadership.pdf`

The name in `content.js` must match the actual file name exactly.

---

## 4) How to add something to the research archive

The research archive is a smaller list under `caseStudies.archive`.

Add a new item like this:

```js
archive: [
  {
    title: "Integrative Research Poster",
    blurb:
      "Designed a research proposal on microfluidic technology for scalable, customizable lab-grown meat production, and presented it at a conference-style session.",
  },
  {
    title: "Your New Item",
    blurb: "Short summary of the project or research work.",
  },
]
```

### Notes

- `title` is the project name
- `blurb` is a short summary shown in the archive list
- This section does not usually require a PDF unless you want to link one separately

If you want a new archive project to be more prominent, you can also add a dedicated case study entry in `caseStudies.items` and keep the archive summary shorter.

---

## 5) How to add a new section to the website

This is the only part that is a little more technical.

### If the section already exists

Just update the relevant content block in `content.js`.

### If the section is brand new

You may need to:

1. Add a new section container in `index.html`
2. Add matching content rendering logic in `site.js`
3. Add the new text values in `content.js`

This is more involved, so if you are not comfortable with code, the easiest approach is to copy an existing section and edit the text, rather than inventing a completely new layout.

A good rule is: keep the structure similar to the existing `home`, `about`, and `caseStudies` sections.

---

## 6) How to add images

Images belong in `assets/images/`.

Example structure:

```text
assets/images/
  headshot.jpg
  og-image.jpg
```

Then reference them in the page with a relative path such as:

```js
"assets/images/headshot.jpg"
```

The site also includes folder guidance in `assets/images/README.md`.

---

## 7) Quick checklist before publishing

Before you finish a content update, check:

- The file path exists and is spelled correctly
- The PDF name matches the link in `content.js`
- The `slug` names are unique
- The link uses the correct `#case-studies:slug` format when linking to a case study
- The text is saved in `content.js` and not in a random file

---

## 8) Best practice for non-technical editing

If you are not comfortable working with code, do this:

1. Open `content.js`
2. Find the relevant section (`home`, `about`, `caseStudies`, etc.)
3. Copy the shape of the existing item
4. Replace the text while keeping the punctuation and commas intact
5. Save the file
6. Refresh the page in the browser to preview it

The site is static, which means it is easy to manage as long as you follow the existing pattern.

---

## 9) Example: adding a new project summary

If you want to add a small research archive item, you can do it with a block like this:

```js
{
  title: "Sustainable Food Systems",
  blurb:
    "Explored how food packaging and behavioural cues influence consumer trust, participation, and decision-making in grocery settings.",
}
```

This will automatically appear in the archive list.

---

## 10) Need help?

If you want to make a change but are unsure where it belongs, start with the closest matching section in `content.js` and copy its format. This is the easiest and safest way to update the site without breaking anything.

The site is designed so most content changes are low-risk and can be done without touching the underlying code.
