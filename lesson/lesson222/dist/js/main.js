/* var next1 = $('.swiper-button-next1');
var prev1 = $('.swiper-button-prev1');
var bullets1 = $('.pagination-bottom');
var bullet = $(".swiper-pagination-bullet");
 */
$(document).ready(function () {
//функция модальное окно
var modal = $(".modal");
$(function() {
  modalBtn = $("[data-toggle=modal]"),
  modalClose = $(".modal__close");

  modalBtn.on("click", function () {
    modal.toggleClass("modal_visible");
  });

  modalClose.on("click", function () {
    modal.toggleClass("modal_visible");
  });
//закрытие модального окна по клику вне окна
  $(document).mouseup(function (event) {
    if (modal.is(event.target)) {
      modal.toggleClass("modal_visible");
    }
  });
//закрытие модального окна по кнопке esc
  $(document).on("keydown", function () {
    if (event.keyCode == 27 && $(".modal_visible").length == 1) {
      modal.toggleClass("modal_visible");
    }
  });
})
// конец модального окна
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
  //слайдер
  var mySwiper = new Swiper (".swiper-container", {
    // Optional parameters
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })
  var next = $(".swiper-button-next");
  var prev = $(".swiper-button-prev");
  var bullets = $(".swiper-pagination");

  next.css("left", prev.width() + 20 + bullets.width() + 20)
  bullets.css("left", prev.width() + 20)
/*   var slider1 = new Swiper ('.slider1', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
      scrollbar: {
    el: '.swiper-scrollbar',
  },
  });
  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');

  next.css("left", prev.width() + 20 + bullets.width() + 20);
  bullets.css("left", prev.width() + 20);
  //slider2
  var slider2 = new Swiper ('.slider2', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.pagination-bottom',
    clickable: true,
    type: 'bullets',
    progressbarOpposite: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
//slider2
var slider2 = new Swiper ('.slider2', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.pagination-top',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
}); */

/* next1.css("left", prev1.width() + 20 + bullets.width() + 20)
bullets1.css("left", prev1.width() + 20) */
// var slider2 = new Swiper ('.slider2', {
//   // Optional parameters
//   direction: 'horizontal',
//   loop: true,
// });

//анимация
new WOW().init();

  //валидация форм
$(function(){
  $(".control__form").validate({
    errorClass: "invalid",
    rules: {
      // строчное правило
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
      policyCheckbox: "required",
      // правило объекта (блок)
    }, 
    // помогает отобразить псевдаэлемент
    errorPlacement: function (error, element) {
      if (element.attr("type") == "checkbox") {
          return element.next('label').append(error);
      }
       error.insertAfter($(element));
    },
    //сообщения
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Имя не короче двух букв",
        maxlength: "Имя не больше 15 букв"
      },
      userPhone: "Телефон обязателен",
      policyCheckbox: "Согласитесь на обработку данных",
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


  $(".footer__form").validate({
    errorClass: "invalid",
    rules: {
      // строчное правило
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
      policyCheckbox: "required",
      // правило объекта (блок)
    userQuestion: {
      required: true,
      minlength: 10 
    }
    },
    errorPlacement: function (error, element) {
      if (element.attr("type") == "checkbox") {
          return element.next('label').append(error);
      }
       error.insertAfter($(element));
    },
//сообщения
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Имя не короче двух букв",
        maxlength: "Имя не больше 15 букв"
      },
      userPhone: "Телефон обязателен",
      userQuestion: {
        required: "Задайте вопрос",
        minlength: "сообщение должно быть длиннее 10 символов",
      },
      policyCheckbox: "Согласитесь на обработку данных",
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
  $(".modal__form").validate({
    errorClass: "invalid",
    rules: {
      // строчное правило
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
      // правило объекта (блок)
      userEmail: {
        required: true,
        email: true
      },
      policyCheckbox: "required",
    }, //сообщения
    errorPlacement: function (error, element) {
      if (element.attr("type") == "checkbox") {
          return element.next('label').append(error);
      }
       error.insertAfter($(element));
    },
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Имя не короче двух букв",
        maxlength: "Имя не длиннее 15 букв"
      },
      userPhone: "Телефон обязателен",
      userEmail: {
        required: "Обязательно укажите email",
        email: "Введите в формате name@domain.com"
      },
      policyCheckbox: "Согласитесь на обработку данных",
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          console.log("Ajax сработал. Ответ сервера: " + response);
          $(form)[0].reset();
          modal.removeClass("modal_visible");
          modalThanks.toggleClass("modal-thanks_visible");
        }
      });
    }
  });
  //маски для input
  $('[type=tel').mask('+7(000)000-00-00', {
    placeholder: '+7(___)___-__-__'
  });
});
//функция scroll-up
$(window).scroll(function() {
  var scrollUp = $(".scroll-up");
  if($(this).scrollTop() != 0) {
    scrollUp.show();
  }
  else {
    scrollUp.hide();
  }
});
$(".scroll-up").click(function() {
  $('body,html').animate({scrollTop:0},800);
  return false;
});
    // Функция ymaps.ready() будет вызвана, когда
  // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
var isAddedMap = false;

$(window).scroll(function() {
    var el = $('.map');
    if ($(this).scrollTop() > el.offset().top - 800) {
        if(isAddedMap) return;
        isAddedMap = true;
        var script = document.createElement('script');
        script.src = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Aff33592786caac6d4815c88a48b802b9d1fa327f2861f76882a17855760ce22e&amp;width=100%25&amp;lang=ru_RU&amp;scroll=false";
        el.append(script);
    };
});
//функция видео
var player;
$('.video__play').on('click', function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '465',
    width: '100%', 
    videoId: 'Mfs90HDVFfI',
    events: {
      'onReady': videoPlay,
    }
  });
})
function videoPlay(event) {
  event.target.playVideo();
}

});

var slideAll = document.querySelectorAll(".target-slide");
var number = document.querySelectorAll(".number");

function numbers() {
  console.log('working');
  for (var i = 0; i < slideAll.length; i++) {
    if (slideAll[i].classList.contains("swiper-slide-active")) {
      for (var j = 0; j < number.length; j++) {
        number[j].classList.remove("number-active");
      }
      number[i].classList.add("number-active");
    }
  }
  console.log('ended');
}
$('.swiper-button-next1').on('click', function () {
  numbers();
});
// prev1.click(numbers());
// bullet.click(numbers());