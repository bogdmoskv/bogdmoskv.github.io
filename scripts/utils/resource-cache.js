/**
 * Client-side resource caching for GitHub Pages
 * Caches static resources in browser cache and localStorage
 */
class ResourceCache {
    constructor() {
        this.cacheVersion = '1.0.0';
        this.cachePrefix = 'as-trans-cache-';
        this.maxCacheAge = 365 * 24 * 60 * 60 * 1000; // 1 year in milliseconds
        this.basePath = this.getBasePath();
    }

    /**
     * Get base path based on current page location
     */
    getBasePath() {
        const path = window.location.pathname;
        if (path.includes('/pages/')) {
            return '../';
        }
        return './';
    }

    /**
     * Preload and cache critical resources
     */
    async preloadResources() {
        const criticalResources = [
            'style.css',
            'styles/header-style.css',
            'scripts/core/config.js',
            'scripts/i18n/translations.js',
            'scripts/i18n/i18n-manager.js',
            'scripts/utils/component-loader.js'
        ];

        for (const resource of criticalResources) {
            this.preloadResource(this.basePath + resource);
        }
    }

    /**
     * Preload a single resource
     */
    preloadResource(url) {
        // Use link preload for CSS
        if (url.endsWith('.css')) {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'style';
            link.href = url;
            link.crossOrigin = 'anonymous';
            document.head.appendChild(link);
        }
        // Use link modulepreload for JS modules
        else if (url.endsWith('.js')) {
            const link = document.createElement('link');
            link.rel = 'modulepreload';
            link.href = url;
            link.crossOrigin = 'anonymous';
            document.head.appendChild(link);
        }
    }

    /**
     * Prefetch images for better caching
     */
    prefetchImages() {
        const imagesToPrefetch = [
            'images/ship.webp',
            'images/image1.webp',
            'images/service2.webp',
            'images/service4.webp',
            'images/service3.webp',
            'images/service1.webp',
            'images/cn-bg.jpg',
            'images/customs-clearence-services.jpg',
            'images/logo_as.png'
        ];

        imagesToPrefetch.forEach(image => {
            const link = document.createElement('link');
            link.rel = 'prefetch';
            link.as = 'image';
            link.href = this.basePath + image;
            document.head.appendChild(link);
        });
    }

    /**
     * Add cache headers simulation via resource hints
     */
    optimizeResourceLoading() {
        // DNS prefetch for external resources
        const externalDomains = [
            'https://cdn.jsdelivr.net',
            'https://kit.fontawesome.com',
            'https://unpkg.com'
        ];

        externalDomains.forEach(domain => {
            const link = document.createElement('link');
            link.rel = 'dns-prefetch';
            link.href = domain;
            document.head.appendChild(link);

            const preconnect = document.createElement('link');
            preconnect.rel = 'preconnect';
            preconnect.href = domain;
            preconnect.crossOrigin = 'anonymous';
            document.head.appendChild(preconnect);
        });
    }

    /**
     * Initialize caching system
     */
    init() {
        // Only run on first visit or if cache is expired
        if (this.shouldPreload()) {
            this.preloadResources();
            this.prefetchImages();
            this.optimizeResourceLoading();
            this.saveCacheTimestamp();
        }
    }

    /**
     * Check if resources should be preloaded
     */
    shouldPreload() {
        const cacheTimestamp = localStorage.getItem(this.cachePrefix + 'timestamp');
        if (!cacheTimestamp) return true;

        const age = Date.now() - parseInt(cacheTimestamp);
        return age > this.maxCacheAge;
    }

    /**
     * Save cache timestamp
     */
    saveCacheTimestamp() {
        localStorage.setItem(this.cachePrefix + 'timestamp', Date.now().toString());
    }
}

// Initialize on page load
const resourceCache = new ResourceCache();
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => resourceCache.init());
} else {
    resourceCache.init();
}

export { ResourceCache };

