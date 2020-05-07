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

const getData = async function(url) { // асинхронная функция, работает вне основного кода

  const response = await fetch(url); // функция обращения к сервиру, в данной функции я получаю json файл 

  if(!response.ok) {
    throw new Error(`Ошибка по адресу ${url}, 
    статус ошибка ${response.status}!`);
  }

  return await response.json();
  

}



const toggleModal = function() {
  modal.classList.toggle('is-open');
}

const modalClose = function(event) {
  let target = event.target;
  if(target !== modalDialog && !modalDialog.contains(target) || target === close) {
    modal.classList.remove('is-open');
  }
}

const toggleModalAuth = function() {
  modalAuth.classList.toggle('is-open');
  loginInput.style.border = '';
  message.remove();
}

function authorized() {

  const logOut = function() {
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

function createCardRestaurant(restaurant) {
  const  { image, kitchen, //c помощью объекта можно получить сразу все переменные, которые получены из объекта restaurant
           name, price, 
           products, stars, 
           time_of_delivery: timeOfDelivery } = restaurant;
  const card = `
    <a class="card card-restaurant" data-products="${products}">
      <img src="${image}" alt="image" class="card-image"/>
      <div class="card-text">
        <div class="card-heading">
          <h3 class="card-title">${name}</h3>
          <span class="card-tag tag">${timeOfDelivery} мин</span>
        </div>
        <div class="card-info">
          <div class="rating">
            ${stars}
          </div>
          <div class="price">От ${price} ₽</div>
          <div class="category">${kitchen}</div>
        </div>
      </div>
    </a>
  `;

  cardsRestaurants.insertAdjacentHTML('afterbegin', card);
}

function createCardGood(goods) {
  const { id, name,
          description,
          price, image } = goods;
  const card = document.createElement('div');
  card.className = 'card';
  card.insertAdjacentHTML('beforeend', `
      <img src="${image}" alt="image" class="card-image" />
      <div class="card-text">
        <div class="card-heading">
          <h3 class="card-title card-title-reg">${name}</h3>
        </div>
        <div class="card-info">
          <div class="ingredients">${description}
          </div>
        </div>
        <div class="card-buttons">
          <button class="button button-primary button-add-cart">
            <span class="button-card-text">В корзину</span>
            <span class="button-cart-svg"></span>
          </button>
          <strong class="card-price-bold">${price} ₽</strong>
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
      cardsMenu.textContent = '';
      containerPromo.classList.add('hide');
      restaurants.classList.add('hide');
      menu.classList.remove('hide');
      getData(`./db/${restaurant.dataset.products}`).then(function(data) {
        data.forEach(createCardGood);
      });
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

function init() {
  getData('./db/partners.json').then(function(data) {// с помощью then получу объект
    data.forEach(createCardRestaurant)
  });
  
  cardsRestaurants.addEventListener('click', openGoods);
  cartButton.addEventListener('click', toggleModal);
  modal.addEventListener('click', modalClose);
  
  checkAuth();
  
}

window.onload = init;