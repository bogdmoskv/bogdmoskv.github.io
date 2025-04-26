document.addEventListener('DOMContentLoaded', function(){
    let selectedLanguage = localStorage.getItem('selectedLanguage')
    console.log(selectedLanguage)
})



window.addEventListener('load', ()=>{
    setTimeout(matchTextHeight, 100);
});

//Срабатывает каждый раз, когда изменяется размер окна 
window.addEventListener('resize', matchTextHeight);

function matchTextHeight(){
    setMaxHeight('.advantage-row-1 .advantage-text');
    setMaxHeight('.advantage-row-2 .advantage-text');
    setMaxHeight('.advantage-row-3 .advantage-text');
    setMaxHeight('.advantage-row-4 .advantage-text');
}


function setMaxHeight(selector){
    const textBlocks = document.querySelectorAll(selector);

    let maxHeight = 0;

    //сбросим старые высоты и найдём максимальную
    textBlocks.forEach(el => {
        el.style.height = 'auto';
        maxHeight = Math.max(maxHeight, el.offsetHeight);
    });

    const isMobile = window.innerWidth < 768;

    //зададим всем одинаковую
    textBlocks.forEach(el => {
        // el.style.height = maxHeight + 30 + 'px';
        // el.style.height = maxHeight + 'px';

        el.style.height = (isMobile ? maxHeight : maxHeight + 30) + 'px';
    });
}


// Пробуем писать тестовый метод с учетом группировки элементов по строкам 
// function setMaxHeight(selector){
//     const textBlocks = document.querySelectorAll(selector);
//     const isMobile = window.innerWidth < 768;


//     //сбросим старые высоты и найдём максимальную
//     textBlocks.forEach(el => el.style.height = 'auto');

//     //группируем элементы по строкам (основываясь на top-координате)
//     const rows = [];

//     //зададим всем одинаковую
//     textBlocks.forEach(el => {
//         const top = el.getBoundingClientRect().top;

//         //ищем уже существующую строку с примерно тем же top (с учетом небольшого разброса)
//         let row = rows.find(r => Math.abs(r.top - top) <5);

//         //если не найдена подходящая строка, значит текущий єлемент - начало новой строки
//         if (!row){
//             row = {top: top, elements: []};
//             rows.push(row);
//         }

//         row.elements.push(el);
//     });

//     //Применяем высоты
//     rows.forEach(row =>{
//         if (row.elements.length === 1) return; //Один блок в строке - не трогаем

//         let maxHeight = 0;
//         row.elements.forEach(el => {
//             maxHeight = Math.max(maxHeight, el.offsetHeight);
//         });

//         row.elements.forEach(el => {
//             el.style.height = (isMobile ? maxHeight : maxHeight + 30) + 'px';
//         });
//     });
// }


function updateLanguageContent(selectedLanguage){
    if (selectedLanguage == "ukrainian"){
        document.title = "Митне оформлення вантажів, товарів у Києві - з України, Китаю"
    
        document.querySelector('meta[property="og:description"').setAttribute(
            'content',
            'Митне оформлення вантажів, товарів у Києві ❇️ з України, Китаю ❇️ митно-брокерські послуги ❇️ митне оформлення товарів ❇️ Детальніше ТУТ!'
        )
    
        document.querySelector('meta[property="description"').setAttribute(
            'content',
            'Митне оформлення вантажів, товарів у Києві ❇️ з України, Китаю ❇️ митно-брокерські послуги ❇️ митне оформлення товарів ❇️ Детальніше ТУТ!'
        )
    
        document.querySelector('meta[name="keywords"').setAttribute(
            'content',
            'логистика, логістика, AS-Trans, АС-Транс, ас транс, Ас транс, As trans, транспорт, перевезення, перевозки, услуги, послуги, брокер, митне оформлення, таможенное оформление, транспортна компанія, транспортная компания'
        )
    
        document.querySelector('meta[property="og:title"').setAttribute(
            'content',
            'Митне оформлення вантажів, товарів у Києві - з України, Китаю'
        )
    
        document.querySelector('meta[name="twitter:title"').setAttribute(
            'content',
            'Митне оформлення вантажів, товарів у Києві - з України, Китаю'
        )
    
        document.querySelector('meta[name="twitter:description"').setAttribute(
            'content',
            'Митне оформлення вантажів, товарів у Києві ❇️ з України, Китаю ❇️ митно-брокерські послуги ❇️ митне оформлення товарів ❇️ Детальніше ТУТ!'
        )
    } else if (selectedLanguage == "american"){
        document.title = "International customs clearance services Ukraine - agent, broker, fees"
    
        document.querySelector('meta[property="og:description"').setAttribute(
            'content',
            'International customs clearance services Ukraine ❇️ customs brokerage services ❇️ customs clearance of goods ❇️ More HERE!'
        )
    
        document.querySelector('meta[property="description"').setAttribute(
            'content',
            'International customs clearance services Ukraine ❇️ customs brokerage services ❇️ customs clearance of goods ❇️ More HERE!'
        )
    
        document.querySelector('meta[name="keywords"').setAttribute(
            'content',
            'logistics, AS-Trans, AS trans, As trans, transport, transportation, services, broker, customs clearance, transport company'
        )
    
        document.querySelector('meta[property="og:title"').setAttribute(
            'content',
            'International customs clearance services Ukraine - agent, broker, fees'
        )
    
        document.querySelector('meta[name="twitter:title"').setAttribute(
            'content',
            'International customs clearance services Ukraine - agent, broker, fees'
        )
    
        document.querySelector('meta[name="twitter:description"').setAttribute(
            'content',
            'International customs clearance services Ukraine ❇️ customs brokerage services ❇️ customs clearance of goods ❇️ More HERE!'
        )
    }
}



