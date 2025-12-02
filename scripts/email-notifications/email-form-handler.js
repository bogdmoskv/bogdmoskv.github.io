import { initEmailJs, sendEmail, showBootstrapAlert } from './email-handler.js';
import { appConfig, languageConfig } from '../core/config.js';

/**
 * Ожидает загрузки необходимых зависимостей
 */
async function waitForDependencies() {
    // Ждем загрузки emailjs
    while (typeof emailjs === 'undefined') {
        await new Promise(resolve => setTimeout(resolve, 50));
    }
    
    // Ждем загрузки bootstrap (не критично, но желательно)
    let attempts = 0;
    while (typeof bootstrap === 'undefined' && attempts < 20) {
        await new Promise(resolve => setTimeout(resolve, 50));
        attempts++;
    }
}

document.addEventListener("DOMContentLoaded", async () => {
    // Ждем загрузки зависимостей
    await waitForDependencies();
    
    const config = await initEmailJs();

    const formBtn = document.querySelector('#formBtn');
    if (!formBtn) {
        console.warn('Form button #formBtn not found');
        return;
    }

    formBtn.addEventListener('click', async (event) => {
        event.preventDefault(); // Предотвращаем стандартное поведение формы
        
        const formData = {
            name: document.querySelector('#inputName')?.value || '',
            phone: document.querySelector('#inputPhone')?.value || '',
            email: document.querySelector('#InputEmail')?.value || '',
            messageText: document.querySelector('#InputMessage')?.value || '',
            inputWebsite: document.querySelector('#InputWebsite')?.value || '',
            inputTopic: document.querySelector('#InputTheme')?.value || ''
        };

        // Валидация обязательных полей
        const currentLanguage = localStorage.getItem(languageConfig.storageKey) || languageConfig.defaultLanguage;
        const requiredFields = appConfig.validation.requiredFields;
        const hasAllRequiredFields = requiredFields.every(field => formData[field] && formData[field].trim() !== '');
        
        if (!hasAllRequiredFields) {
            const validationMessage = appConfig.notifications.messages.validation[currentLanguage] || 
                                    appConfig.notifications.messages.validation[languageConfig.defaultLanguage];
            showBootstrapAlert(validationMessage, 'warning');
            return;
        }

        await sendEmail(config, formData);
    });
});