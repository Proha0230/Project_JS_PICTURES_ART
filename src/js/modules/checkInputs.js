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
    if(e.key.match(/[^а-яё 0-9 .,:&(+=!"?)*%-]/ig)) {
        e.preventDefault();
    }
});
});

// здесь только буквы русского алфавита. Без цифр и символом. i - это безразличие на регистр верхний
// или нижний. Можно будет и так и так. g - global т.е на все символы в строке
inputsName.forEach(inputNam => {
inputNam.setAttribute('autocomplete', 'off');
inputNam.addEventListener('keypress', function (e) {
    if(e.key.match(/[^а-яё]/ig)) {
        e.preventDefault();
    }
});
});

//здесь только буквы Англ Алфавита , Верхнего\Нижнего регистра, цифры от 0-9 и символ @ с .
inputsEmail.forEach(inputEma => {
inputEma.setAttribute('autocomplete', 'off');
inputEma.addEventListener('keypress', function (e) {
    if(e.key.match(/[^A-Za-z0-9.@]/ig)) {
        e.preventDefault();
    }
});
});

// На будущее Регулярное выражение на правильный ввод Российского номера +7|7|8
//let regex = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;

};
    export default checkInputs;
