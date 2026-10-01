/*
  Article-page extras: a thin reading-progress bar along the top of the window,
  and an estimated reading time added after the subtitle.
*/
(function () {
  "use strict";

  var article = document.querySelector(".article");
  var body = document.querySelector(".article-body, .post-body");
  if (!article || !body) return;

  // Reading time at ~220 words per minute; skipped for very short pages.
  var words = body.textContent.trim().split(/\s+/).length;
  var subtitle = document.querySelector(".subtitle");
  if (subtitle && words >= 150) {
    var time = document.createElement("span");
    time.className = "reading-time";
    time.textContent = Math.max(1, Math.round(words / 220)) + " min read";
    subtitle.appendChild(time);
  }

  var bar = document.createElement("div");
  bar.className = "reading-progress";
  bar.setAttribute("aria-hidden", "true");
  document.body.prepend(bar);

  var ticking = false;
  function update() {
    ticking = false;
    var rect = article.getBoundingClientRect();
    var distance = rect.height - window.innerHeight;
    var progress = distance > 0 ? -rect.top / distance : 1;
    bar.style.transform = "scaleX(" + Math.min(1, Math.max(0, progress)) + ")";
  }
  function requestUpdate() {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  }

  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);
  update();
})();
