// 함수의 기본형
// 함수의 선언 (만들어 놓기)
const func1 = function() {
    console.log("Hello~");
};
// 함수의 호출 (선언한 것을 가져다 쓰기), 함수는 호출을 해야만 함수 내부의 코드가 실행됨.
func1();

const func2 = function(x) {
    // 함수선언문의 ()안의 값(x)를 매개변수(Parameter)라고 한다.
    // x = x * 2;
    return x * 2;
};

let value2 = 2;
// 함수호출시 함수의 ()안에 넣어주는 값을 인수(Argument)라고한다

value2 = func2(value2);
console.log(value2);

let value3 = 3;
value3 = func2(value3);
console.log(value3);

const greet = function (userName) {
    console.log("Hello " + userName);
};

greet("최동주");

const greet2 = function (uesrName) {
    let returnValue = "Hello " + uesrName;
    return returnValue;
}

const greet2Return = greet2("smith");
console.log(greet2Return)

const multiply = function(x, y) {
    return x * y;
};

const value4 = multiply(4, 5);
console.log(multiply(4, 5));
console.log(value4);

const plus = function(x, y) {
    return x + y
}
console.log(plus(2, 8));

// 3개 이상의 매개변수(parameter)
const average = function(w, x, y, z) {
    const sum = w + x + y + z;
    return sum / 4;
};

console.log(average(5, 6, 7, 8))

// 평균구하기 함수의 배열버전

const average2 = function(x) {
    let sum = 0;
    for (let i=0; i<x.length; i++) {
        sum = sum + x[i];
    }
    return sum / x.length;  // 평균을 구하기 위해 총합을 배열의 길이로 나눈다.
};


const arr = [2, 3, 4, 5];
console.log(average2(arr));
console.log(average2([2, 3, 4, 5]));

// 함수선언의 다른 방법

const display = function() {
    console.log("Display");
}
/* function display() {
    console.log("Display");
} */
display();

const greet3 = function (uesrName) {
    let returnValue = "Hello " + uesrName;
    return returnValue;
};
const userName = prompt("이름을 적어주세요 : ")
const greet3Return = greet3(userName);
console.log(greet3Return)