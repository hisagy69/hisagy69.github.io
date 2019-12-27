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
  });
// конец модального окна

//функция кнопки scroll up
  $(function() {
    $(window).scroll(function() {
      var bo = $("body").scrollTop();
      $(".scroll-up").text(bo);
      if ( bo > 200 ) { 
        $(".scroll-up").css("display", "block"); 
      }
    });
      
    $('.scroll-up').click(function() {
      $('html, body').animate({scrollTop: 0},500);
      return false;
    });

  });
  //слайдер
  $(function(){
    var mySwiper = new Swiper (".swiper-container", {
      // Optional parameters
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        type: "bullets"
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      history: {
        replaceState: true,
      }
    })
    var next = $(".swiper-button-next");
    var prev = $(".swiper-button-prev");
    var bullets = $(".swiper-pagination");

    next.css("left", prev.width() + 20 + bullets.width() + 20);
    bullets.css("left", prev.width() + 20);
  });
  $(function(){
    var mySwiper = new Swiper (".target-container", {
      // Optional parameters
      loop: true,
      pagination: {
        el: ".target-pagination",
        type: "bullets"
      },
      navigation: {
        nextEl: ".target-button-next",
        prevEl: ".trget-button-prev"
      },
      history: {
        replaceState: true,
      }
    })
    var next = $(".target-button-next");
    var prev = $(".target-button-prev");
    var bullets = $(".target-pagination");

    next.css("left", prev.width() + 10 + bullets.width() + 10);
    bullets.css("left", prev.width() + 10);
  });
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
        // правило объекта (блок)
      }, //сообщения
      messages: {
        userName: {
          required: "Имя обязательно",
          minlength: "Имя не короче двух букв",
          maxlength: "Имя не больше 15 букв"
        },
        userPhone: "Телефон обязателен",
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
        // правило объекта (блок)
      userQuestion: {
        required: true,
        minlength: 10 
      }
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
          minlength: "сообщение должно быть длиннее 10 символов"
        }
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
        }
      }, //сообщения
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
        }
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
      // Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
  ymaps.ready(init);
  function init(){
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [55.76, 37.64],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 7
    });
  }
});
