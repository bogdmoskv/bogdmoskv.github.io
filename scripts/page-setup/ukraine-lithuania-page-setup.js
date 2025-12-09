import { getSelectedLanguage, updateLanguageContent } from '../utils/language-manager.js';

document.addEventListener('DOMContentLoaded', function () {
    const selectedLanguage = getSelectedLanguage();
    const pageConfig = {
        ukrainian: {
            meta: {
                title: "Перевезення вантажів до Литви. Доставка з Литви",
                ogDescription: 'Перевезення вантажів до Литви ❇️ Доставка з Литви ❇️ транспортна компанія AS-Trans ❇️ митно-брокерські послуги ❇️ Детальніше ТУТ!',
                keywords: 'логистика, логістика, AS-Trans, АС-Транс, ас транс, Ас транс, As trans, транспорт, перевезення, перевозки, услуги, послуги, брокер, митне оформлення, таможенное оформление, транспортна компанія, транспортная компания',
                ogTitle: 'Перевезення вантажів до Литви. Доставка з Литви',
                twitterTitle: 'Перевезення вантажів до Литви. Доставка з Литви',
                twitterDescription: 'Перевезення вантажів до Литви ❇️ Доставка з Литви ❇️ транспортна компанія AS-Trans ❇️ митно-брокерські послуги ❇️ Детальніше ТУТ!'
            }
        },
        american: {
            meta: {
                title: "Transportation of goods to Lithuania. Delivery from Lithuania",
                ogDescription: 'Cargo transportation to Lithuania ❇️ Delivery from Lithuania ❇️ AS-Trans transport company ❇️ customs brokerage services ❇️ More HERE!',
                description: 'Cargo transportation to Lithuania ❇️ Delivery from Lithuania ❇️ AS-Trans transport company ❇️ customs brokerage services ❇️ More HERE!',
                keywords: 'logistics, AS-Trans, AS trans, As trans, transport, transportation, services, broker, customs clearance, transport company',
                ogTitle: 'Transportation of goods to Lithuania. Delivery from Lithuania',
                twitterTitle: 'Transportation of goods to Lithuania. Delivery from Lithuania',
                twitterDescription: 'Cargo transportation to Lithuania ❇️ Delivery from Lithuania ❇️ AS-Trans transport company ❇️ customs brokerage services ❇️ More HERE!'
            }
        }
    };
    updateLanguageContent(selectedLanguage, pageConfig);
});
