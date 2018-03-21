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
  //  $(".work-section").css("opacity", 3 - $(window).scrollTop() / 380);
//  }
//  });


  // When the user scrolls the page, execute myFunction
window.scroll = function() {myFunction()};

// Get the navbar
var sidenav = document.getElementById("sidenav");

// Get the offset position of the navbar
var sticky = sidenav.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    sidenav.classList.add("sticky")
  } else {
    sidenav.classList.remove("sticky");
  }
}
