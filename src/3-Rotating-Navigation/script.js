const wrapper = document.querySelector(".wrapper")
const open = document.querySelector("#open")
const close = document.querySelector("#close")
open.addEventListener("click",function (e) {
    wrapper.classList.add("show-tab")
})
close.addEventListener("click",function (e) {
    wrapper.classList.remove("show-tab")
})