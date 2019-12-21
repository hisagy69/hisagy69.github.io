/* document.addEventListener("DOMContentLoaded", function(event) {
  const modal = document.querySelector(".modal");
  const modalBtn = document.querySelectorAll("[data-toggle=modal]");
  const modalClose = document.querySelector(".modal__close");
  const toggleModal = () => {
    modal.classList.toggle("modal_visible");
  }


  modalBtn.forEach(element => {
    element.addEventListener("click", toggleModal);
  });
  modalClose.addEventListener("click", toggleModal);

  //усложненное задание
  document.addEventListener("keydown", (event) => {
    if (event.keyCode == 27) {
      toggleModal;
    }
  })


});
 */
$(document).ready(function () {
  var modal = $(".modal"),
  modalBtn = $("[data-toggle=modal]"),
  modalClose = $(".modal__close");

  modalBtn.on("click", function () {
    modal.toggleClass("modal_visible");
  })

  modalClose.on("click", function () {
    modal.toggleClass("modal_visible");
  })
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
  })

//функция кнопки scroll up
var scrollUp = $(".scroll-up");
  $(document).on("scroll", function () {
    if (scrollUp.scroll.length == 0) {
      scrollUp.hide();
    }
    else {
      scrollUp.show();
    }  
    
    
    
  })
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

  new WOW().init();
});