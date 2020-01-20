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
});
//видео
//Переменная для включения/отключения индикатора загрузки
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
      iconLayout: 'default#imageWithContent',
      // Своё изображение иконки метки.
      iconImageHref: '../img/map-marker.png',
      // Размеры метки.
      iconImageSize: [412, 200],
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
 
});
'use strict';
function r(f){/in/.test(document.readyState)?setTimeout('r('+f+')',9):f()}
r(function(){
    if (!document.getElementsByClassName) {
        // Поддержка IE8
        var getElementsByClassName = function(node, classname) {
            var a = [];
            var re = new RegExp('(^| )'+classname+'( |$)');
            var els = node.getElementsByTagName("*");
            for(var i=0,j=els.length; i < j; i++)
                if(re.test(els[i].className))a.push(els[i]);
            return a;
        }
        var videos = getElementsByClassName(document.body,"youtube");
    } else {
        var videos = document.getElementsByClassName("youtube");
    }
    var nb_videos = videos.length;
    for (var i=0; i < nb_videos; i++) {
        var play = document.createElement("div");
        play.setAttribute("class","play");
        videos[i].appendChild(play);
        videos[i].onclick = function() {
            // Создаем iFrame и сразу начинаем проигрывать видео, т.е. атрибут autoplay у видео в значении 1
            var iframe = document.createElement("iframe");
            var iframe_url = "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1";
            if (this.getAttribute("data-params")) iframe_url+='&'+this.getAttribute("data-params");
            iframe.setAttribute("src",iframe_url);
            iframe.setAttribute("frameborder",'0');
            // Высота и ширина iFrame будет как у элемента-родителя
            iframe.style.width  = this.style.width;
            iframe.style.height = this.style.height;
            // Заменяем начальное изображение (постер) на iFrame
            this.parentNode.replaceChild(iframe, this);
        }
    }
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
