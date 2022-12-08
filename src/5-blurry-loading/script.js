// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
/**
 * 将一个在输入范围内动态变化的值转换为指定范围内动态变化的值
 * @param {*} num 输入动态变化的值
 * @param {*} in_min 输入范围最小值
 * @param {*} in_max 输入范围最大值
 * @param {*} out_min 转换输出范围最小值
 * @param {*} out_max 转换输出范围最大值
 * @returns 转换输出动态变化的值
 */
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}
const bg = document.querySelector(".bg");
const loadText = document.querySelector(".loading-text");

let i = 0;
let timer = null;
const fn = () => {
    i++;
    if (i > 99) {
       clearInterval(timer);
    }
    loadText.innerHTML = `${i}%`;
    loadText.style.opacity = scale(i, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(i, 0, 100, 30, 0)}px)`;
}
timer = setInterval(fn, 30);
