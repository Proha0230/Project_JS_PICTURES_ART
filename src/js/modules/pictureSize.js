const pictureSize = (imgSelector) => {
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
block.querySelectorAll('p:not(.sizes-hit)').forEach (p=> {
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
block.querySelectorAll('p:not(.sizes-hit)').forEach (p=> {
    p.style.display = 'block';
});
}

// обратботчик событий 'mouseover' срабатывает когда курсор мыши находится над элементом
// и соотв. мы показываем фото которое прописывали выше изменяя содержимое src
blocks.forEach(block => {
block.addEventListener('mouseover', ()=> {
    showImg(block);
});

// обратботчик событий 'mouseout' срабатывает когда курсор мыши покидает элемент
// и соотв. мы скрываем фото которое прописывали выше изменяя содержимое src
block.addEventListener('mouseout', ()=> {
    hideImg(block);
});
});

};

    export default pictureSize;

