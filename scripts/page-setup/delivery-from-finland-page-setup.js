document.addEventListener('DOMContentLoaded', function () {
    let selectedLanguage = localStorage.getItem('selectedLanguage')
    updateLanguageContent(selectedLanguage);
})

function updateLanguageContent(selectedLanguage) {
    if (selectedLanguage == "ukrainian") {
        document.title = "Перевезення з Фінляндії в Молдову, Румунію, Болгарію, Туреччину"

        document.querySelector('meta[property="og:description"]').setAttribute(
            'content',
            'Перевезення з Фінляндії в Молдову, Румунію, Болгарію, Туреччину ❇️ транспортна компанія AS-Trans ❇️ Послуги митного брокера ❇️ Детальніше ТУТ!'
        )

        document.querySelector('meta[name="keywords"]').setAttribute(
            'content',
            'логістика, логістика, AS-Trans, АС-Транс, ас транс, Ас транс, As trans, транспорт, перевезення, перевозки, услуги, послуги, брокер, митне оформлення, таможенное оформление, транспортна компанія, транспортная компания'
        )

        document.querySelector('meta[property="og:title"]').setAttribute(
            'content',
            'Перевезення з Фінляндії в Молдову, Румунію, Болгарію, Туреччину'
        )

        document.querySelector('meta[name="twitter:title"]').setAttribute(
            'content',
            'Перевезення з Фінляндії в Молдову, Румунію, Болгарію, Туреччину'
        )

        document.querySelector('meta[name="twitter:description"]').setAttribute(
            'content',
            'Перевезення з Фінляндії в Молдову, Румунію, Болгарію, Туреччину ❇️ транспортна компанія AS-Trans ❇️ Послуги митного брокера ❇️ Детальніше ТУТ!'
        )
    } else if (selectedLanguage == "american") {
        document.title = "Transportation from Finland to Moldova, Romania, Bulgaria, Turkey"

        document.querySelector('meta[property="og:description"]').setAttribute(
            'content',
            'Transportation from Finland to Moldova, Romania, Bulgaria, Turkey ❇️ transport company AS-Trans ❇️ customs brokerage services ❇️ More HERE!'
        )

        document.querySelector('meta[name="description"]').setAttribute(
            'content',
            'Transportation from Finland to Moldova, Romania, Bulgaria, Turkey ❇️ transport company AS-Trans ❇️ customs brokerage services ❇️ More HERE!'
        )

        document.querySelector('meta[name="keywords"]').setAttribute(
            'content',
            'logistics, AS-Trans, AS trans, As trans, transport, transportation, services, broker, customs clearance, transport company'
        )

        document.querySelector('meta[property="og:title"]').setAttribute(
            'content',
            'Transportation from Finland to Moldova, Romania, Bulgaria, Turkey'
        )

        document.querySelector('meta[name="twitter:title"]').setAttribute(
            'content',
            'Transportation from Finland to Moldova, Romania, Bulgaria, Turkey'
        )

        document.querySelector('meta[name="twitter:description"]').setAttribute(
            'content',
            'Transportation from Finland to Moldova, Romania, Bulgaria, Turkey ❇️ transport company AS-Trans ❇️ customs brokerage services ❇️ More HERE!'
        )
    }
}
