$(document).ready(function () {
  $("#reset").click(function () {
    $(this)
      .siblings()
      .children()
      .removeClass("red")
      .removeClass("yellow")
      .removeClass("green")
      .removeClass("large-font");
  });

  $("#card-btn-1").click(function () {
    $("#card").children("p").first().addClass("red");
  });
  // the below does the same thing for btn-2 as the above does for btn-1
  $("#card-btn-2").click(function () {
    $("#card p").last().addClass("yellow");
  });
  $("#filter").click(function () {
    $("p").filter(".special").addClass("green");
  });
});
