// -- Array 어레이, 배열
const cars = ['jeep', 'volvo', 'bmw'];
console.log(cars);
console.log(cars.length);
console.log(cars['0']);

// Array methods 배열의 매쏘드
// Push
cars.push("Hyundai");
// cars[3] = "Hyundai"; 권장하지 않음 숫자 실수를 잘하기 때문
console.log(cars);

//pop 마지막 아이템 삭제
cars.pop();
console.log(cars);

// //slice 잘라내기 (포함 , 미포함) 원본을 회손 안함.
// const a = cars.slice(1);
// console.log(a);
// console.log(cars);

// const b = cars.slice(0, 2);
// console.log(b);
// console.log(cars);

// const c = cars.slice(0);
// console.log(c);
// console.log(cars);

//배열의 복사
// const copy = cars;

// const copy = cars.slice(0);
// console.log(copy);
// copy[0] = "Hyundai";
// console.log(copy);
// 문제점 등장 - 값복사와 참조복사의 차이로 발생함
// slice(0) 을 이용하여 강제로 값복사를 실행시키면 문제를 해결할 수 있다.
// console.log(cars);

//splice 삭제하기(1번, index로부터 1개를 지우라는 뜻) 삭제이기때문에 원본 회손을 한다. 삭제한 값을 따로 보관해 놓는다.
const spliceValue = cars.splice(0, 2);
console.log(spliceValue);
console.log(cars);

const x = cars.splice(0, 1, "현대", "르노", "기아");
console.log(x);

// map, filter, reduce 3대장

// 상수로서의 배열
const 과일들 = ['사과', '배', '귤', '복숭아'];
과일들[0] = '오렌지';
// 과일들 = ['banana]; 에러발생, 상수 변경 시도
console.log(과일들);