/* Renders blog-post.html from window.siteContent.blog, selected by ?slug=. */
(function () {
  "use strict";

  var posts = window.siteContent.blog.items;
  var slug = new URLSearchParams(location.search).get("slug");
  var post =
    posts.find(function (item) {
      return item.slug === slug;
    }) || posts[0];

  document.title = post.title + " | Simran Kriplani";
  document.getElementById("blog-post-title").textContent = post.title;
  document.getElementById("blog-post-subtitle").textContent = post.meta || "";

  var body = document.getElementById("blog-post-body");
  (post.body || []).forEach(function (paragraph) {
    var p = document.createElement("p");
    p.textContent = paragraph;
    body.appendChild(p);
  });

  document.querySelector(".comments").dataset.commentsKey = post.slug;
})();
