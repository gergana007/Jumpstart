$(document).ready(function(){
  $('.carousel').slick({
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false
  });

  var positionScrollTop = 0;
  $(window).scroll(function(){
    var scrollTop = $(this).scrollTop();
    if (scrollTop - positionScrollTop > 50){
      var navbarHeight = $('.navbar').css('height');
      $('.navbar').animate({top: '-' + navbarHeight}, 150);
      positionScrollTop = scrollTop;
    } else if (positionScrollTop - scrollTop > 50) {
      $('.navbar').animate({top: '0px'}, 150);
      positionScrollTop = scrollTop;
    }
  });
});
