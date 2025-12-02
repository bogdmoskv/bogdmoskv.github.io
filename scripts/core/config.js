/**
 * Централизованная конфигурация приложения
 * Содержит настройки EmailJS, языков и другие глобальные параметры
 */

/**
 * Конфигурация EmailJS
 */
export const emailjsConfig = {
    /**
     * Публичный ключ EmailJS для инициализации
     * Используется для аутентификации в сервисе EmailJS
     */
    publicKey: "K3Bitc7NoiejwgHDj",
    
    /**
     * ID сервиса EmailJS
     * Идентифицирует конкретный email-сервис в аккаунте EmailJS
     */
    serviceId: "service_77w7tjv",
    
    /**
     * ID шаблона EmailJS
     * Идентифицирует шаблон письма, который будет использоваться для отправки
     */
    templateId: "template_ch5hdo7",
    
    /**
     * Параметры шаблона по умолчанию
     * Маппинг полей формы на параметры шаблона EmailJS
     */
    templateParamsMapping: {
        from_name: 'name',
        phone_number: 'phone',
        to_email: 'email',
        message: 'messageText',
        input_website: 'inputWebsite',
        input_topic: 'inputTopic'
    }
};

/**
 * Конфигурация языков приложения
 */
export const languageConfig = {
    /**
     * Язык по умолчанию
     */
    defaultLanguage: 'ukrainian',
    
    /**
     * Ключ в localStorage для хранения выбранного языка
     */
    storageKey: 'selectedLanguage',
    
    /**
     * Доступные языки и их настройки
     */
    languages: {
        ukrainian: {
            /**
             * Код языка для HTML атрибута lang
             */
            code: 'uk',
            
            /**
             * Название языка для отображения
             */
            name: 'Українська',
            
            /**
             * Путь к изображению флага
             */
            flagPath: '../images/Flag_of_Ukraine.png',
            
            /**
             * Путь к изображению флага для корневой страницы
             */
            flagPathRoot: 'images/Flag_of_Ukraine.png',
            
            /**
             * Класс CSS для контента на этом языке
             */
            contentClass: 'content-ukrainian',
            
            /**
             * Заголовок страницы по умолчанию
             */
            defaultTitle: 'Митний брокер для юридичних осіб Київ, Україна - консультація, Польща, Болгарія',
            
            /**
             * Описание по умолчанию для Open Graph
             */
            defaultDescription: 'Міжнародна логістична транспортна компания AS-Trans ❇️ Митно-брокерські послуги ❇️ Митне оформлення вантажнів ❇️ Детальніше ТУТ!'
        },
        american: {
            /**
             * Код языка для HTML атрибута lang
             */
            code: 'en',
            
            /**
             * Название языка для отображения
             */
            name: 'English',
            
            /**
             * Путь к изображению флага
             */
            flagPath: '../images/Flag_of_the_United_States_(51_stars).svg.png',
            
            /**
             * Путь к изображению флага для корневой страницы
             */
            flagPathRoot: 'images/Flag_of_the_United_States_(51_stars).svg.png',
            
            /**
             * Класс CSS для контента на этом языке
             */
            contentClass: 'content-american',
            
            /**
             * Заголовок страницы по умолчанию
             */
            defaultTitle: 'Customs broker for legal entities Kyiv, Ukraine - consultation, Poland, Bulgaria',
            
            /**
             * Описание по умолчанию для Open Graph
             */
            defaultDescription: 'International logistics transport company AS-Trans ❇️ Customs broker services ❇️ Customs clearance of cargo ❇️ More details HERE!'
        }
    },
    
    /**
     * Получает конфигурацию языка по его ключу
     * @param {string} languageKey - Ключ языка ('ukrainian' или 'american')
     * @returns {Object|null} Конфигурация языка или null, если язык не найден
     */
    getLanguageConfig(languageKey) {
        return this.languages[languageKey] || null;
    },
    
    /**
     * Получает путь к флагу в зависимости от текущего местоположения страницы
     * @param {string} languageKey - Ключ языка ('ukrainian' или 'american')
     * @returns {string|null} Путь к флагу или null, если язык не найден
     */
    getFlagPath(languageKey) {
        const langConfig = this.getLanguageConfig(languageKey);
        if (!langConfig) return null;
        
        const currentPath = window.location.pathname;
        // Если страница в подпапке (например, pages/), используем относительный путь с ../
        if (currentPath.includes('/pages/') || currentPath.endsWith('/pages/')) {
            return langConfig.flagPath;
        }
        return langConfig.flagPathRoot;
    },
    
    /**
     * Проверяет, является ли язык валидным
     * @param {string} languageKey - Ключ языка для проверки
     * @returns {boolean} true, если язык валиден, иначе false
     */
    isValidLanguage(languageKey) {
        return languageKey in this.languages;
    },
    
    /**
     * Получает список всех доступных языков
     * @returns {string[]} Массив ключей языков
     */
    getAvailableLanguages() {
        return Object.keys(this.languages);
    }
};

/**
 * Общая конфигурация приложения
 */
export const appConfig = {
    /**
     * Версия конфигурации
     * Используется для отслеживания изменений конфигурации
     */
    version: '1.0.0',
    
    
    /**
     * Настройки уведомлений
     */
    notifications: {
        /**
         * Время отображения уведомлений по умолчанию (в миллисекундах)
         */
        defaultTimeout: 4000,
        
        /**
         * Сообщения об успехе отправки email
         */
        messages: {
            success: {
                ukrainian: '✅ Сповіщення успішно відправлено!',
                american: '✅ Notification sent successfully!'
            },
            error: {
                ukrainian: '❌ Помилка при відпраці сповіщення!',
                american: '❌ Error sending notification!'
            },
            validation: {
                ukrainian: '❌ Будь ласка, заповніть обов\'язкові поля (ім\'я та email)',
                american: '❌ Please fill in the required fields (name and email)'
            }
        }
    },
    
    /**
     * Настройки валидации форм
     */
    validation: {
        /**
         * Обязательные поля формы
         */
        requiredFields: ['name', 'email']
    }
};

/**
 * Экспорт всех конфигураций как единый объект для удобства
 */
export default {
    emailjs: emailjsConfig,
    language: languageConfig,
    app: appConfig
};

