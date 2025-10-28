document.addEventListener('DOMContentLoaded', function () {
    let selectedLanguage = localStorage.getItem('selectedLanguage')
    updateLanguageContent(selectedLanguage);
})

function updateLanguageContent(selectedLanguage) {
    if (selectedLanguage == "ukrainian") {
        document.title = "Про компанію AS-Trans"

        document.querySelector('meta[property="og:description"]').setAttribute(
            'content',
            'Про компанію AS-Trans ❇️ митно-брокерські послуги ❇️ митне оформлення вантажів ❇️ Детальніше ТУТ!'
        )

        document.querySelector('meta[name="keywords"]').setAttribute(
            'content',
            'логистика, логістика, AS-Trans, АС-Транс, ас транс, Ас транс, As trans, транспорт, перевезення, перевозки, услуги, послуги, брокер, митне оформлення, таможенное оформление, транспортна компанія, транспортная компания'
        )

        document.querySelector('meta[property="og:title"]').setAttribute(
            'content',
            'Про компанію AS-Trans'
        )

        document.querySelector('meta[name="twitter:title"]').setAttribute(
            'content',
            'Про компанію AS-Trans'
        )

        document.querySelector('meta[name="twitter:description"]').setAttribute(
            'content',
            'Про компанію AS-Trans ❇️ митно-брокерські послуги ❇️ митне оформлення вантажів ❇️ Детальніше ТУТ!'
        )
    } else if (selectedLanguage == "american") {
        document.title = "About AS-Trans"

        document.querySelector('meta[property="og:description"]').setAttribute(
            'content',
            'About AS-Trans ❇️ customs brokerage services ❇️ customs clearance of goods ❇️ More HERE!'
        )

        document.querySelector('meta[name="description"]').setAttribute(
            'content',
            'About AS-Trans ❇️ customs brokerage services ❇️ customs clearance of goods ❇️ More HERE!'
        )

        document.querySelector('meta[name="keywords"]').setAttribute(
            'content',
            'logistics, AS-Trans, AS trans, As trans, transport, transportation, services, broker, customs clearance, transport company'
        )

        document.querySelector('meta[property="og:title"]').setAttribute(
            'content',
            'About AS-Trans'
        )

        document.querySelector('meta[name="twitter:title"]').setAttribute(
            'content',
            'About AS-Trans'
        )

        document.querySelector('meta[name="twitter:description"]').setAttribute(
            'content',
            'About AS-Trans ❇️ customs brokerage services ❇️ customs clearance of goods ❇️ More HERE!'
        )
    }
}
