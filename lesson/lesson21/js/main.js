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

  document.on("keydown", (event) => {
    if (event.keyCode == 27) {
      modal.toggleClass("modal_visible");
    }
  })
});