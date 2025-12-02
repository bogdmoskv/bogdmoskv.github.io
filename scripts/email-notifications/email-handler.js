/**
 * Импорт централизованной конфигурации
 */
import { emailjsConfig, appConfig, languageConfig } from '../core/config.js';

/**
 * Инициализирует EmailJS с использованием централизованной конфигурации
 * @returns {Object} Конфигурация EmailJS
 */
export async function initEmailJs() {
    emailjs.init(emailjsConfig.publicKey);
    return emailjsConfig;
}

/**
 * Отправляет email используя EmailJS
 * @param {Object} config - Конфигурация EmailJS (можно передать emailjsConfig или использовать по умолчанию)
 * @param {Object} formData - Данные формы
 */
export async function sendEmail(config = emailjsConfig, formData) {
    // Используем маппинг из конфигурации для преобразования данных формы
    const templateParams = {};
    Object.keys(emailjsConfig.templateParamsMapping).forEach(key => {
        const formField = emailjsConfig.templateParamsMapping[key];
        templateParams[key] = formData[formField] || '';
    });

    try {
        const response = await emailjs.send(
            config.serviceId,
            config.templateId,
            templateParams
        );

        // Получаем текущий язык для сообщения
        const currentLanguage = localStorage.getItem(languageConfig.storageKey) || languageConfig.defaultLanguage;
        const successMessage = appConfig.notifications.messages.success[currentLanguage] || 
                              appConfig.notifications.messages.success[languageConfig.defaultLanguage];
        showBootstrapAlert(successMessage, 'success', appConfig.notifications.defaultTimeout);
    } catch (error) {
        console.log('FAILED...', error);
        
        // Получаем текущий язык для сообщения об ошибке
        const currentLanguage = localStorage.getItem(languageConfig.storageKey) || languageConfig.defaultLanguage;
        const errorMessage = appConfig.notifications.messages.error[currentLanguage] || 
                           appConfig.notifications.messages.error[languageConfig.defaultLanguage];
        showBootstrapAlert(errorMessage, 'danger', appConfig.notifications.defaultTimeout);
    }
}

/**
 * Показывает Bootstrap alert с сообщением
 * @param {string} message - Текст сообщения
 * @param {string} type - Тип alert ('success', 'danger', 'warning', 'info')
 * @param {number} timeout - Время отображения в миллисекундах
 */
export function showBootstrapAlert(message, type='success', timeout = null){
    // Используем timeout из конфигурации, если не указан явно
    if (timeout === null) {
        timeout = appConfig.notifications.defaultTimeout;
    }
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