/**
 * Утилиты для управления мета-тегами страницы
 */

/**
 * Обновляет мета-тег на странице
 * @param {string} selector - Селектор мета-тега (например, 'meta[property="og:title"]')
 * @param {string} attribute - Атрибут для обновления (обычно 'content')
 * @param {string} value - Значение для установки
 */
function updateMetaTag(selector, attribute, value) {
    const metaTag = document.querySelector(selector);
    if (metaTag) {
        metaTag.setAttribute(attribute, value);
    } else {
        console.warn(`Meta tag not found: ${selector}`);
    }
}

/**
 * Обновляет мета-теги страницы на основе конфигурации
 * @param {Object} metaConfig - Конфигурация мета-тегов
 * @param {string} metaConfig.title - Заголовок страницы
 * @param {string} [metaConfig.description] - Описание страницы
 * @param {string} [metaConfig.keywords] - Ключевые слова
 * @param {string} [metaConfig.ogTitle] - Open Graph заголовок
 * @param {string} [metaConfig.ogDescription] - Open Graph описание
 * @param {string} [metaConfig.twitterTitle] - Twitter заголовок
 * @param {string} [metaConfig.twitterDescription] - Twitter описание
 */
export function updateMetaTags(metaConfig) {
    if (!metaConfig) {
        console.warn('updateMetaTags: metaConfig is not provided');
        return;
    }

    // Обновляем title
    if (metaConfig.title) {
        document.title = metaConfig.title;
    }

    // Обновляем description
    if (metaConfig.description) {
        updateMetaTag('meta[name="description"]', 'content', metaConfig.description);
    }

    // Обновляем keywords
    if (metaConfig.keywords) {
        updateMetaTag('meta[name="keywords"]', 'content', metaConfig.keywords);
    }

    // Обновляем Open Graph теги
    if (metaConfig.ogTitle) {
        updateMetaTag('meta[property="og:title"]', 'content', metaConfig.ogTitle);
    }

    if (metaConfig.ogDescription) {
        updateMetaTag('meta[property="og:description"]', 'content', metaConfig.ogDescription);
    }

    // Обновляем Twitter теги
    if (metaConfig.twitterTitle) {
        updateMetaTag('meta[name="twitter:title"]', 'content', metaConfig.twitterTitle);
    }

    if (metaConfig.twitterDescription) {
        updateMetaTag('meta[name="twitter:description"]', 'content', metaConfig.twitterDescription);
    }
}

