let darkMode = localStorage.getItem("dark-mode");
let lightMode = localStorage.getItem("light-mode");
const lightDark = document.getElementById("html");
let input = document.getElementById("toggleSwitch");
const menuBtn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

// const enableDarkMode = () => {
//     lightDark.classList.add("dark");
//     localStorage.setItem("dark-mode", "enabled");
//     input.checked = true;
//   };
  
//   const enableLightMode = () => {
//     lightDark.classList.remove("dark");
//     localStorage.setItem("light-mode", "enabled");
//     input.checked = false;
//   };
  
//   if (darkMode === "enabled") {
//     enableDarkMode();
//   } else if (lightMode === "enabled") {
//     enableLightMode();
//   }
  
//   input.addEventListener("change", function () {
//     if (!this.checked) {
//       lightDark.classList.remove("dark");
//       localStorage.setItem("dark-mode", "disabled");
//       localStorage.setItem("light-mode", "enabled");
//     } else {
//       lightDark.classList.add("dark");
//       localStorage.setItem("dark-mode", "enabled");
//       localStorage.setItem("light-mode", "disabled");
//     }
//   });
  
  // Mobile Menu
  menuBtn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });