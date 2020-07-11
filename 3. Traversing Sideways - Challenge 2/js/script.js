$(document).ready(function () {
  $("button").click(function () {
    $(this).prev().slideDown();
  });
  $("h2").click(function () {
    $(this).next().slideUp();
  });
});
