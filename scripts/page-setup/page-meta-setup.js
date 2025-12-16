/**
 * Универсальная функция для настройки мета-тегов страниц
 * Автоматически создает pageConfig из переводов i18n или использует переданные значения
 */

import { getSelectedLanguage, updateLanguageContent } from '../utils/language-manager.js';
import { getTranslation } from '../i18n/i18n-manager.js';

/**
 * Настраивает мета-теги страницы на основе ключа перевода или переданных значений
 * @param {string|null} translationKey - Ключ перевода в формате "pageName" (например, "aboutUs", "contact")
 *                                       Если null, используется fallbackConfig
 * @param {Object} [fallbackConfig] - Опциональный объект с мета-тегами для случаев, когда переводы отсутствуют
 *                                    Формат: { ukrainian: { meta: {...} }, american: { meta: {...} } }
 */
export function setupPageMeta(translationKey, fallbackConfig = null) {
    document.addEventListener('DOMContentLoaded', function () {
        const selectedLanguage = getSelectedLanguage();
        
        // Если передан fallbackConfig или translationKey отсутствует, используем fallbackConfig
        if (fallbackConfig || !translationKey) {
            if (fallbackConfig) {
                updateLanguageContent(selectedLanguage, fallbackConfig);
            } else {
                console.warn('setupPageMeta: translationKey is null and fallbackConfig is not provided');
            }
            return;
        }
        
        // Создаем pageConfig из переводов i18n
        const pageConfig = {
            ukrainian: {
                meta: {
                    title: getTranslation(`${translationKey}.meta.title`, 'ukrainian'),
                    description: getTranslation(`${translationKey}.meta.description`, 'ukrainian'),
                    keywords: getTranslation(`${translationKey}.meta.keywords`, 'ukrainian'),
                    ogTitle: getTranslation(`${translationKey}.meta.ogTitle`, 'ukrainian'),
                    ogDescription: getTranslation(`${translationKey}.meta.ogDescription`, 'ukrainian'),
                    twitterTitle: getTranslation(`${translationKey}.meta.twitterTitle`, 'ukrainian'),
                    twitterDescription: getTranslation(`${translationKey}.meta.twitterDescription`, 'ukrainian')
                }
            },
            american: {
                meta: {
                    title: getTranslation(`${translationKey}.meta.title`, 'american'),
                    description: getTranslation(`${translationKey}.meta.description`, 'american'),
                    keywords: getTranslation(`${translationKey}.meta.keywords`, 'american'),
                    ogTitle: getTranslation(`${translationKey}.meta.ogTitle`, 'american'),
                    ogDescription: getTranslation(`${translationKey}.meta.ogDescription`, 'american'),
                    twitterTitle: getTranslation(`${translationKey}.meta.twitterTitle`, 'american'),
                    twitterDescription: getTranslation(`${translationKey}.meta.twitterDescription`, 'american')
                }
            }
        };
        
        updateLanguageContent(selectedLanguage, pageConfig);
    });
}

