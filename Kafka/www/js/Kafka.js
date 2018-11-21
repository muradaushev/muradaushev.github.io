

$( document ).ready(function() {
    var windowWidth = $(window).width();
    var hamburger = $('.menu_burger');
    var body = $('body');
    var menu = $('.main_header');
    hamburger.click(function() {
        hamburger.toggleClass('active');
        menu.slideToggle(350); //350 - скорость
        return false;
    });
    if (windowWidth < 577) {
        body.click(function() {
        hamburger.removeClass('active');
        menu.slideUp('.main_header');
        });
    } else {
        return false;
    }
    
});


function slowScroll(id) {
    $('html, body').animate({ //анимирую всю страницу - <body>
        scrollTop:$(id).offset().top-60 //scrollTop - прокручиваю с верха страницы //offset().top - отступ сверху
    }, 500);
}


$( document ).ready(function() {
    $(document).on('scroll', function() {
        if($(window).scrollTop() > 0)
            $('.down, .h1, .main_header').addClass('active');
        else
            $('.down, .h1, .main_header').removeClass('active');
    });
});


$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
            $(th).find('.success').addClass('active').css('display', 'flex').hide().fadeIn();
//			alert("Thank you!");
			setTimeout(function() {
                $(th).find('.success').removeClass('active').fadeOut();
                th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});


$(window).scroll(function() {
    if ($(this).scrollTop() > $(this).height()) {
        $('.up').addClass('active');
    } else {
        $('.up').removeClass('active');
    }
});


$('.up').click(function() {
    $('html, body').stop().animate({scrollTop:0}, 'slow', 'swing');
});


$('.down').click(function() {
    $('html, body').animate({scrollTop:'700px'});
})

$(window).on('load', function() {
    $('.preloader').delay(1000).fadeOut('slow');
})


//      SLIDER      //


// Получаем переменные
let arrowLeft = document.getElementById("arrow-left"),
    arrowRight = document.getElementById("arrow-right"),
    sliderImg = document.getElementById("slider-img"),
    dotsWrap = document.getElementsByClassName("slider-dots")[0],
    dots = document.getElementsByClassName("dot"),
    left = -400,
    imgWidth = 200;

// Стартовая позиция слайдера
sliderImg.style.left = left + 'px';

//Функция перелистывания
slideTo = (direction) => {
  if (direction == "left") {
    left = left - imgWidth;
  }
  
  if (direction == "right") left += imgWidth;
  if (left < -800) left = 0;
  if (left > 0) left =-800;
  //Убираем все активные классы
  for (let item of dots) {
    item.classList.remove("active_2");
  }
  
  // Вставляем функцию switch для соединения строелок и точек при переключении стрелками
  switch (left) {
    case 0:
      dots[0].classList.add("active_2");
      break;
    case -400:
      dots[1].classList.add("active_2");
      break;
    case -800:
      dots[2].classList.add("active_2");
      break;
  }
  sliderImg.style.left = left + "px";
}

// Автоматическое переключение
  let timerId = setInterval(() => {
    slideTo("left"); //Направление перелистывания можно поставить right
  }, 4000);
  
arrowLeft.addEventListener("click", () => {
  clearInterval(timerId); //Останавливает таймер при клике на левую кнопку
  slideTo("left");
});

arrowRight.addEventListener("click", () => {
  clearInterval(timerId); //Останавливает таймер при клике на правую кнопку
  slideTo("right");
});

// Переключение точек 
dotsWrap.addEventListener("click", (event) => {
  clearInterval(timerId); //Останавливает таймер при клике на точки
  let target = event.target;
  for (let item of dots) {
    item.classList.remove("active_2");
  }
  if(target.classList.contains("dot")) {
     target.classList.add("active_2");
  }
  
  // Перелистывание слайдера при нажании на точку
  switch (target) {
    case dots[0]:
      left = 0;
      break;
    case dots[1]:
      left = -400; // если поставить -200, и следующее -400то листается по одной картинке
      break;
    case dots[2]:
      left = -800; // если поставить -400, и предыдущее -200то листается по одной картинке
      break;
  }
  
  sliderImg.style.left = left + 'px';
  
  })



