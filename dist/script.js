/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../Project_JS_\u0000#2_PICTURES_ART/src/js/modules/accordion.js":
/*!******************************************************************!*\
  !*** ../Project_JS_ #2_PICTURES_ART/src/js/modules/accordion.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const accordion = triggerSelector => {
  const btns = document.querySelectorAll(triggerSelector);

  // мы перебираем все "кнопки" содержащие класс который указываем в селекторе
  btns.forEach(btn => {
    // назначаем обработчик событий клик
    btn.addEventListener('click', function () {
      // если этот элемент куда мы кликнули не содержит класс '.active-style' то мы добавим его,
      // а если он уже есть - то удалим его из этого элемента при повторном клике
      this.classList.toggle('active-style');
      // если соседний элемент того элемента на который мы кликнули имеет класс '.active-content' то мы его удалим,
      // а если не имеет - то добавим
      this.nextElementSibling.classList.toggle('active-content');

      // условие в котором мы проверяем элемент на который кликнули что он содержит класс
      // '.active-style' 
      if (this.classList.contains('active-style')) {
        // если да то мы назначаем соседнему элементу максимальную высоту - полную высоту элемента + 80px
        this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + "px";
      } else {
        // если не содержит класс '.active-style' то делаем максимальную высоту соседнего элемента - '0px'
        // т.е скрываем таким необычным образом его
        this.nextElementSibling.style.maxHeight = '0px';
      }
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (accordion);

/***/ }),

/***/ "../Project_JS_\u0000#2_PICTURES_ART/src/js/modules/burger.js":
/*!***************************************************************!*\
  !*** ../Project_JS_ #2_PICTURES_ART/src/js/modules/burger.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const burger = (menuSelector, burgerSelector) => {
  const menuElem = document.querySelector(menuSelector),
    burgerElem = document.querySelector(burgerSelector);

  // Мы изначально скрываем бургер меню
  menuElem.style.display = 'none';

  // ф-ция по клику на иконку бургер меню у нас будет проверка :
  // если бургер меню скрыто, а экран устройства меньше 993px то мы покажем меню. 
  // При повторном нажатии мы скроем меню ( если оно активно и экран меньше 993px) 
  burgerElem.addEventListener('click', () => {
    if (menuElem.style.display == 'none' && window.screen.availWidth < 993) {
      menuElem.style.display = 'block';
    } else {
      menuElem.style.display = 'none';
    }
  });

  // ф-ция которая отслеживает изменение размеров экрана. Если размер экрана превысит 992px 
  // то бургер меню автоматически скроется
  window.addEventListener('resize', () => {
    if (window.screen.availWidth > 992) {
      menuElem.style.display = 'none';
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (burger);

/***/ }),

/***/ "../Project_JS_\u0000#2_PICTURES_ART/src/js/modules/calc.js":
/*!*************************************************************!*\
  !*** ../Project_JS_ #2_PICTURES_ART/src/js/modules/calc.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const calc = (size, material, options, promocode, result) => {
  const sizeBlock = document.querySelector(size),
    materialBlock = document.querySelector(material),
    optionsBlock = document.querySelector(options),
    promocodeBlock = document.querySelector(promocode),
    resultBlock = document.querySelector(result);

  // изначальная сумма заказа
  let sum = 0;

  // ф-ция калькулятора заказа мы берем value которые переводятся к типу number (+перед переменной) 
  // и приводим к ближайшему целому числу (Math.round) : Берем Размер картины и его value умножаем на
  // материал картины и складываем дополнительные опции - все что выберет пользователь имеет свое velue
  const calcFunc = () => {
    sum = Math.round(+sizeBlock.value * +materialBlock.value + +optionsBlock.value);

    // проверка на то что если размер картины или материал картины останутся не выбранными
    // то мы покажем в окошке где показывается итоговая сумма заказа сообщение
    if (sizeBlock.value == "" || materialBlock.value == "") {
      resultBlock.textContent = "Пожалуйста, выберите размер и материал картины";

      // проверка на то что если пользователь введет промокод в поле для промокода 
      // то вся сумма что у нас получилась умножается на 0.7 (т.е 30% скидка)
    } else if (promocodeBlock.value === "IWANTPOPART") {
      resultBlock.textContent = Math.round(sum * 0.7);
    } else {
      // ну и собственно отобразить всю сумму что получилась
      resultBlock.textContent = sum;
    }
  };

  // обработчик события 'change' это отслеживание по окончании изменения значения элемента формы
  // для текстовых элементов это означает, что событие произойдет не при каждом вводе,
  // а при потере фокуса
  sizeBlock.addEventListener('change', calcFunc);
  materialBlock.addEventListener('change', calcFunc);
  optionsBlock.addEventListener('change', calcFunc);
  promocodeBlock.addEventListener('change', calcFunc);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);

/***/ }),

