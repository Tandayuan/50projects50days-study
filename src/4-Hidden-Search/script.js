const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const container = document.querySelector(".container");
btn.addEventListener("click", function handler(e) {
    container.classList.toggle("active-input")
    input.focus();
})