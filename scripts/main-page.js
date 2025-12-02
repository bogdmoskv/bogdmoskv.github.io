/**
 * Импорт централизованной конфигурации
 */
import { languageConfig } from './core/config.js';

const language = localStorage.getItem(languageConfig.storageKey) || languageConfig.defaultLanguage;
const langConfig = languageConfig.getLanguageConfig(language);

if (langConfig) {
    // Устанавливаем язык HTML элемента
    document.documentElement.setAttribute('lang', langConfig.code);
    
    // Устанавливаем заголовок страницы (используем defaultTitle из конфига или кастомный)
    if (language === 'ukrainian') {
        document.title = "Найкраща міжнародна логістична компанія AS-Trans Київ, Україна";
        
        const metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) {
            metaKeywords.setAttribute("content", "логистика, логістика, AS-Trans, АС-Транс, ас транс, Ас транс, As Trans, транспорт, перевезення, перевозки, услуги, послуги, брокер, митне оформлення, таможенное оформление, транспортная компания, транспортна компанія");
        }
    } else if (language === 'american') {
        document.title = "International Logistic transportation company - AS-Trans website";
        
        const metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) {
            metaKeywords.setAttribute("content", "logistics, AS-Trans, transportation, shipping, services, broker, customs clearance, transport company");
        }
    }
}
