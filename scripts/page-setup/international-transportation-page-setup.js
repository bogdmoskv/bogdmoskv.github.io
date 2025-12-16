import { setupPageMeta } from './page-meta-setup.js';

// Для international-transportation используем fallback, так как переводы отсутствуют в i18n
setupPageMeta(null, {
    ukrainian: {
        meta: {
            title: "Міжнародні перевезення вантажів із Києва, Україна — морським, автомобільним та вантажним транспортом",
            ogDescription: 'Послуги міжнародного експедитора AS-Trans ❇️ митно-брокерські послуги ❇️ митне оформлення вантажів ❇️ Детальніше ТУТ!',
            keywords: 'логистика, логістика, AS-Trans, АС-Транс, ас транс, Ас транс, As trans, транспорт, перевезення, перевозки, услуги, послуги, брокер, митне оформлення, таможенное оформление, транспортна компанія, транспортная компания',
            ogTitle: 'Міжнародні перевезення вантажів із Києва, Україна — морським, автомобільним та вантажним транспортом',
            twitterTitle: 'Міжнародні перевезення вантажів із Києва, Україна — морським, автомобільним та вантажним транспортом',
            twitterDescription: 'Послуги міжнародного експедитора AS-Trans ❇️ митно-брокерські послуги ❇️ митне оформлення вантажів ❇️ Детальніше ТУТ!'
        }
    },
    american: {
        meta: {
            title: "International cargo transportation service Kyiv, Ukraine - ocean, vehicle, freight",
            ogDescription: 'International cargo transportation service Kyiv, Ukraine ❇️ customs brokerage services ❇️ customs clearance of goods ❇️ More details HERE!',
            description: 'International cargo transportation service Kyiv, Ukraine ❇️ customs brokerage services ❇️ customs clearance of goods ❇️ More details HERE!',
            keywords: 'logistics, AS-Trans, AS trans, As trans, transport, transportation, services, broker, customs clearance, transport company',
            ogTitle: 'International cargo transportation service Kyiv, Ukraine - ocean, vehicle, freight',
            twitterTitle: 'International cargo transportation service Kyiv, Ukraine - ocean, vehicle, freight',
            twitterDescription: 'International cargo transportation service Kyiv, Ukraine ❇️ customs brokerage services ❇️ customs clearance of goods ❇️ More details HERE!'
        }
    }
});