/***/ "../Project_JS_\u0000#2_PICTURES_ART/src/js/modules/checkInputs.js":
/*!********************************************************************!*\
  !*** ../Project_JS_ #2_PICTURES_ART/src/js/modules/checkInputs.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// проверка в трех типах инпутов которую придумал сам

const checkInputs = (selectorMessage, selectorName, selectorEmail) => {
  const inputsMessage = document.querySelectorAll(selectorMessage),
    inputsName = document.querySelectorAll(selectorName),
    inputsEmail = document.querySelectorAll(selectorEmail);

  // проверка идет по обратботчику событий клавиатурой - по нажатию клавиши, он будет проверять 
  // каждый введенный символ на соответствие а-яё это все буквы алфавита русского.
  // 0-9 это все цифры от нуля до девяти, далее идут символы которые разрешены будут в этом инпуте 
  inputsMessage.forEach(inputMes => {
    // это метод который вкл/откл предложения прошлых вводов данных в инпуты 
    // т.е. те данные что мы раньше ввоодили в такие же инпуты
    inputMes.setAttribute('autocomplete', 'off');
    inputMes.addEventListener('keypress', function (e) {
      if (e.key.match(/[^а-яё 0-9 .,:&(+=!"?)*%-]/ig)) {
        e.preventDefault();
      }
    });
  });

  // здесь только буквы русского алфавита. Без цифр и символом. i - это безразличие на регистр верхний
  // или нижний. Можно будет и так и так. g - global т.е на все символы в строке
  inputsName.forEach(inputNam => {
    inputNam.setAttribute('autocomplete', 'off');
    inputNam.addEventListener('keypress', function (e) {
      if (e.key.match(/[^а-яё]/ig)) {
        e.preventDefault();
      }
    });
  });

  //здесь только буквы Англ Алфавита , Верхнего\Нижнего регистра, цифры от 0-9 и символ @ с .
  inputsEmail.forEach(inputEma => {
    inputEma.setAttribute('autocomplete', 'off');
    inputEma.addEventListener('keypress', function (e) {
      if (e.key.match(/[^A-Za-z0-9.@]/ig)) {
        e.preventDefault();
      }
    });
  });

  // На будущее Регулярное выражение на правильный ввод Российского номера +7|7|8
  //let regex = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkInputs);

/***/ }),

/***/ "../Project_JS_\u0000#2_PICTURES_ART/src/js/modules/drop.js":
/*!*************************************************************!*\
  !*** ../Project_JS_ #2_PICTURES_ART/src/js/modules/drop.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const drop = () => {
  const fileInputs = document.querySelectorAll('[name="upload"]');
  ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(eventName => {
    fileInputs.forEach(input => {
      input.addEventListener(eventName, preventDefaults, false);
    });
  });
  function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
  }
  function highlight(item) {
    item.closest('.file_upload').style.border = '5px solid yellow';
    item.closest('.file_upload').style.backgroundColor = 'rgba (0,0,0 .7)';
  }
  function unhighlight(item) {
    item.closest('.file_upload').style.border = 'none';
    if (item.closest('.calc_form')) {
      item.closest('.file_upload').style.backgroundColor = '#fff';
    } else {
      item.closest('.file_upload').style.backgroundColor = '#ededed';
    }
  }
  ['dragleave', 'drop'].forEach(eventName => {
    fileInputs.forEach(input => {
      input.addEventListener(eventName, () => unhighlight(input), false);
    });
  });
  ['dragenter', 'dropover'].forEach(eventName => {
    fileInputs.forEach(input => {
      input.addEventListener(eventName, () => highlight(input), false);
    });
  });
  fileInputs.forEach(input => {
    input.addEventListener('drop', e => {
      input.files = e.dataTransfer.files;
      let dots;
      const arr = input.files[0].name.split('.');
      arr[0].length > 6 ? dots = "..." : dots = ".";
      const name = arr[0].substring(0, 6) + dots + arr[1];
      input.previousElementSibling.textContent = name;
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (drop);

/***/ }),

/***/ "../Project_JS_\u0000#2_PICTURES_ART/src/js/modules/filter.js":
/*!***************************************************************!*\
  !*** ../Project_JS_ #2_PICTURES_ART/src/js/modules/filter.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// это модуль табов с примерами работ компании, выделяя определенный раздел напр. для влюбленных
// примеры работ отфильтруются и останутся только они

const filter = () => {
  const menu = document.querySelector('.portfolio-menu'),
    items = menu.querySelectorAll('li'),
    btnAll = menu.querySelector('.all'),
    btnLovers = menu.querySelector('.lovers'),
    btnChef = menu.querySelector('.chef'),
    btnGirl = menu.querySelector('.girl'),
    btnGuy = menu.querySelector('.guy'),
    btnGrandmother = menu.querySelector('.grandmother'),
    btnGranddad = menu.querySelector('.granddad'),
    wrapper = document.querySelector('.portfolio-wrapper'),
    markAll = wrapper.querySelectorAll('.all'),
    markGirl = wrapper.querySelectorAll('.girl'),
    markLovers = wrapper.querySelectorAll('.lovers'),
    markChef = wrapper.querySelectorAll('.chef'),
    markGuy = wrapper.querySelectorAll('.guy'),
    no = document.querySelector('.portfolio-no');

  // изначально мы перебираем все примеры фото работ и скрываем их, удаляем у них классы анимации
  const typeFilter = markType => {
    markAll.forEach(mark => {
      mark.style.display = 'none';
      mark.classList.remove('animated', 'fadeIn');
    });

    // мы изначально скрываем контент который появляется при клике в раздел пример работ
    // с бабушкой/дедушкой Где показывается <p></p> параграф мол мы таких работ еще не делали
    no.style.display = 'none';
    no.classList.remove('animated', 'fadeIn');

    // если мы передаем какой либо селектор при вызове ф-ции то мы перебираем все примеры фото работ 
    // и показываем только те работы, в которых содержится класс указанный в селекторе и отображаем их 
    if (markType) {
      markType.forEach(mark => {
        mark.style.display = 'block';
        mark.classList.add('animated', 'fadeIn');
      });
    } else {
      // если класс не передан в селектор для ф-ции то
      // мы показываем контент <p></p> параграф мол мы таких работ еще не делали
      // это у нас идет назначение на кнопки примеров работ с бабушкой/дедушкой
      no.style.display = 'block';
      no.classList.add = ('animated', 'fadeIn');
    }
  };

  // ф-ция по нажатию кнопки "все работы" - у нас отфильтровываются примеры работ (фотографии) содержащие 
  // класс .all и т.д для всех ф-ций
  btnAll.addEventListener('click', () => {
    typeFilter(markAll);
  });
  btnLovers.addEventListener('click', () => {
    typeFilter(markLovers);
  });
  btnChef.addEventListener('click', () => {
    typeFilter(markChef);
  });
  btnGuy.addEventListener('click', () => {
    typeFilter(markGuy);
  });
  btnGirl.addEventListener('click', () => {
    typeFilter(markGirl);
  });
  btnGrandmother.addEventListener('click', () => {
    typeFilter();
  });
  btnGranddad.addEventListener('click', () => {
    typeFilter();
  });

  // этой функцией мы указаываем что если клик происходит в таргет элемента Menu 
  // и таргет содержит имя узла "Li" (т.е. li элемент) то мы перебриаем все li элементы
  // и удаляем у них у всех класс активности .active, затем на тот таргет li элемента
  // на который мы кликнули мы ему назначает класс активности .active
  menu.addEventListener('click', e => {
    let target = e.target;
    if (target && target.tagName == "LI") {
      items.forEach(btn => btn.classList.remove('active'));
      target.classList.add('active');
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (filter);

/***/ }),

