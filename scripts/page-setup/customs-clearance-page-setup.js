import { getSelectedLanguage, updateLanguageContent } from '../utils/language-manager.js';

document.addEventListener('DOMContentLoaded', function () {
    const selectedLanguage = getSelectedLanguage();
    const pageConfig = {
        ukrainian: {
            meta: {
                title: "Митне оформлення вантажів, товарів у Києві - з України, Китаю",
                ogDescription: 'Митне оформлення вантажів, товарів у Києві ❇️ з України, Китаю ❇️ митно-брокерські послуги ❇️ митне оформлення товарів ❇️ Детальніше ТУТ!',
                keywords: 'логистика, логістика, AS-Trans, АС-Транс, ас транс, Ас транс, As trans, транспорт, перевезення, перевозки, услуги, послуги, брокер, митне оформлення, таможенное оформление, транспортна компанія, транспортная компания',
                ogTitle: 'Митне оформлення вантажів, товарів у Києві - з України, Китаю',
                twitterTitle: 'Митне оформлення вантажів, товарів у Києві - з України, Китаю',
                twitterDescription: 'Митне оформлення вантажів, товарів у Києві ❇️ з України, Китаю ❇️ митно-брокерські послуги ❇️ митне оформлення товарів ❇️ Детальніше ТУТ!'
            }
        },
        american: {
            meta: {
                title: "International customs clearance services Ukraine - agent, broker, fees",
                ogDescription: 'International customs clearance services Ukraine ❇️ customs brokerage services ❇️ customs clearance of goods ❇️ More HERE!',
                description: 'International customs clearance services Ukraine ❇️ customs brokerage services ❇️ customs clearance of goods ❇️ More HERE!',
                keywords: 'logistics, AS-Trans, AS trans, As trans, transport, transportation, services, broker, customs clearance, transport company',
                ogTitle: 'International customs clearance services Ukraine - agent, broker, fees',
                twitterTitle: 'International customs clearance services Ukraine - agent, broker, fees',
                twitterDescription: 'International customs clearance services Ukraine ❇️ customs brokerage services ❇️ customs clearance of goods ❇️ More HERE!'
            }
        }
    };
    updateLanguageContent(selectedLanguage, pageConfig);
});
