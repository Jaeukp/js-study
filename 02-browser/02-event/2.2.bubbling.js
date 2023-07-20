const div = document.querySelector("div");
const p = document.querySelector("p");

// document.body.addEventListener("click", (e) => {
//   console.log(e);
// })

div.addEventListener("click", (event) => {
  console.log(" -- div clicked --")
  // event.target: 실제로 이벤트를 방생시킨 요소
  // event.currentTarget: 이벤트 핸들러 실행시킨 요소
  console.log(event.target);
  console.log(event.currentTarget);
},true
);

p.addEventListener("click", (e) => {
  // 이벤트를 전파하지 않음
  // e.stopPropagation();


  console.log(" -- p clicked -- ")
  console.log(e.target);
  console.log(e.currentTarget);


})