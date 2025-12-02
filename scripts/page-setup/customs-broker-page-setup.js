import { getSelectedLanguage, updateLanguageContent } from '../utils/language-manager.js';

document.addEventListener('DOMContentLoaded', function () {
    const selectedLanguage = getSelectedLanguage();
    const pageConfig = {
        ukrainian: {
            meta: {
                title: "Митний брокер для юридичних осіб Київ, Україна - консультація, Польща, Болгарія",
                ogDescription: 'Митний брокер для юридичних осіб у Києві ❇️ консультація ❇️ представник ❇️ вартість послуги ❇️ польша ❇️ болгарія ❇️ Детальніше ТУТ!',
                keywords: 'логистика, логістика, AS-Trans, АС-Транс, ас транс, Ас транс, As trans, транспорт, перевезення, перевозки, услуги, послуги, брокер, митне оформлення, таможенное оформление, транспортна компанія, транспортная компания',
                ogTitle: 'Митний брокер для юридичних осіб Київ, Україна - консультація, Польща, Болгарія',
                twitterTitle: 'Митний брокер для юридичних осіб Київ, Україна - консультація, Польща, Болгарія',
                twitterDescription: 'Митний брокер для юридичних осіб у Києві ❇️ консультація ❇️ представник ❇️ вартість послуги ❇️ польша ❇️ болгарія ❇️ Детальніше ТУТ!'
            }
        },
        american: {
            meta: {
                title: "Customs broker for legal entities Kyiv, Ukraine - consultation, Poland, Bulgaria",
                ogDescription: 'Customs broker for legal entities in Kyiv ❇️ consultation ❇️ representative ❇️ service cost ❇️ poland ❇️ bulgaria ❇️ More details HERE!',
                description: 'Customs broker for legal entities in Kyiv ❇️ consultation ❇️ representative ❇️ service cost ❇️ poland ❇️ bulgaria ❇️ More details HERE!',
                keywords: 'logistics, AS-Trans, AS trans, As trans, transport, transportation, services, broker, customs clearance, transport company',
                ogTitle: 'Customs broker for legal entities Kyiv, Ukraine - consultation, Poland, Bulgaria',
                twitterTitle: 'Customs broker for legal entities Kyiv, Ukraine - consultation, Poland, Bulgaria',
                twitterDescription: 'Customs broker for legal entities in Kyiv ❇️ consultation ❇️ representative ❇️ service cost ❇️ poland ❇️ bulgaria ❇️ More details HERE!'
            }
        }
    };
    updateLanguageContent(selectedLanguage, pageConfig);
});
