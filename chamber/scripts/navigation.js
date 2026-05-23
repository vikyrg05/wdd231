const button = document.getElementById("nav-button");
const nav = document.getElementById("nav-menu");

button.addEventListener("click", () => {
    nav.classList.toggle("open");
});