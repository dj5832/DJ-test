const btnmi = document.querySelector(".decrease")
const btnre = document.querySelector(".reset")
const btnplus = document.querySelector(".increase")
const span = document.querySelector("#value")


btnmi.addEventListener("click", (e) => {
    let counter = parseInt(span.innerHTML, 10)
    counter = counter - 1;
    span.innerHTML = counter
    color()
})

btnre.addEventListener("click", (e) => {
    span.innerHTML = 0;
    color()
})

btnplus.addEventListener("click", (e) => {
    let counter = parseInt(span.innerHTML, 10)
    counter = counter + 1;
    span.innerHTML = counter
    color()
})

const color = function (e) {
    span.classList.remove("red")
    span.classList.remove("green")
    span.classList.remove("black")
    if (span.innerHTML < 0){
        span.classList.add("red")
    }
    else if (span.innerHTML > 0) {
        span.classList.add("green")
    }
    else if (span.innerHTML === 0) {
        span.classList.add("black")
    }
}
  