/***/ "../Project_JS_\u0000#2_PICTURES_ART/src/js/modules/forms.js":
/*!**************************************************************!*\
  !*** ../Project_JS_ #2_PICTURES_ART/src/js/modules/forms.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_requests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/requests */ "../Project_JS_\u0000#2_PICTURES_ART/src/js/services/requests.js");

const forms = () => {
  const form = document.querySelectorAll('form'),
    inputs = document.querySelectorAll('input'),
    upload = document.querySelectorAll('[name="upload"]');

  // создаем текстовые сообщения о статусе нашего запроса на сервер
  // так же создаем пути к картинкам которые будут идти вместе с текстовым сообщением
  const message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы c вами свяжемся',
    failure: 'Что-то пошло не так...',
    spinner: 'assets/img/spinner.gif',
    ok: 'assets/img/ok.png',
    fail: 'assets/img/fail.png'
  };

  // создаем пути к двум разным серверам чтоб не прописывать их вручную
  const path = {
    designer: 'assets/server.php',
    question: 'assets/question.php'
  };

  // ф-ция переборки инпутов и их очистки
  const clearInputs = () => {
    inputs.forEach(item => {
      item.value = '';
    });

    // ф-ция которая задает предыдущему элементу который находится в одном родителе с 
    // item - текст контент "Файл не выбран"
    upload.forEach(item => {
      item.previousElementSibling.textContent = 'Файл не выбран';
    });
  };

  // ф-ция перебирает все загрузчики файлов и когда мы добавим файл какой либо в загрузку
  // то в console появится информация об этом файле
  upload.forEach(item => {
    item.addEventListener('input', () => {
      console.log(item.files[0]);
      let dots;

      // мы берем из информации об первом [0] загруженном файле его имя .name и делим его на две части
      // т.е до . например name . jpg - точка разделяем две части имени файла.
      const arr = item.files[0].name.split('.');

      // если первая часть (название само) будет длиннее 7 символов то переменная dots будет в себе содержать
      // "...", а если меньше то "."
      arr[0].length > 6 ? dots = "..." : dots = ".";

      // первая часть (название само) будет отображаться с 1 по 7 символ, все что длиннее - будет обрезаться
      // и добавляться ... затем тип файла (.jpg к примеру), а если нет то будет показываться полное имя 
      // (до 7 символов) и после него ставиться одна точка и тип файла
      const name = arr[0].substring(0, 6) + dots + arr[1];

      // задаем предыдущему элементу который находится в одном родителе с item - текст контент
      // имени что у нас получилось
      item.previousElementSibling.textContent = name;
    });
  });

  // перебираем все формы и назначаем обработчик события 'submit' (Отправка) и отменяем стандартное
  // поведение браузера (перезагрузку)
  form.forEach(item => {
    item.addEventListener('submit', e => {
      e.preventDefault();

      // создаем div с классом status и размещаем его в конце div'a родительского класса item.
      // добавляйем в item классы анимации и перемещения сверху вниз (анимации).
      // по времени мы через пол секунды делаем item невидимым с анимацией что описал выше
      let statusMessage = document.createElement('div');
      statusMessage.classList.add('status');
      item.parentNode.appendChild(statusMessage);
      item.classList.add('animated', 'fadeOutUp');
      setTimeout(() => {
        item.style.display = 'none';
      }, 400);

      // создаем img элемент (не div), дабавляем ему атрибут src и передаем путь message.spinner
      // добавляем этому элементу классы анимации и перемещение вверх (анимации)
      // добавляем <img src /> элемент в конец родителя statusMessage <div class="status" />
      let statusImg = document.createElement('img');
      statusImg.setAttribute('src', message.spinner);
      statusImg.classList.add('animated', 'fadeInUp');
      statusMessage.appendChild(statusImg);

      // создаем div элемент и в него помещаем текст контент message.loading  
      // добавляем этот див в конец родителя <div class="status" />
      let textMessage = document.createElement('div');
      textMessage.textContent = message.loading;
      statusMessage.appendChild(textMessage);
      const formData = new FormData(item);
      let api;

      // мы смотрим если если ближайший родительский элемент item является div с классом
      // .popup-design или элемент item содержит класс calc-form то в api вносим данные 
      // path.designer а если нет то path.question. (чтоб потом туда отправлять данные)
      item.closest('.popup-design') || item.classList.contains('calc-form') ? api = path.designer : api = path.question;
      // выводим информацию содержимого api в консоль
      console.log(api);

      // отправка данных на сервер php(по разным сценариям содержимого пути в api) нашей formData. 
      // При успешной отправке формы на сервер будет показываться сообщение 
      // Спасибо! скоро мы с вами свяжемся и в дополнение отображаться картинка с галочкой 
      // так же при успешной отправке все данные что отправятся на сервер с нашей формы
      // будут продублированы в консоль
      (0,_services_requests__WEBPACK_IMPORTED_MODULE_0__.postData)(api, formData).then(res => {
        console.log(res);
        statusImg.setAttribute('src', message.ok);
        textMessage.textContent = message.success;
      })

      // при ошибке отправки данных покажет сообщение - Что-то пошло не так..
      // так же добавит картинку в <img src /> (statusImg) 
      .catch(() => {
        statusImg.setAttribute('src', message.fail);
        textMessage.textContent = message.failure;
      })

      // этот метод finally выполнится в любом случае, успешном или нет - отправки данных на сервер
      // он выполнит ф-цию очистки инпутов, а так же удалить созданный нами div с классом status 
      // через 5 секунд после его создания. так же придаст элементу item стиль display = "block", 
      // удалит класс анимации fadeOutUp и добавит класс fadeInUp - (чтоб переместился вверх обратно)
      .finally(() => {
        clearInputs();
        setTimeout(() => {
          statusMessage.remove();
          item.style.display = 'block';
          item.classList.remove('fadeOutUp');
          item.classList.add('fadeInUp');
        }, 5000);
      });
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);

/***/ }),

/***/ "../Project_JS_\u0000#2_PICTURES_ART/src/js/modules/mask.js":
/*!*************************************************************!*\
  !*** ../Project_JS_ #2_PICTURES_ART/src/js/modules/mask.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const mask = selector => {
  function createMask(event) {
    // создаем маску нашего номера, по ней будет вводиться номер с началом +7, скобками и т.п
    let matrix = '+7(___)___-__-__',
      i = 0,
      // проверяем изначальные данные чтоб не было букв а только цифры
      def = matrix.replace(/\D/g, ''),
      // проверяем данные которые вводит пользователь, если будут буквы то он их автоматом удалит
      val = this.value.replace(/\D/g, '');

    // условие что если дефолтные значения равны либо больше того что введено - то значения будут
    // применены дефолтные. По русски говоря если мы захотим удалить +7 то +7 будет появляться снова
    if (def.length >= val.length) {
      val = def;
    }

    // мы берем все элементы '/./g' которые находятся внутри. (а) - это технический аргумент и вместо него будет
    // вставляться каждый символ который будет находиться в матрице.
    // [_\d] - мы проверяем входит ли то что мы хотим отобразить в этот диапозон
    // '.test(a)' мы проверяем каждый элемент вернет либо true либо false
    // i < val.length - это кол-во цифр что мы ввели больше нуля
    // если два этих условия будут true то мы вернем то значение что мы вводим
    // если нет и символов нет введенных то возвращаем пустую строку либо а (тот символ что ввели)
    this.value = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
    });

    // проверка на блюр т.е. автоматически очищает форму если в ней ровно 3 символа - +7( 
    if (event.type === 'blur') {
      if (this.value.length == 2) {
        this.value = "";
      }
    }
  }
  let inputs = document.querySelectorAll(selector);
  inputs.forEach(input => {
    input.setAttribute('autocomplete', 'off');
    // здесь мы описываем разные события в обработчик - инпут когда что то вводим, 
    // фокус когда нажали только на инпут и блюр когда 3 символа только в инпуте из нашей маски и во все эти
    // События добавляем нашу ф-цию создания маски
    input.addEventListener('input', createMask);
    input.addEventListener('focus', createMask);
    input.addEventListener('blur', createMask);
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mask);

/***/ }),

