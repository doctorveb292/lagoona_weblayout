// Burger

let burger = document.querySelector('.burger');
let menu = document.querySelector('.header-nav');
let menulinks = menu.querySelectorAll('.header-link');
let burgerBtn = document.querySelectorAll('.header-btn-1');

burger.addEventListener('click',

function() {

  burger.classList.toggle('burger--active');
  menu.classList.toggle('header-nav--active');

  document.body.classList.toggle('stop-scroll');
})

menulinks.forEach(function(el) {
  el.addEventListener('click', function(){
    burger.classList.remove('burger--active');
    menu.classList.remove('header-nav--active');

    document.body.classList.remove('stop-scroll');
  })
})

burgerBtn.forEach(function(el) {
  el.addEventListener('click', function(){
    burger.classList.remove('burger--active');
    menu.classList.remove('header-nav--active');

    document.body.classList.remove('stop-scroll');
  })
})

// Плавный скролл

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href').substr(1)

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
}
