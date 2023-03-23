let gallery = document.querySelector("#balloon-gallery");
const balloons = document.querySelectorAll(".balloon");
let message = document.querySelector("#yay-no-balloons");
// For Loop
let counter = 0
for (let i = 0; i < balloons.length; i++) {
  // 이벤트 등록
  balloons[i].addEventListener("mouseenter", (e) => {
    balloons[i].style.backgroundColor = "#ededed"
    balloons[i].innerHTML = "POP!"
    if(!balloons[i].classList.contains("dd")) {
      counter = counter + 1;
    }
    balloons[i].classList.add("dd")
    console.log(counter)
    if (counter === balloons.length) {
      message.style.display = "block";
      gallery.innerHTML = "";
    }
  })
  
  // if() {
  //   gallery.style.display = "none"
  // }
  
  
  
  // callback 함수가 할일
  // 풍선을 지운다 style.backgroundColor = "#ededed";
  // div태그내에 텍스트 POP을 쓴다
  // 터트린 풍선갯수를 센다
  // 모든 풍선이 터졌으면 message 태그를 보여준다.
}