/***/ "../Project_JS_\u0000#2_PICTURES_ART/src/js/modules/modals.js":
/*!***************************************************************!*\
  !*** ../Project_JS_ #2_PICTURES_ART/src/js/modules/modals.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const modals = () => {
  // создаем переменную которая будет отвечать за то что нажимал пользователь
  // какую либо кнопку или нет
  let btnPressed = false;
  function bindModal(triggerSelector, modalSelector, closeSelector) {
    let destroy = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    const trigger = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector),
      close = document.querySelector(closeSelector),
      windows = document.querySelectorAll('[data-modal]'),
      scroll = calcScroll();

    // мы перебираем все триггеры - кнопки и прочее по нажатию на которые - будут
    // открываться модальные окна и выключаться прокрутка сайта вверх-вниз при открытом
    // модальном окне
    trigger.forEach(item => {
      item.addEventListener('click', e => {
        if (e.target) {
          e.preventDefault();
        }
        // после того как мы отменим стандартное поведение у триггера - мы изменим значение
        // на true т.к. это автоматически будет озночать что пользователь нажал на какую либо кнопку
        btnPressed = true;

        // проверка на то чтобы удалить триггер после нажатия на него или появления содержимого (подарка)
        if (destroy) {
          item.remove();
        }
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
        document.body.style.marginRight = `${scroll}px`;
      });
    });

    // мы получаем все модальные окна по дата атрибуту для того чтобы их
    // все закрыть при нажатии на подложку модального окна (серой зоны) либо
    // где то отключить это закрытие в случае если польз введет какие либо данные
    // и случайно мисскликнет 
    windows.forEach(item => {
      item.style.display = 'none';
      // Добавляем класс анимации к нашим всем модальным окнам
      item.classList.add('animated', 'fadeIn');
    });

    // закрытие всех модальных окон при клике на крестик 
    close.addEventListener("click", () => {
      windows.forEach(item => {
        item.style.display = 'none';
      });
      modal.style.display = "none";
      document.body.style.overflow = "";
      document.body.style.marginRight = `0px`;
    });

    // закрытие модальных окон всех при клике на подложку (серую зону) модального окна при
    // выполнении всех условий (если будет передан false, то закрытие с конкретного модального окна
    // осуществляться не будет) а так же включение прокручивании вниз-вверх нашего сайта 
    // так как когда у нас открывается модальное окно - прокручивание блокируется.
    modal.addEventListener("click", e => {
      if (e.target === modal) {
        windows.forEach(item => {
          item.style.display = 'none';
        });
        modal.style.display = "none";
        document.body.style.overflow = "";
        document.body.style.marginRight = `0px`;
      }
    });
  }

  // функция вызова модального окна спустя 60 секунд пребывания на сайте
  function showModalByTime(selector, time) {
    setTimeout(function () {
      // создаем переменную которая будет отслеживать состояние модального окна
      let display;

      // если у нас уже открыто какое либо модальное окно на сайте, то новое принудительно
      // открываться уже не будет
      document.querySelectorAll('[data-modal]').forEach(item => {
        if (getComputedStyle(item).display !== 'none') {
          display = 'block';
        }
      });

      // если же у пользователя не активно окно модальное - то оно откроет его по истечении
      // 60 секунд с момента пребывания на сайте
      if (!display) {
        document.querySelector(selector).style.display = "block";
        document.body.style.overflow = "hidden";
        scroll = calcScroll();
      }
    }, time);
  }

  // функция добавления отступа при появлении модального окна - в зоне где распологается
  // скролл страницы, т.к. мы убираем возможность скроллинга страницы при открытии модального окна
  // у нас скролл пропадает и происходит дергание страницы. мы добавляем marginRight на ширину скролла
  function calcScroll() {
    let div = document.createElement('div');
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';

    // здесь мы находим ширину скролла, т.к. в разных браузерах эта ширина может отличаться
    // мы из всего пространства брайзера с нашим сайтом - вычитаем пространство занимаемое нашими контентом
    // включая все бордеры и маржины, и таким образом получаем ширину скролла
    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();
    return scrollWidth;
  }

  // функция которая открывает модальное окно подарка и удаляет так же его иконку если:
  // 1) пользователь пролистал в самый низ страницы
  // 2) он при этом не нажал ни на одну кнопку на сайте 
  function openByScroll(selector) {
    window.addEventListener('scroll', () => {
      let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
      if (!btnPressed && window.pageYOffset + document.documentElement.clientHeight >= scrollHeight) {
        document.querySelector(selector).click();
      }
    });
  }

  // вызываем нашу функцию bindModal передавая в нее все нужные перечисленные div классы
  bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
  bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
  bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true);
  showModalByTime('.popup-consultation', 60000);
  openByScroll('.fixed-gift');
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modals);

/***/ }),

