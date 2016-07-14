// Scroll from home section to next
$('#button-education').click(function(){
  $('html, body').animate({
      scrollTop: $("#education").offset().top
  }, 1000);
});
$('#button-education-slide').click(function(){
  $('html, body').animate({
      scrollTop: $("#education").offset().top
  }, 1000);
});
//Scroll from education section to next
$('#button-courses').click(function(){
  $('html, body').animate({
      scrollTop: $("#courses").offset().top
  }, 1000);
});