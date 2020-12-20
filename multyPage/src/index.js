import './sass/style.sass';//добавит css  в head
import map from './components/map';
import './components/listShow';
import Valid from './components/valid';
import Mail from './components/mail';
import ShowMenu from './components/showMenu';
import video from './components/video';
import Popup from './components/popup';
import pagination from './components/pagination';
import './components/scroll';
const init = () => {
	map('.contacts__location');
	map('.filials__adres');
	new Valid({selectorValid: '.hero__form'}).init();
	new Mail('hero-form').init();
	new ShowMenu('.burger', '.burger-menu').init();
	new ShowMenu('.filials__share', '.filials__adres', {iteration: 3}).init();
	video('.descriptions__video', '.descriptions__modal');
	new Popup('button[data-toggle="modal"]').init();
	pagination();
};
window.addEventListener('DOMContentLoaded', init);