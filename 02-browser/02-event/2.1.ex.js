// document.getElementById('hider').onclick = function() {
//   document.getElementById('text').hidden = true;
// }

// buttons.addEventListener("click", () => alert("1"))
// buttons.removerEventListener("click", () => alert("1"));
// buttons.onclick = () => alert(2);

// function handler() {
//   alert(1);
// }

// buttons.addEventListener("click", handler);
// buttons.removerEventListener("click", handler);

// const images = document.querySelector('img');

// images.forEach(function(image) {
//   image.addEventListener('click', function(event) {
//     const clickedImage = event.target.cloneNode();
//     clickedImage.classList.add('clicked');
//     clickedImage.style.position = 'fixed';
//     clickedImage.style.top = `${event.clientY}px`;
//     clickedImage.style.left = `${event.clientX}px`;
//     document.body.appendChild(clickedImage);
//   });
// });

// const field = document.getElementById('field');

// field.addEventListener('click', function(event) {
//   if (event.target.tagName === 'IMG') {
//     const clickedImage = event.target.cloneNode(); // 클릭한 이미지 복제
//     clickedImage.classList.add('clicked'); // 이미지 스타일링을 위한 클래스 추가
//     clickedImage.style.position = 'fixed'; // 이미지를 고정 위치로 설정
//     clickedImage.style.top = `${event.clientY}px`; // 클릭한 위치의 y 좌표
//     clickedImage.style.left = `${event.clientX}px`; // 클릭한 위치의 x 좌표
//     document.body.appendChild(clickedImage); // 이미지를 body에 추가
//   }
// })


field.onclick = function(event) {

  // window-relative field coordinates
  let fieldCoords = this.getBoundingClientRect();

  // the ball has position:absolute, the field: position:relative
  // so ball coordinates are relative to the field inner left-upper corner
  let ballCoords = {
    top: event.clientY - fieldCoords.top - field.clientTop - ball.clientHeight / 2,
    left: event.clientX - fieldCoords.left - field.clientLeft - ball.clientWidth / 2
  };

  // prevent crossing the top field boundary
  if (ballCoords.top < 0) ballCoords.top = 0;

  // prevent crossing the left field boundary
  if (ballCoords.left < 0) ballCoords.left = 0;


  // // prevent crossing the right field boundary
  if (ballCoords.left + ball.clientWidth > field.clientWidth) {
    ballCoords.left = field.clientWidth - ball.clientWidth;
  }

  // prevent crossing the bottom field boundary
  if (ballCoords.top + ball.clientHeight > field.clientHeight) {
    ballCoords.top = field.clientHeight - ball.clientHeight;
  }

  ball.style.left = ballCoords.left + 'px';
  ball.style.top = ballCoords.top + 'px';
}
