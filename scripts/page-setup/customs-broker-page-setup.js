document.addEventListener('DOMContentLoaded', function () {
    let selectedLanguage = localStorage.getItem('selectedLanguage')
    updateLanguageContent(selectedLanguage);
})

function updateLanguageContent(selectedLanguage) {
    if (selectedLanguage == "ukrainian") {
        document.title = "Митний брокер для юридичних осіб Київ, Україна - консультація, Польща, Болгарія"

        document.querySelector('meta[property="og:description"]').setAttribute(
            'content',
            'Митний брокер для юридичних осіб у Києві ❇️ консультація ❇️ представник ❇️ вартість послуги ❇️ польша ❇️ болгарія ❇️ Детальніше ТУТ!'
        )

        document.querySelector('meta[name="keywords"').setAttribute(
            'content',
            'логистика, логістика, AS-Trans, АС-Транс, ас транс, Ас транс, As trans, транспорт, перевезення, перевозки, услуги, послуги, брокер, митне оформлення, таможенное оформление, транспортна компанія, транспортная компания'
        )

        document.querySelector('meta[property="og:title"]').setAttribute(
            'content',
            'Митний брокер для юридичних осіб Київ, Україна - консультація, Польща, Болгарія'
        )

        document.querySelector('meta[name="twitter:title"').setAttribute(
            'content',
            'Митний брокер для юридичних осіб Київ, Україна - консультація, Польща, Болгарія'
        )

        document.querySelector('meta[name="twitter:description"').setAttribute(
            'content',
            'Митний брокер для юридичних осіб у Києві ❇️ консультація ❇️ представник ❇️ вартість послуги ❇️ польша ❇️ болгарія ❇️ Детальніше ТУТ!'
        )
    } else if (selectedLanguage == "american") {
        document.title = "Customs broker for legal entities Kyiv, Ukraine - consultation, Poland, Bulgaria"

        document.querySelector('meta[property="og:description"').setAttribute(
            'content',
            'Customs broker for legal entities in Kyiv ❇️ consultation ❇️ representative ❇️ service cost ❇️ poland ❇️ bulgaria ❇️ More details HERE!'
        )

        document.querySelector('meta[name="description"').setAttribute(
            'content',
            'Customs broker for legal entities in Kyiv ❇️ consultation ❇️ representative ❇️ service cost ❇️ poland ❇️ bulgaria ❇️ More details HERE!'
        )

        document.querySelector('meta[name="keywords"').setAttribute(
            'content',
            'logistics, AS-Trans, AS trans, As trans, transport, transportation, services, broker, customs clearance, transport company'
        )

        document.querySelector('meta[property="og:title"]').setAttribute(
            'content',
            'Customs broker for legal entities Kyiv, Ukraine - consultation, Poland, Bulgaria'
        )

        document.querySelector('meta[name="twitter:title"').setAttribute(
            'content',
            'Customs broker for legal entities Kyiv, Ukraine - consultation, Poland, Bulgaria'
        )

        document.querySelector('meta[name="twitter:description"').setAttribute(
            'content',
            'Customs broker for legal entities in Kyiv ❇️ consultation ❇️ representative ❇️ service cost ❇️ poland ❇️ bulgaria ❇️ More details HERE!'
        )
    }
}