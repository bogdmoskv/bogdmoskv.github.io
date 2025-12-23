/**
 * Загрузчик contact-widget компонента с использованием ComponentLoader
 * Использует оптимизированную загрузку с кэшированием и общей логикой переключения языков
 */

/**
 * Импорт централизованной конфигурации
 */
import { languageConfig } from '../core/config.js';

document.addEventListener('DOMContentLoaded', () => {
    const placeholder = document.querySelector('#contact-widget');

    if (!placeholder) {
        return;
    }

    // Функция для обновления языка в виджете контактов
    function updateContactWidgetLanguage(language) {
        const contactTextElements = document.querySelectorAll('.contact-us-container .contact-text');
        contactTextElements.forEach(element => {
            if (element.classList.contains(`content-${language}`)) {
                element.style.display = 'block';
            } else {
                element.style.display = 'none';
            }
        });
    }

    // Callback после загрузки компонента
    function initContactWidget(placeholderElement, html) {
        const selectedLanguage = localStorage.getItem(languageConfig.storageKey) || languageConfig.defaultLanguage;
        
        // Применяем логику переключения языков к элементам виджета
        updateContactWidgetLanguage(selectedLanguage);

        const contactContainer = document.querySelector('.contact-us-container');
        const contactButton = document.querySelector('.contact-us-button');
        const messengerIcons = document.querySelector('.messenger-icons');
        
        if (!contactButton || !messengerIcons) {
            console.warn('Contact widget elements not found');
            return;
        }

        const contactButtonIcon = contactButton.querySelector('i');

        // Обработчик клика на кнопку контактов
        contactButton.addEventListener('click', () => {
            const currentLanguage = localStorage.getItem(languageConfig.storageKey) || languageConfig.defaultLanguage;

            // Если иконки показываются, скрываем их
            if (messengerIcons.classList.contains('show')) {
                messengerIcons.classList.remove('show');
                contactContainer.classList.remove('column-layout'); // Возвращаем в row
                contactButtonIcon.classList.remove('fa-solid', 'fa-rotate-left');
                contactButtonIcon.classList.add('fa-regular', 'fa-message');

                updateContactWidgetLanguage(currentLanguage);
                const visibleText = document.querySelector(`.contact-us-container .contact-text.content-${currentLanguage}`);
                if (visibleText) {
                    visibleText.classList.remove('hidden');
                    visibleText.style.display = 'block';
                }
            } else {
                const visibleText = document.querySelector(`.contact-us-container .contact-text.content-${currentLanguage}`);
                if (visibleText) {
                    visibleText.classList.add('hidden');
                    visibleText.style.display = 'none';
                }

                contactContainer.classList.add('column-layout');
                contactButtonIcon.classList.add('fa-solid', 'fa-rotate-left');
                contactButtonIcon.classList.remove('fa-regular', 'fa-message');

                setTimeout(() => {
                    messengerIcons.classList.add('show');
                }, 10);
            }
        });
    }

    // Загружаем contact-widget используя ComponentLoader
    if (typeof window.componentLoader !== 'undefined') {
        // Используем оптимизированный ComponentLoader
        window.componentLoader.loadAndInsert(
            'contact-widget.html',
            'contact-widget',
            {},
            initContactWidget
        ).catch(error => {
            console.error('Failed to load contact-widget component:', error);
        });
    } else {
        // Fallback: используем стандартный fetch, если ComponentLoader не доступен
        console.warn('ComponentLoader not available, using fallback fetch');
        fetch('../elements/contact-widget.html')
            .then(res => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                return res.text();
            })
            .then(html => {
                placeholder.innerHTML = html;
                initContactWidget(placeholder, html);
            })
            .catch(err => {
                console.error('Error while loading contact-widget:', err);
            });
    }
});