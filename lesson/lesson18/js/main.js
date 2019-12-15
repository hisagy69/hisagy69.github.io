document.addEventListener("DOMContentLoaded", function(event) {
  //проверка загрузки дом
  const modal = document.querySelector(".modal"); //берет класс модал
  const modalBtn = document.querySelectorAll("[data-toggle=modal]");//берет атрибут дата тогл
  const modalClose = document.querySelector(".modal__close");//берет класс модал клос
  const toggleModal = () => {
    modal.classList.toggle("modal_visible");
  }

  //перебирает все элементы переменной модалбтн
  modalBtn.forEach(element => {
    //перехватывает событие клик по элементу
    element.addEventListener("click", toggleModal);
  });
  modalClose.addEventListener("click", toggleModal);//когда один элемент, перебор создавать не надо

  //усложненное задание
/*   document.addEventListener("keypress", (event) => {
    console.log(event);
  }); */


});
