/**
 * Утилиты для управления языками и контентом страницы
 */

import { updateMetaTags } from './meta-manager.js';

/**
 * Получает текущий выбранный язык из localStorage
 * @returns {string} Выбранный язык ('ukrainian' или 'american')
 */
export function getSelectedLanguage() {
    return localStorage.getItem('selectedLanguage') || 'ukrainian';
}

/**
 * Устанавливает язык в localStorage
 * @param {string} language - Язык для установки ('ukrainian' или 'american')
 */
export function setSelectedLanguage(language) {
    localStorage.setItem('selectedLanguage', language);
}

/**
 * Инициализирует язык по умолчанию, если он не установлен
 */
export function initDefaultLanguage() {
    if (!localStorage.getItem('selectedLanguage')) {
        localStorage.setItem('selectedLanguage', 'ukrainian');
    }
}

/**
 * Обновляет контент страницы в зависимости от выбранного языка
 * @param {string} selectedLanguage - Выбранный язык ('ukrainian' или 'american')
 * @param {Object} pageConfig - Конфигурация страницы с мета-тегами для каждого языка
 * @param {Object} pageConfig.ukrainian - Конфигурация для украинского языка
 * @param {Object} pageConfig.american - Конфигурация для английского языка
 */
export function updateLanguageContent(selectedLanguage, pageConfig) {
    if (!pageConfig) {
        console.warn('updateLanguageContent: pageConfig is not provided');
        return;
    }

    const language = selectedLanguage || getSelectedLanguage();
    const config = pageConfig[language];

    if (!config) {
        console.warn(`updateLanguageContent: No config found for language: ${language}`);
        return;
    }

    // Обновляем мета-теги
    if (config.meta) {
        updateMetaTags(config.meta);
    }
}

