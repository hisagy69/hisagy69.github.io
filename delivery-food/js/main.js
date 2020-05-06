'use strict';

const cartButton = document.querySelector('#cart-button'),
modal = document.querySelector('.modal'),
close = document.querySelector('.close'),
modalDialog = document.querySelector('.modal-dialog'),
buttonAuth = document.querySelector('.button-auth'),
modalAuth = document.querySelector('.modal-auth'),
closeAuth = document.querySelector('.close-auth'),
loginForm = document.querySelector('#logInForm'),
loginInput = document.querySelector('#login'),
inputPassword = document.querySelector('#password'),
userName = document.querySelector('.user-name'),
buttonOut = document.querySelector('.button-out'),
labelAuth = document.querySelector('.label-auth'),
cardsRestaurants = document.querySelector('.cards-restaurants'),
containerPromo = document.querySelector('.container-promo'),
restaurants = document.querySelector('.restaurants'), 
menu = document.querySelector('.menu'),
logo = document.querySelector('.logo'),
cardsMenu = document.querySelector('.cards-menu');


let login = localStorage.getItem('delivery');
let message;

function toggleModal() {
  modal.classList.toggle('is-open');
}

function modalClose(event) {
  let target = event.target;
  if(target !== modalDialog && !modalDialog.contains(target) || target === close) {
    modal.classList.remove('is-open');
  }
}

function toggleModalAuth() {
  modalAuth.classList.toggle('is-open');
  loginInput.style.border = '';
  message.remove();
}

function authorized() {

  function logOut() {
    login = null;
    localStorage.removeItem('gloDelivery');
    buttonOut.removeEventListener('click', logOut);
    checkAuth();
    userName.style.display = '';
    buttonOut.style.display = '';
    buttonAuth.style.display = '';
    logInForm.reset();
  }

  console.log('Авторизован');

  userName.textContent = login;

  buttonAuth.style.display = 'none';
  userName.style.display = 'inline';
  buttonOut.style.display = 'inline-block';

  buttonOut.addEventListener('click', logOut);
}

function notAuthorized() {
  console.log('Не авторизован');

  function logIn(event) {
    
    event.preventDefault();
    
    
    if(loginInput.value.trim()) {
      
      login = loginInput.value.trim();
      localStorage.setItem('delivery', login);
      toggleModalAuth();
      buttonAuth.removeEventListener('click', toggleModalAuth);
      closeAuth.removeEventListener('click', toggleModalAuth);
      loginForm.removeEventListener('submit', logIn);
      checkAuth();
    } else {
      loginInput.style.border = '2px solid red';
      message = document.createElement('span');
      message.textContent = 'Имя пользователя обязательно!';
      message.style.color = 'red';
      labelAuth.append(message);
    }
  }

  buttonAuth.addEventListener('click', toggleModalAuth);
  closeAuth.addEventListener('click', toggleModalAuth);
  loginForm.addEventListener('submit', logIn);
}

function checkAuth() {
  if(login) {
    authorized();
  } else {
    notAuthorized();
  }
}

function createCardRestaurant() {
  const card = `
    <a class="card card-restaurant">
      <img src="img/gusi-lebedi/preview.jpg" alt="image" class="card-image"/>
      <div class="card-text">
        <div class="card-heading">
          <h3 class="card-title">Гуси Лебеди</h3>
          <span class="card-tag tag">75 мин</span>
        </div>
        <div class="card-info">
          <div class="rating">
            4.5
          </div>
          <div class="price">От 1 000 ₽</div>
          <div class="category">Русская кухня</div>
        </div>
      </div>
    </a>
  `;

  cardsRestaurants.insertAdjacentHTML('afterbegin', card);
}

function createCardGood() {
  const card = document.createElement('div');
  card.className = 'card';
  card.insertAdjacentHTML('beforeend', `
      <img src="img/pizza-plus/pizza-classic.jpg" alt="image" class="card-image" />
      <div class="card-text">
        <div class="card-heading">
          <h3 class="card-title card-title-reg">Пицца Классика</h3>
        </div>
        <div class="card-info">
          <div class="ingredients">Соус томатный, сыр «Моцарелла», сыр «Пармезан», ветчина, салями,
            грибы.
          </div>
        </div>
        <div class="card-buttons">
          <button class="button button-primary button-add-cart">
            <span class="button-card-text">В корзину</span>
            <span class="button-cart-svg"></span>
          </button>
          <strong class="card-price-bold">510 ₽</strong>
        </div>
      </div>
  `);
  cardsMenu.insertAdjacentElement('beforeend', card);

}

function openGoods(event) {
  if(login) {
    const target = event.target,
    restaurant = target.closest('.card-restaurant');
  
    if(restaurant) {
      containerPromo.classList.add('hide');
      restaurants.classList.add('hide');
      menu.classList.remove('hide');
      cardsMenu.textContent = '';
      createCardGood();
      createCardGood();
      createCardGood();
    }
    function closeGoods() {
      containerPromo.classList.remove('hide');
      restaurants.classList.remove('hide');
      menu.classList.add('hide');
    }
    logo.addEventListener('click', closeGoods);
  } else {
    toggleModalAuth();
  }

}


cardsRestaurants.addEventListener('click', openGoods);
cartButton.addEventListener('click', toggleModal);
modal.addEventListener('click', modalClose);

checkAuth();
createCardRestaurant();
