(function () {
    emailjs.init({
        publicKey: "Obgg-ftcAlkqx3k9k",
    });
})();

let selectedLanguage = localStorage.getItem('selectedLanguage');

const htmlTag = document.documentElement;


if (selectedLanguage == "ukrainian"){
    document.title = "Митний брокер для юридичних осіб Київ, Україна - консультація, Польща, Болгарія"

    document.querySelector('meta[property="og:description"').setAttribute(
        'content',
        "Міжнародна логістична транспортна компания AS-Trans ❇️ Митно-брокерські послуги ❇️ Митне оформлення вантажнів ❇️ Детальніше ТУТ!"
    );
    
    htmlTag.setAttribute('lang', 'uk');
} else if (selectedLanguage == "american"){
    document.title = "Customs broker for legal entities Kyiv, Ukraine - consultation, Poland, Bulgaria"
    htmlTag.setAttribute('lang', 'en');
}