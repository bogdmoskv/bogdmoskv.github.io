import { getSelectedLanguage, updateLanguageContent } from '../utils/language-manager.js';

document.addEventListener('DOMContentLoaded', function () {
    const selectedLanguage = getSelectedLanguage();
    const pageConfig = {
        ukrainian: {
            meta: {
                title: "Доставка вантажів з Китаю в Україну",
                ogDescription: 'Вантажоперевезення в Китай ❇️ Доставка з Китаю ❇️ Транспортна компанія АС-Транс ❇️ Послуги митного брокера ❇️ Детальніше ТУТ!',
                keywords: 'логистика, логістика, AS-Trans, АС-Транс, ас транс, Ас транс, As trans, транспорт, перевезення, перевозки, услуги, послуги, брокер, митне оформлення, таможенное оформление, транспортна компанія, транспортная компания',
                ogTitle: 'Доставка вантажів з Китаю в Україну',
                twitterTitle: 'Доставка вантажів з Китаю в Україну',
                twitterDescription: 'Вантажоперевезення в Китай ❇️ Доставка з Китаю ❇️ Транспортна компанія АС-Транс ❇️ Послуги митного брокера ❇️ Детальніше ТУТ!'
            }
        },
        american: {
            meta: {
                title: "Delivery of goods from China to Ukraine - Transportation China-Ukraine",
                ogDescription: 'Cargo transportation to China ❇️ Delivery from China ❇️ AS-Trans transport company ❇️ customs brokerage services ❇️ More HERE!',
                description: 'Cargo transportation to China ❇️ Delivery from China ❇️ AS-Trans transport company ❇️ customs brokerage services ❇️ More HERE!',
                keywords: 'logistics, AS-Trans, AS trans, As trans, transport, transportation, services, broker, customs clearance, transport company',
                ogTitle: 'Delivery of goods from China to Ukraine - Transportation China-Ukraine',
                twitterTitle: 'Delivery of goods from China to Ukraine - Transportation China-Ukraine',
                twitterDescription: 'Cargo transportation to China ❇️ Delivery from China ❇️ AS-Trans transport company ❇️ customs brokerage services ❇️ More HERE!'
            }
        }
    };
    updateLanguageContent(selectedLanguage, pageConfig);
});
