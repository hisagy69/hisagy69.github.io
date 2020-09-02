const formSearch = document.querySelector('.form-search'),
      inputCitiesFrom = formSearch.querySelector('.input__cities-from'),
      dropdownCitiesFrom = formSearch.querySelector('.dropdown__cities-from'),
      inputCitiesTo = formSearch.querySelector('.input__cities-to'),
      dropdownCitiesTo = formSearch.querySelector('.dropdown__cities-to'), 
      inputDateDepart = formSearch.querySelector('.input__date-depart');

const citiesApi = 'http://api.travelpayouts.com/data/ru/cities.json',
      proxy = 'https://cors-anywhere.herokuapp.com/',
      API_KEY = '5c5d94fd4cd73f50b1f17cc561cbf88f',
      calendar = 'http://min-prices.aviasales.ru/calendar_preload';


let city = [];

const getData = (url, callback) => {
  const request = new XMLHttpRequest(); // берем апи браузера

  request.open('GET', url); // передаем методу open параметры get и url куда будет отправляться запрос

  request.addEventListener('readystatechange', () => {
    if (request.readyState !== 4) return; // если событие 4, то не отправленно

    if (request.status === 200) { // если 200, то отправленно успешно
      callback(request.response);
    } else {
      console.error(request.status);    
    }
  });
  
  request.send();
};

const showCity = (input, list) => {
  list.textContent = '';

  if(input.value !== '') {

    const filterCity = city.filter((item) => {
      if(item.name) {
        const fixItem = item.name.toLowerCase();
        return fixItem.includes(input.value.toLowerCase());
      }
    });

    filterCity.forEach((item) => {
      const li = document.createElement('li');
      li.classList.add('dropdown__city');
      li.textContent = item.name;
      list.append(li);
    });
  }
}

const selectCity = (event, input, list) => {
  const target = event.target;
  if (target.tagName.toLowerCase() === 'li') {
    input.value = target.textContent;
    list.textContent = '';
  }
}

const renderCheapDay = (cheapTicket) => {
  console.log(cheapTicket);
};

const renderCheapYear = (cheapTickets) => {
  console.log(cheapTickets);
}

  const renderCheap = (data, date) => {
    const cheapTicketYear = JSON.parse(data).best_prices;

    const cheapTicketDay = cheapTicketYear.filter((item) => {
      return item.depart_date === date;
    });
    renderCheapDay(cheapTicketDay);
    renderCheapYear(cheapTicketYear);
  }

inputCitiesFrom.addEventListener('input', () => {
  showCity(inputCitiesFrom, dropdownCitiesFrom);
});

dropdownCitiesFrom.addEventListener('click', (event) => {
  selectCity(event, inputCitiesFrom, dropdownCitiesFrom);
});

inputCitiesTo.addEventListener('input', () => {
  showCity(inputCitiesTo, dropdownCitiesTo);
});

dropdownCitiesTo.addEventListener('click', (event) => {
  selectCity(event, inputCitiesTo, dropdownCitiesTo);
});

formSearch.addEventListener('submit', (event) => {
  event.preventDefault();

  const cityFrom = city.find((item) => {
    return inputCitiesFrom.value === item.name;
  });

  const cityTo = city.find((item) => {
    return inputCitiesTo.value === item.name;
  });

  const formData = {
    from: cityFrom.code,
    to: cityTo.code,
    when: inputDateDepart.value,
  };

  const requestData = '?depart_data=' + formData.when +
                      '&origin=' + formData.from +
                      '&destination=' + formData.to + 
                      '&one_way=true';

  getData(requestData, (response) => {
    renderCheap(response, formData.when);
  });
  
});

getData(proxy + citiesApi, (data) => {
  city = (JSON.parse(data)).filter(item => item.name);
  console.log(city);
  
});