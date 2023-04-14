const burger = document.querySelector(".header__burger");
const header_menu = document.querySelector(".header__menu");
const header_links = document.querySelectorAll(".header__menu-item");

burger.addEventListener("click", () => {
    header_menu.classList.toggle("open");
    header_links.forEach(i => {
        i.classList.toggle("fade");
    });
});
