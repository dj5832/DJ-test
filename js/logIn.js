const loginForm = document.querySelector("#loginForm");
const input = document.querySelector("input");
const h1 = document.querySelector("#greeting")

const savedName = localStorage.getItem("userName");
const callback = function(e) {
    e.preventDefault();
    console.log("submit");
    // localStorage는 이미 브라우저가 기본적으로 가진녀석임
    localStorage.setItem("userName", input.value);
};
if(savedName === null) {
    loginForm.classList.remove("hidden")
}
else {
    loginForm.classList.add("hidden")
    h1.innerHTML = "Hello~ " + savedName;
}

loginForm.addEventListener("submit", callback);

