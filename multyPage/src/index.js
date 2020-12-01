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
import './sass/templates/search.sass';
import './sass/templates/contacts.sass';
import './sass/templates/callback.sass';
import './sass/templates/statistic.sass';
import './sass/templates/news.sass';
import './sass/templates/article.sass';
import './sass/templates/footer.sass';
import './sass/media.sass';
// function onSubmit(token) {
// 	document.getElementById('.callback__form').submit();
// }
import map from './components/map';
map('.contacts__location');
map('.filials__adres');
import './components/listShow';
import Valid from './components/valid';
new Valid({selectorValid: '.hero__form'}).init();
import Mail from './components/mail';
new Mail('hero-form').init();
import ShowMenu from './components/showMenu';
new ShowMenu('.burger', '.burger-menu').init();
new ShowMenu('.filials__share', '.filials__adres', {iteration: 3}).init();
import video from './components/video';
video('.descriptions__video', '.descriptions__modal');
import Popup from './components/popup';
new Popup('button[data-toggle="modal"]').init();
import pagination from './components/pagination';
pagination();
// import './components/js';