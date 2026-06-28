
// Slide-Text

var typed = new Typed('.text-slide', {
    strings: [
        'Web Developer', 
        'Web Designer',
        'Frontend Developer',
        'Graphic Designer',
        'Programmer'
    ],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true,
  });

  // OwlCarousel

  jQuery(".owl-one").owlCarousel({
    'items' : 1,
    'autoplay' : true,
    'autoplayTimeout' : 5000,
    'loop' : true,
    'nav' : false,
    'autoplayHoverPause' :true, 
});

  // Swiper

  var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows : true, 
    },
    pagination: {
      el: '.swiper-pagination',
    },
    
});



jQuery(".scrolltotop").click(function(){
  jQuery("html").animate({'scrollTop' : '0'},1000)
  return false
})


jQuery(window).scroll(function(){

  var bdt = jQuery(window).scrollTop();
  if (bdt > 400){
      jQuery(".scrolltotop").fadeIn();
  }
  else {
      jQuery(".scrolltotop").fadeOut();
  }
});


window.addEventListener("scroll", function(){
  var menu = document.querySelector(".header");
  menu.classList.toggle("sticky", window.scrollY > 0);
})