document.addEventListener('DOMContentLoaded', function () {
    let selectedLanguage = localStorage.getItem('selectedLanguage')
    updateLanguageContent(selectedLanguage);
})

function updateLanguageContent(selectedLanguage) {
    if (selectedLanguage == "ukrainian") {
        document.title = "Митне оформлення вантажів, товарів у Києві - з України, Китаю"

        document.querySelector('meta[property="og:description"]').setAttribute(
            'content',
            'Митне оформлення вантажів, товарів у Києві ❇️ з України, Китаю ❇️ митно-брокерські послуги ❇️ митне оформлення товарів ❇️ Детальніше ТУТ!'
        )

        document.querySelector('meta[name="keywords"]').setAttribute(
            'content',
            'логистика, логістика, AS-Trans, АС-Транс, ас транс, Ас транс, As trans, транспорт, перевезення, перевозки, услуги, послуги, брокер, митне оформлення, таможенное оформление, транспортна компанія, транспортная компания'
        )

        document.querySelector('meta[property="og:title"]').setAttribute(
            'content',
            'Митне оформлення вантажів, товарів у Києві - з України, Китаю'
        )

        document.querySelector('meta[name="twitter:title"]').setAttribute(
            'content',
            'Митне оформлення вантажів, товарів у Києві - з України, Китаю'
        )

        document.querySelector('meta[name="twitter:description"]').setAttribute(
            'content',
            'Митне оформлення вантажів, товарів у Києві ❇️ з України, Китаю ❇️ митно-брокерські послуги ❇️ митне оформлення товарів ❇️ Детальніше ТУТ!'
        )
    } else if (selectedLanguage == "american") {
        document.title = "International customs clearance services Ukraine - agent, broker, fees"

        document.querySelector('meta[property="og:description"]').setAttribute(
            'content',
            'International customs clearance services Ukraine ❇️ customs brokerage services ❇️ customs clearance of goods ❇️ More HERE!'
        )

        document.querySelector('meta[name="description"]').setAttribute(
            'content',
            'International customs clearance services Ukraine ❇️ customs brokerage services ❇️ customs clearance of goods ❇️ More HERE!'
        )

        document.querySelector('meta[name="keywords"]').setAttribute(
            'content',
            'logistics, AS-Trans, AS trans, As trans, transport, transportation, services, broker, customs clearance, transport company'
        )

        document.querySelector('meta[property="og:title"]').setAttribute(
            'content',
            'International customs clearance services Ukraine - agent, broker, fees'
        )

        document.querySelector('meta[name="twitter:title"]').setAttribute(
            'content',
            'International customs clearance services Ukraine - agent, broker, fees'
        )

        document.querySelector('meta[name="twitter:description"]').setAttribute(
            'content',
            'International customs clearance services Ukraine ❇️ customs brokerage services ❇️ customs clearance of goods ❇️ More HERE!'
        )
    }
}
