// Navbar
window.onscroll = () => {
    const header = document.querySelector("header");
    const fixedTopNav = header.offsetTop;

    if (window.pageYOffset > fixedTopNav) {
        header.classList.add("navbar-fixed")
    } else {
        header.classList.add("navbar-fixed")
    }
}

// Hamburger
const hamburger = document.getElementById("hamburger");
const nav_menu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("hamburger-aktif");
    nav_menu.classList.toggle("hidden");
})