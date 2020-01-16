$(document).ready(function () {
  var slider1 = new Swiper ('.swiper-container#slider1', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // If we need pagination
    pagination: {
      el: '#slider1 .swiper-pagination',
      clickable: true,
    },
    // Navigation arrows
    navigation: {
      nextEl: '#slider1 .swiper-button-next',
      prevEl: '#slider1 .swiper-button-prev',
    },
  })
  //конец слайдера1
  var slider2 = new Swiper ('.swiper-container#slider2', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // If we need pagination
    pagination: {
      el: '#slider2 .swiper-pagination',
      clickable: true,
    },
    // Navigation arrows
    navigation: {
      nextEl: '#slider2 .swiper-button-next',
      prevEl: '#slider2 .swiper-button-prev',
    },
  })
  
    var prev = $(".swiper-button-prev");
    var next = $(".swiper-button-next");
    var bullets = $(".swiper-pagination");
    
    next.css("left", prev.width() + 7 + bullets.width() + 7)
    bullets.css("left", prev.width() + 12)
});
//видео
var player;
$('.video__play').on('click', function onYouTubeIframeAPIReady() {
player = new YT.Player('player', {
  height: '396',
  width: '100%', 
  videoId: 'iopMMFc2hBw',
  events: {
    'onReady': videoPlay,
  }
});
})
function videoPlay(event) {
event.target.playVideo();
}
var player1;
$('.play1').on('click', function onYouTubeIframeAPIReady() {
player1 = new YT.Player('player1', {
  height: '396',
  width: '100%', 
  videoId: 'iopMMFc2hBw',
  events: {
    'onReady': videoPlay,
  }
});
})
function videoPlay(event) {
event.target.playVideo();
}
var isAddedMap = false;

    $(window).scroll(function() {
        var el = $('.map');
        if ($(this).scrollTop() > el.offset().top - 800) {
            if(isAddedMap) return;
            isAddedMap = true;
            var script = document.createElement('script');
            script.src = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A6a1bebdb0189c37981025a005e9a674d852cbabd524f2b9cf3c5b1ce133b0b26&amp;width=100%25&amp;height=563&amp;lang=ru_RU&amp;scroll=false";
            el.append(script);
        };
  });