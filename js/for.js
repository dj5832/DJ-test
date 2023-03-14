const fruits = ["apple", "orange", "banana", "pear", "pineapple"];
for (const fruit of fruits) {
    console.log(fruit);
}

for(let i=0; i<fruits.length; i++) {
    console.log(fruits[i]);
}

fruits.forEach(function(fruit) {
    console.log(fruit)
})

// 함수의 선언
const logging = function(log) {
    console.log(log)
}

// 함수의 호출
const str = "함수의 호출"
logging(str)