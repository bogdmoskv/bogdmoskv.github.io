export async function loadEmailConfig() {
    const response = await fetch('../emailjs-config.json');
    return await response.json();
}

export async function initEmailJs() {
    const config = await loadEmailConfig();
    emailjs.init(config.publicKey);
    return config;
}

export async function sendEmail(config, formData) {
    const templateParams = {
        from_name: formData.name,
        phone_number: formData.phone,
        to_email: formData.email,
        message: formData.messageText,
        input_website: formData.inputWebsite,
        input_topic: formData.inputTopic
    };

    try {
        const response = await emailjs.send(
            config.serviceId,
            config.templateId,
            templateParams
        );

        showBootstrapAlert('✅ Сповіщення успішно відправлено!', 'success');
    } catch (error) {
        console.log('FAILED...', error);
        showBootstrapAlert('❌ Помилка при відпраці сповіщення!', 'danger');
    }
}

function showBootstrapAlert(message, type='success', timeout = 4000){
    const alertContainer = document.querySelector('#alert-container');
    if (!alertContainer) return;

    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type} alert-dismissible fade show shadow`;
    alertDiv.role = 'alert';

    alertDiv.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>>
    `;

    alertContainer.appendChild(alertDiv);

    setTimeout(()=>{
        const bsAlert = bootstrap.Alert.getOrCreateInstance(alertDiv);
        bsAlert.close();
    }, timeout);
}