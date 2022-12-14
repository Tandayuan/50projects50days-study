const boxs = document.querySelectorAll(".box");
const handler = function(e) {
    const viewHeight = window.innerHeight;
    const bottomBorder = viewHeight / 5 * 4
    boxs.forEach(box=>{
        const boxTop = box.getBoundingClientRect().y;
        if(boxTop < bottomBorder){
            box.classList.add("box-show");
        }else{
            box.classList.remove("box-show");
        }
    })
}
window.addEventListener("scroll", handler)
handler()