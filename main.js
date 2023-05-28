const menuBtn = document.querySelector(".menu-btn");
const mobileLinks = document.querySelector(".mobile-links");

menuBtn.addEventListener("click",  () => {
    mobileLinks.classList.toggle("open");
    menuBtn.classList.toggle("open");

});