/***/ "../Project_JS_\u0000#2_PICTURES_ART/src/js/modules/pictureSize.js":
/*!********************************************************************!*\
  !*** ../Project_JS_ #2_PICTURES_ART/src/js/modules/pictureSize.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const pictureSize = imgSelector => {
  const blocks = document.querySelectorAll(imgSelector);
  function showImg(block) {
    const img = block.querySelector('img');

    // something.png => something-1.png
    // здесь мы обращаемся напрямую к src элемента и используем метод slice. Т.к. мы вторым аргументом
    // используем отрицательное значение, то работу метода мы начнем с конца выбранного свойства.
    // мы удалим 4 символа с конца свойства а именно .png и добавим в строку свойства src -1.png
    img.src = img.src.slice(0, -4) + '-1.png';

    // мы выбираем все параграфы <p></p> в элементе block кроме параграфов которые содержат в себе класс
    // .sizes-hit и перебирая их назначаем им стиль скрывающий их
    block.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
      p.style.display = 'none';
    });
  }
  function hideImg(block) {
    const img = block.querySelector('img');

    // something-1.png => something.png
    // здесь мы обращаемся напрямую к src элемента и используем метод slice. Т.к. мы вторым аргументом
    // используем отрицательное значение, то работу метода мы начнем с конца выбранного свойства.
    // мы удалим 6 символов с конца свойства а именно -1.png и добавим в строку свойства src .png    
    img.src = img.src.slice(0, -6) + '.png';

    // мы выбираем все параграфы <p></p> в элементе block кроме параграфов которые содержат в себе класс
    // .sizes-hit и перебирая их назначаем им стиль снова показывающий их
    block.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
      p.style.display = 'block';
    });
  }

  // обратботчик событий 'mouseover' срабатывает когда курсор мыши находится над элементом
  // и соотв. мы показываем фото которое прописывали выше изменяя содержимое src
  blocks.forEach(block => {
    block.addEventListener('mouseover', () => {
      showImg(block);
    });

    // обратботчик событий 'mouseout' срабатывает когда курсор мыши покидает элемент
    // и соотв. мы скрываем фото которое прописывали выше изменяя содержимое src
    block.addEventListener('mouseout', () => {
      hideImg(block);
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pictureSize);

/***/ }),

