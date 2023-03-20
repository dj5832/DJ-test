/* 4개의 div box에 3종류의 이벤트를 등록한다. */
// 1) dragover 이미지를 드래그해서 div 위에 있을 때 발생
// 2) dragleave 1번의 dragover 이벤트가 발생한 div에서 마우스가 나가면 발생
// 3) drop      1개의 div 위에서 이미지를 드롭하면 발생

/* 각 이벤트를 핸들링 할 수 있는 코드 작성 */
// dragover 이벤트 : 이벤트가 발생한 특정 div요소에 hovered 클래스 추가
// dragleave 이벤트 : 이벤트가 발생한 특정 div요소에 hovered 클래스 삭제
// drop 이벤트 : 이벤트가 발생한 특정 div요소에 img 태그요소를 붙인다


const box = document.querySelectorAll(".box");
const img = document.querySelector(".image");

for (let i=0; i<box.length; i++) {
    // console.log(i);
    box[i].addEventListener("dragover", (e) => {
            e.preventDefault(); /* dragover 이벤트의 디폴트 동작 때문에 drop 이벤트가 발생하지 못함 */
            box[i].classList.add("hovered");
        });

    box[i].addEventListener("dragleave", (e) => {
            box[i].classList.remove("hovered")
        });

    box[i].addEventListener("drop", (e) => {
            box[i].classList.remove("hovered")
            box[i].appendChild(img)   
        });
}