const value = Math.floor(Math.random() * (11 - 1)) + 1;
console.log(value)
function verify() {
    let input = document.querySelector("#guessed").value;
    const div = document.querySelector("div");
    input = parseInt(input, 10);
    // isNaN = 문자열인지 아닌지 여부를 물어보는 함수. 답은 항상 참 또는 거짓으로 나온다.
    if (isNaN(input)) {
        div.innerHTML = "숫자를 입력해주세요";
        return;  // 리턴구문을 만나면 더이상 프로세스를 진행하지 않고 나간다. 아래쪽 코드는 실행되지 않음
    }

    if (10<input || 1>input) {
        div.innerHTML = "1~10사이의 숫자를 입력하세요"
        return;
    }
    if (input === value) {
        div.innerHTML = "정답입니다!"
    }
    else {
        div.innerHTML = "틀렸습니다. 정답은" + value + "입니다. 다시 시도하세요"
    }
console.log(input)
};
