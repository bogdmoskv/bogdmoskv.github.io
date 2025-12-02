import { getSelectedLanguage, updateLanguageContent } from '../utils/language-manager.js';

document.addEventListener('DOMContentLoaded', function () {
    const selectedLanguage = getSelectedLanguage();
    const pageConfig = {
        ukrainian: {
            meta: {
                title: "Перевезення вантажів до Естонії. Доставка з Естонії",
                ogDescription: 'Перевезення вантажів до Естонії ❇️ Доставка з Естонії ❇️ транспортна компанія AS-Trans ❇️ митно-брокерські послуги ❇️ Детальніше ТУТ!',
                keywords: 'логистика, логістика, AS-Trans, АС-Транс, ас транс, Ас транс, As trans, транспорт, перевезення, перевозки, услуги, послуги, брокер, митне оформлення, таможенное оформление, транспортна компанія, транспортная компания',
                ogTitle: 'Перевезення вантажів до Естонії. Доставка з Естонії',
                twitterTitle: 'Перевезення вантажів до Естонії. Доставка з Естонії',
                twitterDescription: 'Перевезення вантажів до Естонії ❇️ Доставка з Естонії ❇️ транспортна компанія AS-Trans ❇️ митно-брокерські послуги ❇️ Детальніше ТУТ!'
            }
        },
        american: {
            meta: {
                title: "Transportation of goods to Estonia. Delivery from Estonia",
                ogDescription: 'Cargo transportation to Estonia ❇️ Delivery from Estonia ❇️ AS-Trans transport company ❇️ customs brokerage services ❇️ More HERE!',
                description: 'Cargo transportation to Estonia ❇️ Delivery from Estonia ❇️ AS-Trans transport company ❇️ customs brokerage services ❇️ More HERE!',
                keywords: 'logistics, AS-Trans, AS trans, As trans, transport, transportation, services, broker, customs clearance, transport company',
                ogTitle: 'Transportation of goods to Estonia. Delivery from Estonia',
                twitterTitle: 'Transportation of goods to Estonia. Delivery from Estonia',
                twitterDescription: 'Cargo transportation to Estonia ❇️ Delivery from Estonia ❇️ AS-Trans transport company ❇️ customs brokerage services ❇️ More HERE!'
            }
        }
    };
    updateLanguageContent(selectedLanguage, pageConfig);
});
