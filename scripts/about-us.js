let selectedLanguage = localStorage.getItem('selectedLanguage')
if (selectedLanguage == "ukrainian"){
    document.title = "Про компанію AS-Trans"
} else if (selectedLanguage == "american"){
    document.title = "About AS-Trans"
}