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



var y = window.scrollY;
//var z = window.pageYOffset;

console.log(y);
//console.log(z);

console.log(window.innerHeight);



if (window.scrollY > window.innerHeight) {
    document.querySelector('.up').classList.add('active');
}
    else {
        document.querySelector('.up').classList.remove('active');
}


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