/***/ "../Project_JS_\u0000#2_PICTURES_ART/src/js/modules/scrolling.js":
/*!******************************************************************!*\
  !*** ../Project_JS_ #2_PICTURES_ART/src/js/modules/scrolling.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const scrolling = upSelector => {
  const upElem = document.querySelector(upSelector);

  // мы задааем обработчик события scroll (на прокрутку сайта) и если мы прокрутим
  // более чем на 1650px то у нас появится наша кнопка svg которая перенесет нас вверх к шапке сайта
  // в шапке Header мы назначили id="up" и svg имеет ссылку href="#up" и переносит нас к хэдеру
  // если прокручиваем назад страницу и будет менее 1650px то кнопка перемещения наверх исчезнет
  window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 1650) {
      upElem.classList.add('animated', 'fadeIn');
      upElem.classList.remove('fadeOut');
    } else {
      upElem.classList.add('fadeOut');
      upElem.classList.remove('fadeIn');
    }
  });
  let links = document.querySelectorAll('[href^="#"]'),
    // мы выбираем все ссылки на странице которые начинаются с шарпа href="#название"

    speed = 0.2; // устанавливаем скорость анимации прокрутки. чем меньше к 0 тем быстрее прокрутка

  links.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      let scrolTop = document.documentElement.scrollTop,
        // scrolTop - Это свойство считывает кол-во прокрученных пикселей от верха страницы пользователем

        hash = this.hash,
        // hash - это локальная ссылка на страницу к который мы будем пролистывать с анимацией

        // мы находим координаты верхней границы элемента к которому мы будем скролить
        // получаем верхние координаты элемента (найденного по хэшу) благодаря (getBoundingClientRect().top)
        toBlock = document.querySelector(hash).getBoundingClientRect().top,
        start = null; // переменная определяющая старт нашей анимации 

      // Если вы используете анимации в своих веб-приложениях, то вы в любом случае хотите, чтобы они выполнялись как по маслу. 
      // И самым простым способом для этого является использование requestAnimationFrame
      requestAnimationFrame(step);

      // timestamp — время, прошедшее с начала выполнения запроса в мс
      // при первом запуске мы назначим время start=timestamp
      function step(timestamp) {
        if (start === null) {
          start = timestamp;
        }

        // это время затраченное на выполнение от начала клика мышью на триггер старта анимации до окончания прокрутки анимации
        let progress = timestamp - start,
          // r - это переменная отвечает за то необходимое кол-во пикселей которое нам необходимо пролистать в течении этой анимации.
          // Нам нужно понять в какую сторону мы будем листать? 
          // 1) снизу вверх тогда значение toBlock будет отрицательным числом 
          // 2) сверху вниз тогда значение toBlock будет положительным числом
          r = toBlock < 0 ?
          // если оно отрицательно то мы где то в середине/внизу страницы и нам нужно нажав на кнопку ^ переместиться наверх, соотв. координаты
          // до блока (т.к. блок куда ведет кнопка это хэдер) будут отрицательными и мы берем:

          // ПЕРВЫМ АРГУМЕНТОМ 1) место откуда мы хотим переместиться наверх (кол-во пикселей прокрученных сверху) отнимаем 
          // время (за которое пройдет анимация прокрутки с момента клика на кнопку до ее завершения) деленное (/) на скорость (0.2 в нашем случае).

          // ВТОРЫМ АРГУМЕНТОМ мы берем 1) место откуда хотим переместиться наверх и прибавляем к нему отрицательные координаты до блока и получаем 0
          // т.к здесь мы выбираем максимальное число из двух то мы выберем 28 и переместимся наверх

          Math.max(scrolTop - progress / speed, scrolTop + toBlock) // 5111 - 5083 = 28 || 0
          : Math.min(scrolTop + progress / speed, scrolTop + toBlock) // 0 + 3750 = 3750 ||  3756
          // если оно положительное то мы сверху страницы и нам нужно нажав на названия разделов к ним переместиться, соотв. координаты
          // до блока (т.к. блоки куда ведут названия разделов) будут положительными и больше нуля :

          // ПЕРВЫМ АРГУМЕНТОМ 1) место откуда мы хотим переместиться к блоку (кол-во пикселей прокрученных сверху т.е. 0) прибавляем 
          // время (за которое пройдет анимация прокрутки с момента клика на кнопку до ее завершения) деленное (/) на скорость (0.2 в нашем случае).

          // ВТОРЫМ АРГУМЕНТОМ мы берем 1) место откуда мы хотим переместиться к блоку (т.е. 0 так как сверху находимся) и прибавляем к нему положительные 
          // координаты блока где он находится и перемещаемся туда
        ;

        document.documentElement.scrollTo(0, r); // функция скролла нашей страницы к определенным координатам. по Х у нас 0, а по Y - переменная r

        // условие как только переменная r (координаты по Y) будет равна значит мы уже долистали до нужного элемента по пикселям
        // поэтому мы ставим отрицание равенства(!=) и если так то продолжим выполнение анимации
        if (r != scrolTop + toBlock) {
          requestAnimationFrame(step);
        } else {
          // если значения равны значит анимация должна закончится и установит хэш элемента в строку url
          location.hash = hash;
        }
      }
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrolling);

/***/ }),

