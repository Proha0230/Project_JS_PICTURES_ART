
// Асинхронная функция отправки данных с инпутов на сервер
const postData = async (url, data) => {
    // ф-ция будет дожидаться когда отправятся данные и затем будет продолжена
            let res = await fetch (url, {
                method: 'POST',
                body: data
            });   
    // так же ф-ция будет дожидаться пока получит результаты данных в text формате
    // и будет продолжена 
            return await res.text();
};


// Асинхронная функция получения данных с сервера
const getResource = async(url) => {
    // ф-ция будет дожидаться получения данных с сервера и затем будет продолжена
            let res = await fetch (url);
            if(!res.ok){
    // при возникновении ошибки будет создан обьект ошибки и в нее будут переданы данные 
                throw new Error(`Could not fetch ${url}, status: ${res.status}`);
            }   
    // так же ф-ция будет дожидаться пока получит результаты данных в json формате
    // и будет продолжена 
            return await res.json();
};

export {postData, getResource};
