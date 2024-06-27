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

selectNumBox.addEventListener("click", () => {
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
