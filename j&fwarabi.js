
// メニュースクロール
$(window).on('load',function(){

  $(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 150) {
      $('#topli').addClass('head_fixed');
    } else {
      $('#topli').removeClass('head_fixed');
    }
  });
});
});




// ハンバーガーメニュー
$(function () {
  $('.Toggle').click(function () {
    $(this).toggleClass('active');

    if ($(this).hasClass('active')) {
        $('.NavMenu').addClass('active');
        $('.NavMenu').fadeIn(500);
    } else {
        $('.NavMenu').removeClass('active');
        $('.NavMenu').fadeOut(500);
    }
  });

  $('.navmenu-a').click(function () {
    $('.NavMenu').removeClass('active');
    $('.NavMenu').fadeOut(1000);
    $('.Toggle').removeClass('active');
  });
});

// スライド
let swiper1 = new Swiper('.swiper1', {
  effect: 'coverflow',
	slidesPerView: 1,
  loop: true,
  autoplay: {
		delay: 3000,
		stopOnLastSlide: false,
		disableOnInteraction: false,
		reverseDirection: false
	},
  pagination: {
  el: '.swiper-pagination',
  type: 'bullets',
  clickable: true,
  }
  });



// 二つ目
let swiper2 = new Swiper('.swiper2', {
  effect: 'coverflow',
  slidesPerView: 1,
  spaceBetween: 10,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true
	}
});
// 三つ目
let swiper3 = new Swiper('.swiper3', {
  centeredSlides: true,
	controller: {
		control: swiper2,
		inverse: false,
		by: 'slide'
	},
	slidesPerView:3,
  slideToClickedSlide: true
  
});
swiper2.controller.control = swiper3;








  
 

