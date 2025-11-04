document.addEventListener('DOMContentLoaded', function () {
    let selectedLanguage = localStorage.getItem('selectedLanguage')
    updateLanguageContent(selectedLanguage);
})

function updateLanguageContent(selectedLanguage) {
    if (selectedLanguage == "ukrainian") {
        document.title = "Доставка вантажів з Китаю в Україну"

        document.querySelector('meta[property="og:description"]').setAttribute(
            'content',
            'Вантажоперевезення в Китай ❇️ Доставка з Китаю ❇️ Транспортна компанія АС-Транс ❇️ Послуги митного брокера ❇️ Детальніше ТУТ!'
        )

        document.querySelector('meta[name="keywords"]').setAttribute(
            'content',
            'логистика, логістика, AS-Trans, АС-Транс, ас транс, Ас транс, As trans, транспорт, перевезення, перевозки, услуги, послуги, брокер, митне оформлення, таможенное оформление, транспортна компанія, транспортная компания'
        )

        document.querySelector('meta[property="og:title"]').setAttribute(
            'content',
            'Доставка вантажів з Китаю в Україну'
        )

        document.querySelector('meta[name="twitter:title"]').setAttribute(
            'content',
            'Доставка вантажів з Китаю в Україну'
        )

        document.querySelector('meta[name="twitter:description"]').setAttribute(
            'content',
            'Вантажоперевезення в Китай ❇️ Доставка з Китаю ❇️ Транспортна компанія АС-Транс ❇️ Послуги митного брокера ❇️ Детальніше ТУТ!'
        )
    } else if (selectedLanguage == "american") {
        document.title = "Delivery of goods from China to Ukraine - Transportation China-Ukraine"

        document.querySelector('meta[property="og:description"]').setAttribute(
            'content',
            'Cargo transportation to China ❇️ Delivery from China ❇️ AS-Trans transport company ❇️ customs brokerage services ❇️ More HERE!'
        )

        document.querySelector('meta[name="description"]').setAttribute(
            'content',
            'Cargo transportation to China ❇️ Delivery from China ❇️ AS-Trans transport company ❇️ customs brokerage services ❇️ More HERE!'
        )

        document.querySelector('meta[name="keywords"]').setAttribute(
            'content',
            'logistics, AS-Trans, AS trans, As trans, transport, transportation, services, broker, customs clearance, transport company'
        )

        document.querySelector('meta[property="og:title"]').setAttribute(
            'content',
            'Delivery of goods from China to Ukraine - Transportation China-Ukraine'
        )

        document.querySelector('meta[name="twitter:title"]').setAttribute(
            'content',
            'Delivery of goods from China to Ukraine - Transportation China-Ukraine'
        )

        document.querySelector('meta[name="twitter:description"]').setAttribute(
            'content',
            'Cargo transportation to China ❇️ Delivery from China ❇️ AS-Trans transport company ❇️ customs brokerage services ❇️ More HERE!'
        )
    }
}
