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
  $(this).css("background-color", "yellow");
});

$("input").blur(function () {
  $(this).css("background-color", "red");
});

$("p").on("click", function () {
  $(this).hide();
});

$("p").on({
  mouseenter: function () {
    $(this).css("background-color", "red");
  },
  mouseleave: function () {
    $(this).css("background-color", "red");
  },
  click: function () {
    $(this).css("background-color", "red");
  },
});

$("button").click(function () {
  $("p").toggle();
});

$("button").click(function () {
  $("#div1").fadeIn();
  $("#div2").fadeIn("slow");
  $("#div3").fadeIn(3000);
  $("#div1").fadeOut("slow");
  $("#div1").fadeToggle(3000);
  $("#div1").fadeTo("slow", 0.7);
});

$("#flip").click(function () {
  $("#panel").slideDown();
  $("#panel").slideUp();
  $("#panel").slideToggle();
});

$("button").click(function () {
  $("div").animate({ left: "250px" });
});

$(button).click(function () {
  $("div").animate({
    left: "250px",
    opacity: "0.5",
    height: "150px",
    width: "150px",
  });
});

$("button").click(function () {
  $("div").animate({
    height: "toggle",
  });
});

$("button").click(function () {
  var div = $("div");
  div.animate({ height: "300px", opacity: "0.4" }, "slow");
});

$("#stop").click(function () {
  $("#panel").stop();
});

$("button").click(function () {
  $("p").hide("slow", function () {
    alert("The paragraph is now hidden");
  });
});

$("#p1").css("color", "red").slideUp(2000).slideDown(2000);

$("#btn1").click(function () {
  alert("Text: " + $("#test").text());
});
$("#btn1").click(function () {
  alert("Text: " + $("#test").html());
});
$("#btn1").click(function () {
  alert("Text: " + $("#test").val()); //get
});

$("#btn1").click(function () {
  $("#test1").text("Hello!"); //set
});

$("#btn1").click(function () {
  $("#test2").html(function (i, origText) {
    return (
      "Old html:  " +
      origText +
      "New html: Hello <b>world!</b> (index: " +
      i +
      ")"
    );
  });
});

$("button").click(function () {
  $("#w3c").attr({
    href: "https://",
    title: "W3School",
  });
});

$("p").append("text append");
$("p").prepend("text prepend");
$("img").after("text after");
$("img").before("text before");

$("#div1").remove();

$("#div1").empty();

$("p").remove(".test", ".demo");

$("button").click(function () {
  $("h1, h2,  p").addClass("blue");
});

$("button").click(function () {
  $("h1, h2, p").removeClass("blue");
});

$("button").click(function () {
  $("h1, h2, p").toggleClass("blue");
});

$("p").css({ "background-color": "yellow", "font-size": "200%" });

$("button").click(function () {
  var txt = "";
  txt += "Width: " + $("#div1").width() + "</br>";
  txt += "Height: " + $("#div1").height();
  $("#div1").html(txt);
});

$("button").click(function () {
  $("#div1").width(500).height(500);
});

$(document).ready(function () {
  $("span").parent();
  $("span").parents("ul");

  $("div").children("p.first");

  $("div").find("span");
  $("div").find("*");

  $("h2").sliblings();

  $("h2").next();
  $("h2").nextAll();
  $("h2").nextUntil("h6");

  $("div").first();
  $("div").last();
  $("p").eqe(1);

  $("p").filter(".intro");

  $("p").not(".intro");
});
