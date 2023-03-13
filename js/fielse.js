let hour = 12;
let greeting = "";

if (hour < 12) { 
    greeting = "Good Morning";
}

else if (hour < 18) {
    greeting = "Good Day";
}

else {
    greeting = "Good Evening";
}

console.log(greeting);

/*
== 같으면
=== 같으면 (테이터 타입도 동일해야함)
!= 다르면
!== 다르면 (데이터 타입도 달라야함)
> 크면
< 작으면
>= 크거나 같으면
<= 작거나 같으면
 */

/* const login = true;
if (login == true) {
    alert("Welcome~~ user!!");
}
else {
    alert("Please login...")
} */


const str = "1";
const num = 1;
if (str === num) {
    console.log("같다");
}
else {
    console.log("다르다");
}

// 논리연산자 &&(and), ||(or), !(not)
//&&
const x = 6;
const y = 3;
if(x > 5 && y < 5) {
//    alert("Window popup");
} 

if (x > 7 || y < 5); {
    // alert("Window popup");
}

const isLoginUser = false;
if (!isLoginUser) {
    alert("please Log in");
}

// 삼항연산자
// if`else 문의 한줄 버전
const age = 20;
let votable = (age < 18) ? "Too young" : "OLd enough";