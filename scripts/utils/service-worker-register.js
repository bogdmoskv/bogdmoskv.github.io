/**
 * Регистрация Service Worker для кэширования статических ресурсов
 */

(function() {
    'use strict';

    // Проверяем поддержку Service Worker
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            // Определяем путь к Service Worker в зависимости от текущей страницы
            const swPath = window.location.pathname.includes('/pages/') 
                ? '../sw.js' 
                : '/sw.js';

            navigator.serviceWorker.register(swPath)
                .then((registration) => {
                    console.log('[SW Register] Service Worker registered successfully:', registration.scope);

                    // Проверяем обновления Service Worker
                    registration.addEventListener('updatefound', () => {
                        const newWorker = registration.installing;
                        
                        newWorker.addEventListener('statechange', () => {
                            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                                // Новый Service Worker установлен, но старый еще активен
                                console.log('[SW Register] New Service Worker available');
                                
                                // Можно показать уведомление пользователю о доступности обновления
                                // Для автоматического обновления используем skipWaiting
                                if (newWorker.waiting) {
                                    newWorker.postMessage({ type: 'SKIP_WAITING' });
                                }
                            }
                        });
                    });

                    // Обработка обновления страницы после активации нового Service Worker
                    let refreshing = false;
                    navigator.serviceWorker.addEventListener('controllerchange', () => {
                        if (!refreshing) {
                            refreshing = true;
                            console.log('[SW Register] New Service Worker activated, reloading page');
                            window.location.reload();
                        }
                    });
                })
                .catch((error) => {
                    console.error('[SW Register] Service Worker registration failed:', error);
                });
        });
    } else {
        console.warn('[SW Register] Service Workers are not supported in this browser');
    }

    // Утилита для очистки кэша (для отладки)
    if (typeof window !== 'undefined') {
        window.clearServiceWorkerCache = function() {
            if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
                navigator.serviceWorker.controller.postMessage({ type: 'CLEAR_CACHE' });
            }
        };
    }
})();

