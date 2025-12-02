import { getSelectedLanguage, updateLanguageContent } from '../utils/language-manager.js';

document.addEventListener('DOMContentLoaded', function () {
    const selectedLanguage = getSelectedLanguage();
    const pageConfig = {
        ukrainian: {
            meta: {
                title: "Транспортно-експедиторські послуги Київ, Україна - послуги експедитора, ціна",
                ogDescription: 'Послуги міжнародного експедитора AS-Trans ❇️ митно-брокерські послуги ❇️ митне оформлення вантажів ❇️ Детальніше ТУТ!',
                keywords: 'логистика, логістика, AS-Trans, АС-Транс, ас транс, Ас транс, As trans, транспорт, перевезення, перевозки, услуги, послуги, брокер, митне оформлення, таможенное оформление, транспортна компанія, транспортная компания',
                ogTitle: 'Транспортно-експедиторські послуги Київ, Україна - послуги експедитора, ціна',
                twitterTitle: 'Транспортно-експедиторські послуги Київ, Україна - послуги експедитора, ціна',
                twitterDescription: 'Послуги міжнародного експедитора AS-Trans ❇️ митно-брокерські послуги ❇️ митне оформлення вантажів ❇️ Детальніше ТУТ!'
            }
        },
        american: {
            meta: {
                title: "Freight forwarding services Kyiv, Ukraine - cargo global, sea, air",
                ogDescription: 'Freight forwarding services Kyiv, Ukraine ❇️ customs brokerage services ❇️ customs clearance of goods ❇️ More HERE!',
                description: 'Freight forwarding services Kyiv, Ukraine ❇️ customs brokerage services ❇️ customs clearance of goods ❇️ More HERE!',
                keywords: 'logistics, AS-Trans, AS trans, As trans, transport, transportation, services, broker, customs clearance, transport company',
                ogTitle: 'Freight forwarding services Kyiv, Ukraine - cargo global, sea, air',
                twitterTitle: 'Freight forwarding services Kyiv, Ukraine - cargo global, sea, air',
                twitterDescription: 'Freight forwarding services Kyiv, Ukraine ❇️ customs brokerage services ❇️ customs clearance of goods ❇️ More HERE!'
            }
        }
    };
    updateLanguageContent(selectedLanguage, pageConfig);
});
