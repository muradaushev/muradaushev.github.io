let b = document.querySelector('.body');
let burger = document.querySelector('.menu-burger');
let nav = document.querySelector('nav');

burger.addEventListener('click', function () {
    burger.classList.toggle('active');
    nav.classList.toggle('visible');
    b.classList.toggle('hidden');
})

let a = document.getElementsByClassName('nav-item');
console.log(a);

for (let i = 0; i < a.length; i++) {

    a[i].addEventListener('click', function () {

        burger.classList.remove('active');
        nav.classList.remove('visible');
        b.classList.remove('hidden');
    })
}




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









//$(window).scroll(function() {
//    if ($(this).scrollTop() > $(this).height()) {
//        $('.up').addClass('active');
//    } else {
//        $('.up').removeClass('active');
//    }
//});
//
//
//function scroll() {
//
//}



//let a = window.pageYOffset;
//console.log(a);


//var top  = window.pageYOffset || document.documentElement.scrollTop,
//    left = window.pageXOffset || document.documentElement.scrollLeft;
//console.log(top);


/***************************/


//var y = window.scrollY;
////var z = window.pageYOffset;
//
//console.log(y);
////console.log(z);
//
//console.log(window.innerHeight);
//
//
//
//if (window.scrollY > window.innerHeight) {
//    document.querySelector('.up').classList.add('active');
//}
//    else {
//        document.querySelector('.up').classList.remove('active');
//}


/***************************/


//let x = document.getElementById('header_container');
//let x = document.getElementsByClassName('about')[0];
//
//let topPos = x.offsetTop;
//
//console.log(topPos);

//
//console.log(document.getElementsByClassName('container')[0].offsetTop);



//var d = document.getElementById("div1");
//var topPos = d.offsetTop;
// 
//if (topPos > 10) {
//  // объект имеет отступ больше
//  // чем 10 пикселей относительно своего родителя
//}