/***/ "../Project_JS_\u0000#2_PICTURES_ART/src/js/modules/showMoreStyles.js":
/*!***********************************************************************!*\
  !*** ../Project_JS_ #2_PICTURES_ART/src/js/modules/showMoreStyles.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// import { getResource } from "../services/requests";

// это как показыватькарточки без использования сервера, меняя лишь стили 

const showMoreStyles = (trigger, styles) => {
  const btn = document.querySelector(trigger),
    cards = document.querySelectorAll(styles);
  cards.forEach(card => {
    card.classList.add('animated', 'fadeInUp');
  });
  btn.addEventListener('click', () => {
    cards.forEach(card => {
      card.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
      card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
    });

    // btn.style.display = 'none';
    btn.remove();
  });

  // а это как показывать этиже карточки (только они должны уже быть удалены в Index.html) только с
  // использованием сервера

  // назначаем на клик мыши событие, которое будет получать данные с нашего сервера json
  // затем полученные результаты мы помещаем в ф-цию по созданию карточек с фотографиями и выполняем 
  // собственно эту функцию
  // btn.addEventListener('click', function() {
  // getResource('http://localhost:3000/styles')
  // .then(res => createCards(res))
  // .catch(error => console.log(error));
  // });

  // ф-ция создания карточек с фотографиями которые будут создаваться по клику мышью
  // function createCards(response){
  //     response.forEach(item => {
  // let card = document.createElement('div');
  // card.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');

  // свойство устанавливает HTML разметку для дочерних файлов. В данном случае для наших карточек
  // card.innerHTML= `
  // <div class="styles-block">
  //     <img src=${item.src} alt="style">
  //     <h4>${item.title}</h4>
  //     <a href=${item.link}>Подробнее</a>
  // </div>
  // `;

  // мы инициализируем тот узел который передаем в наш модуль и затем в конец его дочерних
  // элементов помещаем наши созданные карточки с фотографиями
  // document.querySelector(wrapper).appendChild(card);
  // });
  // };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showMoreStyles);

/***/ }),

/***/ "../Project_JS_\u0000#2_PICTURES_ART/src/js/modules/sliders.js":
/*!****************************************************************!*\
  !*** ../Project_JS_ #2_PICTURES_ART/src/js/modules/sliders.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const sliders = (slides, dir, prev, next) => {
  let slideIndex = 1,
    paused = false;
  const items = document.querySelectorAll(slides);

  // функция показа слайдов в слайдерах
  function showSlides(n) {
    // если номер нашего слайда будет больше чем всего у нас слайдов, то его значение будет равно 1.
    // т.е. если мы листая до последнего слайда и еще раз нажмем на след слайд - мы перейдем к первому самому слайду в списке
    if (n > items.length) {
      slideIndex = 1;
    }
    // если номер нашего слайда будет меньше чем единица - то его значение будет кол-во элементов в слайдере
    // т.е. если мы долистаем до первого слайда и еще раз нажмем на кнопку назад - откроется последний слайдер в списке и т.д
    if (n < 1) {
      slideIndex = items.length;
    }
    // переборка всех элементов слайдера и добавление к ним класса анимации '.animated'
    // так же мы скрываем все элементы слайдера
    items.forEach(item => {
      item.classList.add('animated');
      item.style.display = 'none';
    });

    // здесь мы делаем видимым первый элемент в слайдере
    items[slideIndex - 1].style.display = "block";
  }
  showSlides(slideIndex);

  // функция переключения слайдов в слайдере. Мы складываем и присваем (+=) число в slideIndex.
  // (-1) когда нужно переключиться назад и (1) когда вперед
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  // try...catch - эта констракция пытается выполнить инструкцию в 
  // блоке try{...} и в случае ошибки выполняет блок catch{...}
  // catch(e) - Error сокр.
  try {
    // мы инициализируем кнопки переключения вперед/назад в слайдере
    const prevBtn = document.querySelector(prev),
      nextBtn = document.querySelector(next);

    // назначаем на кнопку предыдущего слайда в слайдере 
    prevBtn.addEventListener('click', () => {
      plusSlides(-1);
      items[slideIndex - 1].classList.remove('slideInDown');
      items[slideIndex - 1].classList.add('slideInUp');
    });
    // назначаем на кнопку следующего слайда в слайдере 
    nextBtn.addEventListener('click', () => {
      plusSlides(1);
      items[slideIndex - 1].classList.remove('slideInUp');
      items[slideIndex - 1].classList.add('slideInDown');
    });
  } catch (e) {}

  // функция активации анимации наших слайдеров. Они будут автоматически
  // переключать на следующий слайд каждый 3 секунды
  // сверху для вертикального слайдера, снизу для всех остальных (в н.с. горизонтального)
  function activateAnimation() {
    if (dir === 'vertical') {
      paused = setInterval(function () {
        plusSlides(1);
        items[slideIndex - 1].classList.add('slideInDown');
      }, 3000);
    } else {
      paused = setInterval(function () {
        plusSlides(1);
        items[slideIndex - 1].classList.remove('slideInUp');
        items[slideIndex - 1].classList.add('slideInDown');
      }, 3000);
    }
  }
  activateAnimation();

  // мы создаем событие на то, что когда пользователь наведет курсор мыши на область слайдера и его
  // родительского элемента то слайдер перестанет каждые 3 секунды обновлять принудительно слайд
  items[0].parentNode.addEventListener('mouseenter', () => {
    clearInterval(paused);
  });

  // здесь мы создаем событие на то, что когда пользователь уберет курсор мыши из области слайдера - он как и прежде
  // будет обновляться каждые 3 секунды
  items[0].parentNode.addEventListener('mouseleave', () => {
    activateAnimation();
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sliders);

/***/ }),

