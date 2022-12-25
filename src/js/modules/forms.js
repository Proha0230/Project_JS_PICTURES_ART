import { postData } from "../services/requests";

const forms =()=> {
    const form = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input'),
          upload = document.querySelectorAll('[name="upload"]');

// создаем текстовые сообщения о статусе нашего запроса на сервер
// так же создаем пути к картинкам которые будут идти вместе с текстовым сообщением
    const message= {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы c вами свяжемся',
        failure: 'Что-то пошло не так...',
        spinner: 'assets/img/spinner.gif',
        ok: 'assets/img/ok.png',
        fail: 'assets/img/fail.png'
    };

// создаем пути к двум разным серверам чтоб не прописывать их вручную
    const path ={
        designer: 'assets/server.php',
        question: 'assets/question.php'
    };

// ф-ция переборки инпутов и их очистки
    const clearInputs = ()=> {
        inputs.forEach(item => {
            item.value='';
        });

// ф-ция которая задает предыдущему элементу который находится в одном родителе с 
// item - текст контент "Файл не выбран"
        upload.forEach( item => {
            item.previousElementSibling.textContent='Файл не выбран';
        });
    };

// ф-ция перебирает все загрузчики файлов и когда мы добавим файл какой либо в загрузку
// то в console появится информация об этом файле
    upload.forEach(item => {
        item.addEventListener('input', ()=> {
            console.log(item.files[0]);

        let dots;

// мы берем из информации об первом [0] загруженном файле его имя .name и делим его на две части
// т.е до . например name . jpg - точка разделяем две части имени файла.
        const arr = item.files[0].name.split('.');

// если первая часть (название само) будет длиннее 7 символов то переменная dots будет в себе содержать
// "...", а если меньше то "."
        arr[0].length > 6 ? dots="..." : dots=".";

// первая часть (название само) будет отображаться с 1 по 7 символ, все что длиннее - будет обрезаться
// и добавляться ... затем тип файла (.jpg к примеру), а если нет то будет показываться полное имя 
// (до 7 символов) и после него ставиться одна точка и тип файла
        const name = arr[0].substring(0,6) + dots + arr[1];

// задаем предыдущему элементу который находится в одном родителе с item - текст контент
// имени что у нас получилось
        item.previousElementSibling.textContent = name;
        });
    });


// перебираем все формы и назначаем обработчик события 'submit' (Отправка) и отменяем стандартное
// поведение браузера (перезагрузку)
    form.forEach(item => {
        item.addEventListener('submit', (e) =>{
            e.preventDefault();

    // создаем div с классом status и размещаем его в конце div'a родительского класса item.
    // добавляйем в item классы анимации и перемещения сверху вниз (анимации).
    // по времени мы через пол секунды делаем item невидимым с анимацией что описал выше
        let statusMessage = document.createElement('div');
        statusMessage.classList.add('status');
        item.parentNode.appendChild(statusMessage);
        item.classList.add('animated', 'fadeOutUp');
        setTimeout(()=>{
            item.style.display='none';
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
        textMessage.textContent=message.loading;
        statusMessage.appendChild(textMessage);

        const formData = new FormData(item);

        let api;

    // мы смотрим если если ближайший родительский элемент item является div с классом
    // .popup-design или элемент item содержит класс calc-form то в api вносим данные 
    // path.designer а если нет то path.question. (чтоб потом туда отправлять данные)
        item.closest('.popup-design') || item.classList.contains('calc-form') ? 
        api = path.designer : api = path.question;
    // выводим информацию содержимого api в консоль
        console.log(api);

    // отправка данных на сервер php(по разным сценариям содержимого пути в api) нашей formData. 
    // При успешной отправке формы на сервер будет показываться сообщение 
    // Спасибо! скоро мы с вами свяжемся и в дополнение отображаться картинка с галочкой 
    // так же при успешной отправке все данные что отправятся на сервер с нашей формы
    // будут продублированы в консоль
        postData(api, formData)
        .then(res => {
            console.log(res);
        statusImg.setAttribute('src', message.ok);
        textMessage.textContent = message.success;
        })

    // при ошибке отправки данных покажет сообщение - Что-то пошло не так..
    // так же добавит картинку в <img src /> (statusImg) 
        .catch (()=> {
            statusImg.setAttribute('src', message.fail);
            textMessage.textContent = message.failure;
        })

    // этот метод finally выполнится в любом случае, успешном или нет - отправки данных на сервер
    // он выполнит ф-цию очистки инпутов, а так же удалить созданный нами div с классом status 
    // через 5 секунд после его создания. так же придаст элементу item стиль display = "block", 
    // удалит класс анимации fadeOutUp и добавит класс fadeInUp - (чтоб переместился вверх обратно)
        .finally(()=>{
            clearInputs();
            setTimeout(()=>{
                statusMessage.remove();
                item.style.display = 'block';
                item.classList.remove('fadeOutUp');
                item.classList.add('fadeInUp');
            }, 5000);
        });
      });
   });
};

    export default forms;