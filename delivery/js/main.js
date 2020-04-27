const modal = document.querySelector('.modal'),
modalDialog = document.querySelector('.modal-dialog'),
btnShop = document.querySelector('.button-shop'),
modalClose = document.querySelector('.modal-close'),
modalBuy = document.querySelector('.modal-buy'),
modalPrice = document.querySelector('.modal-price'),
modalCancel = document.querySelector('.modal-cancel'),
modalButtonsPlus = document.querySelectorAll('.modal-button-plus'),
modalButtonsSubstraction = document.querySelectorAll('.modal-button-substraction'),
modalNumbers = document.querySelectorAll('.modal-number'),
modalItemsPrice = document.querySelectorAll('.modal-item-price'),
position = [];


function modalShow() {
  modal.classList.add('modal-active');  
}

function modalHide(event) {
  let target = event.target;
  if(target === modalClose || target !== modalDialog && !modalDialog.contains(target)) {
    modal.classList.remove('modal-active');
  }
}

function numbers(event) {
  let target = event.target;
  if(target.classList.contains('modal-button-plus')) {
    for(let i in modalButtonsPlus) { // перебирает весь массив и меняет i
      if(target === modalButtonsPlus[i]) {
        let sum = modalNumbers[i].textContent++;
        modalNumbers[i] = sum;
        calc();
        break;
      }
    }
  } else if (target.classList.contains('modal-button-substraction')) {
    for(let i in modalButtonsSubstraction) {
      if(target === modalButtonsSubstraction[i] && modalNumbers[i].textContent > 0) {
        let sum = modalNumbers[i].textContent--;
        modalNumbers[i] = sum;
        calc();
        break;
      }
    }
  }
}

function calc() {

  for(let i in modalNumbers) {
    let itemsPrice = (modalItemsPrice[i].textContent).slice(modalItemsPrice[i].textContent.length + 1);
    position[i] = modalNumbers[i].textContent * itemsPrice; 
    console.log(itemsPrice);
    
    console.log(position[i]);
    
  }
  summPosition();
}

function summPosition() {
  for(let i in position) {
    modalPrice.textContent = modalPrice.textContent + position[i];
  }
  modalPrice.textContent = +modalPrice.textContent + ' ₽';
  console.log(modalPrice);
  
}

btnShop.onclick = modalShow;

modal.addEventListener('click', modalHide);
modalDialog.addEventListener('click', numbers);