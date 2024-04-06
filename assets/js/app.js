const accordion = document.querySelectorAll(".accordian-box");
const accordionHeading = document.querySelectorAll(".accordian-heading");

accordionHeading.forEach(e => {
    e.addEventListener("click", () => {
        const activeAccrodion = document.querySelector(".accordian-box.active");
        e.parentElement.classList.toggle("active");
        activeAccrodion && activeAccrodion.classList.remove("active");
    })
});
let menuicon = document.querySelector(".menubar");
let menulist = document.querySelector(".nav-item");
menuicon.addEventListener("click", function () {
    menulist.classList.toggle("show");
})