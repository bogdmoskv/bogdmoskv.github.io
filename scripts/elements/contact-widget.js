document.addEventListener('DOMContentLoaded', () => {
    const placeholder = document.querySelector('#contact-widget');

    if (placeholder) {
        fetch('../elements/contact-widget.html')
            .then(res => res.text())
            .then(html => {
                placeholder.innerHTML = html;

                //Применяем логику переключения языков к элементам виджета
                function updateContactWidgetLanguage(language) {
                    const contactTextElements = document.querySelectorAll('.contact-us-container .contact-text');
                    contactTextElements.forEach(element => {
                        if (element.classList.contains(`content-${language}`)) {
                            element.style.display = 'block';
                        } else {
                            element.style.display = 'none';
                        }
                    });
                }

                let selectedLanguage = localStorage.getItem('selectedLanguage') || 'ukrainian';
                updateContactWidgetLanguage(selectedLanguage);

                let contactContainer = document.querySelector('.contact-us-container');
                let contactButton = document.querySelector('.contact-us-button');
                let messengerIcons = document.querySelector('.messenger-icons');
                let contactButtonIcon = contactButton.querySelector('i');

                //Функция для получения видимого текста текущего языка
                //В виджете есть ДВА текста: "Зв'язатися з нами (укр.)," и "Contact Us" (англ)
                //В зависимости от вібранного языка показывается только ОДИН из них (второй скрыт)
                //Эта функция находит и возвращает тот текст, который сейчас ВИДИМ (для текущего языка)
                function getVisibleContactText() {
                    //Находим все тексты в виджете (их два: украинский и английский)
                    const contactTexts = document.querySelectorAll('.contact-us-container .contact-text');

                    //Перебираем все тексты и ищем тот, который сейчас видим
                    for (let text of contactTexts) {
                        //Проверяем: если текст не скрыт через display:none и не имеет класса 'hidden', значит это тот текст,
                        //который сейчас виден для текущего языка
                        if (text.style.display !== 'none' && !text.classList.contains('hidden')) {
                            return text; //возвращаем видимый текст
                        }
                    }
                    //если по какой-то причине видимого текста не нашли, возвращаем первый (на всякий случай)
                    return contactTexts[0];
                }

                contactButton.addEventListener('click', () => {
                    //const visibleText = getVisibleContactText();
                    let currentLanguage = localStorage.getItem('selectedLanguage') || 'ukrainian';

                    //если иконки показываються, скрываем их
                    if (messengerIcons.classList.contains('show')) {
                        messengerIcons.classList.remove('show');
                        contactContainer.classList.remove('column-layout'); //возвращаем в row
                        contactButtonIcon.classList.remove('fa-solid', 'fa-rotate-left')
                        contactButtonIcon.classList.add('fa-regular', 'fa-message');

                        updateContactWidgetLanguage(currentLanguage);
                        const visibleText = document.querySelector(`.contact-us-container .contact-text.content-${currentLanguage}`);
                        if (visibleText) {
                            visibleText.classList.remove('hidden');
                            visibleText.style.display = 'block';
                        }
                    } else {
                        const visibleText = document.querySelector(`.contact-us-container .contact-text.content-${currentLanguage}`);
                        if (visibleText) {
                            visibleText.classList.add('hidden');
                            visibleText.style.display = 'none';
                        }

                        contactContainer.classList.add('column-layout');
                        contactButtonIcon.classList.add('fa-solid', 'fa-rotate-left')
                        contactButtonIcon.classList.remove('fa-regular', 'fa-message');

                        setTimeout(() => {
                            messengerIcons.classList.add('show')
                        }, 10);
                    }
                });
            })
            .catch(err => console.error("Error while loading contact-widget: ", err))
    }
});