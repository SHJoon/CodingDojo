$(document).ready(function () {

  $("h1").click(function () {
    var color = $(this).attr("colour");
    $(this).css("color", color);

    // .text(text) as a setter
    $("#Howard").html("<p>The text is changed after a click</p>");

    // .text() as a getter
    var titleText = $(this).text();
    $("#Madhu").append("<p>" + titleText + "</p>"); 
  });

  $("button").click(function(){
      var value = $("#lname").val();
      console.log(value);
      var value2 = $("#cars").val();
      console.log(value2);
      var value3 = $(".x").val();
      console.log(value3);
  })



});
