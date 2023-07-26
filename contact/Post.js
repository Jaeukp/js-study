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



(async () => {
  const response = await fetch("http://localhost:8080/posts");
  const result = await response.json();
  const tbody1 = document.querySelector('.tb1');
  const tbody2 = document.querySelector('.tb2');

  for (let item of result) {
    template = `
      <tr data-name="${item.creatorName}">
        <h2>게시자 : ${item.creatorName}</h2>
        <hr>
        <h3>제목 : ${item.title}</h3>
        <p>본문 : ${item.content}</p>
        <hr>
        <h5>생성시간 : ${item.createdTime}</h5>
      </tr>
    `;
    tb1.insertAdjacentHTML('beforeend', template);
  }
  
})();




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


// })()