/**
 * Service Worker для кэширования статических ресурсов
 * 
 * Стратегии кэширования:
 * - Cache First: CSS, JS, изображения, шрифты
 * - Network First: HTML страницы (для актуальности контента)
 * - Stale While Revalidate: элементы компонентов
 */

const CACHE_VERSION = 'v1.0.0';
const CACHE_NAME = `as-trans-cache-${CACHE_VERSION}`;

// Ресурсы для предварительного кэширования при установке
const PRECACHE_RESOURCES = [
    '/',
    '/index.html',
    '/style.css',
    '/scripts/utils/component-loader.js',
    '/scripts/utils/timer-global.js',
    '/scripts/loader-header.js',
    '/scripts/loader-footer.js',
    '/scripts/elements/contact-widget.js',
    '/elements/header.html',
    '/elements/footer.html',
    '/elements/contact-widget.html',
    '/styles/header-style.css',
    '/styles/about-us.css',
    '/styles/contact-page.css',
    '/styles/international-transportation.css',
    '/styles/service-page.css',
    '/styles/broker-page.css',
    '/styles/expeditions-page.css',
    '/styles/shipping-routes.css'
];

// Расширения файлов для стратегии Cache First
const CACHE_FIRST_EXTENSIONS = [
    '.css',
    '.js',
    '.jpg',
    '.jpeg',
    '.png',
    '.webp',
    '.svg',
    '.ico',
    '.woff',
    '.woff2',
    '.ttf',
    '.eot'
];

// Расширения файлов для стратегии Network First
const NETWORK_FIRST_EXTENSIONS = ['.html'];

/**
 * Проверяет, должна ли использоваться стратегия Cache First
 */
function shouldUseCacheFirst(url) {
    return CACHE_FIRST_EXTENSIONS.some(ext => url.endsWith(ext));
}

/**
 * Проверяет, должна ли использоваться стратегия Network First
 */
function shouldUseNetworkFirst(url) {
    return NETWORK_FIRST_EXTENSIONS.some(ext => url.endsWith(ext));
}

/**
 * Стратегия Cache First: сначала проверяем кэш, затем сеть
 */
async function cacheFirst(request, cache) {
    const cachedResponse = await cache.match(request);
    if (cachedResponse) {
        return cachedResponse;
    }

    try {
        const networkResponse = await fetch(request);
        if (networkResponse.ok) {
            cache.put(request, networkResponse.clone());
        }
        return networkResponse;
    } catch (error) {
        console.error('Cache First fetch failed:', error);
        // Возвращаем кэшированный ответ, даже если он устарел
        return cachedResponse || new Response('Network error', { status: 503 });
    }
}

/**
 * Стратегия Network First: сначала сеть, затем кэш
 */
async function networkFirst(request, cache) {
    try {
        const networkResponse = await fetch(request);
        if (networkResponse.ok) {
            cache.put(request, networkResponse.clone());
        }
        return networkResponse;
    } catch (error) {
        console.log('Network First: falling back to cache');
        const cachedResponse = await cache.match(request);
        if (cachedResponse) {
            return cachedResponse;
        }
        throw error;
    }
}

/**
 * Стратегия Stale While Revalidate: возвращаем кэш сразу, обновляем в фоне
 */
async function staleWhileRevalidate(request, cache) {
    const cachedResponse = await cache.match(request);
    
    const fetchPromise = fetch(request).then(networkResponse => {
        if (networkResponse.ok) {
            cache.put(request, networkResponse.clone());
        }
        return networkResponse;
    }).catch(() => {
        // Игнорируем ошибки сети при обновлении
    });

    return cachedResponse || fetchPromise;
}

/**
 * Установка Service Worker
 */
self.addEventListener('install', (event) => {
    console.log('[Service Worker] Installing...', CACHE_VERSION);
    
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('[Service Worker] Precaching resources');
                // Кэшируем критические ресурсы
                return cache.addAll(PRECACHE_RESOURCES.map(url => new Request(url, { cache: 'reload' })))
                    .catch(error => {
                        console.warn('[Service Worker] Some precache resources failed:', error);
                        // Продолжаем работу даже если некоторые ресурсы не удалось кэшировать
                    });
            })
            .then(() => {
                // Активируем новый Service Worker сразу
                return self.skipWaiting();
            })
    );
});

/**
 * Активация Service Worker
 */
self.addEventListener('activate', (event) => {
    console.log('[Service Worker] Activating...', CACHE_VERSION);
    
    event.waitUntil(
        caches.keys()
            .then((cacheNames) => {
                return Promise.all(
                    cacheNames.map((cacheName) => {
                        // Удаляем старые кэши
                        if (cacheName !== CACHE_NAME) {
                            console.log('[Service Worker] Deleting old cache:', cacheName);
                            return caches.delete(cacheName);
                        }
                    })
                );
            })
            .then(() => {
                // Берем контроль над всеми страницами
                return self.clients.claim();
            })
    );
});

/**
 * Обработка запросов
 */
self.addEventListener('fetch', (event) => {
    const { request } = event;
    const url = new URL(request.url);

    // Пропускаем запросы к внешним ресурсам (CDN, API)
    if (url.origin !== location.origin) {
        return;
    }

    // Пропускаем не-GET запросы
    if (request.method !== 'GET') {
        return;
    }

    event.respondWith(
        caches.open(CACHE_NAME).then((cache) => {
            // Нормализуем путь запроса
            const requestPath = url.pathname;
            
            // Определяем стратегию кэширования на основе типа ресурса
            if (shouldUseCacheFirst(requestPath)) {
                return cacheFirst(request, cache);
            } else if (shouldUseNetworkFirst(requestPath)) {
                return networkFirst(request, cache);
            } else {
                // По умолчанию используем Stale While Revalidate для компонентов
                if (requestPath.includes('/elements/')) {
                    return staleWhileRevalidate(request, cache);
                }
                // Для остальных используем Network First
                return networkFirst(request, cache);
            }
        }).catch((error) => {
            console.error('[Service Worker] Fetch error:', error);
            // Fallback: пытаемся получить из сети
            return fetch(request).catch(() => {
                // Если и сеть недоступна, возвращаем базовую страницу
                return caches.match('/index.html') || new Response('Service unavailable', { status: 503 });
            });
        })
    );
});

/**
 * Обработка сообщений от клиента
 */
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
    
    if (event.data && event.data.type === 'CLEAR_CACHE') {
        event.waitUntil(
            caches.delete(CACHE_NAME).then(() => {
                return self.clients.matchAll().then(clients => {
                    clients.forEach(client => {
                        client.postMessage({ type: 'CACHE_CLEARED' });
                    });
                });
            })
        );
    }
});

