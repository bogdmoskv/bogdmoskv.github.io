/**
 * Глобальная версия createTimer для использования в обычных скриптах (не модулях)
 */

(function() {
    'use strict';

    /**
     * Создает анимированный счетчик, который увеличивается от 0 до maxCount
     * @param {HTMLElement} element - DOM элемент, в который будет выводиться значение
     * @param {number} maxCount - Максимальное значение счетчика
     * @param {number} interval - Интервал обновления в миллисекундах
     * @param {string} [suffix] - Опциональный суффикс (например, 'K' для тысяч)
     * @returns {number} ID таймера для возможной отмены
     */
    window.createTimer = function(element, maxCount, interval, suffix) {
        if (!element) {
            console.warn('createTimer: element is not provided');
            return null;
        }

        let cnt = 0;
        const timer = window.setInterval(function () {
            cnt++;

            if (cnt === maxCount && suffix) {
                element.innerHTML = cnt + suffix;
            } else {
                element.innerHTML = cnt;
            }

            if (cnt === maxCount) {
                window.clearInterval(timer);
            }
        }, interval);

        return timer;
    };
})();

