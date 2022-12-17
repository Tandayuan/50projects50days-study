const left = document.querySelector(".left")
const right = document.querySelector(".right")

left.addEventListener('mouseenter',()=>left.classList.add("show-full"))
left.addEventListener('mouseleave',()=>left.classList.remove("show-full"))

right.addEventListener('mouseenter',()=>right.classList.add("show-full"))
right.addEventListener('mouseleave',()=>right.classList.remove("show-full"))