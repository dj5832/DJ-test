const loginForm = document.querySelector("#loginForm");
const input = document.querySelector("input");
const h1 = document.querySelector("#greeting")
const callback = function(e) {
    e.preventDefault();
    console.log("submit");
    // localStorage는 이미 브라우저가 기본적으로 가진녀석임
    localStorage.setItem("userName", input.value);
    const savedName = localStorage.getItem("userName");
    console.log(savedName);
    h1.innerHTML = savedName;
    
};

loginForm.addEventListener("submit", callback);

