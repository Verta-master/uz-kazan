//Mobile menu
$('.menu__btn').click(function() {
  $(this).toggleClass('menu__btn--opened');
  $('.menu__list').slideToggle();
});

$('.footer__btn').click(function() {
  $(this).toggleClass('footer__btn--opened');
  $('.footer__list').slideToggle();
});

if (window.innerWidth < 1200) {
  $('.nav__btn').click(function() {
    $('.nav__list').slideToggle();
    $('.nav').toggleClass('nav--opened');
  })
}
