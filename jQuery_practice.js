$(document).ready(function () {});
$(function () {});

$(document).ready(function () {
  $(button).click(function () {
    $("#test").hide();
  });
});

$("p:first");

$("p").click();

$("p").dbclick(function () {
  $(this).hide();
});

$("#p1").mouseenter(function () {});

$("#p1").mouseleave(function () {});

$("#p1").mousedown(function () {});

$("#p1").mouseup(function () {});

$("#p1").hover(
  function () {
    alert("enter");
  },
  function () {
    alert("leave");
  }
);

$("input").focus(function () {
  $(this).css("background-color", "tle");
});
