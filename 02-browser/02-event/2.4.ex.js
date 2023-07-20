// thumbs.onclick = function(event) {
//   let thumbnail = event.target.closest('a');

//   if (!thumbnail) return;
//   showThumbnail(thumbnail.href, thumbnail.title);
//   event.preventDefault();
// }


// function showThumbnail(href, title) {
//   largeImg.src = href;
//   largeImg.alt = title;
// }

// document.addEventListener("DOMContentLoaded", function () {
//   const thumbs = document.getElementById('thumbs');
//   const largeImg = document.getElementById('largeImg');

//   thumbs.onclick = function(event) {
//     let thumbnail = event.target.closest('a');

//     if (!thumbnail) return;
//     showThumbnail(thumbnail.href, thumbnail.title);
//     event.preventDefault();
//   }

//   function showThumbnail(href, title) {
//     const confirmMessage = "이미지를 바꾸시겠습니까?"
//     if(!window.confirm(confirmMessage)) {
//       return;
//     }
//     largeImg.src = href;
//     largeImg.alt = title;
//   }
// });

// const links = document.getElementById('contents')

// function showcontents(href) {
//   const confirmMessage = "현재 사이트에서나가 해당 사이트로 이동하시겠습니까?"
//   if(!window.confirm(confirmMessage)) {
//     return;
//   }
//   links.confirmMessage = href;
// };

// contents.onclick = function(event) {
//   function handleLink(href) {
//     let isLeaving = confirm(`Leave for ${href}?`);
//     if (!isLeaving) return false;
//   }

//   let target = event.target.closest('a');

//   if (target && contents.contains(target)) {
//     return handleLink(target.getAttribute('href')
//     );
//   }
// };
document.getElementById('contents').addEventListener('click', function(event) {
  // 클릭한 요소가 <a> 태그인지 확인합니다.
  const link = event.target.closest('a');
  if (!link) return;

  // 사용자에게 확인을 받는 경고창을 띄웁니다.
  const confirmMessage = "링크를 클릭하여 사이트를 떠나시겠습니까?";
  if (!window.confirm(confirmMessage)) {
    event.preventDefault(); // 링크 이동을 취소합니다.
  }
});