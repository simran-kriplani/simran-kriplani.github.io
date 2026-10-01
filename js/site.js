/*
  Renders the homepage from window.siteContent (js/content.js) into the empty
  containers in index.html, then wires up the theme toggle, the carousels and the
  scroll-aware navigation.
*/
(function () {
  "use strict";

  var content = window.siteContent;
  var icons = window.siteIcons;
  var SVG_NS = "http://www.w3.org/2000/svg";
  var DRAG_THRESHOLD = 5; // px before a press on the blog carousel becomes a drag
  var SWIPE_DISTANCE = 60; // px a mouse drag must travel to move to another card

  /* ---------- Helpers ---------- */

  function byId(id) {
    return document.getElementById(id);
  }

  function setText(id, text) {
    byId(id).textContent = text;
  }

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function link(item, className) {
    var anchor = el("a", className, item.label);
    anchor.href = item.href;
    if (item.external) {
      anchor.target = "_blank";
      anchor.rel = "noopener noreferrer";
    }
    return anchor;
  }

  function svgIcon(markup, className) {
    var svg = document.createElementNS(SVG_NS, "svg");
    if (className) svg.setAttribute("class", className);
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("aria-hidden", "true");
    svg.innerHTML = markup.join("");
    return svg;
  }

  function appendTags(parent, tags) {
    tags.forEach(function (tag) {
      parent.appendChild(el("span", "tag", tag));
    });
  }

  function appendList(list, items, hrefFor) {
    items.forEach(function (item) {
      var li = el("li");
      li.appendChild(
        link({ label: item.title, href: hrefFor(item), external: true }),
      );
      list.appendChild(li);
    });
  }

  function postHref(item) {
    return item.link && item.link.href
      ? item.link.href
      : "blog-post.html?slug=" + encodeURIComponent(item.slug);
  }

  /* ---------- Home ---------- */

  function renderFacts() {
    var facts = byId("home-facts");
    content.home.facts.forEach(function (fact) {
      var dt = el("dt");
      dt.appendChild(
        svgIcon(
          icons.fact[fact[0].toLowerCase()] || icons.fact.location,
          "fact-icon",
        ),
      );
      dt.appendChild(el("span", "fact-label", fact[0]));
      facts.appendChild(dt);
      facts.appendChild(el("dd", null, fact[1]));
    });
  }

  function renderFeatured() {
    var featured = content.home.featured;
    var items = featured.items;
    var card = byId("featured-card");
    var index = 0;
    var timer = null;

    function show() {
      var item = items[index];
      card.textContent = "";
      card.appendChild(el("span", "featured-tag", item.tag || "featured"));
      card.appendChild(el("h3", null, item.title));
      card.appendChild(el("p", null, item.description));
      card.appendChild(link(item.link));
      setText("featured-count", index + 1 + " / " + items.length);
    }

    function step(direction) {
      index = (index + direction + items.length) % items.length;
      show();
    }

    function restartTimer() {
      clearInterval(timer);
      timer = setInterval(function () {
        step(1);
      }, 7500);
    }

    setText("featured-heading", featured.heading);
    show();

    if (items.length <= 1) {
      byId("featured-controls").hidden = true;
      return;
    }

    [
      ["featured-prev", -1],
      ["featured-next", 1],
    ].forEach(function (button) {
      byId(button[0]).addEventListener("click", function () {
        step(button[1]);
        restartTimer();
      });
    });
    restartTimer();
  }

  function renderSkillsPreview() {
    var preview = content.home.skillsPreview;
    var grid = byId("skills-preview-grid");

    setText("skills-preview-heading", preview.heading);
    preview.items.forEach(function (skill) {
      var card = el("article", "skill-card");
      var iconWrap = el("div", "skill-icon");
      iconWrap.appendChild(
        svgIcon(icons.skill[skill.icon] || icons.skill.behaviour),
      );
      card.appendChild(iconWrap);
      card.appendChild(el("h3", null, skill.label));
      if (skill.short) card.appendChild(el("p", null, skill.short));
      grid.appendChild(card);
    });

    var more = byId("skills-preview-link");
    more.textContent = preview.link.label;
    more.href = preview.link.href;
  }

  function renderHome() {
    var home = content.home;
    setText("home-title", home.title);
    setText("home-lede", home.lede);
    setText("home-cta", home.cta);

    var resume = byId("home-resume");
    resume.textContent = home.resume.label;
    resume.href = home.resume.href;
    if (home.resume.download === false) resume.removeAttribute("download");

    renderFacts();
    renderFeatured();
    renderSkillsPreview();
  }

  /* ---------- Case studies ---------- */

  function renderCaseStudies() {
    var studies = content.caseStudies;
    setText("case-studies-title", studies.title);
    setText("case-studies-intro", studies.intro);

    var list = byId("case-studies-list");
    studies.items.forEach(function (study) {
      var details = el("details", "case-study");
      details.id = study.slug;

      var summary = el("summary");
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
      appendTags(tags, study.tags);
      body.appendChild(tags);

      var target = study.detail || study.pdf;
      if (target) {
        body.appendChild(
          link(
            { label: target.label, href: target.href, external: true },
            "case-pdf-link",
          ),
        );
      }
      details.appendChild(body);
      list.appendChild(details);
    });

    setText("research-heading", studies.archiveHeading);
    appendList(byId("research-strip-list"), studies.archive, function (item) {
      return item.detail.href;
    });
  }

  /* ---------- Blog ---------- */

  function renderBlogArchive(blog) {
    // The first two posts live in the carousel; the rest are listed here.
    var archiveItems = blog.items.slice(2);
    if (!archiveItems.length) {
      byId("blog-archive-list").parentNode.hidden = true;
      return;
    }
    setText("blog-archive-heading", blog.archiveHeading);
    appendList(byId("blog-archive-list"), archiveItems, postHref);
  }

  function setupBlogCarousel(items) {
    var viewport = byId("blog-carousel-viewport");
    var track = byId("blog-list");
    var prev = byId("blog-prev");
    var next = byId("blog-next");

    items.forEach(function (item) {
      var card = el("article", "blog-card");
      var image = el("img", "blog-card-image");
      image.src = item.image || "assets/images/dress-good.png";
      image.alt = item.title;
      image.loading = "lazy";
      image.decoding = "async";

      var heading = el("h2");
      heading.appendChild(
        link({ label: item.title, href: postHref(item), external: true }),
      );
      var text = el("div", "blog-card-content");
      text.appendChild(heading);

      card.appendChild(image);
      card.appendChild(text);
      track.appendChild(card);
    });

    var nav = prev.parentNode;
    var reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
    var target = null; // card index an arrow/keyboard/drag scroll is heading to
    var idleTimer = null;
    var drag = null; // { startX, lastX, startScroll, moved } while the mouse is down
    var suppressClick = false;

    function cardShift() {
      var gap = parseFloat(getComputedStyle(track).gap) || 16;
      return track.firstElementChild.getBoundingClientRect().width + gap;
    }

    function maxScroll() {
      return viewport.scrollWidth - viewport.clientWidth;
    }

    function lastIndex() {
      return Math.ceil(maxScroll() / cardShift() - 0.01);
    }

    function positionOf(index) {
      return Math.min(index * cardShift(), maxScroll());
    }

    function currentIndex() {
      return target !== null
        ? target
        : Math.round(viewport.scrollLeft / cardShift());
    }

    function updateArrows() {
      var max = maxScroll();
      var pos = target !== null ? positionOf(target) : viewport.scrollLeft;
      nav.hidden = max < 1;
      prev.disabled = pos < 1;
      next.disabled = pos > max - 1;
    }

    // Runs once scrolling has been idle briefly: forget the target and let
    // CSS scroll snapping take over again.
    function settle() {
      target = null;
      viewport.classList.remove("is-settling");
      updateArrows();
    }

    function scheduleSettle() {
      clearTimeout(idleTimer);
      idleTimer = setTimeout(settle, 150);
    }

    // Targets accumulate, so repeated clicks during an animation are never lost.
    function goTo(index) {
      target = Math.max(0, Math.min(index, lastIndex()));
      viewport.scrollTo({
        left: positionOf(target),
        behavior: reducedMotion.matches ? "auto" : "smooth",
      });
      updateArrows();
      scheduleSettle();
    }

    prev.addEventListener("click", function () {
      goTo(currentIndex() - 1);
    });
    next.addEventListener("click", function () {
      goTo(currentIndex() + 1);
    });

    viewport.addEventListener("keydown", function (event) {
      if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
      event.preventDefault();
      goTo(currentIndex() + (event.key === "ArrowRight" ? 1 : -1));
    });

    viewport.addEventListener(
      "scroll",
      function () {
        updateArrows();
        if (!drag) scheduleSettle();
      },
      { passive: true },
    );
    window.addEventListener("resize", updateArrows);
    updateArrows();

    // Touch and trackpads scroll natively; this adds click-and-drag for the mouse.
    // Dragging only starts after a few pixels so a plain click still opens the post.
    viewport.addEventListener("pointerdown", function (event) {
      if (event.pointerType !== "mouse" || event.button !== 0) return;
      drag = {
        startX: event.clientX,
        lastX: event.clientX,
        startScroll: viewport.scrollLeft,
        moved: false,
      };
    });

    viewport.addEventListener("pointermove", function (event) {
      if (!drag) return;
      // The button was released outside the page: treat it as the end of the drag.
      if (!(event.buttons & 1)) return endDrag(event);
      drag.lastX = event.clientX;
      var delta = drag.lastX - drag.startX;
      if (!drag.moved) {
        if (Math.abs(delta) < DRAG_THRESHOLD) return;
        drag.moved = true;
        target = null;
        clearTimeout(idleTimer);
        viewport.classList.add("dragging", "is-settling");
        viewport.setPointerCapture(event.pointerId);
      }
      viewport.scrollLeft = drag.startScroll - delta;
    });

    function endDrag(event) {
      if (!drag) return;
      var ended = drag;
      drag = null;
      if (!ended.moved) return;

      viewport.classList.remove("dragging");
      try {
        viewport.releasePointerCapture(event.pointerId);
      } catch (error) {}

      // Swallow the click that follows a drag so it doesn't open a post.
      suppressClick = true;
      setTimeout(function () {
        suppressClick = false;
      });

      // Settle on the nearest card, moving at least one card after a real swipe.
      var delta = ended.lastX - ended.startX;
      var from = Math.round(ended.startScroll / cardShift());
      var to = Math.round(viewport.scrollLeft / cardShift());
      if (to === from && Math.abs(delta) > SWIPE_DISTANCE) {
        to += delta < 0 ? 1 : -1;
      }
      goTo(to);
    }

    viewport.addEventListener("pointerup", endDrag);
    viewport.addEventListener("pointercancel", endDrag);
    viewport.addEventListener(
      "click",
      function (event) {
        if (!suppressClick) return;
        event.preventDefault();
        event.stopPropagation();
      },
      true,
    );
    // Stop the browser's native link/image dragging from hijacking the gesture.
    viewport.addEventListener("dragstart", function (event) {
      event.preventDefault();
    });
  }

  function renderBlog() {
    var blog = content.blog;
    setText("blog-title", blog.title);
    setText("blog-intro", blog.intro);
    setupBlogCarousel(blog.items.slice(0, 6));
    renderBlogArchive(blog);
  }

  /* ---------- Creative space ---------- */

  function renderCreativeWork() {
    var section = content.creativeWork;
    setText("creative-space-title", section.title);
    setText("creative-space-intro", section.intro);

    var list = byId("creative-space-list");
    section.items.forEach(function (item) {
      var card = el("article", "feature-item");
      card.appendChild(el("h2", null, item.title));
      if (item.meta) card.appendChild(el("p", "feature-meta", item.meta));
      if (item.summary) {
        card.appendChild(el("p", "feature-summary", item.summary));
      }
      if (item.link) card.appendChild(link(item.link));
      list.appendChild(card);
    });
  }

  /* ---------- About ---------- */

  function renderEntry(parent, entry) {
    var article = el("div", "about-entry");
    var heading = el("div", "entry-head");
    heading.appendChild(el("span", null, entry.title));
    if (entry.meta) heading.appendChild(el("span", "entry-meta", entry.meta));
    article.appendChild(heading);
    if (entry.org) article.appendChild(el("div", "entry-org", entry.org));

    (entry.paragraphs || []).forEach(function (paragraph) {
      var p = el("p");
      if (typeof paragraph === "string") {
        p.textContent = paragraph;
      } else {
        p.appendChild(document.createTextNode(paragraph.text + " "));
        p.appendChild(link(paragraph.link));
        p.appendChild(document.createTextNode("."));
      }
      article.appendChild(p);
    });

    if (entry.coursework) {
      article.appendChild(el("p", "coursework", entry.coursework));
    }
    parent.appendChild(article);
  }

  function renderAbout() {
    var about = content.about;
    setText("about-title", about.title);
    setText("about-bio", about.bio);

    [
      ["about-education", about.education],
      ["about-experience", about.experience],
      ["about-leadership", about.leadership],
    ].forEach(function (group) {
      var section = byId(group[0]);
      section.appendChild(el("h2", null, group[1].heading));
      group[1].entries.forEach(function (entry) {
        renderEntry(section, entry);
      });
    });

    var skills = about.skills;
    setText("about-skills-heading", skills.heading);
    var grid = byId("skills-full-grid");
    skills.categories.forEach(function (category) {
      var column = el("div");
      column.appendChild(el("h3", null, category.name));
      var tags = el("div");
      appendTags(tags, category.tags);
      column.appendChild(tags);
      grid.appendChild(column);
    });

    var interests = el("p", "interests");
    interests.appendChild(el("strong", null, "Areas of interest: "));
    interests.appendChild(document.createTextNode(skills.interests));
    byId("about-skills").appendChild(interests);
  }

  /* ---------- Contact and footer ---------- */

  function renderContact() {
    var contact = content.contact;
    setText("contact-title", contact.title);
    setText("contact-lede", contact.lede);

    var list = byId("contact-list");
    contact.links.forEach(function (item) {
      var li = el("li");
      li.appendChild(svgIcon(icons.contact[item.type], "icon"));
      var anchor = link(item);
      anchor.appendChild(el("span", "contact-sub", item.sublabel));
      li.appendChild(anchor);
      list.appendChild(li);
    });
  }

  function renderFooter() {
    var footer = content.footer;
    setText("footer-name", footer.name + " - " + footer.location);
    setText("footer-updated", footer.updated);
  }

  /* ---------- Behaviour ---------- */

  function setupThemeToggle() {
    var root = document.documentElement;
    var toggle = byId("theme-toggle");

    function applyTheme(theme) {
      var label =
        theme === "dark" ? "Switch to light mode" : "Switch to dark mode";
      root.setAttribute("data-theme", theme);
      toggle.setAttribute("aria-label", label);
      toggle.setAttribute("title", label);
      try {
        localStorage.setItem("simran-theme", theme);
      } catch (error) {}
    }

    var saved = null;
    try {
      saved = localStorage.getItem("simran-theme");
    } catch (error) {}
    if (!saved) {
      saved = matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    applyTheme(saved === "dark" ? "dark" : "light");

    toggle.addEventListener("click", function () {
      applyTheme(root.getAttribute("data-theme") === "dark" ? "light" : "dark");
    });
  }

  function setupNavigation() {
    var navLinks = document.querySelectorAll("nav a[data-nav]");

    function setCurrent(page) {
      navLinks.forEach(function (anchor) {
        if (anchor.dataset.page === page) {
          anchor.setAttribute("aria-current", "page");
        } else {
          anchor.removeAttribute("aria-current");
        }
      });
    }

    // Highlight the nav link for the section crossing the middle of the viewport.
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) setCurrent(entry.target.dataset.page);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    document
      .querySelectorAll("main > section[data-page]")
      .forEach(function (section) {
        observer.observe(section);
      });

    // "#case-studies:<slug>" opens and scrolls to that case study.
    function openDeepLink() {
      var parts = location.hash.slice(1).split(":");
      var details = parts[0] === "case-studies" && parts[1] && byId(parts[1]);
      if (!details) return;
      details.open = true;
      requestAnimationFrame(function () {
        details.scrollIntoView({ block: "start" });
      });
    }

    window.addEventListener("hashchange", openDeepLink);
    openDeepLink();
    setCurrent(location.hash.slice(1).split(":")[0] || "home");
  }

  renderHome();
  renderCaseStudies();
  renderBlog();
  renderCreativeWork();
  renderAbout();
  renderContact();
  renderFooter();
  setupThemeToggle();
  setupNavigation();
})();
