/**
 * Модуль для обработки логики переключения языков в header
 * Вынесен из loader-header.js для переиспользования и устранения дублирования
 * Обновлен для работы с новой системой i18n
 */

import { languageConfig } from '../core/config.js';
import { translatePage, setLanguage } from '../i18n/i18n-manager.js';

/**
 * Обновляет отображение контента в зависимости от выбранного языка
 * Использует новую систему i18n с data-i18n-key атрибутами
 * Также поддерживает старую систему с классами content-ukrainian/content-american для обратной совместимости
 * @param {string} language - Выбранный язык ('ukrainian' или 'american')
 */
export function updateContentDisplay(language) {
    const langConfig = languageConfig.getLanguageConfig(language);
    if (!langConfig) {
        console.warn(`updateContentDisplay: Invalid language: ${language}`);
        return;
    }

    // Используем новую систему i18n для элементов с data-i18n-key
    translatePage(language);

    // Поддержка старой системы с классами для обратной совместимости
    // (будет удалено после полного рефакторинга всех HTML файлов)
    // Ищем только элементы БЕЗ data-i18n-key, чтобы не конфликтовать с новой системой
    const contentElements = document.querySelectorAll('[class*="content-"]:not([data-i18n-key])');

    contentElements.forEach(element => {
        // Пропускаем элементы, которые являются родителями элементов с data-i18n-key
        if (element.querySelector('[data-i18n-key]')) {
            return;
        }

        if (element.classList.contains(langConfig.contentClass)) {
            element.style.display = ''; // Убираем inline стили, чтобы CSS работал нормально
            element.style.display = 'block'; // Отображаем контент для выбранного языка
        } else {
            element.style.display = 'none'; // Скрываем контент для других языков
        }
    });
}

/**
 * Обновляет отображение flex-контента в зависимости от выбранного языка
 * Использует новую систему i18n с data-i18n-key атрибутами
 * Также поддерживает старую систему для обратной совместимости
 * @param {string} language - Выбранный язык ('ukrainian' или 'american')
 */
