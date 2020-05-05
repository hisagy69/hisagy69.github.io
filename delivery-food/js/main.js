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
labelAuth = document.querySelector('.label-auth');

let login = localStorage.getItem('delivery');

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

    if(loginInput.value) {
      login = loginInput.value;
      localStorage.setItem('delivery', login);
      toggleModalAuth();
      buttonAuth.removeEventListener('click', toggleModalAuth);
      closeAuth.removeEventListener('click', toggleModalAuth);
      loginForm.removeEventListener('submit', logIn);
      checkAuth();
    } else {
      loginInput.style.border = '2px solid red';
      const message = document.createElement('span');
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

cartButton.addEventListener('click', toggleModal);
modal.addEventListener('click', modalClose);
checkAuth();
