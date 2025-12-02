import { getSelectedLanguage, updateLanguageContent } from '../utils/language-manager.js';

document.addEventListener('DOMContentLoaded', function () {
    const selectedLanguage = getSelectedLanguage();
    const pageConfig = {
        ukrainian: {
            meta: {
                title: "Перевезення з Фінляндії в Молдову, Румунію, Болгарію, Туреччину",
                ogDescription: 'Перевезення з Фінляндії в Молдову, Румунію, Болгарію, Туреччину ❇️ транспортна компанія AS-Trans ❇️ Послуги митного брокера ❇️ Детальніше ТУТ!',
                keywords: 'логістика, логістика, AS-Trans, АС-Транс, ас транс, Ас транс, As trans, транспорт, перевезення, перевозки, услуги, послуги, брокер, митне оформлення, таможенное оформление, транспортна компанія, транспортная компания',
                ogTitle: 'Перевезення з Фінляндії в Молдову, Румунію, Болгарію, Туреччину',
                twitterTitle: 'Перевезення з Фінляндії в Молдову, Румунію, Болгарію, Туреччину',
                twitterDescription: 'Перевезення з Фінляндії в Молдову, Румунію, Болгарію, Туреччину ❇️ транспортна компанія AS-Trans ❇️ Послуги митного брокера ❇️ Детальніше ТУТ!'
            }
        },
        american: {
            meta: {
                title: "Transportation from Finland to Moldova, Romania, Bulgaria, Turkey",
                ogDescription: 'Transportation from Finland to Moldova, Romania, Bulgaria, Turkey ❇️ transport company AS-Trans ❇️ customs brokerage services ❇️ More HERE!',
                description: 'Transportation from Finland to Moldova, Romania, Bulgaria, Turkey ❇️ transport company AS-Trans ❇️ customs brokerage services ❇️ More HERE!',
                keywords: 'logistics, AS-Trans, AS trans, As trans, transport, transportation, services, broker, customs clearance, transport company',
                ogTitle: 'Transportation from Finland to Moldova, Romania, Bulgaria, Turkey',
                twitterTitle: 'Transportation from Finland to Moldova, Romania, Bulgaria, Turkey',
                twitterDescription: 'Transportation from Finland to Moldova, Romania, Bulgaria, Turkey ❇️ transport company AS-Trans ❇️ customs brokerage services ❇️ More HERE!'
            }
        }
    };
    updateLanguageContent(selectedLanguage, pageConfig);
});
