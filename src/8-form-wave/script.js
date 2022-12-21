const labels = document.querySelectorAll(".form-control label");
labels.forEach(ele=>{
    ele.innerHTML = ele.innerText
    .split('')
    .map((word, index)=>`<span style="transition-delay:${index * 50}ms">${word}</span>`)
    .join('');
})
