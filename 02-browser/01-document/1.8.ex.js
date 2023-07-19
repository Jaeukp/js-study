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

// showNotification({top: 10, right: 10, html: "Hello!", className: "welcome",});

// // 함수 선언
// function showNotification(options) {

// }