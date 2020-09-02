$(document).ready(function () {
  //модальные окна
  var modalThanks = $(".modal-thanks");
  $(function() {
    modalClose = $(".modal-thanks__close");
    modalClose.on("click", function() {
      modalThanks.toggleClass("modal-thanks_visible");
    });
    $(document).mouseup(function (event) {
      if (modalThanks.is(event.target)) {
        modalThanks.toggleClass("modal-thanks_visible");
      }
    });
    $(document).on("keydown", function() {
      if (event.keyCode == 27 && $(".modal-thanks_visible").length == 1) {
        modalThanks.toggleClass("modal-thanks_visible");
      }
    });
  });
  //модал коллбэк
  var modalCallback = $(".modal-callback");
  $(".phone__link").on("click", function() {
    modalCallback.toggleClass("modal-callback_visible");
    $(".modal1__close").on("click", function() {
      modalCallback.removeClass("modal-callback_visible");
    });
    $(document).mouseup(function(event) {
      if (modalCallback.is(event.target)) {
        modalCallback.removeClass("modal-callback_visible");
      }
    });
    $(document).on("keydown", function() {
      if (event.keyCode == 27 && $(".modal-callback_visible").length == 1) {
        modalCallback.removeClass("modal-callback_visible");
      }
    });
  });
  // модал 1
  var modal1 = $(".modal1");
  $(".btn1").on("click", function() {
    modal1.toggleClass("modal1_visible");
    $(".modal1__close").on("click", function() {
      modal1.removeClass("modal1_visible");
    });
    $(document).mouseup(function(event) {
      if (modal1.is(event.target)) {
        modal1.removeClass("modal1_visible");
      }
    });
    $(document).on("keydown", function() {
      if (event.keyCode == 27 && $(".modal1_visible").length == 1) {
        modal1.removeClass("modal1_visible");
      }
    });
  });
  // модал 2
  var modal2 = $(".modal2");
  $(".btn2").on("click", function() {
    modal2.toggleClass("modal2_visible");
    $(".modal2__close").on("click", function() {
      modal2.removeClass("modal2_visible");
    });
    $(document).mouseup(function(event) {
      if (modal2.is(event.target)) {
        modal2.removeClass("modal2_visible");
      }
    });
    $(document).on("keydown", function() {
      if (event.keyCode == 27 && $(".modal2_visible").length == 1) {
        modal2.removeClass("modal2_visible");
      }
    });
  });
  // модал 3
  var modal3 = $(".modal3");
  $(".btn3").on("click", function() {
    modal3.toggleClass("modal3_visible");
    $(".modal3__close").on("click", function() {
      modal3.removeClass("modal3_visible");
    });
    $(document).mouseup(function(event) {
      if (modal3.is(event.target)) {
        modal3.removeClass("modal3_visible");
      }
    });
    $(document).on("keydown", function() {
      if (event.keyCode == 27 && $(".modal3_visible").length == 1) {
        modal3.removeClass("modal3_visible");
      }
    });
  });
  // модал 4
  var modal4 = $(".modal4");
  $(".btn4").on("click", function() {
    modal4.toggleClass("modal4_visible");
    $(".modal4__close").on("click", function() {
      modal4.removeClass("modal4_visible");
    });
    $(document).mouseup(function(event) {
      if (modal4.is(event.target)) {
        modal4.removeClass("modal4_visible");
      }
    });
    $(document).on("keydown", function() {
      if (event.keyCode == 27 && $(".modal4_visible").length == 1) {
        modal4.removeClass("modal4_visible");
      }
    });
  });
  // модал 5
  var modal5 = $(".modal5");
  $(".btn5").on("click", function() {
    modal5.toggleClass("modal5_visible");
    $(".modal5__close").on("click", function() {
      modal5.removeClass("modal5_visible");
    });
    $(document).mouseup(function(event) {
      if (modal5.is(event.target)) {
        modal5.removeClass("modal5_visible");
      }
    });
    $(document).on("keydown", function() {
      if (event.keyCode == 27 && $(".modal5_visible").length == 1) {
        modal5.removeClass("modal5_visible");
      }
    });
  });
  // модал 6
  var modal6 = $(".modal6");
  $(".btn6").on("click", function() {
    modal6.toggleClass("modal6_visible");
    $(".modal6__close").on("click", function() {
      modal6.removeClass("modal6_visible");
    });
    $(document).mouseup(function(event) {
      if (modal6.is(event.target)) {
        modal6.removeClass("modal6_visible");
      }
    });
    $(document).on("keydown", function() {
      if (event.keyCode == 27 && $(".modal6_visible").length == 1) {
        modal6.removeClass("modal6_visible");
      }
    });
  });
  //модал слайдер
  var modalSlider = $(".modal-slider");
  $(".footer__img").on("click", function() {
    modalSlider.toggleClass("modal-slider_visible");
    $(".modal-slider__close").on("click", function() {
      modalSlider.removeClass("modal-slider_visible");
    });
    $(document).mouseup(function(event) {
      if (modalSlider.is(event.target)) {
        modalSlider.removeClass("modal-slider_visible");
      }
    });
    $(document).on("keydown", function() {
      if (event.keyCode == 27 && $(".modal-slider_visible").length == 1) {
        modalSlider.removeClass("modal-slider_visible");
      }
    });
  });
  //валидация..
  $(function(){
    $(".hero__form").validate({
      rules: {
        userName: {
          required: true,
          minlength: 2,
        },
        userEmail: {
          required: true,
          email: true,
        },
        userPhone: {
          required: true,
          minlength: 16,
        },
      },
      errorElement: "em",
      errorClass: "invalid",
      messages: {
        userName: {
          required: "имя обязательно",
          minlength: "имя длиннее двух символов",
        },
        userEmail: {
          required: "Email обязательно",
          email: "введите email",
        },
        userPhone: {
          required: "телефон обязателен",
          minlength: "введите корректный номер",
        }, 
      },
      submitHandler: function(form) {
        $.ajax({
          type: "POST",
          url: "send.php",
          data: $(form).serialize(),
          success: function (response) {
            console.log("Ajax сработал. Ответ сервера: " + response);
            $(form)[0].reset();
            modalThanks.toggleClass("modal-thanks_visible");
          }
        });
      }
    });
    $(".personal__form").validate({
      rules: {
        userName: {
          required: true,
          minlength: 2,
        },
        userEmail: {
          required: true,
          email: true,
        },
        userPhone: {
          required: true,
          minlength: 16,
        },
      },
      errorElement: "em",
      errorClass: "invalid2",
      messages: {
        userName: {
          required: "имя обязательно",
          minlength: "имя длиннее двух символов",
        },
        userEmail: {
          required: "Email обязательно",
          email: "введите email",
        },
        userPhone: {
          required: "телефон обязателен",
          minlength: "введите корректный номер",
        }, 
      },
      submitHandler: function(form) {
        $.ajax({
          type: "POST",
          url: "send.php",
          data: $(form).serialize(),
          success: function (response) {
            console.log("Ajax сработал. Ответ сервера: " + response);
            $(form)[0].reset();
            modalThanks.toggleClass("modal-thanks_visible");
          }
        });
      }
    });
    $(".callback__form").validate({
      rules: {
        userName: {
          required: true,
          minlength: 2,
        },
        userPhone: {
          required: true,
          minlength: 16,
        },
      },
      errorElement: "em",
      errorClass: "invalid2",
      messages: {
        userName: {
          required: "имя обязательно",
          minlength: "имя длиннее двух символов",
        },
        userPhone: {
          required: "телефон обязателен",
          minlength: "введите корректный номер",
        }, 
      },
      submitHandler: function(form) {
        $.ajax({
          type: "POST",
          url: "send.php",
          data: $(form).serialize(),
          success: function (response) {
            console.log("Ajax сработал. Ответ сервера: " + response);
            $(form)[0].reset();
            modalThanks.toggleClass("modal-thanks_visible");
          }
        });
      }
    });
  });


  // маска для инпутов
  $("[type=tel]").mask("+7(000) 000 00-00");
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
    loop: false,
    slidePerView: 1,
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
  //конец слайдера2
  var slider3 = new Swiper ('.swiper-container#slider3', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidePerView: 1,
    // If we need pagination
    pagination: {
      el: '#slider3 .swiper-pagination',
      clickable: true,
    },
    // Navigation arrows
    navigation: {
      nextEl: '#slider3 .swiper-button-next',
      prevEl: '#slider3 .swiper-button-prev',
    },
  })
});
//видео

// Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
  ymaps.ready(init);
  function init(){
    // Создание карты.
    var map = new ymaps.Map("map", {
      // Координаты центра карты.
      // Порядок по умолчанию: «широта, долгота».
      // Чтобы не определять координаты центра карты вручную,
      // воспользуйтесь инструментом Определение координат.
      center: [55.738024, 37.510322],
      // Уровень масштабирования. Допустимые значения:
      // от 0 (весь мир) до 19.
      zoom: 17,
      controls: []
    });
    // Создание метки со сложной фигурой активной области.
    var polygonLayout = ymaps.templateLayoutFactory.createClass('<div class="placemark_layout_container"><div class="polygon_layout"><img src="img/map-photo.jpg" class="map-img"><div class="map-text"><strong class="map-heading">Мы находимся:</strong><p class="map-information">г. Москва, ул. Неверовского, д. 9<br> Телефон: <a href="tel:84954444444">+7 (495) 444-44-44</a><br>E-mail: <a href="mailto:info@ied.ru" class="map-mail">info@ied.ru</a></p></div></div></div>');

    var polygonPlacemark = new ymaps.Placemark(
        [55.738024, 37.510322], {
            hintContent: 'мы находимся здесь'// при наведении видно
        }, {
            iconLayout: polygonLayout,
            // Описываем фигуру активной области "Полигон".
            iconShape: {   
                type: 'Polygon',
                // Полигон описывается в виде трехмерного массива. Массив верхнего уровня содержит контуры полигона. 
                // Первый элемента массива - это внешний контур, а остальные - внутренние.
                coordinates: [
                    // Описание внешнего контура полигона в виде массива координат.
                    [[-28,-76],[28,-76],[28,-20],[12,-20],[0,-4],[-12,-20],[-28,-20]]
                    // , ... Описание внутренних контуров - пустых областей внутри внешнего.
                ]
            }
        },
        
    );
    map.geoObjects.add(polygonPlacemark);    
  }
