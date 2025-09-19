// Set initial colour scheme on load
if (
  localStorage.getItem("colour-mode") === "dark" ||
  (window.matchMedia("(prefers-color-scheme: dark)").matches &&
    !localStorage.getItem("colour-mode"))
) {
  document.documentElement.setAttribute("colour-mode", "dark");
} else {
  document.documentElement.setAttribute("colour-mode", "light");
}

// Switch to light mode
function toggleLightMode() {
  document.documentElement.setAttribute("colour-mode", "light");
  localStorage.setItem("colour-mode", "light");
}

// switch to dark mode
function toggleDarkMode() {
  document.documentElement.setAttribute("colour-mode", "dark");
  localStorage.setItem("colour-mode", "dark");
}

// listen for clicks on the light mode button
const lightSwitch = document.querySelector(".switch-to-light");
lightSwitch.addEventListener("click", toggleLightMode);

// listen for clicks on the dark mode button
const darkSwitch = document.querySelector(".switch-to-dark");
darkSwitch.addEventListener("click", toggleDarkMode);
