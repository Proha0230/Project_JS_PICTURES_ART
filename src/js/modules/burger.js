const burger=(menuSelector, burgerSelector) => {
const menuElem = document.querySelector(menuSelector),
      burgerElem = document.querySelector(burgerSelector);

// Мы изначально скрываем бургер меню
menuElem.style.display= 'none';

// ф-ция по клику на иконку бургер меню у нас будет проверка :
// если бургер меню скрыто, а экран устройства меньше 993px то мы покажем меню. 
// При повторном нажатии мы скроем меню ( если оно активно и экран меньше 993px) 
burgerElem.addEventListener('click', ()=> {
    if(menuElem.style.display=='none' && window.screen.availWidth < 993){
        menuElem.style.display='block';
    } else {
        menuElem.style.display='none';
    }
});

// ф-ция которая отслеживает изменение размеров экрана. Если размер экрана превысит 992px 
// то бургер меню автоматически скроется
window.addEventListener('resize', ()=> {
    if(window.screen.availWidth > 992){
        menuElem.style.display='none';
    }
  });
};
    export default burger;