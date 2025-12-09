/**
 * Менеджер интернационализации (i18n)
 * Управляет переводами и обновлением контента страницы в зависимости от выбранного языка
 */

import { translations } from './translations.js';
import { languageConfig } from '../core/config.js';

/**
 * Получает перевод по ключу для указанного языка
 * @param {string} key - Ключ перевода в формате "page.section.element" (например, "home.hero.title")
 * @param {string} language - Язык ('ukrainian' или 'american')
 * @param {string} defaultValue - Значение по умолчанию, если перевод не найден
 * @returns {string} Перевод или значение по умолчанию
 */
export function getTranslation(key, language = null, defaultValue = '') {
    if (!key) {
        console.warn('getTranslation: key is required');
        return defaultValue;
    }

    // Если язык не указан, получаем из localStorage
    if (!language) {
        language = localStorage.getItem(languageConfig.storageKey) || languageConfig.defaultLanguage;
    }

    // Валидация языка
    if (!languageConfig.isValidLanguage(language)) {
        console.warn(`getTranslation: Invalid language "${language}", using default`);
        language = languageConfig.defaultLanguage;
    }

    // Разбиваем ключ на части
    const keys = key.split('.');
    let value = translations;

    // Проходим по пути ключа
    for (const k of keys) {
        if (value && typeof value === 'object' && k in value) {
            value = value[k];
        } else {
            console.warn(`getTranslation: Key "${key}" not found`);
            return defaultValue;
        }
    }

    // Если значение - объект с переводами
    if (value && typeof value === 'object' && language in value) {
        return value[language];
    }

    // Если значение - строка (для обратной совместимости)
    if (typeof value === 'string') {
        return value;
    }

    console.warn(`getTranslation: Translation for key "${key}" and language "${language}" not found`);
    return defaultValue;
}

/**
 * Переводит элемент страницы по data-i18n-key атрибуту
 * @param {HTMLElement} element - Элемент для перевода
 * @param {string} language - Язык ('ukrainian' или 'american')
 */
export function translateElement(element, language = null) {
    if (!element) return;

    const key = element.getAttribute('data-i18n-key');
    if (!key) return;

    if (!language) {
        language = localStorage.getItem(languageConfig.storageKey) || languageConfig.defaultLanguage;
    }

    const translation = getTranslation(key, language);
    if (translation) {
        // Убираем классы старой системы, если они есть, чтобы избежать конфликтов
        element.classList.remove('content-ukrainian', 'content-american');
        // Убираем inline стили display, которые могли быть установлены старой системой
        if (element.style.display === 'none') {
            element.style.display = '';
        }

        // Определяем, что обновлять: текст, атрибут или HTML
        const i18nType = element.getAttribute('data-i18n-type') || 'text';

        switch (i18nType) {
            case 'html':
                element.innerHTML = translation;
                break;
            case 'placeholder':
                element.placeholder = translation;
                break;
            case 'title':
                element.title = translation;
                break;
            case 'alt':
                element.alt = translation;
                break;
            case 'value':
                element.value = translation;
                break;
            case 'href':
                element.href = translation;
                break;
            case 'text':
            default:
                // Для элементов с вложенными элементами (например, span внутри h1)
                const innerSpan = element.querySelector('span');
                if (innerSpan && innerSpan.hasAttribute('data-i18n-key')) {
                    // Если есть вложенный span с ключом, не трогаем родительский элемент
                    return;
                }
                // Заменяем \n на <br> для элементов, которые могут содержать HTML
                if (translation.includes('\n') && (element.tagName === 'P' || element.tagName === 'DIV')) {
                    element.innerHTML = translation.replace(/\n/g, '<br>');
                } else {
                    element.textContent = translation;
                }
                break;
        }
    }
}

/**
 * Переводит всю страницу на указанный язык
 * @param {string} language - Язык ('ukrainian' или 'american')
 */
export function translatePage(language = null) {
    if (!language) {
        language = localStorage.getItem(languageConfig.storageKey) || languageConfig.defaultLanguage;
    }

    if (!languageConfig.isValidLanguage(language)) {
        console.warn(`translatePage: Invalid language "${language}", using default`);
        language = languageConfig.defaultLanguage;
    }

    // Находим все элементы с data-i18n-key
    const elements = document.querySelectorAll('[data-i18n-key]');
    
    elements.forEach(element => {
        translateElement(element, language);
    });

    // Обновляем атрибут lang у html элемента
    const langConfig = languageConfig.getLanguageConfig(language);
    if (langConfig) {
        document.documentElement.setAttribute('lang', langConfig.code);
    }

    // Убираем классы старой системы со всех элементов, которые используют новую систему
    // Это предотвращает конфликты со старой системой отображения
    elements.forEach(element => {
        element.classList.remove('content-ukrainian', 'content-american');
        // Убираем inline стили display, если они были установлены старой системой
        if (element.style.display === 'none') {
            element.style.display = '';
        }
    });
}

/**
 * Инициализирует систему i18n
 * Вызывается при загрузке страницы
 */
export function initI18n() {
    const selectedLanguage = localStorage.getItem(languageConfig.storageKey) || languageConfig.defaultLanguage;
    
    // Валидация языка
    if (!languageConfig.isValidLanguage(selectedLanguage)) {
        localStorage.setItem(languageConfig.storageKey, languageConfig.defaultLanguage);
        translatePage(languageConfig.defaultLanguage);
        return;
    }

    // Переводим страницу
    translatePage(selectedLanguage);
    
    // Убеждаемся, что все элементы с data-i18n-key видимы и не имеют конфликтующих стилей
    const i18nElements = document.querySelectorAll('[data-i18n-key]');
    i18nElements.forEach(element => {
        // Убираем классы старой системы
        element.classList.remove('content-ukrainian', 'content-american', 'd-none');
        // Убираем inline стили display, которые могли быть установлены старой системой
        if (element.style.display === 'none') {
            element.style.display = '';
        }
        // Убираем style="display: none" из атрибутов
        if (element.hasAttribute('style') && element.getAttribute('style').includes('display: none')) {
            element.removeAttribute('style');
        }
    });
}

/**
 * Устанавливает язык и переводит страницу
 * @param {string} language - Язык ('ukrainian' или 'american')
 * @param {boolean} reload - Перезагружать ли страницу после смены языка (по умолчанию false)
 */
export function setLanguage(language, reload = false) {
    if (!languageConfig.isValidLanguage(language)) {
        console.warn(`setLanguage: Invalid language "${language}"`);
        return;
    }

    localStorage.setItem(languageConfig.storageKey, language);
    translatePage(language);

    if (reload) {
        location.reload();
    }
}

/**
 * Получает текущий выбранный язык
 * @returns {string} Текущий язык ('ukrainian' или 'american')
 */
export function getCurrentLanguage() {
    return localStorage.getItem(languageConfig.storageKey) || languageConfig.defaultLanguage;
}

// Экспорт для глобального использования
if (typeof window !== 'undefined') {
    window.i18n = {
        getTranslation,
        translateElement,
        translatePage,
        initI18n,
        setLanguage,
        getCurrentLanguage
    };
}

