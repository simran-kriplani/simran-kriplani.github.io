/* Applies the visitor's saved light/dark choice before first paint (no flash). */
try {
  var savedTheme = localStorage.getItem("simran-theme");
  if (savedTheme === "light" || savedTheme === "dark") {
    document.documentElement.setAttribute("data-theme", savedTheme);
  }
} catch (error) {}
