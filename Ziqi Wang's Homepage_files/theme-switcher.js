(function () {
  var root = document.documentElement;
  var storageKey = "ziqi-color-theme";
  var toggle = document.querySelector(".theme-toggle");

  if (!toggle) return;

  function setTheme(theme, remember) {
    var isDark = theme === "dark";
    root.dataset.theme = theme;
    root.style.colorScheme = theme;
    toggle.setAttribute("aria-pressed", String(isDark));
    toggle.setAttribute("aria-label", isDark ? "Switch to day mode" : "Switch to night mode");
    toggle.title = isDark ? "Switch to day mode" : "Switch to night mode";

    if (remember) {
      try {
        localStorage.setItem(storageKey, theme);
      } catch (error) {
        // Theme switching still works when browser storage is unavailable.
      }
    }
  }

  setTheme(root.dataset.theme === "dark" ? "dark" : "light", false);

  toggle.addEventListener("click", function () {
    setTheme(root.dataset.theme === "dark" ? "light" : "dark", true);
  });
}());
