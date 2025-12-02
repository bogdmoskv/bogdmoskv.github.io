/**
 * ComponentLoader - Утилита для оптимизированной загрузки HTML компонентов
 * 
 * Особенности:
 * - Кэширование загруженных компонентов
 * - Параллельная загрузка всех компонентов
 * - Обработка ошибок и fallback
 */

class ComponentLoader {
    constructor() {
        // Кэш для хранения загруженных компонентов
        this.cache = new Map();
        
        // Активные промисы загрузки для предотвращения дублирования запросов
        this.loadingPromises = new Map();
        
        // Базовый путь к элементам (автоматически определяется на основе текущего пути)
        this.basePath = this.detectBasePath();
    }

    /**
     * Автоматически определяет базовый путь к элементам на основе текущего местоположения страницы
     * @returns {string} Базовый путь к элементам
     */
    detectBasePath() {
        // Получаем текущий путь страницы
        const currentPath = window.location.pathname;
        
        // Если страница находится в корне (index.html), используем 'elements/'
        // Если страница находится в подпапке (например, pages/), используем '../elements/'
        if (currentPath.includes('/pages/') || currentPath.endsWith('/pages/')) {
            return '../elements/';
        }
        
        return 'elements/';
    }

    /**
     * Загружает HTML компонент с кэшированием
     * @param {string} componentPath - Путь к компоненту относительно basePath
     * @param {Object} options - Опции загрузки
     * @param {boolean} options.useCache - Использовать кэш (по умолчанию true)
     * @param {boolean} options.forceReload - Принудительная перезагрузка (по умолчанию false)
     * @returns {Promise<string>} Промис с HTML содержимым компонента
     */
    async loadComponent(componentPath, options = {}) {
        const {
            useCache = true,
            forceReload = false
        } = options;

        const fullPath = this.basePath + componentPath;

        // Проверяем кэш, если не требуется принудительная перезагрузка
        if (useCache && !forceReload && this.cache.has(fullPath)) {
            return Promise.resolve(this.cache.get(fullPath));
        }

        // Проверяем, не загружается ли компонент уже
        if (this.loadingPromises.has(fullPath)) {
            return this.loadingPromises.get(fullPath);
        }

        // Создаем промис загрузки
        const loadPromise = fetch(fullPath)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to load component: ${fullPath} (${response.status} ${response.statusText})`);
                }
                return response.text();
            })
            .then(html => {
                // Кэшируем результат
                if (useCache) {
                    this.cache.set(fullPath, html);
                }
                return html;
            })
            .catch(error => {
                console.error(`Error loading component ${fullPath}:`, error);
                // Fallback: возвращаем пустую строку или сообщение об ошибке
                const fallbackHtml = this.getFallbackHtml(componentPath, error);
                if (useCache) {
                    this.cache.set(fullPath, fallbackHtml);
                }
                return fallbackHtml;
            })
            .finally(() => {
                // Удаляем промис из активных загрузок
                this.loadingPromises.delete(fullPath);
            });

        // Сохраняем промис для предотвращения дублирования запросов
        this.loadingPromises.set(fullPath, loadPromise);

        return loadPromise;
    }

    /**
     * Загружает несколько компонентов параллельно
     * @param {Array<{path: string, placeholderId: string, options?: Object}>} components - Массив компонентов для загрузки
     * @returns {Promise<Array<{path: string, placeholderId: string, html: string, success: boolean}>>}
     */
    async loadComponents(components) {
        const loadPromises = components.map(async ({ path, placeholderId, options = {} }) => {
            try {
                const html = await this.loadComponent(path, options);
                return {
                    path,
                    placeholderId,
                    html,
                    success: true
                };
            } catch (error) {
                console.error(`Failed to load component ${path}:`, error);
                return {
                    path,
                    placeholderId,
                    html: this.getFallbackHtml(path, error),
                    success: false
                };
            }
        });

        return Promise.all(loadPromises);
    }

    /**
     * Вставляет загруженный компонент в DOM
     * @param {string} placeholderId - ID элемента-плейсхолдера
     * @param {string} html - HTML содержимое компонента
     * @param {Function} callback - Опциональный callback после вставки
     */
    insertComponent(placeholderId, html, callback = null) {
        const placeholder = document.getElementById(placeholderId);
        
        if (!placeholder) {
            console.warn(`Placeholder element with id "${placeholderId}" not found`);
            return false;
        }

        placeholder.innerHTML = html;

        // Вызываем callback после вставки, если он предоставлен
        if (callback && typeof callback === 'function') {
            try {
                callback(placeholder, html);
            } catch (error) {
                console.error(`Error in component callback for ${placeholderId}:`, error);
            }
        }

        return true;
    }

    /**
     * Загружает и вставляет компонент в DOM
     * @param {string} componentPath - Путь к компоненту
     * @param {string} placeholderId - ID элемента-плейсхолдера
     * @param {Object} options - Опции загрузки
     * @param {Function} callback - Опциональный callback после вставки
     * @returns {Promise<boolean>}
     */
    async loadAndInsert(componentPath, placeholderId, options = {}, callback = null) {
        try {
            const html = await this.loadComponent(componentPath, options);
            return this.insertComponent(placeholderId, html, callback);
        } catch (error) {
            console.error(`Failed to load and insert component ${componentPath}:`, error);
            const fallbackHtml = this.getFallbackHtml(componentPath, error);
            return this.insertComponent(placeholderId, fallbackHtml, callback);
        }
    }

    /**
     * Загружает и вставляет несколько компонентов параллельно
     * @param {Array<{path: string, placeholderId: string, options?: Object, callback?: Function}>} components - Массив компонентов
     * @returns {Promise<Array<{path: string, placeholderId: string, success: boolean}>>}
     */
    async loadAndInsertAll(components) {
        const results = await this.loadComponents(components);
        
        return results.map(({ path, placeholderId, html, success }) => {
            const componentConfig = components.find(c => c.path === path && c.placeholderId === placeholderId);
            const callback = componentConfig?.callback || null;
            
            const inserted = this.insertComponent(placeholderId, html, callback);
            
            return {
                path,
                placeholderId,
                success: success && inserted
            };
        });
    }

    /**
     * Получает fallback HTML в случае ошибки загрузки
     * @param {string} componentPath - Путь к компоненту
     * @param {Error} error - Ошибка загрузки
     * @returns {string} Fallback HTML
     */
    getFallbackHtml(componentPath, error) {
        // Можно вернуть пустую строку или сообщение об ошибке
        // В зависимости от требований проекта
        return `
            <div class="component-error" style="padding: 10px; color: #d32f2f; background: #ffebee; border-radius: 4px;">
                <p>Не вдалося завантажити компонент: ${componentPath}</p>
                <p style="font-size: 0.9em; color: #666;">Failed to load component: ${componentPath}</p>
            </div>
        `;
    }

    /**
     * Очищает кэш компонентов
     * @param {string} componentPath - Опциональный путь к конкретному компоненту. Если не указан, очищается весь кэш
     */
    clearCache(componentPath = null) {
        if (componentPath) {
            const fullPath = this.basePath + componentPath;
            this.cache.delete(fullPath);
        } else {
            this.cache.clear();
        }
    }

    /**
     * Устанавливает базовый путь к элементам
     * @param {string} basePath - Базовый путь
     */
    setBasePath(basePath) {
        this.basePath = basePath;
    }
}

// Создаем единственный экземпляр ComponentLoader (Singleton)
const componentLoader = new ComponentLoader();

// Экспорт для ES6 модулей
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ComponentLoader, componentLoader };
}

// Глобальная доступность для обычных скриптов
if (typeof window !== 'undefined') {
    window.ComponentLoader = ComponentLoader;
    window.componentLoader = componentLoader;
}

