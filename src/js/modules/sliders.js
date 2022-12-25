const sliders=(slides, dir, prev, next) => {
    let slideIndex = 1,
        paused = false;

const items = document.querySelectorAll(slides);


// функция показа слайдов в слайдерах
function showSlides(n){

// если номер нашего слайда будет больше чем всего у нас слайдов, то его значение будет равно 1.
// т.е. если мы листая до последнего слайда и еще раз нажмем на след слайд - мы перейдем к первому самому слайду в списке
    if(n > items.length){
        slideIndex = 1;
    }
// если номер нашего слайда будет меньше чем единица - то его значение будет кол-во элементов в слайдере
// т.е. если мы долистаем до первого слайда и еще раз нажмем на кнопку назад - откроется последний слайдер в списке и т.д
    if(n < 1){
        slideIndex = items.length;
    }
// переборка всех элементов слайдера и добавление к ним класса анимации '.animated'
// так же мы скрываем все элементы слайдера
    items.forEach(item => {
        item.classList.add('animated');
        item.style.display = 'none';
    });

// здесь мы делаем видимым первый элемент в слайдере
    items[slideIndex - 1].style.display="block";
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
prevBtn.addEventListener('click', ()=> {
    plusSlides(-1);
    items[slideIndex - 1].classList.remove('slideInRight');
    items[slideIndex - 1].classList.add('slideInLeft');
});
// назначаем на кнопку следующего слайда в слайдере 
nextBtn.addEventListener('click', ()=> {
    plusSlides(1);
    items[slideIndex - 1].classList.remove('slideInLeft');
    items[slideIndex - 1].classList.add('slideInRight');
});
}
catch(e){}


// функция активации анимации наших слайдеров. Они будут автоматически
// переключать на следующий слайд каждый 3 секунды
// сверху для вертикального слайдера, снизу для всех остальных (в н.с. горизонтального)
function activateAnimation () {
    if(dir === 'vertical') {
        paused = setInterval (function(){
            plusSlides(1);
            items[slideIndex - 1].classList.add('slideInDown');
        }, 3000);
    } else {
        paused = setInterval (function() {
            plusSlides(1);
            items[slideIndex - 1].classList.remove('slideInLeft');
            items[slideIndex - 1].classList.add('slideInRight');
        }, 3000);
    }
}

activateAnimation();


// мы создаем событие на то, что когда пользователь наведет курсор мыши на область слайдера и его
// родительского элемента то слайдер перестанет каждые 3 секунды обновлять принудительно слайд
items[0].parentNode.addEventListener('mouseenter', ()=> {
    clearInterval(paused);
});

// здесь мы создаем событие на то, что когда пользователь уберет курсор мыши из области слайдера - он как и прежде
// будет обновляться каждые 3 секунды
items[0].parentNode.addEventListener('mouseleave', ()=> {
    activateAnimation();
});

};

export default sliders;