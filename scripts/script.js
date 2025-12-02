/**
 * Main page script - handles dropdowns, header sizing, and intersection observer for timers
 * Email functionality is handled by email-form-handler.js module
 */

document.addEventListener("DOMContentLoaded", () => {
    // Dropdown menu handlers
    let dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(function (dropdown) {
        dropdown.addEventListener("mouseover", function () {
            let dropdownMenu = this.querySelector(".dropdown-menu");
            dropdownMenu.classList.add('show');
        })

        dropdown.addEventListener("mouseout", function () {
            let dropdownMenu = this.querySelector(".dropdown-menu");
            dropdownMenu.classList.remove('show');
        });
    });

    // Header height normalization
    let headers = document.querySelectorAll('.row-advantage-icons h4');
    let maxHeight = 0;

    // находим максимальную высоту
    headers.forEach(function (header) {
        let height = header.offsetHeight;
        if (height > maxHeight) {
            maxHeight = height;
        }
    });

    maxHeight += 50;

    //Устанавливаем максимальную высоту всем заголовкам
    headers.forEach(function (header) {
        header.style.height = maxHeight + 'px';
    })
});


// createTimer доступен глобально через timer-global.js

// Language initialization
let selectedLanguage = localStorage.getItem('selectedLanguage');
if (!selectedLanguage) {
    selectedLanguage = 'ukrainian';
    localStorage.setItem('selectedLanguage', selectedLanguage);
}

// Intersection Observer for timer animations
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        //если элемент виден в данный момент
        if (entry.isIntersecting) {
            //запускаем таймеры, когда элемент становится видимым

            //Выбираем все элементы, названия которых начинаются с display
            const displays = document.querySelectorAll('[class^="display"]');

            const startIndex = selectedLanguage === "ukrainian" ? 0 : 4; //0-3 для укр, 4-7 для англ
            const endIndex = startIndex + 4;

            for (let i = startIndex; i < endIndex; i++) {
                if (i < displays.length) {
                    const displ = displays[i];
                    const className = displ.className;
                    let maxCount, interval, suffix;

                    displ.style.display = 'block';
                    if (className === "display1") {
                        maxCount = 20;
                        interval = 200;
                    } else if (className === "display2") {
                        maxCount = 40;
                        interval = 100;
                        suffix = 'K';
                    } else if (className === "display3") {
                        maxCount = 897;
                        interval = 0.01;
                    } else { //default: display
                        maxCount = 140;
                        interval = 28;
                    }

                    createTimer(displ, maxCount, interval, suffix);
                }
            }

            //останавливаем наблюдение, чтобы не запускать таймеры повторно
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1 //запускается, когда видно хотя бы 10% 
});

const imgContainers2 = document.querySelectorAll('.image-container-2');
if (imgContainers2.length > 0) {
    imgContainers2.forEach(imgContainer => {
        observer.observe(imgContainer);
    });

}


