/**
 * Импорт централизованной конфигурации
 */
import { languageConfig } from './core/config.js';

const selectedLanguage = localStorage.getItem(languageConfig.storageKey) || languageConfig.defaultLanguage;
const langConfig = languageConfig.getLanguageConfig(selectedLanguage);

if (langConfig) {
    document.documentElement.setAttribute('lang', langConfig.code);
    
    if (selectedLanguage === 'ukrainian') {
        document.title = "Транспортно-експедиторські послуги Київ, Україна - послуги експедитора, ціна";
    } else if (selectedLanguage === 'american') {
        document.title = "Freight forwarding services Kyiv, Ukraine - cargo global, sea, air";
    }
}