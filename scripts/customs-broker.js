/**
 * Импорт централизованной конфигурации
 */
import { languageConfig } from './core/config.js';

const selectedLanguage = localStorage.getItem(languageConfig.storageKey) || languageConfig.defaultLanguage;
const langConfig = languageConfig.getLanguageConfig(selectedLanguage);

if (langConfig) {
    document.documentElement.setAttribute('lang', langConfig.code);
    
    if (selectedLanguage === 'ukrainian') {
        document.title = "Митний брокер для юридичних осіб Київ, Україна - консультація, Польща, Болгарія";
    } else if (selectedLanguage === 'american') {
        document.title = "Customs broker for legal entities Kyiv, Ukraine - consultation, Poland, Bulgaria";
    }
}