document.addEventListener('DOMContentLoaded', function () {
    let selectedLanguage = localStorage.getItem('selectedLanguage')
    updateLanguageContent(selectedLanguage);
})

function updateLanguageContent(selectedLanguage) {
    if (selectedLanguage == "ukrainian") {
        document.title = "Перевезення вантажів до Литви. Доставка з Литви"

        document.querySelector('meta[property="og:description"]').setAttribute(
            'content',
            'Перевезення вантажів до Литви ❇️ Доставка з Литви ❇️ транспортна компанія AS-Trans ❇️ митно-брокерські послуги ❇️ Детальніше ТУТ!'
        )

        document.querySelector('meta[name="keywords"]').setAttribute(
            'content',
            'логистика, логістика, AS-Trans, АС-Транс, ас транс, Ас транс, As trans, транспорт, перевезення, перевозки, услуги, послуги, брокер, митне оформлення, таможенное оформление, транспортна компанія, транспортная компания'
        )

        document.querySelector('meta[property="og:title"]').setAttribute(
            'content',
            'Перевезення вантажів до Литви. Доставка з Литви'
        )

        document.querySelector('meta[name="twitter:title"]').setAttribute(
            'content',
            'Перевезення вантажів до Литви. Доставка з Литви'
        )

        document.querySelector('meta[name="twitter:description"]').setAttribute(
            'content',
            'Перевезення вантажів до Литви ❇️ Доставка з Литви ❇️ транспортна компанія AS-Trans ❇️ митно-брокерські послуги ❇️ Детальніше ТУТ!'
        )
    } else if (selectedLanguage == "american") {
        document.title = "Transportation of goods to Lithuania. Delivery from Lithuania"

        document.querySelector('meta[property="og:description"]').setAttribute(
            'content',
            'Cargo transportation to Lithuania ❇️ Delivery from Lithuania ❇️ AS-Trans transport company ❇️ customs brokerage services ❇️ More HERE!'
        )

        document.querySelector('meta[name="description"]').setAttribute(
            'content',
            'Cargo transportation to Lithuania ❇️ Delivery from Lithuania ❇️ AS-Trans transport company ❇️ customs brokerage services ❇️ More HERE!'
        )

        document.querySelector('meta[name="keywords"]').setAttribute(
            'content',
            'logistics, AS-Trans, AS trans, As trans, transport, transportation, services, broker, customs clearance, transport company'
        )

        document.querySelector('meta[property="og:title"]').setAttribute(
            'content',
            'Transportation of goods to Lithuania. Delivery from Lithuania'
        )

        document.querySelector('meta[name="twitter:title"]').setAttribute(
            'content',
            'Transportation of goods to Lithuania. Delivery from Lithuania'
        )

        document.querySelector('meta[name="twitter:description"]').setAttribute(
            'content',
            'Cargo transportation to Lithuania ❇️ Delivery from Lithuania ❇️ AS-Trans transport company ❇️ customs brokerage services ❇️ More HERE!'
        )
    }
}
