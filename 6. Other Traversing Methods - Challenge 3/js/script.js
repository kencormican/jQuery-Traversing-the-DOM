$(document).ready(function () {
  $(".side-heading").click(function () {
    // This removes the class "highlight" from all table header cells matching class and their sibling table data cells
    $(".side-heading").siblings().removeClass("highlight");
    // This adds the class "highlight" to only the selected table header cells and its sibling table data cells
    $(this).siblings().addClass("highlight");
  });
});
