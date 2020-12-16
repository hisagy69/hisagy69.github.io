import './sass/style.sass';//добавит css  в head
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