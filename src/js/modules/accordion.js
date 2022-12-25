const accordion = (triggerSelector) => {
const btns = document.querySelectorAll(triggerSelector);

// мы перебираем все "кнопки" содержащие класс который указываем в селекторе
btns.forEach(btn => {
// назначаем обработчик событий клик
    btn.addEventListener('click', function() {
// если этот элемент куда мы кликнули не содержит класс '.active-style' то мы добавим его,
// а если он уже есть - то удалим его из этого элемента при повторном клике
        this.classList.toggle('active-style');
// если соседний элемент того элемента на который мы кликнули имеет класс '.active-content' то мы его удалим,
// а если не имеет - то добавим
        this.nextElementSibling.classList.toggle('active-content');

// условие в котором мы проверяем элемент на который кликнули что он содержит класс
// '.active-style' 
        if(this.classList.contains('active-style')) {

// если да то мы назначаем соседнему элементу максимальную высоту - полную высоту элемента + 80px
            this.nextElementSibling.style.maxHeight = 
            this.nextElementSibling.scrollHeight + 80 + "px";
        } else{

// если не содержит класс '.active-style' то делаем максимальную высоту соседнего элемента - '0px'
// т.е скрываем таким необычным образом его
            this.nextElementSibling.style.maxHeight = '0px';
        }
    });
  });
};

    export default accordion;