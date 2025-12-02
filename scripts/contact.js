/**
 * Импорт централизованной конфигурации
 */
import { languageConfig } from './core/config.js';

const selectedLanguage = localStorage.getItem(languageConfig.storageKey) || languageConfig.defaultLanguage;
const langConfig = languageConfig.getLanguageConfig(selectedLanguage);

if (langConfig) {
    document.documentElement.setAttribute('lang', langConfig.code);
    
    if (selectedLanguage === 'ukrainian') {
        document.title = "Контакти AS-Trans";
    } else if (selectedLanguage === 'american') {
        document.title = "Contact AS-Trans";
    }
}