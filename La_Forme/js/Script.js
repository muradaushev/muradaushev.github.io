//$( document ).ready(function() {
//    var windowWidth = $(window).width();
//    var hamburger = $('.menu_burger');
//    var body = $('body');
//    var menu = $('.main_header');
//    hamburger.click(function() {
//        hamburger.toggleClass('active');
//        menu.slideToggle(350); //350 - скорость
//        return false;
//    });
//    if (windowWidth < 577) {
//        body.click(function() {
//        hamburger.removeClass('active');
//        menu.slideUp('.main_header');
//        });
//    } else {
//        return false;
//    }
//});
//
//function slowScroll(id) {
//    $('html, body').animate({ //анимирую всю страницу - <body>
//        scrollTop:$(id).offset().top-60 //scrollTop - прокручиваю с верха страницы //offset().top - отступ сверху
//    }, 500);
//}


let burger = document.querySelector('.menu-burger');
let nav = document.querySelector('nav');
let home = document.getElementsByClassName('nav-item')[0];
let about = document.getElementsByClassName('nav-item')[1];
let blog = document.getElementsByClassName('nav-item')[2];
let contact = document.getElementsByClassName('nav-item')[3];
//
//burger.onclick = function () {
//    burger.classList.toggle('active');
//    nav.classList.toggle('visible');
//}

burger.addEventListener('click', function () {
    burger.classList.toggle('active');
    nav.classList.toggle('visible');
})

home.addEventListener('click', function () {
    burger.classList.remove('active');
    nav.classList.remove('visible');
})
about.addEventListener('click', function () {
    burger.classList.remove('active');
    nav.classList.remove('visible');
})
blog.addEventListener('click', function () {
    burger.classList.remove('active');
    nav.classList.remove('visible');
})
contact.addEventListener('click', function () {
    burger.classList.remove('active');
    nav.classList.remove('visible');
})
window.addEventListener('scroll', function () {
    burger.classList.remove('active');
    nav.classList.remove('visible');
})



const anchors = document.querySelectorAll('a.scroll-to')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (event) {
    event.preventDefault()
    
    const blockID = anchor.getAttribute('href')
    
    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}