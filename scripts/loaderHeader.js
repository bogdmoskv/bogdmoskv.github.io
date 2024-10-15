//localStorage предоставляет возможность хранить данные на стороне клиента (в браузере)
//Данные, сохранённые в localStorage, остаются доступными даже после закрытия вкладки или браузера, что
//делаемт его полезным для сохранения информации..

//Основные характеристики localStorage:
//1. Долговечность. Данные в localStorage сохраняются в браузере до тех пор, пока не будут удалены вручную.
//Они не исчезают после закрытия вкладки или браузера.

//2. Объём хранения. Большинство браузеров позволяют хранить около 5-10 Мб данных на домен. Этого достаточно 
//для хранения различных настроек и небольшой информации

//3. Ключ-значение. localStorage работает по принципу хранения данных в формате "ключ-значение". Это означает,
//что можно сохранить данные, привязанные  копределнному ключу и впоследствии легко извлечь их

//4. Операции с localStorage происходят мгновенно, и не нужно беспокоиться о задержках при их использовании.


document.addEventListener('DOMContentLoaded', function () {
    //устанавливаем язык по умолчанию на украинский, если он не установлен
    if (!localStorage.getItem('selectedLanguage')) {
        localStorage.setItem('selectedLanguage', 'ukrainian');
    }

    //получаем текущий выбранный язык из localStorage
    const selectedLanguage = localStorage.getItem('selectedLanguage');



    //Отображаем контент в зависимости от выбранного языка
    function updateContentDisplay(language) {
        //находим все элементы с классом, содержащим 'content-'
        const contentElements = document.querySelectorAll('[class*="content-"]');

        contentElements.forEach(element => {
            if (element.classList.contains(`content-${language}`)) {
                element.style.display = 'block'; //отображаем контент для выбранного языка
            } else {
                element.style.display = 'none'; //скрываем контент для других языков
            }
        });
    }

    //функция для установки пути к изображению в кнопке
    function updateFlagIcon(language){
        const buttonImg = document.querySelector('.dropdown-button img')
        let flagSrc; 

        switch(language){
            case 'ukrainian':
                flagSrc = '../images/ukrainianFlag.png';
                break;
            case 'american':
                flagSrc = '../images/americanFlag.png';
                break;
            default:
                flagSrc = '../images/ukrainianFlag.png';
                break;
        }

        buttonImg.setAttribute('src', flagSrc);
    }


    fetch('../elements/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;

            //вызываем функцию для обновления отображения контента
            updateContentDisplay(selectedLanguage);
            updateFlagIcon(selectedLanguage);

            const dropdownItems = document.querySelectorAll('.dropdown-item-icon');
            const buttonImg = this.documentElement.querySelector('.dropdown-button img')

            //добавляем обработчик клика на кнопку
            document.querySelector('.dropdown-button').addEventListener('click', function () {
                let currentButtonSrc = buttonImg.getAttribute('src');

                //скрываем выбранную иконку в списке
                dropdownItems.forEach(item => {
                    let itemImg = item.querySelector('img');
                    let itemSrc = itemImg.getAttribute('src');

                    //если путь изображения совпадает с текущим, скрываем элемент
                    if (itemSrc === currentButtonSrc) {
                        item.style.display = 'none';
                    } else {
                        item.style.display = 'block';
                    }
                });
            });

            //обработчик для выбора флага из списка
            dropdownItems.forEach(item => {
                item.addEventListener('click', function (event) {
                    let imgElement = item.querySelector('img');
                    let imgSrc = imgElement.getAttribute('src'); //получаем путь к изображению
                    let dataValue = imgElement.getAttribute('data-value');

                    //обновляем изображение в кнопке на выбранную иконку
                    buttonImg.setAttribute('src', imgSrc);
                    // alert("Icon click with data-value: " + dataValue);

                    localStorage.setItem('selectedLanguage', dataValue);

                    //перезагрузка страницы для применения нового языка
                    //location.reload();

                    updateContentDisplay(dataValue);
                });
            });

        })
});