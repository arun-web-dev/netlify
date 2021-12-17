"use sctrict";
const hamburger = document.querySelector(".hamburger");
const navlinks = document.querySelector(".nav-links-menu");

hamburger.addEventListener("click", () => {
  navlinks.classList.toggle("nav-active");
  hamburger.classList.toggle("change");
});
