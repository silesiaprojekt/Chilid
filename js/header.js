$(document).ready(function(){

//smoth scroll to hash
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 110
        }, 1000);
        return false;
      }
    }
  });

//show and hide box names
$("#box1").show();
  $(function() {
$(".data").click(function(){
    var id = $(this).data("id");
  $(".hide").hide();
  $("#"+id).show();
});
  });


//slider
$("#slideshow > div:gt(0)").hide();

setInterval(function slideIt() {
  $('#slideshow > div:first')
    .slideToggle(1000)
    .next()
    .slideToggle(1000)
    .end()
    .appendTo('#slideshow');
},  4000);


//sticky header
$(window).scroll(function() {
    var $head = $("#top").outerHeight();
    console.log($head);
    if ($(this).scrollTop() > $head){
    $("header").addClass("header-fixed");
  }
  else{
    $("header").removeClass("header-fixed");
  }
});
});

//mobile nav show and hide
$(".mobile-nav").click(function(){
   $(".mobile-layer").slideToggle("display-it");
});

})
