// это модуль табов с примерами работ компании, выделяя определенный раздел напр. для влюбленных
// примеры работ отфильтруются и останутся только они

const filter = ()=> {
const menu=document.querySelector('.portfolio-menu'),
      items=menu.querySelectorAll('li'),
      btnAll=menu.querySelector('.all'),
      btnLovers=menu.querySelector('.lovers'),
      btnChef=menu.querySelector('.chef'),
      btnGirl=menu.querySelector('.girl'),
      btnGuy=menu.querySelector('.guy'),
      btnGrandmother=menu.querySelector('.grandmother'),
      btnGranddad=menu.querySelector('.granddad'),
      wrapper=document.querySelector('.portfolio-wrapper'),
      markAll=wrapper.querySelectorAll('.all'),
      markGirl=wrapper.querySelectorAll('.girl'),
      markLovers=wrapper.querySelectorAll('.lovers'),
      markChef=wrapper.querySelectorAll('.chef'),
      markGuy=wrapper.querySelectorAll('.guy'),
      no=document.querySelector('.portfolio-no');


// изначально мы перебираем все примеры фото работ и скрываем их, удаляем у них классы анимации
const typeFilter=(markType)=>{
markAll.forEach(mark =>{
    mark.style.display='none';
    mark.classList.remove('animated', 'fadeIn');
});

// мы изначально скрываем контент который появляется при клике в раздел пример работ
// с бабушкой/дедушкой Где показывается <p></p> параграф мол мы таких работ еще не делали
no.style.display='none';
no.classList.remove('animated', 'fadeIn');


// если мы передаем какой либо селектор при вызове ф-ции то мы перебираем все примеры фото работ 
// и показываем только те работы, в которых содержится класс указанный в селекторе и отображаем их 
    if(markType){
    markType.forEach(mark => {
        mark.style.display='block';
        mark.classList.add('animated', 'fadeIn');
    });

    }else{
// если класс не передан в селектор для ф-ции то
// мы показываем контент <p></p> параграф мол мы таких работ еще не делали
// это у нас идет назначение на кнопки примеров работ с бабушкой/дедушкой
no.style.display='block';
no.classList.add=('animated', 'fadeIn');
}
};


// ф-ция по нажатию кнопки "все работы" - у нас отфильтровываются примеры работ (фотографии) содержащие 
// класс .all и т.д для всех ф-ций
btnAll.addEventListener('click', ()=>{
    typeFilter(markAll);
});

btnLovers.addEventListener('click', ()=>{
    typeFilter(markLovers);
});

btnChef.addEventListener('click', ()=>{
    typeFilter(markChef);
});

btnGuy.addEventListener('click', ()=>{
    typeFilter(markGuy);
});

btnGirl.addEventListener('click', ()=>{
    typeFilter(markGirl);
});

btnGrandmother.addEventListener('click', ()=>{
    typeFilter();
});

btnGranddad.addEventListener('click', ()=>{
    typeFilter();
});


// этой функцией мы указаываем что если клик происходит в таргет элемента Menu 
// и таргет содержит имя узла "Li" (т.е. li элемент) то мы перебриаем все li элементы
// и удаляем у них у всех класс активности .active, затем на тот таргет li элемента
// на который мы кликнули мы ему назначает класс активности .active
menu.addEventListener('click', (e)=>{
let target = e.target;
if(target && target.tagName == "LI"){
    items.forEach(btn => btn.classList.remove('active'));
target.classList.add('active');
}
});

};

export default filter;