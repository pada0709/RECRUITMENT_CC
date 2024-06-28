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
    arrowNum.classList.remove("arrowNumRotate");
  });
});

// 시공경력 드롭다운
const selectNumBox_2 = document.querySelector(".selectNumBox_2");
const labelNum_2 = document.querySelector(".labelNum_2");
const optionListNum_2 = document.querySelector(".optionListNum_2");
const optionNum_2 = document.querySelectorAll(".optionNum_2");
const arrowNum_2 = document.querySelector(".arrowNum_2");

selectNumBox_2.addEventListener("click", () => {
  if (arrowNum_2.classList.contains("arrowNumRotate")) {
    arrowNum_2.classList.remove("arrowNumRotate");
  } else {
    arrowNum_2.classList.add("arrowNumRotate");
  }
  if (optionListNum_2.classList.contains("closeOptionListNum")) {
    optionListNum_2.classList.remove("closeOptionListNum");
    optionListNum_2.classList.add("openOptionListNum");
    selectNumBox_2.classList.add("selectNumBoxBorder");
  } else {
    optionListNum_2.classList.remove("openOptionListNum");
    optionListNum_2.classList.add("closeOptionListNum");
    selectNumBox_2.classList.remove("selectNumBoxBorder");
  }
});

optionNum_2.forEach((optionItem) => {
  optionItem.addEventListener("click", () => {
    labelNum_2.innerHTML = optionItem.innerHTML;
    arrowNum_2.classList.remove("arrowNumRotate");
  });
});
