document.addEventListener("DOMContentLoaded", function () {
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
});


function createTimer(element, maxCount, interval, suffix) {
    var cnt = 0;
    var timer = window.setInterval(function () {
        cnt++;

        if (cnt === maxCount && suffix) {
            element.innerHTML = cnt + suffix;
        } else {
            element.innerHTML = cnt;
        }

        if (cnt == maxCount) {
            window.clearInterval(timer);
        }
    }, interval);
}


let selectedLanguage = localStorage.getItem('selectedLanguage');
if (!selectedLanguage) {
    selectedLanguage = 'ukrainian';
    localStorage.setItem('selectedLanguage', selectedLanguage);
}

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
if (imgContainers2.length > 0){
    imgContainers2.forEach(imgContainer => {
        observer.observe(imgContainer);
    });
    
}

document.querySelector('#formButton').addEventListener('click', function (event) {
    event.preventDefault(); //предотвращаем стандартное поведение отправки формы

    const name = document.getElementById('nameInputId').value;
    const phone = document.getElementById('phoneInputId').value;
    const email = document.getElementById('emailInputId').value;

    const templateParams = {
        from_name: name,
        phone_number: phone,
        email: email
    };

    emailjs.send('service_l9d94jk', 'template_8lib7fg', templateParams).then(
        (response) => {
            console.log('SUCCESS!', response.status, response.text);
            alert('Сообщение отправлено успешно!');

            const autoReplyParams = {
                to_email: email
            };
            emailjs.send('service_l9d94jk', 'template_u37d75b', autoReplyParams).then(
                (response) => {
                    console.log('Auto-reply sent succesffully!', response.status, response.text);
                },
                (error) => {
                    console.log('Auto-reply FAILED', error);
                },
            );
        },
        (error) => {
            console.log('FAILED...', error);
            alert('Ошибка при отправке сообщения :((');
        },
    );
});