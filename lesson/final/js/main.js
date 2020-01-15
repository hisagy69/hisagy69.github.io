$(document).ready(function () {
  var slider1 = new Swiper ('.slider1', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })
  var prev = $(".swiper-button-prev");
  var next = $(".swiper-button-next");
  var bullets = $(".swiper-pagination");
  
  next.css("left", prev.width() + 10 + bullets.width() + 10)
  bullets.css("left", prew.width() + 10)
  //конец слайдера

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