/**
 * Импорт централизованной конфигурации
 */
import { languageConfig } from './core/config.js';

const selectedLanguage = localStorage.getItem(languageConfig.storageKey) || languageConfig.defaultLanguage;
const langConfig = languageConfig.getLanguageConfig(selectedLanguage);

if (langConfig) {
    document.documentElement.setAttribute('lang', langConfig.code);
    
    if (selectedLanguage === 'ukrainian') {
        document.title = "Митне оформлення вантажів, товарів у Києві - з України, Китаю";
    } else if (selectedLanguage === 'american') {
        document.title = "International customs clearance services Ukraine - agent, broker, fees";
    }
}