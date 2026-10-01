/*
  Browser-local comment box for blog posts.
  Initialises every .comments[data-comments-key] element on the page.
  Comments are stored per post (keyed by slug) in localStorage and never leave the device.
*/
(function () {
  "use strict";

  var STORAGE_KEY = "simran-blog-comments";

  function readAll() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch (error) {
      return {};
    }
  }

  function init(section) {
    var key = section.dataset.commentsKey;
    var box = section.querySelector("textarea");
    var list = section.querySelector(".comment-list");

    function render() {
      list.textContent = "";
      (readAll()[key] || []).forEach(function (comment) {
        var li = document.createElement("li");
        li.textContent = comment;
        list.appendChild(li);
      });
    }

    section.querySelector("button").addEventListener("click", function () {
      var value = box.value.trim();
      if (!value) return;

      var all = readAll();
      (all[key] = all[key] || []).push(value);
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
      } catch (error) {}
      box.value = "";
      render();
    });

    render();
  }

  document.querySelectorAll(".comments[data-comments-key]").forEach(init);
})();
