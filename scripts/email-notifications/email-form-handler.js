import { initEmailJs, sendEmail } from './email-handler.js';

document.addEventListener("DOMContentLoaded", async () => {
    const config = await initEmailJs();

    const formBtn = document.querySelector('#formBtn');
    if (!formBtn) return;

    formBtn.addEventListener('click', async (event) => {
        const formData = {
            name: document.querySelector('#inputName').value,
            phone: document.querySelector('#inputPhone')?.value || '',
            email: document.querySelector('#InputEmail').value,
            messageText: document.querySelector('#InputMessage')?.value || '',
            inputWebsite: document.querySelector('#InputWebsite')?.value || '',
            inputTopic: document.querySelector('#InputTheme')?.value || ''
        };

        await sendEmail(config, formData);
    })
});