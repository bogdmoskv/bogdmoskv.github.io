let language = localStorage.getItem('selectedLanguage')
if (language == "ukrainian"){
    document.title = "Найкраща міжнародна логістична компанія AS-Trans Київ, Україна"

    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords){
        metaKeywords.setAttribute("content", "логистика, логістика, AS-Trans, АС-Транс, ас транс, Ас транс, As Trans, транспорт, перевезення, перевозки, услуги, послуги, брокер, митне оформлення, таможенное оформление, транспортная компания, транспортна компанія");
    }

} else if (language == "american"){
    document.title = "International Logistic transportation company - AS-Trans website"

    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords){
        metaKeywords.setAttribute("content", "logistics, AS-Trans, transportation, shipping, services, broker, customs clearance, transport company")
    }

}
