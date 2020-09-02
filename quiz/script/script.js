
addEventListener('DOMContentLoaded', function(){
  'use strict';

  const questions = [
    {
      question: "Какого цвета бургер?",
      answers: [
        {
            title: 'Стандарт',
            url: './image/burger.png'
        },
        {
            title: 'Черный',
            url: './image/burgerBlack.png'
        }
      ],
      type: 'radio'
    },
    {
      question: "Из какого мяса котлета?",
      answers: [
        {
            title: 'Курица',
            url: './image/chickenMeat.png'
        },
        {
            title: 'Говядина',
            url: './image/beefMeat.png'
        },
        {
            title: 'Свинина',
            url: './image/porkMeat.png'
        }
      ],
      type: 'radio'
    },
    {
      question: "Дополнительные ингредиенты?",
      answers: [
        {
            title: 'Помидор',
            url: './image/tomato.png'
        },
        {
            title: 'Огурец',
            url: './image/cucumber.png'
        },
        {
            title: 'Салат',
            url: './image/salad.png'
        },
        {
            title: 'Лук',
            url: './image/onion.png'
        }
      ],
      type: 'checkbox'
    },
    {
      question: "Добавить соус?",
      answers: [
        {
            title: 'Чесночный',
            url: './image/sauce1.png'
        },
        {
            title: 'Томатный',
            url: './image/sauce2.png'
        },
        {
            title: 'Горчичный',
            url: './image/sauce3.png'
        }
      ],
      type: 'radio'
    }
  ];

  const btnOpenModal = document.querySelector('#btnOpenModal'),
        modalBlock = document.querySelector('#modalBlock'),
        modalClose = document.querySelector('#closeModal'),
        questionTitle = document.querySelector('#question'),
        formAnswers = document.querySelector('#formAnswers'),
        burgerBtn = document.querySelector('#burger'),
        nextButton = document.querySelector('#next'),
        prevButton = document.querySelector('#prev'),
        sendButton = document.querySelector('#send'),
        finalAnswers = [];

  //переменная в которую записывается размер окна
  let clientWidth = document.documentElement.clientWitdh;
  //создаю глобальную переменную, которую инициализирую в функции каждый раз при запуске, которая является номером вопроса
  



  //функция тестирования, которая принимает номер вопроса
  const playTest = ()=> {
    //функция рендерит ответы и принимает index, который равен numberQuestion
    let numberQuestion = 0;
    const renderAnswers = (index) => {

      questions[index].answers.forEach((item)=> {
        formAnswers.insertAdjacentHTML('beforeend', 
        `
          <div class="answers-item d-flex flex-column">
            <input type="${questions[index].type}" id="${item.title}" name="answer" class="d-none" value="${item.title}">
            <label for="${item.title}" class="d-flex flex-column justify-content-between">
              <img class="answerImg" src="${item.url}" alt="burger">
              <span>${item.title}</span>
            </label>
          </div>
        `)
      });
    }
    //создает вопросы и принимает индекс
    const renderQuestions = (indexQuestion) => {
      formAnswers.textContent = '';

      if(numberQuestion === 0) {
        prevButton.classList.add('d-none');
        questionTitle.textContent = `${questions[indexQuestion].question}`;
        renderAnswers(indexQuestion);
        sendButton.classList.add('d-none');
      } else if(numberQuestion === questions.length) {
        prevButton.classList.add('d-none');
        nextButton.classList.add('d-none');
        formAnswers.insertAdjacentHTML('beforeend', `
          <div class="form-group">
            <label for="numberPhone">Enter yout number</label>
            <input type="phone" class="form-control" id="numberPhone">
          </div>
        `);
        sendButton.classList.remove('d-none');
      } else if(numberQuestion === questions.length + 1) {
        formAnswers.textContent = 'Спасибоза пройденный тест!'
      } else {
        prevButton.classList.remove('d-none');
        nextButton.classList.remove('d-none');
        questionTitle.textContent = `${questions[indexQuestion].question}`;
        renderAnswers(indexQuestion);
        sendButton.classList.add('d-none');
      }
      
    }
    renderQuestions(numberQuestion);
    const checkAnswer = () => {
      const obj = {};
  
      const inputs = [...formAnswers.elements].filter((input) => input.checked || input.id === 'numberPhone');
  
      inputs.forEach((input, index) => {
        if(numberQuestion >= 0 && numberQuestion <= questions.length - 1) {
          obj[`${index}_${questions[numberQuestion].question}`] = input.value;
        }
        else if(numberQuestion === questions.length) {
          obj['Номер телефона'] = input.value;
        }
      });
      finalAnswers.push(obj);
      console.log(finalAnswers);
  
    }

    nextButton.onclick = () => {
      checkAnswer();
      numberQuestion++;
      renderQuestions(numberQuestion);
    };

    prevButton.addEventListener('click', () => {
      numberQuestion--;
      renderQuestions(numberQuestion);
    });

    sendButton.onclick = () => {
      checkAnswer();
      renderQuestions(numberQuestion);
      console.log(finalAnswers);
    }

    // numberQuestion берет из глобальной переменной, которая присваивается в modalShow
    //renderQuestions(numberQuestion);
  }
  
  const modalShow = ()=> {
    
    modalBlock.classList.add('d-block');
    burgerBtn.classList.add('active');
    playTest();
  }

/*   const modalHide = (event)=> {
    const target = event.target;
    
    if (target === modalClose || !modalContent.contains(target)) {
      modalBlock.classList.remove('d-block');
      burgerBtn.classList.remove('active');
    }
  } */

  const modalHide = (event)=> {
    const target = event.target;
    target.classList.remove('d-block');
    burgerBtn.classList.remove('active');
  }



  btnOpenModal.addEventListener('click', modalShow);
  burgerBtn.addEventListener('click', modalShow);
  modalBlock.addEventListener('click', modalHide);
  modalClose.addEventListener('click', ()=> {
    modalBlock.classList.remove('d-block');
    burgerBtn.classList.remove('active');
  });
  
  //вызывает обработчик при изменении размера экрана
  window.addEventListener('resize', () => {
    clientWidth = document.documentElement.clientWidth;
    
    if(clientWidth < 768) {
      burgerBtn.style.display = 'flex';
    } else {
      burgerBtn.style.display = 'none';
    }
  });

});
