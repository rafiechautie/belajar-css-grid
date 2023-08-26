const hamburger = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");

hamburger.addEventListener('click', function () {
    nav.classList.toggle("slide");
})