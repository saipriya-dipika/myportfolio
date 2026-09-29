const toggle = document.getElementById("theme-toggle");

function applyTheme(theme) {
  const dark = theme === "dark";
  document.body.classList.toggle("dark-mode", dark);
  toggle.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
  toggle.setAttribute("title", dark ? "Switch to light mode" : "Switch to dark mode");
}

const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  applyTheme(savedTheme);
} else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
  applyTheme("dark");
} else {
  applyTheme("light");
}

toggle.addEventListener("click", () => {
  const nextTheme = document.body.classList.contains("dark-mode") ? "light" : "dark";
  localStorage.setItem("theme", nextTheme);
  applyTheme(nextTheme);
});
