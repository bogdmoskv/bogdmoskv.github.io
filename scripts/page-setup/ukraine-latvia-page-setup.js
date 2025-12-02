import { getSelectedLanguage, updateLanguageContent } from '../utils/language-manager.js';

document.addEventListener('DOMContentLoaded', function () {
    const selectedLanguage = getSelectedLanguage();
    const pageConfig = {
        ukrainian: {
            meta: {
                title: "Перевезення вантажів до Латвії. Доставка з Латвії",
                ogDescription: 'Перевезення вантажів до Латвії ❇️ Доставка з Латвії ❇️ транспортна компанія AS-Trans ❇️ митно-брокерські послуги ❇️ Детальніше ТУТ!',
                keywords: 'логистика, логістика, AS-Trans, АС-Транс, ас транс, Ас транс, As trans, транспорт, перевезення, перевозки, услуги, послуги, брокер, митне оформлення, таможенное оформление, транспортна компанія, транспортная компания',
                ogTitle: 'Перевезення вантажів до Латвії. Доставка з Латвії',
                twitterTitle: 'Перевезення вантажів до Латвії. Доставка з Латвії',
                twitterDescription: 'Перевезення вантажів до Латвії ❇️ Доставка з Латвії ❇️ транспортна компанія AS-Trans ❇️ митно-брокерські послуги ❇️ Детальніше ТУТ!'
            }
        },
        american: {
            meta: {
                title: "Transportation of goods to Latvia. Delivery from Latvia",
                ogDescription: 'Transportation of goods to Latvia ❇️ Delivery from Latvia ❇️ transport company AS-Trans ❇️ customs brokerage services ❇️ More HERE!',
                description: 'Transportation of goods to Latvia ❇️ Delivery from Latvia ❇️ transport company AS-Trans ❇️ customs brokerage services ❇️ More HERE!',
                keywords: 'logistics, AS-Trans, AS trans, As trans, transport, transportation, services, broker, customs clearance, transport company',
                ogTitle: 'Transportation of goods to Latvia. Delivery from Latvia',
                twitterTitle: 'Transportation of goods to Latvia. Delivery from Latvia',
                twitterDescription: 'Transportation of goods to Latvia ❇️ Delivery from Latvia ❇️ transport company AS-Trans ❇️ customs brokerage services ❇️ More HERE!'
            }
        }
    };
    updateLanguageContent(selectedLanguage, pageConfig);
});
