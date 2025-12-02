import { getSelectedLanguage, updateLanguageContent } from '../utils/language-manager.js';

document.addEventListener('DOMContentLoaded', function () {
    const selectedLanguage = getSelectedLanguage();
    const pageConfig = {
        ukrainian: {
            meta: {
                title: "Перевезення вантажів до Фінляндії. Доставка з Фінляндії",
                ogDescription: 'Перевезення вантажів до Фінляндії ❇️ Доставка з Фінляндії ❇️ транспортна компанія AS-Trans ❇️ митно-брокерські послуги ❇️ Детальніше ТУТ!',
                keywords: 'логистика, логістика, AS-Trans, АС-Транс, ас транс, Ас транс, As trans, транспорт, перевезення, перевозки, услуги, послуги, брокер, митне оформлення, таможенное оформление, транспортна компанія, транспортная компания',
                ogTitle: 'Перевезення вантажів до Фінляндії. Доставка з Фінляндії',
                twitterTitle: 'Перевезення вантажів до Фінляндії. Доставка з Фінляндії',
                twitterDescription: 'Перевезення вантажів до Фінляндії ❇️ Доставка з Фінляндії ❇️ транспортна компанія AS-Trans ❇️ митно-брокерські послуги ❇️ Детальніше ТУТ!'
            }
        },
        american: {
            meta: {
                title: "Transportation of goods to Finland. Delivery from Finland",
                ogDescription: 'Cargo transportation to Finland ❇️ Delivery from Finland ❇️ AS-Trans transport company ❇️ customs brokerage services ❇️ More HERE!',
                description: 'Cargo transportation to Finland ❇️ Delivery from Finland ❇️ AS-Trans transport company ❇️ customs brokerage services ❇️ More HERE!',
                keywords: 'logistics, AS-Trans, AS trans, As trans, transport, transportation, services, broker, customs clearance, transport company',
                ogTitle: 'Transportation of goods to Finland. Delivery from Finland',
                twitterTitle: 'Transportation of goods to Finland. Delivery from Finland',
                twitterDescription: 'Cargo transportation to Finland ❇️ Delivery from Finland ❇️ AS-Trans transport company ❇️ customs brokerage services ❇️ More HERE!'
            }
        }
    };
    updateLanguageContent(selectedLanguage, pageConfig);
});
