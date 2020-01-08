$(document).ready(function () {
  //функция модальное окно
  $(function() {
    var modal = $(".modal"),
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
    //слайдер
    
    var slider1 = new Swiper ('.slider1', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      pagination: {
        el: '.swiper-pagination',
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
  
    next.css("left", prev.width() + 20 + bullets.width() + 20)
    bullets.css("left", prev.width() + 20)
    //slider2
    var slider2 = new Swiper ('.slider2', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.swiper-pagination.pagination-bottom, .swiper-pagination.pagination-top',
      type: 'bullets',
    },
/*     pagination: {
      el: '.swiper-pagination2',
      type: 'fraction',
    }, */
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  var next = $('.swiper-button-next1');
    var prev = $('.swiper-button-prev1');
    var bullets = $('.pagination-bottom');
  
    next.css("left", prev.width() + 20 + bullets.width() + 20)
    bullets.css("left", prev.width() + 20)
  
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
            alert("Форма отправлена, мы свяжемся с вами через 10 минут");
            $(form)[0].reset();
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
            alert("Форма отправлена, мы свяжемся с вами через 10 минут");
            $(form)[0].reset();
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
            var modalThanks = $(".modal-thanks"),
            modalThanksClose = $(".modal-thanks__close");
            modalThanks.toggleClass("madal-thanks_visible");
            $(document).mouseUp(function(event) {
              modalThanksClose.on("click", function() {
                modalThanks.toggleClass(".modal-thanks_visible");
              });
              if(modalThanks(event.target)) {
                modalThanks.toggleClass(".modal-thanks_visible");
              }
            });
            $(form)[0].reset();
            modal.removeClass("modal_visible");
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
