

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
    $('body').animate({ //анимирую всю страницу - <body>
        scrollTop:$(id).offset().top //scrollTop - прокручиваю с верха страницы //offset().top - отступ сверху
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

