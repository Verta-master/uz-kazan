//Category slider
var breakpoint = window.matchMedia('(min-width: 1022px)');
var newsSwiper;
var breakpointChecker = function() {
  if (breakpoint.matches === true) {
    if (newsSwiper !== undefined) newsSwiper.destroy(true, true);
    return;
    } else if (breakpoint.matches === false) {
      return enableSwiper();
    }
};

var enableSwiper = function() {
  newsSwiper = new Swiper ('.category__slider', {
    navigation: {
      nextEl: '.category__next',
      prevEl: '.category__prev',
    },
    simulateTouch: false,
    preventClicks: false,
    preventClicksPropagation: false,
    spaceBetween: 15,
    slidesPerView: 2,
      breakpoints: {
      480: {
        slidesPerView: 1,
      }
    }
  })
};

breakpoint.addListener(breakpointChecker);
breakpointChecker();
