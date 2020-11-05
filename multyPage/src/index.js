// import component from './components/dom';
// const element = component('привет');
// document.body.appendChild(element);

// import './css/style.css';//добавит css  в head
import 'normalize.css/normalize.css';
import './sass/fonts.sass';
import './sass/setting.sass';
import './sass/grid.sass';
import './sass/interface.sass';
import './sass/templates/popup.sass';
import './sass/templates/header.sass';
import './sass/templates/hero.sass';
import './sass/templates/advantages.sass';
import './sass/templates/groups.sass';
import './sass/templates/abonements.sass';
import './sass/templates/filials.sass';
import './sass/templates/footer.sass';
import './sass/media.sass';
// import logo from './img/logo.png';
// if (module.hot) {
// 	module.hot.accept('./components/dom', function() {
// 		document.body.removeChild(element);
// 		element = component();
// 		document.body.appendChild(element);
// 	})
// }
import './components/map';
import './components/listShow';
import Valid from './components/valid';
new Valid({selectorValid: '.hero__form'}).init();
import Mail from './components/mail';
new Mail('hero-form').init();
import ShowMenu from './components/showMenu';
new ShowMenu('.burger', '.burger-menu').init();
new ShowMenu('.filials__share', '.filials__adres').init();
// import './components/js';