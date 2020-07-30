$(document).ready(function () {
  $("#click button").click(function () {
    $("#click button").text("Button Clicked!");
  });

  $("#hide h3").click(function () {
    $("#hide h3").hide();
  });

  $("#show button").click(function () {
    $("#hide h3").show();
  });

  $("#toggle button").click(function () {
    $("#hide h3").toggle();
  });

  $("#slideDown button").click(function () {
    $("#jquery").slideDown("slow");
  });

  $("#slideUp button").click(function () {
    $("#jquery").slideUp("slow");
  });

  $("#slideToggle button").click(function () {
    $("#jquery").slideToggle("slow");
  });

  $("#fadeIn button").click(function () {
    $("#dojo").fadeIn("slow");
  });

  $("#fadeOut button").click(function () {
    $("#dojo").fadeOut("slow");
  });

  $("#addClass p").click(function () {
    $("h1").addClass("example");
  });

  $("#addBefore button").click(function () {
    $("#addBefore").before("<p>This is added from the button<p>");
  });

  $("#addAfter button").click(function () {
    $("#addAfter").after("<p>This is added from the button<p>");
  });

  $("#append button").click(function () {
    $("#append h1").append("<p>This is appended inside the element<p>");
  });

  $("#html button").click(function () {
    $("#html button").html("<p>Button text is replaced by this paragraph.<p>");
  });

  $("#attr button").click(function () {
    var color = $("#attr h1").attr("color");
    $("#attr h1").css("color", color);
  });

  $("#val button").click(function () {
    var value = $("#languages").val();
    $("#val button").after("<p>" + value + "</p>");
  });

  $("#text button").click(function () {
    $("#text h1").text("The text is changed from the button");
  });
});
