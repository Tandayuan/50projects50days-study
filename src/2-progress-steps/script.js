const boxs = document.querySelectorAll(".box")
const prev = document.querySelector("#prev")
const next = document.querySelector("#next")
const progressed = document.querySelector("#progressed");
let currentActivedIndex = 0;
if(currentActivedIndex === 0) prev.classList.add("disabled");
prev.addEventListener("click",function handlePrev(e) {
    let i = currentActivedIndex--;
    if(currentActivedIndex<0) currentActivedIndex = 0;
    updateStyle(currentActivedIndex);
    if(i>0) boxs[i].classList.remove("active");
})
next.addEventListener("click",function handleNext(e) {
    currentActivedIndex++;
    next.classList.remove("disabled");
    if(currentActivedIndex>boxs.length-1) currentActivedIndex = boxs.length-1
    updateStyle(currentActivedIndex);
    boxs[currentActivedIndex].classList.add("active");

})
function updateStyle(currentActivedIndex){
    //修改进度条的进度样式
    const rate = currentActivedIndex / (boxs.length-1) * 100;
    progressed.style.width = `${rate}%`;
    //修改按钮样式
    if(currentActivedIndex === boxs.length-1) next.classList.add("disabled");
    else if(currentActivedIndex === 0) prev.classList.add("disabled");
    else {
        prev.classList.remove("disabled");
        next.classList.remove("disabled")
    }
}