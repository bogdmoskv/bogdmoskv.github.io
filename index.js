/**
 * Инициализация EmailJS и языковых настроек для главной страницы
 */
import { emailjsConfig, languageConfig } from './scripts/core/config.js';

(function () {
    emailjs.init({
        publicKey: emailjsConfig.publicKey,
    });
})();

const selectedLanguage = localStorage.getItem(languageConfig.storageKey) || languageConfig.defaultLanguage;
const langConfig = languageConfig.getLanguageConfig(selectedLanguage);

const htmlTag = document.documentElement;

if (langConfig) {
    // Устанавливаем язык HTML элемента
    htmlTag.setAttribute('lang', langConfig.code);
    
    // Устанавливаем заголовок страницы
    document.title = langConfig.defaultTitle;
    
    // Устанавливаем Open Graph описание
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
        ogDescription.setAttribute('content', langConfig.defaultDescription);
    }
}