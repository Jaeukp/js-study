
function cardTemplate(item) {
  const template = /*html*/ `
  <div style="width:300px; margin-bottom:3rem;" data-no="${
    item.no}">
    <p>${item.no}</p>  
    <em>${item.creatorName}</em>
    <hr>
    <h3>${item.title}</h3>
    <p>${item.content}</p>
    <hr>

    <div style="display:flex; justify-content:space-between;">
      <small>${new Date(
        item.createdTime
      ).toLocaleString()}</small>
      <button class="btn-remove">삭제</button>
    </div>
  </div>
`;
  return template;
}

(async () => {
  const url = "http://localhost:8080/posts";

  // 1. fetch, 서버에서 데이터 가져오기
  const response = await fetch(url);
  const result = await response.json();
  console.log(result);

  // 배열 메서드를 사용하기 위해서...
  const data = Array.from(result);
  console.log(data);

  // 2.-- 데이터배열 반복문으로 html문자열 만들고,
  // 컨테이너에 추가
  data
    // 데이터를 다시 순정렬을 한다음에
    .sort((a, b) => a.no - b.no)
    // 반복문으로 form뒤에 div를 추가함
    .forEach((item) => {
      document.forms[1].insertAdjacentHTML(
        "afterend",
        cardTemplate(item)
      );
    });
})();

// 추가 기능
(() => {
  const form = document.forms[0];
  const post = form.querySelector(".new");

  const image = form.querySelector("label");
  const title = form.querySelector(" .puttitle ");
  const content = form.querySelector("textarea");
  // const file = inputs[0];

  const reader = new FileReader();

  post.addEventListener("click", async (e) => {
    e.preventDefault();
    console.log(title.value);
    console.log(content.value);


    // 서버에 데이터 전송
    const response = await fetch(
      "http://localhost:8080/posts",
      {
        // HTTP Method
        method: "POST",
        // 보낼 데이터 형식은 json
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title.value,
          content: content.value,
          image,
        }),
      }
    );

    const result = await response.json();

    

    // UI 생성
    document.forms[0].insertAdjacentHTML(
      "afterend",
      cardTemplate(result.data)
    );

    form.reset();
  });
})();

(() => {
  const form = document.forms[1];

  const no = form.querySelector("input");
  const del = form.querySelector("button");

  del.addEventListener("click", async (e) => {
    e.preventDefault();
    
    // const deleteTitle = document.querySelector('input[placeholder="삭제할 논문 제목"]').value;
    // 서버통신
    await fetch(
      `http://localhost:8080/posts/${no.value}`,
      {
        method: "DELETE",
      }
    );

    
    const body = document.querySelector(
      `div[data-no="${no.value}"]`
    );
    console.log(body);

    // if (!body) {
    //   alert("해당 제목의 논문이 없습니다.");
    //   return;
    // }
    body.remove();
    form.reset();
  });
})();

// 삭제 기능(이벤트 위임)
(() => {
  document.body.addEventListener("click", (e) => {
    // alert(e.target.className);
    // e.target: 실제 이벤트가 발생한요소
    // 해당 클래스가 있는지 확인
    if (
      e.target.classList.contains("btn-remove")
    ) {
      // jsdoc type 힌트를 넣어줌
      /** @type {HTMLButtonElement} */
      const removeBtn = e.target;
      removeBtn.parentElement.parentElement.remove();
    }
  });
})();

// // 수정처리(이벤트 위임)
// (() => {
//   document
//   .querySelector("tbody")
//   .addEventListener
// })()

// 삭제폼 처리
// (() => {
//   const form = document.forms[0];

//   const createdname = form.querySelector("input");
//   const del = form.querySelector("button");

//   del.addEventListener("click", (e) => {
//     e.preventDefault();
//     const tr = document.querySelector(
//       `tr[data-createdname="${createdname.value}"]`
//     );

//     if (!tr) {
//       alert("해당 이메일의 연락처 없습니다.");
//       return;
//     }

//     tr.remove();

//     form.reset();
//   });
// })();



// (async () => {
//   const body = document.body;
//   const url = "http://localhost:8080/posts";

//   // 1. fetch, 서버에서 데이터 가져오기
//   const response = await fetch(url);
//   const result = await response.json();
//   console.log(result);

//   // 배열 메서드를 사용하기 위해서...
//   const data = Array.from(result);
//   console.log(data);

//   // 2.-- 데이터배열 반복문으로 html문자열 만들고,
//   // 컨테이너에 추가
//   data.forEach((item) => {
//     const template = /*html*/ `
//       <div style="width:300px; margin-bottom:2rem;" data-no="${
//         item.no
//       }">
//         <em>${item.creatorName}</em>
//         <hr>
//         <h3>${item.title}</h3>
//         <p>${item.content}</p>
//         <hr>
//         <small>${new Date(
//           item.createdTime
//         ).toLocaleString()}</small>
//       </div>
//     `;

//     body.insertAdjacentHTML(
//       "beforeend",
//       template
//     );
//   });
// })();

// (() => {
//   const form = document.forms[0];
//   const input = form.querySelector("input");

//   const creatorName = input[0];
//   const title = input[1];
//   const content = input[2];

//   const add = form.querySelector("button");

