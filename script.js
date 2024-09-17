const menu = document.querySelector(".menu");
const OpenMenuBtn = document.querySelector(".open-menu-btn");
const CloseMenuBtn = document.querySelector(".close-menu-btn");


[OpenMenuBtn, CloseMenuBtn].forEach((btn) => {
    btn.addEventListener("click", () => {
        menu.classList.toggle("open");
        menu.style.transition = "all 0.5s ease";
    });
});


menu.addEventListener("transitionend", function () {
    this.removeAttribute("style");
});
menu.querySelectorAll(".dropdown > i").forEach((arrow) => {
    arrow.addEventListener("click", function () {
        
        this.closest(".dropdown").classList.toggle("active");
    });
});


