// 변수를 공부해보자
// 변수를 선언하는 3가지 방법
//var
var value = 1;
value = 2;
value = 10;
value = 'Smith';
value = 5;
value = value + 1;
var value = 1000;
console.log(value);


//let
let counter = 1;
// let a = 2; // 이중선언 에러 값이 바뀔 수 있는 것은 let 사용
counter = counter + 1;
console.log(counter);


//const
const url = "www.naver.com"
// const url = 2; 이중선언 에러 있음
// url = 2; // 상수는 값을 바꿀 수 없다 값을 바꾸지 않을 때 사용
console.log(url)


// 변수 variable
// divElement 같은 작명방법을 CamelCase 라고 함 첫번째 !소문자시작 / 연결되는 것을 !대문자시작
const divElement = document.querySelector("#div"); /* Assignment  어싸인한다. 선언한다.*/
divElement.innerHTML = "aaaaaa";
divElement.style.color = 'red';
divElement.style.backgroundColor = 'yellow';
divElement.style.fontSize = '40px';
divElement.style.marginBottom = '20px';

console.dir(divElement)
console.log(divElement, typeof divElement)
const fontStyle = document.querySelector(".class")

fontStyle.innerHTML = "star";
fontStyle.style.maxWidth = '1000px'
fontStyle.style.margin = 'auto';
fontStyle.style.padding = '30px';
fontStyle.style.fontWeight = 'bold';
fontStyle.style.fontSize = '0.8em';
fontStyle.style.fontFamily = 'serif';
fontStyle.style.border = '1px solid black';
fontStyle.style.textAlign = 'center';
fontStyle.style.letterSpacing = '10px';