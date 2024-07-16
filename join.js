// 선택 박스 클릭
const inputSelectBox = document.querySelectorAll(".input_select_v");

inputSelectBox.forEach((boxItem) => {
  boxItem.addEventListener("click", () => {
    if (boxItem.className === "input_select_v") {
      boxItem.classList.add("checked");
    } else {
      boxItem.classList.remove("checked");
    }
  });
});

// 사업자등록증 파일 업로드
const inputFile = document.querySelector(".fileHidden");
const fileBox = document.getElementById("fileBox");

fileBox.addEventListener("click", () => inputFile.click());

//배너 슬라이드
const ellipseBtn = document.querySelectorAll(".ellipse img");
const arrowLBtn = document.querySelector(".arrow_01");
const arrowRBtn = document.querySelector(".arrow_02");
const bannerImg = document.querySelectorAll(".container .inner img");
let bannerLoc = 1;
let bannerEnd = false;

ellipseBtn.forEach((ellipseItem) => {
  ellipseItem.addEventListener("click", () => showBanner(ellipseItem));
});

arrowLBtn.addEventListener("click", () => {
  bannerLoc -= 1;
  if (bannerLoc === 0) {
    bannerLoc = 1;
  }
  bannerImg.forEach((imgItem) => {
    if (bannerLoc === 1) {
      imgItem.style.transform = "translate(0px)";
      console.log(bannerLoc);
    } else if (bannerLoc === 2) {
      imgItem.style.transform = "translate(-1000px)";
      console.log(bannerLoc);
    }
  });
});

arrowRBtn.addEventListener("click", () => {
  bannerLoc += 1;
  if (bannerLoc === 4) {
    bannerEnd = true;
    bannerLoc = 1;
  }
  bannerImg.forEach((imgItem) => {
    if (bannerLoc === 2) {
      imgItem.style.transform = "translate(-1000px)";
      console.log(bannerLoc);
    } else if (bannerLoc === 3) {
      imgItem.style.transform = "translate(-2000px)";
      console.log(bannerLoc);
    } else if (bannerEnd) {
      imgItem.style.transform = "translate(0px)";
      console.log(bannerLoc);
    }
  });
});

function showBanner(btnItem) {
  bannerImg.forEach((imgItem) => {
    if (btnItem.id == 1) {
      imgItem.style.transform = "translate(0px)";
    } else if (btnItem.id == 2) {
      imgItem.style.transform = "translate(-1000px)";
    } else {
      imgItem.style.transform = "translate(-2000px)";
    }
  });
}

// 직원수 드롭다운
const selectNumBox = document.querySelector(".selectNumBox");
const labelNum = document.querySelector(".labelNum");
const optionListNum = document.querySelector(".optionListNum");
const optionNum = document.querySelectorAll(".optionNum");
const arrowNum = document.querySelector(".arrowNum");

selectNumBox.addEventListener("click", () => {
  if(arrowNum.classList.contains("arrowNumRotate_2")) {
    arrowNum.classList.remove("arrowNumRotate_2");
  }
  if (arrowNum.classList.contains("arrowNumRotate")) {
    arrowNum.classList.remove("arrowNumRotate");
  } else {
    arrowNum.classList.add("arrowNumRotate");
  }
  if (optionListNum.classList.contains("closeOptionListNum")) {
    optionListNum.classList.remove("closeOptionListNum");
    optionListNum.classList.add("openOptionListNum");
    selectNumBox.classList.add("selectNumBoxBorder");
  } else {
    optionListNum.classList.remove("openOptionListNum");
    optionListNum.classList.add("closeOptionListNum");
    selectNumBox.classList.remove("selectNumBoxBorder");
  }
});

optionNum.forEach((optionItem) => {
  optionItem.addEventListener("click", () => {
    labelNum.innerHTML = optionItem.innerHTML;
    arrowNum.classList.add("arrowNumRotate_2");
  });
});

// 시공경력 드롭다운
const selectNumBox_2 = document.querySelector(".selectNumBox_2");
const labelNum_2 = document.querySelector(".labelNum_2");
const optionListNum_2 = document.querySelector(".optionListNum_2");
const optionNum_2 = document.querySelectorAll(".optionNum_2");
const arrowNum_2 = document.querySelector(".arrowNum_2");

selectNumBox_2.addEventListener("click", () => {
  if(arrowNum_2.classList.contains("arrowNumRotate_2")) {
    arrowNum_2.classList.remove("arrowNumRotate_2");
  }
  if (arrowNum_2.classList.contains("arrowNumRotate")) {
    arrowNum_2.classList.remove("arrowNumRotate");
  } else {
    arrowNum_2.classList.add("arrowNumRotate");
  }
  if (optionListNum_2.classList.contains("closeOptionListNum")) {
    optionListNum_2.classList.remove("closeOptionListNum");
    optionListNum_2.classList.add("openOptionListNum_2");
    selectNumBox_2.classList.add("selectNumBoxBorder");
  } else {
    optionListNum_2.classList.remove("openOptionListNum_2");
    optionListNum_2.classList.add("closeOptionListNum");
    selectNumBox_2.classList.remove("selectNumBoxBorder");
  }
});

optionNum_2.forEach((optionItem) => {
  optionItem.addEventListener("click", () => {
    labelNum_2.innerHTML = optionItem.innerHTML;
    arrowNum_2.classList.add("arrowNumRotate_2");
  });
});

// 달력 그리기
let date = new Date();
// let calendarYear = date.getFullYear();
// let calendarMonth = date.getMonth() + 1;

