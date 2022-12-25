const modals =()=> {

    // создаем переменную которая будет отвечать за то что нажимал пользователь
    // какую либо кнопку или нет
    let btnPressed = false;

    function bindModal(triggerSelector, modalSelector, closeSelector, destroy=false) {
    const trigger = document.querySelectorAll(triggerSelector),
          modal = document.querySelector(modalSelector),
          close = document.querySelector(closeSelector),
          windows = document.querySelectorAll('[data-modal]'),
          scroll = calcScroll();


          // мы перебираем все триггеры - кнопки и прочее по нажатию на которые - будут
          // открываться модальные окна и выключаться прокрутка сайта вверх-вниз при открытом
          // модальном окне
          trigger.forEach(item =>{
            item.addEventListener('click', (e) => {

                if(e.target){
                    e.preventDefault();
                }
          // после того как мы отменим стандартное поведение у триггера - мы изменим значение
          // на true т.к. это автоматически будет озночать что пользователь нажал на какую либо кнопку
                btnPressed = true;

          // проверка на то чтобы удалить триггер после нажатия на него или появления содержимого (подарка)
                if(destroy){
                    item.remove();
                }

                modal.style.display="block";
                document.body.style.overflow="hidden";
                document.body.style.marginRight=`${scroll}px`;
            });
          });

          // мы получаем все модальные окна по дата атрибуту для того чтобы их
          // все закрыть при нажатии на подложку модального окна (серой зоны) либо
          // где то отключить это закрытие в случае если польз введет какие либо данные
          // и случайно мисскликнет 
          windows.forEach(item => {
            item.style.display='none';
            // Добавляем класс анимации к нашим всем модальным окнам
            item.classList.add('animated', 'fadeIn');
          });


          // закрытие всех модальных окон при клике на крестик 
          close.addEventListener("click", ()=>{
            
            windows.forEach(item => {
              item.style.display='none';
            });
            
            modal.style.display="none";
            document.body.style.overflow="";
            document.body.style.marginRight=`0px`;
          });


          // закрытие модальных окон всех при клике на подложку (серую зону) модального окна при
          // выполнении всех условий (если будет передан false, то закрытие с конкретного модального окна
          // осуществляться не будет) а так же включение прокручивании вниз-вверх нашего сайта 
          // так как когда у нас открывается модальное окно - прокручивание блокируется.
          modal.addEventListener("click", (e) =>{
            if(e.target === modal) {

              windows.forEach(item => {
                item.style.display='none';
              });
                
              modal.style.display="none";
                document.body.style.overflow="";
                document.body.style.marginRight=`0px`;
            }
          });
    }


    // функция вызова модального окна спустя 60 секунд пребывания на сайте
    function showModalByTime (selector, time) {
        setTimeout(function() {

    // создаем переменную которая будет отслеживать состояние модального окна
        let display;
        
    // если у нас уже открыто какое либо модальное окно на сайте, то новое принудительно
    // открываться уже не будет
        document.querySelectorAll('[data-modal]').forEach( item => {
            if(getComputedStyle(item).display !== 'none'){
                display='block';
            }
        });
    
    // если же у пользователя не активно окно модальное - то оно откроет его по истечении
    // 60 секунд с момента пребывания на сайте
            if(!display){
                document.querySelector(selector).style.display="block";
                document.body.style.overflow="hidden";
                scroll = calcScroll();
            }
        }, time);
    }


// функция добавления отступа при появлении модального окна - в зоне где распологается
// скролл страницы, т.к. мы убираем возможность скроллинга страницы при открытии модального окна
// у нас скролл пропадает и происходит дергание страницы. мы добавляем marginRight на ширину скролла
    function calcScroll(){
      let div = document.createElement('div');

      div.style.width='50px';
      div.style.height='50px';
      div.style.overflowY='scroll';
      div.style.visibility='hidden';

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
    function openByScroll(selector){
        window.addEventListener('scroll', ()=>{
            let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);

            if (!btnPressed && (window.pageYOffset + document.documentElement.clientHeight >= scrollHeight)) {
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

export default modals;