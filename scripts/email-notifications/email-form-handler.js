import { initEmailJs, sendEmail, showBootstrapAlert } from './email-handler.js';

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
        if (!formData.name || !formData.email) {
            showBootstrapAlert('❌ Будь ласка, заповніть обов\'язкові поля (ім\'я та email)', 'warning');
            return;
        }

        await sendEmail(config, formData);
    });
});