let calendarYear = 2025;
let calendarMonth = 8;

let calendarToday = date.getDate();

//달의 마지막일 계산 방법 1
const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31] //윤년계산
if(calendarYear % 400 == 0) {
  monthDays[1] = 29;
} else if(calendarYear % 100 == 0) {
  monthDays[1] = 28;
} else if(calendarYear % 4 == 0) {
  monthDays[1] = 29;
} //2월 29일은 4년 주기,,

//let calendarMonthLastDate = monthDays[date.getMonth()];

//달의 마지막일 계산 방법 2
let monthLastDate = new Date(calendarYear, calendarMonth, 0)  //일자가 0이면 마지막 일자 자동 계산
let calendarMonthLastDate = monthLastDate.getDate();
console.log(monthLastDate);

//월의 시작 요일
let monthStartDay = new Date(calendarYear, 9, 1); //Date클래스는 일수 자동 +1
console.log("ddddd: "+ calendarYear);
let calendarMonthStartDay = monthStartDay.getDay();
console.log(monthStartDay);
console.log("qqqqq:" + calendarMonthStartDay); //0이 일요일
console.log(date.getMonth());

//주 수 카운트
let calendarWeekCount = Math.ceil((calendarMonthStartDay + calendarMonthLastDate) / 7);

// 달력 img 클릭시 이벤트
const calendar = document.querySelector("#calendar");
const imgDate = document.querySelector(".select_date");

imgDate.addEventListener("click", () => {
  if (calendar.classList.contains("calendar_hidden")) {
    calendar.classList.remove("calendar_hidden");
  } else {
    calendar.classList.add("calendar_hidden");
  }
})

//달력 그리기
tableTagCreate = document.createElement("table");

tableTagCreate.classList.add("tableStyle");
const tableTag = calendar.appendChild(tableTagCreate);

let captionTagCreate = document.createElement("caption"); //월 표시
const captionTag = tableTag.appendChild(captionTagCreate);
captionTag.innerHTML = calendarYear + "년" + " ";
captionTag.innerHTML += calendarMonth + "월";
captionTag.classList.add("captionTagStyle");

let theadTagCreate = document.createElement("thead"); //요일 표시
const theadTag = tableTag.appendChild(theadTagCreate);

let trTagCreate = document.createElement("tr");
let trTag = theadTag.appendChild(trTagCreate);

let days = ["일","월","화","수","목","금","토"];
let thTagCreate;
let thTag;

for(let i=0; i<7; i++) {
  thTagCreate = document.createElement("th");
  thTagCreate.innerHTML = days[i];
  thTag = trTag.appendChild(thTagCreate);
  thTag.classList.add("thTagStyle");
}

let spanTagCreate;
let spanTag;

let calendarPos = 0;  //위치
let calendarDay = 0;  //날짜

for(let i=0; i<calendarWeekCount; i++) {
  trTagCreate = document.createElement("tr"); //행
  trTag = tableTag.appendChild(trTagCreate);
  for(let j=0; j<7; j++) {
    tdTagCreate = document.createElement("td"); //열
    tdTag = trTag.appendChild(tdTagCreate);
    tdTag.classList.add("tdTagStyle");
    tdTag.classList.add("NumBlank");

    //7월은 월요일부터 시작, 1<=0 거짓 -> 한칸비우고 시작
    //달의 마지막일까지만 출력
    if(calendarMonthStartDay <= calendarPos && calendarDay < calendarMonthLastDate) { 
      calendarDay++;
      spanTagCreate = document.createElement("span");
      spanTagCreate.innerHTML = calendarDay;
      spanTag = tdTag.appendChild(spanTagCreate);
      spanTag.classList.add("spanTagStyle");
      spanTag.parentElement.classList.add("spanTagStyle_hover");
      tdTag.classList.remove("NumBlank");
    }
    calendarPos++;
  }
}

let s = document.querySelectorAll(".spanTagStyle");
let d = document.querySelectorAll(".tdTagStyle");

function handleDayPrint(event) {
  const selectDay = event.target.tagName === 'SPAN' ? event.target.parentElement : event.target;
  inputDate.innerText = calendarYear + "." + calendarMonth + "." + selectDay.innerText;

  s.forEach((item) => {
    if(item.classList.contains("spanTodayTagStyle")) {
      item.classList.remove("spanTodayTagStyle");
      item.parentNode.classList.add("spanTagStyle_hover");
    }
  })

  d.forEach((item) => {
    if(item.classList.contains("spanTodayTagStyle")) {
      item.classList.remove("spanTodayTagStyle");
      item.classList.add("spanTagStyle_hover");
    }
  })

  selectDay.classList.add("spanTodayTagStyle");
  selectDay.classList.remove("spanTagStyle_hover");
}

let inputDate = document.querySelector(".span_date");

function addCalDay(event) {
  calendarYear += 1;
  calendarMonth += 1;
  console.log("jdfslk");
  //tableTagCreate.remove();
}

d.forEach((boxItem) => {
  if(!boxItem.classList.contains("NumBlank")) {
    boxItem.addEventListener("click",handleDayPrint);;
  }
})
  
// let html = "";
// html += "<table style=\"border-collapse: collapse;\"";
// for(let i=0; i<calendarWeekCount; i++) {
//   html += "<tr>";
//   for(let j=0; j<7; j++) {
//     html += "<td style=\"border: solid 1px black; padding: 20px 20px;\"></td>";
//   }
//   html += "</tr>";
// }
// html += "</table>";
// $("#calendar").html(html);









