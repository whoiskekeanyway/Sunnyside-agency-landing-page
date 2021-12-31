const toggleBtn = document.querySelector(".menu");
const nav = document.querySelector(".nav-list");
const burger = document.querySelector(".menu");

toggleBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
  //burger animation
  burger.classList.toggle("toggle");
});
