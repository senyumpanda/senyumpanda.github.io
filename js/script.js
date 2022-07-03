const hamburger = document.getElementById("hamburger");
const nav_menu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("hamburger-aktif");
    nav_menu.classList.toggle("hidden");
})