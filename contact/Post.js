function createRow(createdname, title, content) {
  // 1. 요소 생성
  const tr = document.createElement("tr");

  // 2. 요소의 속성 설정
  DataTransfer.
  // tr.dataset.createdname = createdname;
  // tr.innerHTML = `
  // <div >
  // <td>${createdname}</td>
  // <hr>
  // <td>${title}</td>
  // <hr>
  // <td>${content}</td>
  // </div>`;
  // return tr;
}

// 데이터 조회 및 목록 생성
(async () => {
  const response = await fetch(
    "http://localhost:8080/posts"
  );
  // 결과가 배열
  const result = await response.json();
  console.log(result);

  const tbody = document.querySelector("tbody");

  // 배열 반복을 해서 tr만든다음에 tbody 가장 마지막 자식에 추가
  for (let item of result) {
    tbody.append(
      createRow(item.createdname, item.title, item.content, item.createdTime)
    );
  }
})();

// 추가폼 처리
(() => {
  const form = document.forms[0];
  const inputs = form.querySelectorAll("input");

  const createdname = inputs[0];
  const title = inputs[1];
  const content = inputs[2];

  const add = form.querySelector("button");

  add.addEventListener("click", async (e) => {
    e.preventDefault();

    if (createdname.value === "") {
      alert("이메일을 입력해주세요.");
      return;
    }

    if (title.value === "") {
      alert("이름을 입력해주세요.");
      return;
    }

    if (content.value === "") {
      alert("전화번호를 입력해주세요.");
      return;
    }

    // 서버에 데이터를 전송
    // fetch(url, options)
    const response = await fetch(
      "http://localhost:8080/posts",
      {
        // HTTP Method
        method: "POST",
        // 보낼 데이터 형식은 json
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          createdname: createdname.value,
          title: title.value,
          content: content.value,
        }),
      }
    );
    console.log(response);

    const result = await response.json();
    console.log(result);

    // 화면에 요소를 추가하는 것은 데이처리가 정상적으로 된 다음에

    // --- 3. 어딘가(부모, 다른요소)에 추가한다(append, prepend);
    const tbody = document.querySelector("tbody");
    tbody.prepend(
      createRow(
        createdname.value,
        title.value,
        content.value
      )
    );
    form.reset();
  });

  console.log("추가폼 처리 코드");
})();

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