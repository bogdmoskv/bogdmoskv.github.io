import { getSelectedLanguage, updateLanguageContent } from '../utils/language-manager.js';

document.addEventListener('DOMContentLoaded', function () {
    const selectedLanguage = getSelectedLanguage();
    const pageConfig = {
        ukrainian: {
            meta: {
                title: "Контакти AS-Trans",
                ogDescription: 'Контакти AS-Trans ❇️ митно-брокерські послуги ❇️ митне оформлення вантажів ❇️ Детальніше ТУТ!',
                keywords: 'логистика, логістика, AS-Trans, АС-Транс, ас транс, Ас транс, As trans, транспорт, перевезення, перевозки, услуги, послуги, брокер, митне оформлення, таможенное оформление, транспортна компанія, транспортная компания',
                ogTitle: 'Контакти AS-Trans',
                twitterTitle: 'Контакти AS-Trans',
                twitterDescription: 'Контакти AS-Trans ❇️ митно-брокерські послуги ❇️ митне оформлення вантажів ❇️ Детальніше ТУТ!'
            }
        },
        american: {
            meta: {
                title: "Contact AS-Trans",
                ogDescription: 'AS-Trans contacts ❇️ customs brokerage services ❇️ customs clearance of goods ❇️ More details HERE!',
                description: 'AS-Trans contacts ❇️ customs brokerage services ❇️ customs clearance of goods ❇️ More details HERE!',
                keywords: 'logistics, AS-Trans, AS trans, As trans, transport, transportation, services, broker, customs clearance, transport company',
                ogTitle: 'Contact AS-Trans',
                twitterTitle: 'Contact AS-Trans',
                twitterDescription: 'AS-Trans contacts ❇️ customs brokerage services ❇️ customs clearance of goods ❇️ More details HERE!'
            }
        }
    };
    updateLanguageContent(selectedLanguage, pageConfig);
});
