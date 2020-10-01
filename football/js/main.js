    //map
    // Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(init);
    const location1 = {
      latitude: 51.146372,
      longitude: 71.389305
    },
    location2 = {
      latitude: 51.170011,  
      longitude: 71.427870
    },
    location3 = {
      latitude: 51.151359, 
      longitude: 71.454036
    },
    location4 = {
      latitude: 51.149851, 
      longitude: 71.438361
    };
    const plcacemarks = [location1, location2, location3, location4];
    function init(){
      // Создание карты.
      const map = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [51.146372, 71.389305],
        controls: [],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 17,
        behaviors: ["drag"],
      });

      map.on('click', function(event) {
        const target = event.target;
        
      })

      plcacemarks.forEach(function(obj) {
        var placemark = new ymaps.Placemark([obj.latitude, obj.longitude], {}, {
          iconLayout: 'default#image',
          iconImageHref: "img/marker.png",
          iconImageSize: [50, 50]
        });
        map.geoObjects.add(placemark);
      });
    }
  $('[data-fancybox]').fancybox({
  youtube : {
      controls : 0,
      showinfo : 0
  }
});


'use strict'
const viewRow = document.querySelector('.view_row'),
viewCol = document.querySelector('.view_col'), //button event
newsCard = document.querySelectorAll('.news-card'),
pagination = document.querySelector('.pagination'),
number = document.querySelectorAll('pagination__number'),
arrowLeft = document.querySelector('arrow_left'),
arrowRight = document.querySelector('arrow-right'),
menuBtn = document.querySelector('.menu-btn'),
menuBurger = document.querySelector('.menu-burger');

menuBtn.onclick = function(event) {
  event.preventDefault(); // метод отменяет стандартное нажатие по ссылке
  this.classList.toggle('menu-btn_active');
  menuBurger.classList.toggle('menu-burger_active');
}
//burger end

viewCol.onclick = function() {
  if(viewRow.classList.contains('active')) {
    viewRow.classList.remove('active');
  }

  viewCol.classList.add('active');

  newsCard.forEach((el) => {
    el.classList.add('active'); //classList не понимает массив, а потому надо, чтобы каждому элементу добавлялся класс
  });

  pagination.classList.add('active');
} 

viewRow.onclick = function() {
  if(viewCol.classList.contains('active')) {
    viewCol.classList.remove('active');
    
    newsCard.forEach((el) => {
      el.classList.remove('active');
    });

    pagination.classList.remove('active');
  }
  viewRow.classList.add('active');
}

const paginationObj = {
  limit: 8,
  pageShow: [], // добавляет список страниц на первой странице
  pageHide: [],// добавляет список для скрытых
  pageShowF: () => {
    paginationObj.pageShow = newsCard.filter((el, i) => {
      if(i < this.limit) {
        return true;
      }
    });
    console.log(paginationObj.pageShow);
  },
  show: function(pageShow) {
    pageShow.forEach((el) => {
      el.style.display = 'block';
    });
  },
  hide: function(pageHide) {
    pageHide.forEach((el) => {
      el.style.display = 'none';
    });
  }

}
paginationObj.pageShowF();