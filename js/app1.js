// 여러종류의 변수 선언
const num = 1;   // 숫자
const str = "Smith"; // 문자
const bool = true; // 불린(참 or 거짓)
const 숫자배열 = [1, 2, 3, 4]; // 배열
const 문자배열 = ['a', 'b', 'c', 'd'];
const 함수 = function() {};
const 객체 = {};
const html요소1 = document.querySelector("#demo");
const html요소2 = document.querySelector(".style");
const html요소3 = document.querySelector("div");

let unm2 = num * 10; // num2 = 10
let str2 = str + "바보"; // str2 = "smith바보"
let bool2 = !bool; // bool2 = false
let 숫자배열2 = 숫자배열.slice(3); // 숫자배열2 = [4]
let 문자배열2 = 문자배열.splice(1, 2); // 문자배열 = ["a"] 문자배열 2 = ["b", "c"]
html요소1.innerHTML = "DEMO";
html요소2.innerHTML = "STYLE";
html요소3.innerHTML = "Text";

const num함수 = function(num) {
    return num * 10;
};

let num3 = num함수(num); // num3 = 10

const str함수 =  function(str) {
    return str + "바보";
};
let str3 = str함수(str);  // str3 = "Smith바보"

const bool함수 = function (bool) {
    return !bool;
};
let bool3 = bool함수(bool);  // bool3 = false

const 숫자배열함수 = function (숫자배열, i) {
    return 숫자배열.slice(i);
};
let 숫자배열3 = 숫자배열함수(숫자배열, 3); // 숫자배열3 = [4]

const 문자배열함수 = function (문자배열, x, y) {
    return 문자배열.splice(x, y)
};

let 문자배열3 = 문자배열함수(문자배열, 1, 2)  // 문자배열1 = ["a", "d"] 문자배열3 = ["b", "c"]


const divList = document.querySelectorAll("div");
const text배열 = ["Text", "DEMO", "STYLE"]


const html함수 = function(divList, text배열) {
    for(let i=0; i<divList.length; i++) {
        divList[i].innerHTML = text배열[i];      
    }
};

html함수(divList, text배열);