/***/ "../Project_JS_\u0000#2_PICTURES_ART/src/js/services/requests.js":
/*!******************************************************************!*\
  !*** ../Project_JS_ #2_PICTURES_ART/src/js/services/requests.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getResource": () => (/* binding */ getResource),
/* harmony export */   "postData": () => (/* binding */ postData)
/* harmony export */ });
// Асинхронная функция отправки данных с инпутов на сервер
const postData = async (url, data) => {
  // ф-ция будет дожидаться когда отправятся данные и затем будет продолжена
  let res = await fetch(url, {
    method: 'POST',
    body: data
  });
  // так же ф-ция будет дожидаться пока получит результаты данных в text формате
  // и будет продолжена 
  return await res.text();
};

// Асинхронная функция получения данных с сервера
const getResource = async url => {
  // ф-ция будет дожидаться получения данных с сервера и затем будет продолжена
  let res = await fetch(url);
  if (!res.ok) {
    // при возникновении ошибки будет создан обьект ошибки и в нее будут переданы данные 
    throw new Error(`Could not fetch ${url}, status: ${res.status}`);
  }
  // так же ф-ция будет дожидаться пока получит результаты данных в json формате
  // и будет продолжена 
  return await res.json();
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************************************!*\
  !*** ../Project_JS_ #2_PICTURES_ART/src/js/main.js ***!
  \*****************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_modals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modals */ "../Project_JS_\u0000#2_PICTURES_ART/src/js/modules/modals.js");
/* harmony import */ var _modules_sliders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/sliders */ "../Project_JS_\u0000#2_PICTURES_ART/src/js/modules/sliders.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/forms */ "../Project_JS_\u0000#2_PICTURES_ART/src/js/modules/forms.js");
/* harmony import */ var _modules_mask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/mask */ "../Project_JS_\u0000#2_PICTURES_ART/src/js/modules/mask.js");
/* harmony import */ var _modules_checkInputs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/checkInputs */ "../Project_JS_\u0000#2_PICTURES_ART/src/js/modules/checkInputs.js");
/* harmony import */ var _modules_showMoreStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/showMoreStyles */ "../Project_JS_\u0000#2_PICTURES_ART/src/js/modules/showMoreStyles.js");
/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calc */ "../Project_JS_\u0000#2_PICTURES_ART/src/js/modules/calc.js");
/* harmony import */ var _modules_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/filter */ "../Project_JS_\u0000#2_PICTURES_ART/src/js/modules/filter.js");
/* harmony import */ var _modules_pictureSize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/pictureSize */ "../Project_JS_\u0000#2_PICTURES_ART/src/js/modules/pictureSize.js");
/* harmony import */ var _modules_accordion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/accordion */ "../Project_JS_\u0000#2_PICTURES_ART/src/js/modules/accordion.js");
/* harmony import */ var _modules_burger__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/burger */ "../Project_JS_\u0000#2_PICTURES_ART/src/js/modules/burger.js");
/* harmony import */ var _modules_scrolling__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/scrolling */ "../Project_JS_\u0000#2_PICTURES_ART/src/js/modules/scrolling.js");
/* harmony import */ var _modules_drop__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/drop */ "../Project_JS_\u0000#2_PICTURES_ART/src/js/modules/drop.js");













window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  (0,_modules_modals__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_modules_sliders__WEBPACK_IMPORTED_MODULE_1__["default"])('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
  (0,_modules_sliders__WEBPACK_IMPORTED_MODULE_1__["default"])('.main-slider-item', 'vertical');
  (0,_modules_forms__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_modules_mask__WEBPACK_IMPORTED_MODULE_3__["default"])('[name="phone"]');
  (0,_modules_checkInputs__WEBPACK_IMPORTED_MODULE_4__["default"])('[name="message"]', '[name="name"]', '[name="email"]');
  (0,_modules_showMoreStyles__WEBPACK_IMPORTED_MODULE_5__["default"])('.button-styles', '.styles-2');
  (0,_modules_calc__WEBPACK_IMPORTED_MODULE_6__["default"])('#size', '#material', '#options', '.promocode', '.calc-price');
  (0,_modules_filter__WEBPACK_IMPORTED_MODULE_7__["default"])();
  (0,_modules_pictureSize__WEBPACK_IMPORTED_MODULE_8__["default"])('.sizes-block');
  (0,_modules_accordion__WEBPACK_IMPORTED_MODULE_9__["default"])('.accordion-heading');
  (0,_modules_burger__WEBPACK_IMPORTED_MODULE_10__["default"])('.burger-menu', '.burger');
  (0,_modules_scrolling__WEBPACK_IMPORTED_MODULE_11__["default"])('.pageup');
  (0,_modules_drop__WEBPACK_IMPORTED_MODULE_12__["default"])();
});
})();

/******/ })()
;
//# sourceMappingURL=script.js.map