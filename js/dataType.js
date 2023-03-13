// 8종류의 데이터타입을 공부하자

// String ** 문자열
const str1 = "Smith";
const str2 = "1";
const str3 = "Smith"
console.log(str1, typeof str1);

// Number ** 숫자      
const num1 = 1;
const num2 = 123124151;
const num3 = 1.5;
console.log(num1, typeof num1);

// Boolean ** 참, 거짓
const bool1 = true;
const bool2 = false;
console.log(bool1, typeof bool1);

// Object ** 객체
const obj1 = [1,2,3,4,5,6,7];  // 배열, Array
const obj2 = {
    userName: "Smith",
    userAge: 25,
};
console.log(obj1, typeof obj1);

// Undefined // const는 상수라서 값이 반드시 존재해야만 오류가 없음
let undef;
console.log(undef, typeof undef);

// Null  // null은 아무것도 없다는 의미 (==void)
let nulValue = null;
let objectType = null; // object의 초기값으로 Null을 사용할 수 있다. 
console.log(nulValue, typeof nulValue);

// Symbol(쓸일 없음) 

// Bigint(큰 정수 쓸일 없음) 