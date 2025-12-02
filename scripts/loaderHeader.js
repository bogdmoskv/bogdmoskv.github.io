/**
 * Загрузчик header компонента с использованием ComponentLoader
 * Использует оптимизированную загрузку с кэшированием и параллельной загрузкой
 */

document.addEventListener('DOMContentLoaded', function () {
    // Инициализируем язык по умолчанию
    if (!localStorage.getItem('selectedLanguage')) {
        localStorage.setItem('selectedLanguage', 'ukrainian');
    }

    // Получаем текущий выбранный язык из localStorage
    const selectedLanguage = localStorage.getItem('selectedLanguage');

    // Callback при изменении языка
    function handleLanguageChange(newLanguage) {
        // Перезагружаем страницу для применения изменений
        location.reload();
    }

    // Функция инициализации логики языков после загрузки header
    function initHeaderLanguageAfterLoad() {
        // Проверяем доступность функций из header-language-handler.js
        if (typeof window.initHeaderLanguageLogic === 'function') {
            window.initHeaderLanguageLogic(selectedLanguage, handleLanguageChange);
        } else {
            console.warn('header-language-handler functions not available, using fallback');
            // Fallback логика (упрощенная версия)
            setTimeout(() => {
                const buttonImg = document.querySelector('.dropdown-button img');
                if (buttonImg) {
                    const flagSrc = selectedLanguage === 'ukrainian' 
                        ? '../images/Flag_of_Ukraine.png'
                        : '../images/Flag_of_the_United_States_(51_stars).svg.png';
                    buttonImg.setAttribute('src', flagSrc);
                }
            }, 100);
        }
    }

    // Загружаем header используя ComponentLoader
    if (typeof window.componentLoader !== 'undefined') {
        // Используем оптимизированный ComponentLoader
        window.componentLoader.loadAndInsert(
            'header.html',
            'header-placeholder',
            {},
            function(placeholder, html) {
                // После вставки header инициализируем логику переключения языков
                // Задержка для гарантии, что DOM обновлен и модуль header-language-handler.js загружен
                setTimeout(initHeaderLanguageAfterLoad, 50);
            }
        ).catch(error => {
            console.error('Failed to load header component:', error);
        });
    } else {
        // Fallback: используем стандартный fetch, если ComponentLoader не доступен
        console.warn('ComponentLoader not available, using fallback fetch');
        fetch('../elements/header.html')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.text();
            })
            .then(data => {
                const placeholder = document.getElementById('header-placeholder');
                if (placeholder) {
                    placeholder.innerHTML = data;
                    
                    // Инициализируем логику переключения языков
                    // Задержка для гарантии, что модуль header-language-handler.js загружен
                    setTimeout(initHeaderLanguageAfterLoad, 50);
                }
            })
            .catch(error => {
                console.error('Error loading header:', error);
            });
    }
});