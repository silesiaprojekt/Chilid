

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });


   $(function(){
       $(".fot1 img").mouseenter(function(){
           $(this).toggleClass("test");
       });
   });





  $(function() {
    $(".button").click(function() {
        var selector = this.id.substring(this.id.indexOf("_") + 1);
        alert(selector)
        $("#" + selector).fadeIn().siblings("#" + selector).fadeOut();
    });
});





$(window).scroll(function() {
if ($(this).scrollTop() > 600){

    $("header").addClass("header-fixed");

  }
  else{

    $("header").removeClass("header-fixed");

  }
});


});



