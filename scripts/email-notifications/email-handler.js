/**
 * Определяет правильный путь к конфигурационному файлу на основе текущего местоположения
 * @returns {string} Путь к emailjs-config.json
 */
function getConfigPath() {
    const currentPath = window.location.pathname;
    // Если страница в подпапке (например, pages/), используем ../emailjs-config.json
    // Если в корне, используем emailjs-config.json
    if (currentPath.includes('/pages/') || currentPath.endsWith('/pages/')) {
        return '../emailjs-config.json';
    }
    return 'emailjs-config.json';
}

export async function loadEmailConfig() {
    const configPath = getConfigPath();
    const response = await fetch(configPath);
    if (!response.ok) {
        throw new Error(`Failed to load email config: ${response.status} ${response.statusText}`);
    }
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

export function showBootstrapAlert(message, type='success', timeout = 4000){
    const alertContainer = document.querySelector('#alert-container');
    if (!alertContainer) {
        console.warn('Alert container not found');
        // Fallback: используем обычный alert если контейнер не найден
        alert(message);
        return;
    }

    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type} alert-dismissible fade show shadow`;
    alertDiv.role = 'alert';

    alertDiv.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;

    alertContainer.appendChild(alertDiv);

    // Проверяем доступность Bootstrap перед использованием
    if (typeof bootstrap !== 'undefined' && bootstrap.Alert) {
        setTimeout(()=>{
            try {
                const bsAlert = bootstrap.Alert.getOrCreateInstance(alertDiv);
                bsAlert.close();
            } catch (error) {
                console.warn('Bootstrap Alert API error:', error);
                // Fallback: просто удаляем элемент через некоторое время
                setTimeout(() => {
                    if (alertDiv.parentNode) {
                        alertDiv.remove();
                    }
                }, timeout);
            }
        }, timeout);
    } else {
        // Fallback: если Bootstrap не загружен, удаляем элемент вручную
        setTimeout(() => {
            if (alertDiv.parentNode) {
                alertDiv.remove();
            }
        }, timeout);
    }
}