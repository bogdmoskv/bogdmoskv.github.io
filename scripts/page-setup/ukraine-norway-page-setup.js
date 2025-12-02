import { getSelectedLanguage, updateLanguageContent } from '../utils/language-manager.js';

document.addEventListener('DOMContentLoaded', function () {
    const selectedLanguage = getSelectedLanguage();
    const pageConfig = {
        ukrainian: {
            meta: {
                title: "Перевезення вантажів до Норвегії. Доставка з Норвегії",
                ogDescription: 'Вантажоперевезення до Норвегії ❇️ Доставка з Норвегії ❇️ Транспортна компанія AS-Trans ❇️ Послуги митного брокерства ❇️ Детальніше ТУТ!',
                keywords: 'логистика, логістика, AS-Trans, АС-Транс, ас транс, Ас транс, As trans, транспорт, перевезення, перевозки, услуги, послуги, брокер, митне оформлення, таможенное оформление, транспортна компанія, транспортная компания',
                ogTitle: 'Перевезення вантажів до Норвегії. Доставка з Норвегії',
                twitterTitle: 'Перевезення вантажів до Норвегії. Доставка з Норвегії',
                twitterDescription: 'Вантажоперевезення до Норвегії ❇️ Доставка з Норвегії ❇️ Транспортна компанія AS-Trans ❇️ Послуги митного брокерства ❇️ Детальніше ТУТ!'
            }
        },
        american: {
            meta: {
                title: "Transportation of goods to Norway. Delivery from Norway",
                ogDescription: 'Cargo transportation to Norway ❇️ Delivery from Norway ❇️ AS-Trans transport company ❇️ customs brokerage services ❇️ More HERE!',
                description: 'Cargo transportation to Norway ❇️ Delivery from Norway ❇️ AS-Trans transport company ❇️ customs brokerage services ❇️ More HERE!',
                keywords: 'logistics, AS-Trans, AS trans, As trans, transport, transportation, services, broker, customs clearance, transport company',
                ogTitle: 'Transportation of goods to Norway. Delivery from Norway',
                twitterTitle: 'Transportation of goods to Norway. Delivery from Norway',
                twitterDescription: 'Cargo transportation to Norway ❇️ Delivery from Norway ❇️ AS-Trans transport company ❇️ customs brokerage services ❇️ More HERE!'
            }
        }
    };
    updateLanguageContent(selectedLanguage, pageConfig);
});
