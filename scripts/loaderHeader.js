document.addEventListener('DOMContentLoaded', function () {
    //устанавливаем язык по умолчанию на украинский, если он не установлен
    if (!localStorage.getItem('selectedLanguage')) {
        localStorage.setItem('selectedLanguage', 'ukrainian');
    }

    //получаем текущий выбранный язык из localStorage
    let selectedLanguage = localStorage.getItem('selectedLanguage');

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

    function toggleFlexContent(language){
         //находим все элементы с классом, содержащим 'content-'
         const contentElements = document.querySelectorAll('.custom-translation[class*="content-"]');

         contentElements.forEach(element => {
             if (element.classList.contains(`content-${language}`)) {
                 element.classList.remove('d-none'); //!!!ДОБАВЛЕНО
                 element.style.display = 'block'; //отображаем контент для выбранного языка             
             } else {
                 element.classList.add('d-none');
                 element.style.display = 'none'; //скрываем контент для других языков
             }
         });
    }

    //функция для установки пути к изображению в кнопке
    function updateFlagIcon(language) {
        const buttonImg = document.querySelector('.dropdown-button img')
        let flagSrc;

        switch (language) {
            case 'ukrainian':
                flagSrc = '../images/Flag_of_Ukraine.png';
                break;
            case 'american':
                flagSrc = '../images/Flag_of_the_United_States_(51_stars).svg.png';
                break;
            default:
                flagSrc = '../images/Flag_of_Ukraine.png';
                break;
        }

        buttonImg.setAttribute('src', flagSrc);
    }

    // createTimer доступен глобально через timer-utils.js

    fetch('../elements/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;

            //вызываем функцию для обновления отображения контента
            updateContentDisplay(selectedLanguage);
            toggleFlexContent(selectedLanguage); //!!!
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

                    localStorage.setItem('selectedLanguage', dataValue);

                    updateContentDisplay(dataValue);
                    toggleFlexContent(dataValue);

                    selectedLanguage = localStorage.getItem('selectedLanguage')

                    const observer = new IntersectionObserver((entries, observer) => {
                        entries.forEach(entry => {
                            //если элемент виден в данный момент
                            if (entry.isIntersecting) {
                                //запускаем таймеры, когда элемент становится видимым

                                //Выбираем все элементы, названия которых начинаются с display
                                const displays = document.querySelectorAll('[class^="display"]');

                                const startIndex = selectedLanguage === "ukrainian" ? 0 : 4; //0-3 для укр, 4-7 для англ
                                const endIndex = startIndex + 4;

                                for (let i = startIndex; i < endIndex; i++) {
                                    if (i < displays.length) {
                                        const displ = displays[i];
                                        const className = displ.className;
                                        let maxCount, interval, suffix;

                                        displ.style.display = 'block';
                                        if (className === "display1") {
                                            maxCount = 20;
                                            interval = 200;
                                        } else if (className === "display2") {
                                            maxCount = 40;
                                            interval = 100;
                                            suffix = 'K';
                                        } else if (className === "display3") {
                                            maxCount = 897;
                                            interval = 0.01;
                                        } else { //default: display
                                            maxCount = 140;
                                            interval = 28;
                                        }

                                        createTimer(displ, maxCount, interval, suffix);
                                    }
                                }

                                //останавливаем наблюдение, чтобы не запускать таймеры повторно
                                observer.unobserve(entry.target);
                            }
                        });
                    }, {
                        threshold: 0.1 //запускается, когда видно хотя бы 10% 
                    });

                    const imgContainers2 = document.querySelectorAll('.image-container-2');
                    if (imgContainers2.length > 0) {
                        imgContainers2.forEach(imgContainer => {
                            observer.observe(imgContainer);
                        });

                    }

                    location.reload();
                });
            });

        })
});