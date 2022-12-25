const calc =(size,material,options,promocode,result) => {
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
const calcFunc = ()=> {
sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));

// проверка на то что если размер картины или материал картины останутся не выбранными
// то мы покажем в окошке где показывается итоговая сумма заказа сообщение
if(sizeBlock.value == "" || materialBlock.value == "") {
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

export default calc;