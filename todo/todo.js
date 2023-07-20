// 1번째 use-case
// 입력창에 메모를 입력하고
// 추가버튼을 클릭하면 목록의 첫번째에 추가
//  + 입력창에 값이 초기화

// 2번째 use-case
// 목록에서 항목을 클릭하면
// 클릭한 항목이 삭제(화면에서 안보임)

const container = document.querySelector(
  "#todo-container"
);
console.log(container);

// 1번째 use-case를 pseudo code로 변환
// 버튼을 클릭하면 입력창의 값을 가져온 후
// 항목을 만들고 목록에 추가

container
.querySelector("button")
.addEventListener("click", () => {
  const value = 
    container.querySelector("input").value;
    console.log(value);

  const item = document.createElement("li");
  item.textContent = value;
  console.log(item);

  container.querySelector("ul").prepend(item);
});
