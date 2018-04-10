'use strict';


$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y >220) {
    $('.box-container').fadeOut(220);
  } else {
    $('.box-container').fadeIn(220);
  }
});




//$(window).scroll(function(){
  //if ($(window).width() > 60) {
  //  $(".project-section").css("opacity", 3 - $(window).scrollTop() / 80);
  //}
 //});
