/* Renders case-study.html from window.siteContent.caseStudies, selected by ?slug=. */
(function () {
  "use strict";

  var studies = window.siteContent.caseStudies;
  var all = studies.items.concat(studies.archive);
  var slug = new URLSearchParams(location.search).get("slug");
  var study =
    all.find(function (item) {
      return item.slug === slug;
    }) || all[0];

  document.title = study.title + " | Simran Kriplani";
  document.getElementById("case-study-title").textContent = study.title;
  document.getElementById("case-study-subtitle").textContent = study.meta || "";

  var image = document.getElementById("case-study-image");
  if (study.photo) image.src = study.photo.src;
  image.alt = (study.photo && study.photo.alt) || study.title;

  var tags = document.getElementById("case-study-tags");
  (study.tags || []).forEach(function (tag) {
    var chip = document.createElement("span");
    chip.className = "tag";
    chip.textContent = tag;
    tags.appendChild(chip);
  });

  var body = document.getElementById("case-study-body");
  (study.paragraphs || []).forEach(function (paragraph) {
    var p = document.createElement("p");
    p.textContent = paragraph;
    body.appendChild(p);
  });

  if (study.pdf) {
    var link = document.getElementById("literature-link");
    link.href = study.pdf.href;
    link.title = study.pdf.label || "Open PDF";
  }
})();
