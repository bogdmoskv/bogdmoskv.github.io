import { getSelectedLanguage, updateLanguageContent } from '../utils/language-manager.js';

document.addEventListener('DOMContentLoaded', function () {
    const selectedLanguage = getSelectedLanguage();
    const pageConfig = {
        ukrainian: {
            meta: {
                title: "Перевезення вантажів до Швеції. Доставка зі Швеції",
                ogDescription: 'Вантажоперевезення в Швецію ❇️ Доставка зі Швеції ❇️ Транспортна компанія AS-Trans ❇️ Послуги митного брокера ❇️ Детальніше ТУТ!',
                keywords: 'логистика, логістика, AS-Trans, АС-Транс, ас транс, Ас транс, As trans, транспорт, перевезення, перевозки, услуги, послуги, брокер, митне оформлення, таможенное оформление, транспортна компанія, транспортная компания',
                ogTitle: 'Перевезення вантажів до Швеції. Доставка зі Швеції',
                twitterTitle: 'Перевезення вантажів до Швеції. Доставка зі Швеції',
                twitterDescription: 'Вантажоперевезення в Швецію ❇️ Доставка зі Швеції ❇️ Транспортна компанія AS-Trans ❇️ Послуги митного брокера ❇️ Детальніше ТУТ!'
            }
        },
        american: {
            meta: {
                title: "Transportation of goods to Sweden. Delivery from Sweden",
                ogDescription: 'Cargo transportation to Sweden ❇️ Delivery from Sweden ❇️ AS-Trans transport company ❇️ customs brokerage services ❇️ More HERE!',
                description: 'Cargo transportation to Sweden ❇️ Delivery from Sweden ❇️ AS-Trans transport company ❇️ customs brokerage services ❇️ More HERE!',
                keywords: 'logistics, AS-Trans, AS trans, As trans, transport, transportation, services, broker, customs clearance, transport company',
                ogTitle: 'Transportation of goods to Sweden. Delivery from Sweden',
                twitterTitle: 'Transportation of goods to Sweden. Delivery from Sweden',
                twitterDescription: 'Cargo transportation to Sweden ❇️ Delivery from Sweden ❇️ AS-Trans transport company ❇️ customs brokerage services ❇️ More HERE!'
            }
        }
    };
    updateLanguageContent(selectedLanguage, pageConfig);
});
