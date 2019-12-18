document.addEventListener("DOMContentLoaded", function(event) {
  //проверка загрузки дом
  const modal = document.querySelector(".modal"); //берет класс модал
  const modalDialog = document.querySelector(".modal__dialog");
  const modalBtn = document.querySelectorAll("[data-toggle=modal]");//берет атрибут дата тогл
  const modalClose = document.querySelector(".modal__close");//берет класс модал клос
  const toggleModal = () => {
    modal.classList.toggle("modal_visible");
    modalDialog.classList.toggle("modal__dialog_visible");
  }

  //перебирает все элементы переменной модалбтн
  modalBtn.forEach(element => {
    //перехватывает событие клик по элементу
    element.addEventListener("click", toggleModal);
  });
  modalClose.addEventListener("click", toggleModal);

  //усложненное задание esc
  document.addEventListener("keydown", (event) => {
    if(modal.classList.contains("modal_visible")) { //contains- содержит. Ищит наличие класса внутри класса модал
      if (event.keyCode == 27) {
        toggleModal();
      }
    }
  })

  // усложненное задание клик вне области
  modal.addEventListener("click", toggleModal);
});
//задать чтобы при клике по модал диалог не исчезало
//добавить, чтобы esc не открывало форму
//повешать событие на все кнопки