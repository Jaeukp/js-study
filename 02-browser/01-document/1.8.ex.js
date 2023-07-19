function showNotification(options) {
  const { top = 0, right = 0, html, className} = options

  const notification = document.createElement('div');
  notification.classList.add('notification');

  if (className) {
    notification.classList.add(className);
  }

  notification.style.top = `${top}px`;
  notification.style.right = `${right}px`;
  notification.innerHTML = html;

  document.body.appendChild(notification);

  setTimeout(function() {
    notification.style.opacity = 1;
    setTimeout(function() {
      notification.style.opacity = 0;
      setTimeout(function() {
        notification.remove();
      }, 300);
    }, 1500);
  }, 0);
}

let i = 1;
setInterval(() => {
  showNotification({
    top: 10,
    right: 10,
    html: 'Hello ' + i++,
    className: "welcome"
  });
}, 2000);

// // 알림 생성
// let count = 1;
// setTimeout(() => {
//   showNotification({
//     top: 10, 
//     right: 10, 
//     html: `<strong>Hello!</strong><data>${count}</data>`, 
//     className: "welcome",});
//   count++;
// }, 1500);


// // 함수 선언
// function showNotification({
//   top, right, html, className
// }) {
//   // console.log(options);

//   // notification box 를 생성
//   const box = document.createElement("div");
//   // box 속성을 설정
//   box.className = `notification ${className}`;
//   // 기본 스타일 속성은 css
//   // 박스마다 다른 속성은 style
//   box.style.top = `${top}px`;
//   box.style.right = `${right}px`
//   box.innerHTML = html;

//   // 일단 body 앞쪽에 붙임
//   document.tbody.append(box);

//   // 1,5초후에 없어져
//   setTimeout(() => {
//     // node.remove
//     box.remove();
//   }, 1500);
// }