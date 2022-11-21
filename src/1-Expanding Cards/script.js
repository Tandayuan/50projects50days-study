const box = document.getElementsByClassName("box");
box[0].addEventListener("click", function handleClick (e) {
    const imgBoxList = document.querySelectorAll(".img-box")
    imgBoxList.forEach(e => {
        e.classList.remove("active");
    })
    const ele = e.target;
    ele.classList.add("active");
})