//   add.addEventListener("click", async (e) => {
//     e.preventDefault();

//     // if (creatorName.value === "") {
//     //   alert("이름을 입력하세요");
//     //   return;
//     // }

//     // if (title.value === "") {
//     //   alert("제목을 입력하세요")
//     //   return;
//     // }

//     // if (content.value === "") {
//     //   alert("본문을 입력하세요");
//     //   return;
//     // }

//     const response = await fetch(
//       "http://localhost:8080/posts", {
//         method: "POST",
//         headers: {"content-type": "application/json",
//       },
//       body: JSON.stringify({
//         // creatorName: creatorName.value,
//         // title: title.value,
//         // content: content.value,
//       }),
    
//     }
//   );
//   console.log(response);

//   const result = await response.json();
//   console.log(result);

//   const tbody = document.querySelector("tbody");
//     tbody.prepend(
//       createRow(
//         // creatorName.value,
//         title.value,
//         content.value
//       )
//     );
//     form.reset();
//   });

//   console.log("추가폼 처리 코드")
// })()

// (async () => {
//   const response = await fetch("http://localhost:8080/posts");
//   const result = await response.json();
//   const tbody1 = document.querySelector('.tb1');
//   const tbody2 = document.querySelector('.tb2');

//   for (let item of result) {
//     template = `
//       <tr data-name="${item.creatorName}">
//         <h2>게시자 : ${item.creatorName}</h2>
//         <hr>
//         <h3>제목 : ${item.title}</h3>
//         <p>본문 : ${item.content}</p>
//         <hr>
//         <h5>생성시간 : ${item.createdTime}</h5>
//       </tr>
//     `;
//     tb1.insertAdjacentHTML('beforeend', template);
//   }
  
// })();


// (async () => {
//   const response = await fetch("http://localhost:8080/posts");
//   const result = await response.json();
//   const table1 = document.querySelector('#ta1');
//   const table2 = document.querySelector('#ta2');

//   let template1 = '';
//   let template2 = '';

//   for (let i = 0; i < result.length; i++) {
//     const item = result[i];
//     const template = `
//     <tr data-name="${item.creatorName}">
//     <h2>게시자 : ${item.creatorName}</h2>
//     <hr>
//     <h3>제목 : ${item.title}</h3>
//     <p>본문 : ${item.content}</p>
//     <hr>
//     <h5>생성시간 : ${item.createdTime}</h5>
//   </tr>
//     `;

//     if (i === 0) {
//       template1 += template;
//     } else if (i === 1) {
//       template2 += template;
//     }
//   }

//   ta1.insertAdjacentHTML('beforeend', template1);
//   ta2.insertAdjacentHTML('beforeend', template2);
// })();







// (async () => {
//   const response = await fetch("http://localhost:8080/posts");
//   const result = await response.json();
//   const tbody = document.querySelector('tbody');
//   const h4 = document.querySelector('h4');

//   for (let item of result) {
//     const tr = document.createElement('tr');

//     const creatorNameTd = document.createElement('td');
//     creatorNameTd.textContent = item.creatorName;
//     tr.appendChild(creatorNameTd);

//     const titleTd = document.createElement('td');
//     titleTd.textContent = item.title;
//     tr.appendChild(titleTd);

//     const contentTd = document.createElement('td');
//     contentTd.textContent = item.content;
//     tr.appendChild(contentTd);

//     const createdTimeTd = document.createElement('td');
//     createdTimeTd.textContent = item.createdTime;
//     tr.appendChild(createdTimeTd);

//     tbody.appendChild(tr);
//   }
// })();

// (async() => {
//   const response = await fetch("http://localhost:8080/posts");
//   const result = await response.json();
//   const tbody = document.querySelector('tbody');
//   const h4 = document.querySelector('h5');
//   const h2 = document.querySelector('h2');
//   const h3 = document.querySelector('h3');
//   const p = document.querySelector('p');

//   for (let item of result) {
//     const template = `<tr data-name="${item.creatorName}">
//       <td>${item.creatorName}</td>
//     </tr>`;
//     h2.insertAdjacentHTML("beforeend", template);
//   }

//   for (let item of result) {
//     const template = `<tr data-name="${item.title}">
//       <td>${item.title}</td>
//     </tr>`;
//     h3.insertAdjacentHTML("afterbegin", template);
//   }

//   for (let item of result) {
//     const template = `<tr data-name="${item.content}">
//       <td>${item.content}</td>
//     </tr>`;
//     p.insertAdjacentHTML("afterbegin", template);
//   }

//   for (let item of result) {
//     const template = `<tr data-name="${item.createdTime}">
//       <h4>${item.createdTime}</h4>
//     </tr>`;
//     h4.insertAdjacentHTML("afterbegin", template);
//   }

//   // for(let item of result) {
//   //   const template = `<tr data-name="${item.title}">
//   //   <td>${item.title}</td>`;
//   //   h3.insertAdjacentHTML("afterbegin", template)
//   // }

//   // for (let item of result) {
//   //   const createdTimeTd = document.createElement("td");
//   //   createdTimeTd.textContent = item.createdTime;
//   //   h4.insertAdjacentHTML(createdTimeTd);

//   // }


// })();