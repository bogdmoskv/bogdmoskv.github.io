import { getSelectedLanguage, updateLanguageContent } from '../utils/language-manager.js';

document.addEventListener('DOMContentLoaded', function () {
    const selectedLanguage = getSelectedLanguage();
    const pageConfig = {
        ukrainian: {
            meta: {
                title: "Про компанію AS-Trans",
                ogDescription: 'Про компанію AS-Trans ❇️ митно-брокерські послуги ❇️ митне оформлення вантажів ❇️ Детальніше ТУТ!',
                keywords: 'логистика, логістика, AS-Trans, АС-Транс, ас транс, Ас транс, As trans, транспорт, перевезення, перевозки, услуги, послуги, брокер, митне оформлення, таможенное оформление, транспортна компанія, транспортная компания',
                ogTitle: 'Про компанію AS-Trans',
                twitterTitle: 'Про компанію AS-Trans',
                twitterDescription: 'Про компанію AS-Trans ❇️ митно-брокерські послуги ❇️ митне оформлення вантажів ❇️ Детальніше ТУТ!'
            }
        },
        american: {
            meta: {
                title: "About AS-Trans",
                ogDescription: 'About AS-Trans ❇️ customs brokerage services ❇️ customs clearance of goods ❇️ More HERE!',
                description: 'About AS-Trans ❇️ customs brokerage services ❇️ customs clearance of goods ❇️ More HERE!',
                keywords: 'logistics, AS-Trans, AS trans, As trans, transport, transportation, services, broker, customs clearance, transport company',
                ogTitle: 'About AS-Trans',
                twitterTitle: 'About AS-Trans',
                twitterDescription: 'About AS-Trans ❇️ customs brokerage services ❇️ customs clearance of goods ❇️ More HERE!'
            }
        }
    };
    updateLanguageContent(selectedLanguage, pageConfig);
});