export function toggleFlexContent(language) {
    const langConfig = languageConfig.getLanguageConfig(language);
    if (!langConfig) {
        console.warn(`toggleFlexContent: Invalid language: ${language}`);
        return;
    }

    // Поддержка старой системы с классами для обратной совместимости
    // Ищем только элементы БЕЗ data-i18n-key, чтобы не конфликтовать с новой системой
    const contentElements = document.querySelectorAll('.custom-translation[class*="content-"]:not([data-i18n-key])');

    contentElements.forEach(element => {
        // Пропускаем элементы, которые являются родителями элементов с data-i18n-key
        if (element.querySelector('[data-i18n-key]')) {
            return;
        }

        if (element.classList.contains(langConfig.contentClass)) {
            element.classList.remove('d-none');
            element.style.display = ''; // Убираем inline стили
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
    
    // Обновляем видимость элементов в dropdown после изменения иконки
    updateDropdownItemsVisibility();
}

/**
 * Обновляет видимость элементов в dropdown выбора языка
 * Скрывает выбранный язык и показывает остальные
 * Использует data-value для более надежного сравнения вместо путей к изображениям
 */
export function updateDropdownItemsVisibility() {
    const dropdownItems = document.querySelectorAll('.dropdown-item-icon');
    const buttonImg = document.querySelector('.dropdown-button img');
    
    if (!buttonImg || dropdownItems.length === 0) {
        return;
    }

    // Получаем текущий выбранный язык из localStorage
    const currentLanguage = localStorage.getItem(languageConfig.storageKey) || languageConfig.defaultLanguage;
    
    // Обновляем видимость всех элементов в dropdown
    dropdownItems.forEach(item => {
        const itemImg = item.querySelector('img');
        if (!itemImg) {
            item.style.display = 'none';
            return;
        }

        // Используем data-value для сравнения вместо путей к изображениям
        // Это более надежно, так как пути могут отличаться в зависимости от страницы
        const itemDataValue = itemImg.getAttribute('data-value');

        // Если data-value элемента совпадает с текущим языком, скрываем элемент
        // Иначе показываем его
        if (itemDataValue === currentLanguage) {
            item.style.display = 'none';
            // Также скрываем родительский <li>, если он есть
            const parentLi = item.closest('li');
            if (parentLi) {
                parentLi.style.display = 'none';
            }
        } else {
            item.style.display = 'block';
            // Показываем родительский <li>, если он есть
            const parentLi = item.closest('li');
            if (parentLi) {
                parentLi.style.display = '';
            }
        }
    });
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

    // Обработчик события открытия dropdown (Bootstrap событие)
    dropdownButton.addEventListener('show.bs.dropdown', function () {
        // Обновляем видимость элементов перед открытием dropdown
        // Используем текущий язык из localStorage для правильного определения видимости
        updateDropdownItemsVisibility();
    });
    
    // Обработчик события закрытия dropdown (Bootstrap событие)
    dropdownButton.addEventListener('hidden.bs.dropdown', function () {
        // Обновляем видимость элементов после закрытия dropdown
        // Это гарантирует, что при следующем открытии все будет корректно
        updateDropdownItemsVisibility();
    });
    
    // Также обрабатываем клик для совместимости (на случай, если Bootstrap события не работают)
    dropdownButton.addEventListener('click', function (e) {
        // Небольшая задержка, чтобы убедиться, что src кнопки актуален
        setTimeout(() => {
            updateDropdownItemsVisibility();
        }, 10);
    });

    // Обработчик для выбора флага из списка
    dropdownItems.forEach(item => {
        item.addEventListener('click', function (event) {
            const imgElement = item.querySelector('img');
            if (!imgElement) return;

            const imgSrc = imgElement.getAttribute('src'); // Получаем путь к изображению
            const dataValue = imgElement.getAttribute('data-value');

            // Сохраняем выбранный язык и обновляем контент через новую систему i18n
            if (languageConfig.isValidLanguage(dataValue)) {
                // Предотвращаем стандартное поведение ссылки
                event.preventDefault();
                event.stopPropagation();
                
                // СНАЧАЛА сохраняем язык в localStorage
                localStorage.setItem(languageConfig.storageKey, dataValue);
                
                // Затем обновляем изображение в кнопке на выбранную иконку
                buttonImg.setAttribute('src', imgSrc);
                
                // Используем новую систему i18n без перезагрузки страницы
                setLanguage(dataValue, false); // false = не перезагружать страницу
                
                // Обновляем отображение контента (включая поддержку старой системы)
                updateContentDisplay(dataValue);
                toggleFlexContent(dataValue);
                
                // Закрываем dropdown перед обновлением видимости элементов
                // Bootstrap доступен глобально через CDN
                if (typeof bootstrap !== 'undefined' && bootstrap.Dropdown) {
                    const bsDropdown = bootstrap.Dropdown.getInstance(dropdownButton);
                    if (bsDropdown) {
                        bsDropdown.hide();
                    }
                } else {
                    // Fallback: закрываем dropdown через удаление класса show
                    dropdownButton.classList.remove('show');
                    const dropdownMenu = dropdownButton.nextElementSibling;
                    if (dropdownMenu && dropdownMenu.classList.contains('dropdown-menu')) {
                        dropdownMenu.classList.remove('show');
                    }
                }
                
                // Обновляем видимость элементов в dropdown ПОСЛЕ закрытия dropdown
                // Используем небольшую задержку, чтобы dropdown успел закрыться
                setTimeout(() => {
                    updateDropdownItemsVisibility();
                }, 150);
            } else {
                console.warn(`Invalid language selected: ${dataValue}`);
                event.preventDefault();
                return;
            }

            // Вызываем callback, если он предоставлен
            // НЕ перезагружаем страницу по умолчанию - новая система i18n работает без перезагрузки
            if (onLanguageChange && typeof onLanguageChange === 'function') {
                onLanguageChange(dataValue);
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
    // Инициализируем новую систему i18n
    translatePage(selectedLanguage);
    
    // Обновляем отображение контента (включая поддержку старой системы только для элементов без data-i18n-key)
    updateContentDisplay(selectedLanguage);
    toggleFlexContent(selectedLanguage);
    updateFlagIcon(selectedLanguage);

    // Убеждаемся, что все элементы с data-i18n-key видимы и не имеют конфликтующих стилей
    const i18nElements = document.querySelectorAll('[data-i18n-key]');
    i18nElements.forEach(element => {
        // Убираем классы старой системы
        element.classList.remove('content-ukrainian', 'content-american', 'd-none');
        // Убираем inline стили display
        if (element.style.display === 'none') {
            element.style.display = '';
        }
    });

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
    window.updateDropdownItemsVisibility = updateDropdownItemsVisibility;
    window.initLanguageDropdown = initLanguageDropdown;
    window.initStatisticsTimers = initStatisticsTimers;
}

