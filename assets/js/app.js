const accordion = document.querySelectorAll(".accordian-box");
const accordionHeading = document.querySelectorAll(".accordian-heading");

accordionHeading.forEach(e => {
    e.addEventListener("click", () => {
        const activeAccrodion = document.querySelector(".accordian-box.active");
        e.parentElement.classList.toggle("active");
        activeAccrodion && activeAccrodion.classList.remove("active");
    })
});