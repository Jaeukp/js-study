(() => {
  const ageForm = document.querySelector("form");
  const checkedFruits = ageForm.querySelectorAll(
    "input[name='fruit']:checked"
  );
  console.log(checkedFruits);

  // 선택된 값 배열로 반환
  // ['banana', 'kiwi]
  const valuse = Array.from(checkedFruits).map(
    check => check.value);
    console.log(valuse);



  // const ages = ageForm.querySelector(
  //   "input[name='age]"
  // );
  // console.log(ages);
  // // 반복문으로
  // for(let age of ages) {
  //   if (age.checked) {
  //     console.log(age.value);
  //   }
  // }

  // // 셀럭터로 체크된 입력요소만 이름 속성으로 탐색
  // const checkedAge = ageForm.querySelector(
  //   "input[name='age']:checked"
  // );
  // console.log(checkedAge.value);
// DOM API 탐색해서 라디오 값을 조회
// 라디오 값: 그룹목록 중에서 선택된 라디오의 값
// document.forms[0].elements.age

// const ageform = document.forms[0];
// const ages = ageform.elements["age"];
// console.log(ages);
// console.log(ages.value);
})()