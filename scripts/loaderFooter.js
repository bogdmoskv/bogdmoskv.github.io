/**
 * Загрузчик footer компонента с использованием ComponentLoader
 * Использует оптимизированную загрузку с кэшированием
 */

document.addEventListener('DOMContentLoaded', function () {
    // Загружаем footer используя ComponentLoader
    if (typeof window.componentLoader !== 'undefined') {
        // Используем оптимизированный ComponentLoader
        window.componentLoader.loadAndInsert('footer.html', 'footer-placeholder')
            .catch(error => {
                console.error('Failed to load footer component:', error);
            });
    } else {
        // Fallback: используем стандартный fetch, если ComponentLoader не доступен
        console.warn('ComponentLoader not available, using fallback fetch');
        fetch('../elements/footer.html')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.text();
            })
            .then(data => {
                const placeholder = document.getElementById('footer-placeholder');
                if (placeholder) {
                    placeholder.innerHTML = data;
                }
            })
            .catch(error => {
                console.error('Error loading footer:', error);
            });
    }
});