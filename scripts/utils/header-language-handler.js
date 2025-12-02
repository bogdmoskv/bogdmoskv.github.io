/**
 * Модуль для обработки логики переключения языков в header
 * Вынесен из loaderHeader.js для переиспользования и устранения дублирования
 */

import { languageConfig } from '../core/config.js';

/**
 * Обновляет отображение контента в зависимости от выбранного языка
 * @param {string} language - Выбранный язык ('ukrainian' или 'american')
 */
export function updateContentDisplay(language) {
    const langConfig = languageConfig.getLanguageConfig(language);
    if (!langConfig) {
        console.warn(`updateContentDisplay: Invalid language: ${language}`);
        return;
    }

    // Находим все элементы с классом, содержащим 'content-'
    const contentElements = document.querySelectorAll('[class*="content-"]');

    contentElements.forEach(element => {
        if (element.classList.contains(langConfig.contentClass)) {
            element.style.display = 'block'; // Отображаем контент для выбранного языка
        } else {
            element.style.display = 'none'; // Скрываем контент для других языков
        }
    });
}

/**
 * Обновляет отображение flex-контента в зависимости от выбранного языка
 * @param {string} language - Выбранный язык ('ukrainian' или 'american')
 */
export function toggleFlexContent(language) {
    const langConfig = languageConfig.getLanguageConfig(language);
    if (!langConfig) {
        console.warn(`toggleFlexContent: Invalid language: ${language}`);
        return;
    }

    // Находим все элементы с классом, содержащим 'content-'
    const contentElements = document.querySelectorAll('.custom-translation[class*="content-"]');

    contentElements.forEach(element => {
        if (element.classList.contains(langConfig.contentClass)) {
            element.classList.remove('d-none');
            element.style.display = 'block'; // Отображаем контент для выбранного языка
        } else {
            element.classList.add('d-none');
            element.style.display = 'none'; // Скрываем контент для других языков
        }
    });
}

/**
 * Обновляет иконку флага в кнопке выбора языка
 * @param {string} language - Выбранный язык ('ukrainian' или 'american')
 */
export function updateFlagIcon(language) {
    const buttonImg = document.querySelector('.dropdown-button img');
    if (!buttonImg) {
        console.warn('updateFlagIcon: dropdown button image not found');
        return;
    }

    const flagSrc = languageConfig.getFlagPath(language);
    if (!flagSrc) {
        console.warn(`updateFlagIcon: Invalid language: ${language}. Using default.`);
        const defaultFlagSrc = languageConfig.getFlagPath(languageConfig.defaultLanguage);
        buttonImg.setAttribute('src', defaultFlagSrc);
        return;
    }

    buttonImg.setAttribute('src', flagSrc);
}

/**
 * Инициализирует обработчики событий для dropdown выбора языка
 * @param {Function} onLanguageChange - Callback при изменении языка
 */
export function initLanguageDropdown(onLanguageChange = null) {
    const dropdownItems = document.querySelectorAll('.dropdown-item-icon');
    const buttonImg = document.querySelector('.dropdown-button img');
    const dropdownButton = document.querySelector('.dropdown-button');

    if (!dropdownButton || !buttonImg) {
        console.warn('initLanguageDropdown: dropdown elements not found');
        return;
    }

    // Обработчик клика на кнопку dropdown
    dropdownButton.addEventListener('click', function () {
        const currentButtonSrc = buttonImg.getAttribute('src');

        // Скрываем выбранную иконку в списке
        dropdownItems.forEach(item => {
            const itemImg = item.querySelector('img');
            if (!itemImg) return;

            const itemSrc = itemImg.getAttribute('src');

            // Если путь изображения совпадает с текущим, скрываем элемент
            if (itemSrc === currentButtonSrc) {
                item.style.display = 'none';
            } else {
                item.style.display = 'block';
            }
        });
    });

    // Обработчик для выбора флага из списка
    dropdownItems.forEach(item => {
        item.addEventListener('click', function (event) {
            const imgElement = item.querySelector('img');
            if (!imgElement) return;

            const imgSrc = imgElement.getAttribute('src'); // Получаем путь к изображению
            const dataValue = imgElement.getAttribute('data-value');

            // Обновляем изображение в кнопке на выбранную иконку
            buttonImg.setAttribute('src', imgSrc);

            // Сохраняем выбранный язык (валидация выполняется в setSelectedLanguage)
            if (languageConfig.isValidLanguage(dataValue)) {
                localStorage.setItem(languageConfig.storageKey, dataValue);
            } else {
                console.warn(`Invalid language selected: ${dataValue}`);
                return;
            }

            // Обновляем отображение контента
            updateContentDisplay(dataValue);
            toggleFlexContent(dataValue);

            // Вызываем callback, если он предоставлен
            if (onLanguageChange && typeof onLanguageChange === 'function') {
                onLanguageChange(dataValue);
            } else {
                // По умолчанию перезагружаем страницу
                location.reload();
            }
        });
    });
}

/**
 * Инициализирует таймеры для статистики при видимости элемента
 * @param {string} selectedLanguage - Выбранный язык
 */
export function initStatisticsTimers(selectedLanguage) {
    // Проверяем наличие createTimer (должен быть загружен через timer-global.js)
    if (typeof window.createTimer === 'undefined') {
        console.warn('createTimer is not available. Make sure timer-global.js is loaded.');
        return;
    }

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Если элемент виден в данный момент
            if (entry.isIntersecting) {
                // Запускаем таймеры, когда элемент становится видимым

                // Выбираем все элементы, названия которых начинаются с display
                const displays = document.querySelectorAll('[class^="display"]');

                const startIndex = selectedLanguage === languageConfig.defaultLanguage ? 0 : 4; // 0-3 для укр, 4-7 для англ
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
                        } else { // default: display
                            maxCount = 140;
                            interval = 28;
                        }

                        window.createTimer(displ, maxCount, interval, suffix);
                    }
                }

                // Останавливаем наблюдение, чтобы не запускать таймеры повторно
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Запускается, когда видно хотя бы 10%
    });

    const imgContainers2 = document.querySelectorAll('.image-container-2');
    if (imgContainers2.length > 0) {
        imgContainers2.forEach(imgContainer => {
            observer.observe(imgContainer);
        });
    }
}

/**
 * Инициализирует всю логику переключения языков для header
 * @param {string} selectedLanguage - Выбранный язык
 * @param {Function} onLanguageChange - Callback при изменении языка
 */
export function initHeaderLanguageLogic(selectedLanguage, onLanguageChange = null) {
    // Обновляем отображение контента
    updateContentDisplay(selectedLanguage);
    toggleFlexContent(selectedLanguage);
    updateFlagIcon(selectedLanguage);

    // Инициализируем dropdown
    initLanguageDropdown(onLanguageChange);

    // Инициализируем таймеры статистики
    initStatisticsTimers(selectedLanguage);
}

// Глобальная доступность для обычных скриптов
if (typeof window !== 'undefined') {
    window.initHeaderLanguageLogic = initHeaderLanguageLogic;
    window.updateContentDisplay = updateContentDisplay;
    window.toggleFlexContent = toggleFlexContent;
    window.updateFlagIcon = updateFlagIcon;
    window.initLanguageDropdown = initLanguageDropdown;
    window.initStatisticsTimers = initStatisticsTimers;
}

