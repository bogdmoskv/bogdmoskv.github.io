document.addEventListener('DOMContentLoaded', () => {
    const placeholder = document.querySelector('#contact-widget');

    if (placeholder) {
        fetch('../elements/contact-widget.html')
            .then(res => res.text())
            .then(html => {
                placeholder.innerHTML = html;

                let contactContainer = document.querySelector('.contact-us-container');
                let contactButton = document.querySelector('.contact-us-button');
                let contactText = document.querySelector('.contact-text');
                let messengerIcons = document.querySelector('.messenger-icons');
                let contactButtonIcon = contactButton.querySelector('i');

                contactButton.addEventListener('click', () => {
                    //если иконки показываються, скрываем их
                    if (messengerIcons.classList.contains('show')) {
                        messengerIcons.classList.remove('show');
                        contactText.classList.remove('hidden');
                        contactContainer.classList.remove('column-layout'); //возвращаем в row

                        contactButtonIcon.classList.remove('fa-solid', 'fa-rotate-left')
                        contactButtonIcon.classList.add('fa-regular', 'fa-message');
                    } else {
                        contactText.classList.add('hidden');
                        contactContainer.classList.add('column-layout');

                        contactButtonIcon.classList.add('fa-solid', 'fa-rotate-left')
                        contactButtonIcon.classList.remove('fa-regular', 'fa-message');

                        setTimeout(() => {
                            messengerIcons.classList.add('show')
                        }, 10);
                    }
                });
            })
            .catch(err => console.error("Error while loading contact-widget: ", err))
    }
});