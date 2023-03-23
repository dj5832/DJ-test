const pTag = document.querySelectorAll("p")
let i=0
for (let i=0; i<pTag.length; i++) {
    pTag[i].addEventListener("click",  function (e) {
        pTag[0].classList.add("active")
        pTag[1].classList.add("active")
        pTag[2].classList.add("active")
        pTag[3].classList.add("active")
        pTag[4].classList.add("active")
    for (let j=0; j<pTag.length; j++) {
        if(i < j) {
            pTag[j].classList.remove("active")
        }
    }
})
}

console.log(pTag)
