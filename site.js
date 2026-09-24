(function () {
  "use strict";

  var content = window.siteContent;

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function appendLink(parent, link) {
    var anchor = el("a", null, link.label);
    anchor.href = link.href;
    if (link.external) {
      anchor.target = "_blank";
      anchor.rel = "noopener";
    }
    parent.appendChild(anchor);
  }

  function appendParagraph(parent, paragraph) {
    var p = el("p");
    if (typeof paragraph === "string") {
      p.textContent = paragraph;
    } else {
      p.appendChild(document.createTextNode(paragraph.text + " "));
      appendLink(p, paragraph.link);
      p.appendChild(document.createTextNode("."));
    }
    parent.appendChild(p);
  }

  function makeFactIcon(type) {
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("class", "fact-icon");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("aria-hidden", "true");

    var icons = {
      location: [
        '<path d="M12 21s6-5.5 6-11a6 6 0 1 0-12 0c0 5.5 6 11 6 11Z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>',
        '<circle cx="12" cy="10" r="2.5" fill="none" stroke="currentColor" stroke-width="1.7"/>',
      ],
      education: [
        '<path d="M3 8.5 12 4l9 4.5-9 4.5L3 8.5Z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>',
        '<path d="M7 10.8v3.7c0 1.5 2.2 3 5 3s5-1.5 5-3v-3.7" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>',
      ],
      credential: [
        '<path d="M7 4.5h10a2 2 0 0 1 2 2v10.5a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6.5a2 2 0 0 1 2-2Z" fill="none" stroke="currentColor" stroke-width="1.7"/>',
        '<path d="M9 8.5h6M9 12h6M9 15.5h4" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>',
      ],
    };

    svg.innerHTML = (icons[(type || "").toLowerCase()] || icons.location).join("");
    return svg;
  }

  function renderFacts() {
    var facts = document.getElementById("home-facts");
    content.home.facts.forEach(function (fact) {
      var label = fact[0].toLowerCase();
      var dt = el("dt");
      var icon = makeFactIcon(label);
      var srLabel = el("span", "fact-label", fact[0]);
      dt.appendChild(icon);
      dt.appendChild(srLabel);
      facts.appendChild(dt);
      facts.appendChild(el("dd", null, fact[1]));
    });
  }

  function renderHome() {
    var home = content.home;
    document.getElementById("home-title").textContent = home.title;
    document.getElementById("home-lede").textContent = home.lede;
    document.getElementById("home-cta").textContent = home.cta;
    if (home.resume) {
      var resumeLink = document.getElementById("home-resume");
      resumeLink.textContent = home.resume.label;
      resumeLink.href = home.resume.href;
      if (home.resume.download !== false) {
        resumeLink.setAttribute("download", "");
      }
    }
    renderFacts();

    var featured = document.getElementById("featured-content");
    featured.appendChild(el("h2", null, home.featured.heading));

    var featuredItems = home.featured.items || [home.featured];
    var featuredIndex = 0;
    var autoRotateDelay = 7500;
    var autoRotateTimer = null;
    var card = el("article", "featured-card");
    var controls = el("div", "featured-controls");
    var prevButton = el("button", "featured-nav-button", "←");
    var nextButton = el("button", "featured-nav-button", "→");
    prevButton.type = "button";
    nextButton.type = "button";
    prevButton.setAttribute("aria-label", "Previous featured work");
    nextButton.setAttribute("aria-label", "Next featured work");

    function renderFeaturedCard() {
      var item = featuredItems[featuredIndex];
      if (!item) return;

      card.innerHTML = "";
      card.appendChild(el("span", "featured-tag", item.tag || "featured"));
      card.appendChild(el("h3", null, item.title));
      card.appendChild(el("p", null, item.description));
      var link = el("a", null, item.link.label);
      link.href = item.link.href;
      card.appendChild(link);

      var count = el("span", "featured-count", (featuredIndex + 1) + " / " + featuredItems.length);
      controls.innerHTML = "";
      controls.appendChild(prevButton);
      controls.appendChild(count);
      controls.appendChild(nextButton);

      if (featuredItems.length <= 1) {
        controls.style.display = "none";
      } else {
        controls.style.display = "flex";
      }
    }

    function startAutoRotate() {
      if (autoRotateTimer) {
        clearInterval(autoRotateTimer);
      }

      if (featuredItems.length > 1) {
        autoRotateTimer = setInterval(function () {
          featuredIndex = (featuredIndex + 1) % featuredItems.length;
          renderFeaturedCard();
        }, autoRotateDelay);
      }
    }

    prevButton.addEventListener("click", function () {
      featuredIndex = (featuredIndex - 1 + featuredItems.length) % featuredItems.length;
      renderFeaturedCard();
      startAutoRotate();
    });

    nextButton.addEventListener("click", function () {
      featuredIndex = (featuredIndex + 1) % featuredItems.length;
      renderFeaturedCard();
      startAutoRotate();
    });

    featured.appendChild(card);
    featured.appendChild(controls);
    renderFeaturedCard();
    startAutoRotate();

    var skillsPreview = document.getElementById("skills-preview-content");
    skillsPreview.appendChild(el("h2", null, home.skillsPreview.heading));
    skillsPreview.appendChild(el("div", "skills-preview-grid", ""));
    skillsPreview.lastChild.id = "skills-preview-grid";
    var skillsLink = el("a", null, home.skillsPreview.link.label);
    skillsLink.href = home.skillsPreview.link.href;
    skillsPreview.appendChild(skillsLink);
  }

  function renderSkills() {
    var categories = content.about.skills.categories;
    var preview = document.getElementById("skills-preview-grid");
    var full = document.getElementById("skills-full-grid");

    if (preview) {
      preview.innerHTML = "";
      var topSkills = Array.isArray(window.topSkills) ? window.topSkills : [];

      if (topSkills.length) {
        topSkills.forEach(function (skill) {
          var card = el("article", "skill-card");
          var iconWrap = el("div", "skill-icon");
          var icon = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "svg",
          );
          icon.setAttribute("viewBox", "0 0 24 24");
          icon.setAttribute("aria-hidden", "true");
          var iconMarkup =
            (window.skillIconLibrary && window.skillIconLibrary[skill.icon]) ||
            (window.skillIconLibrary && window.skillIconLibrary.behaviour) ||
            "";
          icon.innerHTML = iconMarkup;
          iconWrap.appendChild(icon);
          card.appendChild(iconWrap);
          card.appendChild(el("h3", null, skill.label));
          if (skill.short) {
            card.appendChild(el("p", null, skill.short));
          }
          preview.appendChild(card);
        });
      } else {
        categories.forEach(function (category) {
          var previewColumn = el("div");
          previewColumn.appendChild(el("h3", null, category.name));
          previewColumn.appendChild(
            el(
              "p",
              null,
              category.tags.slice(0, 3).join(", ") +
                (category.tags.length > 3 ? ", ..." : ""),
            ),
          );
          preview.appendChild(previewColumn);
        });
      }
    }

    if (full) {
      full.innerHTML = "";
      categories.forEach(function (category) {
        var fullColumn = el("div");
        fullColumn.appendChild(el("h3", null, category.name));
        var tags = el("div");
        category.tags.forEach(function (tag) {
          tags.appendChild(el("span", "tag", tag));
        });
        fullColumn.appendChild(tags);
        full.appendChild(fullColumn);
      });
    }
  }

  function renderEntry(parent, entry) {
    var article = el("div", "about-entry");
    var heading = el("div", "entry-head");
    heading.appendChild(el("span", null, entry.title));
    if (entry.meta) heading.appendChild(el("span", "entry-meta", entry.meta));
    article.appendChild(heading);
    if (entry.org) article.appendChild(el("div", "entry-org", entry.org));
    (entry.paragraphs || []).forEach(function (paragraph) {
      appendParagraph(article, paragraph);
    });
    if (entry.coursework) {
      article.appendChild(el("p", "coursework", entry.coursework));
    }
    parent.appendChild(article);
  }

  function renderAbout() {
    var about = content.about;
    document.getElementById("about-title").textContent = about.title;
    document.getElementById("about-bio").textContent = about.bio;

    [
      ["about-education", about.education],
      ["about-experience", about.experience],
      ["about-leadership", about.leadership],
    ].forEach(function (group) {
      var section = document.getElementById(group[0]);
      group = group[1];
      section.appendChild(el("h2", null, group.heading));
      group.entries.forEach(function (entry) {
        renderEntry(section, entry);
      });
    });

    var skills = document.getElementById("about-skills");
    document.getElementById("about-skills-heading").textContent =
      about.skills.heading;
    var interests = el("p", "interests");
    interests.appendChild(el("strong", null, "Areas of interest: "));
    interests.appendChild(document.createTextNode(about.skills.interests));
    skills.appendChild(interests);
  }

  function renderCaseStudies() {
    var studies = content.caseStudies;
    document.getElementById("case-studies-title").textContent = studies.title;
    document.getElementById("case-studies-intro").textContent = studies.intro;
    var list = document.getElementById("case-studies-list");

    studies.items.forEach(function (study) {
      var details = document.createElement("details");
      details.className = "case-study";
      details.id = study.slug;
      var summary = document.createElement("summary");
      summary.appendChild(el("span", "case-title", study.title));
      var meta = el("span", "case-meta", study.meta);
      meta.appendChild(el("span", "case-toggle"));
      summary.appendChild(meta);
      details.appendChild(summary);
      var body = el("div", "case-body");
      study.paragraphs.forEach(function (paragraph) {
        body.appendChild(el("p", null, paragraph));
      });
      var tags = el("div");
      study.tags.forEach(function (tag) {
        tags.appendChild(el("span", "tag", tag));
      });
      body.appendChild(tags);
      if (study.detail) {
        var detailLink = el("a", "case-pdf-link", study.detail.label);
        detailLink.href = study.detail.href;
        detailLink.target = "_blank";
        detailLink.rel = "noopener";
        body.appendChild(detailLink);
      } else if (study.pdf) {
        var pdfLink = el("a", "case-pdf-link", study.pdf.label);
        pdfLink.href = study.pdf.href;
        pdfLink.target = "_blank";
        pdfLink.rel = "noopener";
        body.appendChild(pdfLink);
      }
      details.appendChild(body);
      list.appendChild(details);
    });

    document.getElementById("research-heading").textContent =
      studies.archiveHeading;
    var archive = document.getElementById("research-strip-list");
    studies.archive.forEach(function (item) {
      var li = document.createElement("li");
      var link = document.createElement("a");
      var targetHref = item.detail && item.detail.href ? item.detail.href : "case-study.html?slug=" + encodeURIComponent(item.slug);
      link.href = targetHref;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = item.title;
      li.appendChild(link);
      archive.appendChild(li);
    });
  }

  function renderFeatureList(sectionKey, listId) {
    var section = content[sectionKey];
    document.getElementById(listId.replace("-list", "-title")).textContent =
      section.title;
    document.getElementById(listId.replace("-list", "-intro")).textContent =
      section.intro;

    var list = document.getElementById(listId);
    section.items.forEach(function (item) {
      var card = el("article", "feature-item");
      card.appendChild(el("h2", null, item.title));
      if (item.meta) {
        card.appendChild(el("p", "feature-meta", item.meta));
      }
      if (item.summary) {
        card.appendChild(el("p", "feature-summary", item.summary));
      }
      if (item.link) {
        appendLink(card, item.link);
      }
      list.appendChild(card);
    });
  }

  function renderBlogArchive() {
    var blog = content.blog;
    if (!blog || !blog.archiveHeading || !blog.items || blog.items.length <= 2) {
      var archiveWrap = document.getElementById("blog-archive-list");
      var archiveHeading = document.getElementById("blog-archive-heading");
      if (archiveWrap) archiveWrap.parentNode.style.display = "none";
      if (archiveHeading) archiveHeading.textContent = "";
      return;
    }

    document.getElementById("blog-archive-heading").textContent =
      blog.archiveHeading;

    var archive = document.getElementById("blog-archive-list");
    var archiveItems = blog.items.slice(2);
    archiveItems.forEach(function (item) {
      var li = document.createElement("li");
      var link = document.createElement("a");
      var href =
        item.link && item.link.href
          ? item.link.href
          : "blog-post.html?slug=" + encodeURIComponent(item.slug);
      link.href = href;
      link.target = item.link && item.link.external ? "_blank" : "_self";
      link.rel = "noopener noreferrer";
      link.textContent = item.title;
      li.appendChild(link);
      archive.appendChild(li);
    });
  }

  function renderBlog() {
    var blog = content.blog;
    var blogList = document.getElementById("blog-list");
    var blogTitle = document.getElementById("blog-title");
    var blogIntro = document.getElementById("blog-intro");
    var carouselViewport = document.getElementById("blog-carousel-viewport");

    if (blogTitle) blogTitle.textContent = blog.title;
    if (blogIntro) blogIntro.textContent = blog.intro;

    var carouselItems = (blog.items || []).slice(0, 6);
    var currentIndex = 0;
    var dragStartX = 0;
    var dragCurrentX = 0;
    var dragStartTranslate = 0;
    var isDragging = false;

    function buildHref(item) {
      if (item && item.link && item.link.href) {
        return item.link.href;
      }
      return "blog-post.html?slug=" + encodeURIComponent(item.slug);
    }

    function getCardShift() {
      if (!blogList || !blogList.querySelector(".blog-card")) return 0;
      var cards = blogList.querySelectorAll(".blog-card");
      var gap = parseFloat(getComputedStyle(blogList).gap) || 16;
      return cards[0].getBoundingClientRect().width + gap;
    }

    function updateCarouselPosition() {
      if (!blogList) return;
      var offset = currentIndex * getCardShift();
      blogList.style.transition = "transform 0.52s cubic-bezier(0.22, 1, 0.36, 1)";
      blogList.style.transform = "translateX(-" + offset + "px)";
    }

    function renderBlogCards() {
      if (!blogList) return;
      blogList.innerHTML = "";

      carouselItems.forEach(function (item) {
        var card = el("article", "blog-card");
        var image = el("img", "blog-card-image");
        image.src = item.image || "assets/images/dress-good.png";
        image.alt = item.title;

        var contentWrap = el("div", "blog-card-content");
        var heading = el("h2");
        var titleLink = el("a", null, item.title);
        titleLink.href = buildHref(item);
        titleLink.target = item.link && item.link.external ? "_blank" : "_self";
        titleLink.rel = "noopener noreferrer";
        heading.appendChild(titleLink);
        contentWrap.appendChild(heading);

        card.appendChild(image);
        card.appendChild(contentWrap);
        blogList.appendChild(card);
      });

      requestAnimationFrame(updateCarouselPosition);
    }

    function step(direction) {
      if (carouselItems.length <= 2) return;
      currentIndex = (currentIndex + direction + carouselItems.length) % carouselItems.length;
      updateCarouselPosition();
    }

    function onPointerDown(event) {
      if (event.pointerType === "mouse" && event.button !== 0) return;
      isDragging = true;
      dragStartX = event.clientX;
      dragCurrentX = event.clientX;
      dragStartTranslate = currentIndex * getCardShift();
      if (carouselViewport) {
        carouselViewport.classList.add("dragging");
      }
      blogList.style.transition = "none";
      blogList.setPointerCapture(event.pointerId);
    }

    function onPointerMove(event) {
      if (!isDragging) return;
      dragCurrentX = event.clientX;
      var delta = dragCurrentX - dragStartX;
      var translate = dragStartTranslate - delta;
      blogList.style.transform = "translateX(-" + translate + "px)";
    }

    function onPointerUp(event) {
      if (!isDragging) return;
      isDragging = false;
      if (carouselViewport) {
        carouselViewport.classList.remove("dragging");
      }
      var delta = dragCurrentX - dragStartX;
      if (Math.abs(delta) > 60) {
        step(delta < 0 ? 1 : -1);
      } else {
        updateCarouselPosition();
      }
      if (event && event.pointerId !== undefined && blogList && blogList.hasPointerCapture) {
        try {
          blogList.releasePointerCapture(event.pointerId);
        } catch (error) {
          // no-op
        }
      }
    }

    if (carouselViewport) {
      carouselViewport.addEventListener("pointerdown", onPointerDown);
      carouselViewport.addEventListener("pointermove", onPointerMove);
      carouselViewport.addEventListener("pointerup", onPointerUp);
      carouselViewport.addEventListener("pointerleave", onPointerUp);
      carouselViewport.addEventListener("pointercancel", onPointerUp);
    }

    window.addEventListener("resize", updateCarouselPosition);
    renderBlogCards();
    renderBlogArchive();
  }

  function renderCreativeWork() {
    renderFeatureList("creativeWork", "creative-space-list");
  }

  function makeIcon(type) {
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("class", "icon");
    svg.setAttribute("viewBox", "0 0 24 24");
    var paths = {
      email: [
        '<path d="M3 6h18v12H3z" stroke-linejoin="round" />',
        '<path d="M3 6l9 7 9-7" stroke-linejoin="round" />',
      ],
      phone: [
        '<path d="M6.5 3h3l1.5 4-2 1.5a12 12 0 0 0 6.5 6.5l1.5-2 4 1.5v3a2 2 0 0 1-2 2C11.5 19.5 4.5 12.5 4.5 5a2 2 0 0 1 2-2z" stroke-linejoin="round" />',
      ],
      linkedin: [
        '<path d="M9 15l6-6M15 15V9H9" stroke-linecap="round" stroke-linejoin="round" />',
        '<rect x="3" y="3" width="18" height="18" rx="2" />',
      ],
    };
    svg.innerHTML = paths[type].join("");
    return svg;
  }

  function renderContact() {
    var contact = content.contact;
    document.getElementById("contact-title").textContent = contact.title;
    document.getElementById("contact-lede").textContent = contact.lede;
    var list = document.getElementById("contact-list");
    contact.links.forEach(function (item) {
      var li = document.createElement("li");
      li.appendChild(makeIcon(item.type));
      var link = el("a");
      link.href = item.href;
      if (item.external) {
        link.target = "_blank";
        link.rel = "noopener";
      }
      link.appendChild(document.createTextNode(item.label));
      link.appendChild(el("span", "contact-sub", item.sublabel));
      li.appendChild(link);
      list.appendChild(li);
    });
  }

  function renderFooter() {
    var footer = content.footer;
    document.getElementById("footer-name").textContent =
      footer.name + " - " + footer.location;
    document.getElementById("footer-updated").textContent = footer.updated;
  }

  function setupThemeToggle() {
    var root = document.documentElement;
    var toggle = document.getElementById("theme-toggle");
    if (!toggle) return;

    function applyTheme(theme) {
      var nextTheme = theme === "dark" ? "dark" : "light";
      root.setAttribute("data-theme", nextTheme);
      toggle.setAttribute(
        "aria-label",
        nextTheme === "dark" ? "Switch to light mode" : "Switch to dark mode",
      );
      toggle.setAttribute(
        "title",
        nextTheme === "dark" ? "Switch to light mode" : "Switch to dark mode",
      );
      try {
        localStorage.setItem("simran-theme", nextTheme);
      } catch (error) {}
    }

    var savedTheme = null;
    try {
      savedTheme = localStorage.getItem("simran-theme");
    } catch (error) {}

    if (!savedTheme) {
      savedTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }

    applyTheme(savedTheme);

    toggle.addEventListener("click", function () {
      var current = root.getAttribute("data-theme") === "dark" ? "dark" : "light";
      applyTheme(current === "dark" ? "light" : "dark");
    });
  }

  function setupNavigation() {
    var sections = Array.prototype.slice.call(
      document.querySelectorAll("main > section[data-page]"),
    );
    var navLinks = Array.prototype.slice.call(
      document.querySelectorAll("nav a[data-nav]"),
    );

    function setCurrent(page) {
      navLinks.forEach(function (link) {
        if (link.getAttribute("data-page") === page) {
          link.setAttribute("aria-current", "page");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    }

    if ("IntersectionObserver" in window) {
      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting)
              setCurrent(entry.target.getAttribute("data-page"));
          });
        },
        { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
      );
      sections.forEach(function (section) {
        observer.observe(section);
      });
    }

    function openDeepLink() {
      var raw = (location.hash || "").replace("#", "");
      var parts = raw.split(":");
      if (parts[0] === "case-studies" && parts[1]) {
        var details = document.getElementById(parts[1]);
        if (details) {
          details.open = true;
          window.requestAnimationFrame(function () {
            details.scrollIntoView({ block: "start" });
          });
        }
      }
    }

    window.addEventListener("hashchange", openDeepLink);
    openDeepLink();
    setCurrent(
      (location.hash || "#home").replace("#", "").split(":")[0] || "home",
    );
  }

  renderHome();
  renderSkills();
  renderAbout();
  renderCaseStudies();
  renderBlog();
  renderCreativeWork();
  renderContact();
  renderFooter();
  setupThemeToggle();
  setupNavigation();
})();