/* //Переменная для включения/отключения индикатора загрузки
var spinner = $('.map').children('.loader');
//Переменная для определения была ли хоть раз загружена Яндекс.Карта (чтобы избежать повторной загрузки при наведении)
var check_if_load = false;
//Необходимые переменные для того, чтобы задать координаты на Яндекс.Карте
var myMapTemp, myPlacemarkTemp;
 
//Функция создания карты сайта и затем вставки ее в блок с идентификатором &#34;map-yandex&#34;
function init () {
  var myMapTemp = new ymaps.Map("map-yandex", {
    center: [55.738024, 37.510322], // координаты центра на карте
    zoom: 17, // коэффициент приближения карты
    controls: ['zoomControl',] // выбираем только те функции, которые необходимы при использовании
  });
  myMapTemp.behaviors.disable('scrollZoom');
  var myPlacemarkTemp = new ymaps.Placemark([55.738024, 37.510322], {
      balloonContent: "Здесь может быть ваш адрес",
  }, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#image',
      // Своё изображение иконки метки.
      iconImageHref: '../img/map-marker.png',
      // Размеры метки.
      iconImageSize: [274, 100],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-25, -50],
  });
  myMapTemp.geoObjects.add(myPlacemarkTemp); // помещаем флажок на карту
  
  // Получаем первый экземпляр коллекции слоев, потом первый слой коллекции
  var layer = myMapTemp.layers.get(0).get(0);
 
  // Решение по callback-у для определения полной загрузки карты
  waitForTilesLoad(layer).then(function() {
    // Скрываем индикатор загрузки после полной загрузки карты
    spinner.removeClass('is-active');
  });
}

// Функция для определения полной загрузки карты (на самом деле проверяется загрузка тайлов) 
function waitForTilesLoad(layer) {
  return new ymaps.vow.Promise(function (resolve, reject) {
    var tc = getTileContainer(layer), readyAll = true;
    tc.tiles.each(function (tile, number) {
      if (!tile.isReady()) {
        readyAll = false;
      }
    });
    if (readyAll) {
      resolve();
    } else {
      tc.events.once("ready", function() {
        resolve();
      });
    }
  });
}
 
function getTileContainer(layer) {
  for (var k in layer) {
    if (layer.hasOwnProperty(k)) {
      if (
        layer[k] instanceof ymaps.layer.tileContainer.CanvasContainer
        || layer[k] instanceof ymaps.layer.tileContainer.DomContainer
      ) {
        return layer[k];
      }
    }
  }
  return null;
}
 
// Функция загрузки API Яндекс.Карт по требованию (в нашем случае при наведении)
function loadScript(url, callback){
  var script = document.createElement("script");
 
  if (script.readyState){  // IE
    script.onreadystatechange = function(){
      if (script.readyState == "loaded" ||
            script.readyState == "complete"){
              script.onreadystatechange = null;
              callback();
            }
          };
  } else {  // Другие браузеры
    script.onload = function(){
      callback();
    };
  }
 
  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
}
 
// Основная функция, которая проверяет когда мы навели на блок с классом &#34;ymap-container&#34;
var ymap = function() {
  $('.map').mouseenter(function(){
      if (!check_if_load) { // проверяем первый ли раз загружается Яндекс.Карта, если да, то загружаем
 
	  	// Чтобы не было повторной загрузки карты, мы изменяем значение переменной
        check_if_load = true; 
 
		// Показываем индикатор загрузки до тех пор, пока карта не загрузится
        spinner.addClass('is-active');
 
		// Загружаем API Яндекс.Карт
        loadScript("https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;loadByRequire=1", function(){
           // Как только API Яндекс.Карт загрузились, сразу формируем карту и помещаем в блок с идентификатором &#34;map-yandex&#34;
           ymaps.load(init);
        });                
      }
    }
  );  
}
 
$(function() {
 
  //Запускаем основную функцию
  ymap();
 
}); */
//видео
//player
var player;
$('.video__play').on('click', function onYouTubeIframeAPIReady() {
player = new YT.Player('player', {
  height: '100%',
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
//player1
var player1;
$('.play1').on('click', function onYouTubeIframeAPIReady() {
player1 = new YT.Player('player1', {
  height: '100%',
  width: '100%', 
  videoId: 'u3qRGwd2bhg',
  events: {
    'onReady': videoPlay,
  }
});
});
function videoPlay(event) {
  event.target.playVideo();
}
$(".play1").on("click", function() {
  $(".play1").hide();
});
//player2
var player2;
$('.play2').on('click', function onYouTubeIframeAPIReady() {
player2 = new YT.Player('player2', {
  height: '100%',
  width: '100%', 
  videoId: 'vUTNvbYcNLI',
  events: {
    'onReady': videoPlay,
  }
});
});
function videoPlay(event) {
  event.target.playVideo();
}
$(".play2").on("click", function() {
  $(".play2").hide();
});
//player3
var player3;
$('.play3').on('click', function onYouTubeIframeAPIReady() {
player3 = new YT.Player('player3', {
  height: '100%',
  width: '100%', 
  videoId: '18GOSL0RQtM',
  events: {
    'onReady': videoPlay,
  }
});
});
function videoPlay(event) {
  event.target.playVideo();
}
$(".play3").on("click", function() {
  $(".play3").hide();
});
//player4
var player4;
$('.play4').on('click', function onYouTubeIframeAPIReady() {
player4 = new YT.Player('player4', {
  height: '100%',
  width: '100%', 
  videoId: 'jBpmZCCrOS0',
  events: {
    'onReady': videoPlay,
  }
});
});
function videoPlay(event) {
  event.target.playVideo();
}
$(".play4").on("click", function() {
  $(".play4").hide();
});
//player5
var player5;
$('.play5').on('click', function onYouTubeIframeAPIReady() {
player5 = new YT.Player('player5', {
  height: '100%',
  width: '100%', 
  videoId: '4yp8UhNnj-w',
  events: {
    'onReady': videoPlay,
  }
});
});
function videoPlay(event) {
  event.target.playVideo();
}
$(".play5").on("click", function() {
  $(".play5").hide();
});
// останавливаю видео при переходе на другой слайд
$(document).on('click', '#next2, #prev2', function(){
   jQuery("iframe").each(function() {
      jQuery(this)[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')});
});
/* $(window).on('load', function () {
  $.getScript("//vk.com/js/api/openapi.js?115")
    .then(function () {
      VK.Widgets.Like("vk_groups", {
        type: "button",
        height: 20,},
        );
    });
}); */
