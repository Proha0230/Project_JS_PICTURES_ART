// import { getResource } from "../services/requests";

// это как показыватькарточки без использования сервера, меняя лишь стили 

const showMoreStyles = (trigger, styles) => {
const btn = document.querySelector(trigger),
      cards = document.querySelectorAll(styles)


cards.forEach(card => {
    card.classList.add('animated', 'fadeInUp');
});

btn.addEventListener('click', ()=>{
    cards.forEach(card =>{
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

export default showMoreStyles;



