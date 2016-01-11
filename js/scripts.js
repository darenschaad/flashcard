$(function() {
  $("p").click(function() {
    $("#javascript-showing").show();
  });
    $(".clickable").click(function(){
      $("#javascript-showing").slideToggle();
      $("#modulo-showing").slideToggle();
    })
  });
