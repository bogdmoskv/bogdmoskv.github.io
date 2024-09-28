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


function createTimer(counterId, maxCount, interval, suffix) {
    var cnt = 0;
    var timer = window.setInterval(function () {
        cnt++;

        if (cnt === maxCount && suffix) {
            document.getElementById(counterId).innerHTML = cnt + suffix;
        } else {
            document.getElementById(counterId).innerHTML = cnt;
        }

        if (cnt == maxCount) {
            window.clearInterval(timer);
        }
    }, interval);
}

createTimer('display', 140, 28);
createTimer('display1', 20, 200);
createTimer('display2', 40, 100, 'K');
createTimer('display3', 897, 0.01);

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