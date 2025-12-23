/**
 * Скрипт для оптимизации изображений проекта
 * Требует установки: npm install sharp --save-dev
 * 
 * Использование: node scripts/optimize-images.js
 */

const fs = require('fs');
const path = require('path');

// Проверяем наличие sharp
let sharp;
try {
    sharp = require('sharp');
} catch (e) {
    console.error('❌ Ошибка: sharp не установлен. Установите его командой: npm install sharp --save-dev');
    process.exit(1);
}

const imagesDir = path.join(__dirname, '..', 'images');
const optimizedDir = path.join(imagesDir, 'optimized');

// Создаем директорию для оптимизированных изображений
if (!fs.existsSync(optimizedDir)) {
    fs.mkdirSync(optimizedDir, { recursive: true });
}

// Конфигурация оптимизации для разных типов изображений
const optimizationConfig = {
    // Основное изображение (image1.webp) - контейнер 546x496 (50vw desktop)
    'image1.webp': {
        sizes: [
            { width: 546, suffix: '546w', quality: 80 },  // Desktop
            { width: 768, suffix: '768w', quality: 80 },  // Tablet
            { width: 1092, suffix: '1092w', quality: 75 } // Retina
        ],
        maxWidth: 546
    },
    
    // Сервисные изображения (service*.webp) - контейнер 227x128 (25vw desktop)
    'service1.webp': {
        sizes: [
            { width: 227, suffix: '227w', quality: 80 },
            { width: 454, suffix: '454w', quality: 75 },  // Retina
            { width: 640, suffix: '640w', quality: 70 }   // Mobile full width
        ],
        maxWidth: 227
    },
    'service2.webp': {
        sizes: [
            { width: 227, suffix: '227w', quality: 80 },
            { width: 454, suffix: '454w', quality: 75 },
            { width: 640, suffix: '640w', quality: 70 }
        ],
        maxWidth: 227
    },
    'service3.webp': {
        sizes: [
            { width: 227, suffix: '227w', quality: 80 },
            { width: 454, suffix: '454w', quality: 75 },
            { width: 640, suffix: '640w', quality: 70 }
        ],
        maxWidth: 227
    },
    'service4.webp': {
        sizes: [
            { width: 227, suffix: '227w', quality: 80 },
            { width: 454, suffix: '454w', quality: 75 },
            { width: 640, suffix: '640w', quality: 70 }
        ],
        maxWidth: 227
    },
    
    // Иконки преимуществ (advantage*.png/webp) - контейнер 112x111 (20vw desktop)
    'advantage1.webp': {
        sizes: [
            { width: 112, suffix: '112w', quality: 85 },
            { width: 224, suffix: '224w', quality: 80 }
        ],
        maxWidth: 112
    },
    'advantage2.png': {
        sizes: [
            { width: 112, suffix: '112w', quality: 85 },
            { width: 224, suffix: '224w', quality: 80 }
        ],
        maxWidth: 112,
        convertToWebP: true
    },
    'advantage3.png': {
        sizes: [
            { width: 112, suffix: '112w', quality: 85 },
            { width: 224, suffix: '224w', quality: 80 }
        ],
        maxWidth: 112,
        convertToWebP: true
    },
    
    // Флаги стран - контейнер 179x79 (20vw desktop)
    'Moldova.png': {
        sizes: [
            { width: 179, suffix: '179w', quality: 85 },
            { width: 358, suffix: '358w', quality: 80 }
        ],
        maxWidth: 179,
        convertToWebP: true
    },
    'Turkey.png': {
        sizes: [
            { width: 179, suffix: '179w', quality: 85 },
            { width: 358, suffix: '358w', quality: 80 }
        ],
        maxWidth: 179,
        convertToWebP: true
    },
    'China.png': {
        sizes: [
            { width: 179, suffix: '179w', quality: 85 },
            { width: 358, suffix: '358w', quality: 80 }
        ],
        maxWidth: 179,
        convertToWebP: true
    },
    'Romania.png': {
        sizes: [
            { width: 179, suffix: '179w', quality: 85 },
            { width: 358, suffix: '358w', quality: 80 }
        ],
        maxWidth: 179,
        convertToWebP: true
    },
    'Finland.png': {
        sizes: [
            { width: 179, suffix: '179w', quality: 85 },
            { width: 358, suffix: '358w', quality: 80 }
        ],
        maxWidth: 179,
        convertToWebP: true
    },
    'Latvia.png': {
        sizes: [
            { width: 179, suffix: '179w', quality: 85 },
            { width: 358, suffix: '358w', quality: 80 }
        ],
        maxWidth: 179,
        convertToWebP: true
    },
    'Ukraine.png': {
        sizes: [
            { width: 179, suffix: '179w', quality: 85 },
            { width: 358, suffix: '358w', quality: 80 }
        ],
        maxWidth: 179,
        convertToWebP: true
    },
    'Bulgaria.png': {
        sizes: [
            { width: 179, suffix: '179w', quality: 85 },
            { width: 358, suffix: '358w', quality: 80 }
        ],
        maxWidth: 179,
        convertToWebP: true
    },
    'Estonia.png': {
        sizes: [
            { width: 179, suffix: '179w', quality: 85 },
            { width: 358, suffix: '358w', quality: 80 }
        ],
        maxWidth: 179,
        convertToWebP: true
    },
    'Lithuania.png': {
        sizes: [
            { width: 179, suffix: '179w', quality: 85 },
            { width: 358, suffix: '358w', quality: 80 }
        ],
        maxWidth: 179,
        convertToWebP: true
    },
    
    // Логотип - контейнер 203x58 (15vw desktop)
    'logo_as.png': {
        sizes: [
            { width: 203, suffix: '203w', quality: 90 },
            { width: 406, suffix: '406w', quality: 85 }
        ],
        maxWidth: 203,
        convertToWebP: true
    },
    
    // Фоновое изображение для image-container-2
    'customs-clearence-services.jpg': {
        sizes: [
            { width: 1920, suffix: '1920w', quality: 80 },
            { width: 1280, suffix: '1280w', quality: 80 },
            { width: 768, suffix: '768w', quality: 75 }
        ],
        maxWidth: 1920,
        convertToWebP: true
    }
};

async function optimizeImage(filename, config) {
    const inputPath = path.join(imagesDir, filename);
    
    if (!fs.existsSync(inputPath)) {
        console.warn(`⚠️  Файл не найден: ${filename}`);
        return null;
    }
    
    console.log(`\n📸 Обработка: ${filename}`);
    
    try {
        const image = sharp(inputPath);
        const metadata = await image.metadata();
        
        console.log(`   Исходный размер: ${metadata.width}x${metadata.height}, формат: ${metadata.format}`);
        
        const results = [];
        
        // Если нужно конвертировать в WebP
        if (config.convertToWebP) {
            const webpFilename = filename.replace(/\.(png|jpg|jpeg)$/i, '.webp');
            const webpPath = path.join(imagesDir, webpFilename);
            
            // Создаем оптимизированную WebP версию исходного размера
            await image
                .webp({ quality: config.sizes[0].quality, effort: 6 })
                .toFile(webpPath);
            
            const webpStats = fs.statSync(webpPath);
            console.log(`   ✅ Создан WebP: ${webpFilename} (${(webpStats.size / 1024).toFixed(2)} KiB)`);
            
            // Теперь оптимизируем WebP версию
            const webpImage = sharp(webpPath);
            
            for (const size of config.sizes) {
                const outputFilename = webpFilename.replace('.webp', `-${size.suffix}.webp`);
                const outputPath = path.join(optimizedDir, outputFilename);
                
                await webpImage
                    .clone()
                    .resize(size.width, null, { withoutEnlargement: true })
                    .webp({ quality: size.quality, effort: 6 })
                    .toFile(outputPath);
                
                const stats = fs.statSync(outputPath);
                results.push({
                    filename: outputFilename,
                    width: size.width,
                    size: stats.size
                });
                
                console.log(`   ✅ ${size.suffix}: ${(stats.size / 1024).toFixed(2)} KiB`);
            }
        } else {
            // Оптимизируем существующий WebP
            for (const size of config.sizes) {
                const outputFilename = filename.replace('.webp', `-${size.suffix}.webp`);
                const outputPath = path.join(optimizedDir, outputFilename);
                
                await image
                    .clone()
                    .resize(size.width, null, { withoutEnlargement: true })
                    .webp({ quality: size.quality, effort: 6 })
                    .toFile(outputPath);
                
                const stats = fs.statSync(outputPath);
                results.push({
                    filename: outputFilename,
                    width: size.width,
                    size: stats.size
                });
                
                console.log(`   ✅ ${size.suffix}: ${(stats.size / 1024).toFixed(2)} KiB`);
            }
        }
        
        return results;
    } catch (error) {
        console.error(`   ❌ Ошибка при обработке ${filename}:`, error.message);
        return null;
    }
}

async function main() {
    console.log('🚀 Начало оптимизации изображений...\n');
    
    const results = {};
    
    for (const [filename, config] of Object.entries(optimizationConfig)) {
        const result = await optimizeImage(filename, config);
        if (result) {
            results[filename] = result;
        }
    }
    
    console.log('\n\n📊 Итоги оптимизации:');
    console.log('═══════════════════════════════════════');
    
    let totalOriginalSize = 0;
    let totalOptimizedSize = 0;
    
    for (const [filename, variants] of Object.entries(results)) {
        const originalPath = path.join(imagesDir, filename);
        if (fs.existsSync(originalPath)) {
            const originalStats = fs.statSync(originalPath);
            totalOriginalSize += originalStats.size;
            
            const smallestVariant = variants.reduce((min, v) => v.size < min.size ? v : min, variants[0]);
            totalOptimizedSize += smallestVariant.size;
            
            const savings = ((1 - smallestVariant.size / originalStats.size) * 100).toFixed(1);
            console.log(`\n${filename}:`);
            console.log(`  Исходный: ${(originalStats.size / 1024).toFixed(2)} KiB`);
            console.log(`  Оптимизированный: ${(smallestVariant.size / 1024).toFixed(2)} KiB`);
            console.log(`  Экономия: ${savings}%`);
        }
    }
    
    const totalSavings = ((1 - totalOptimizedSize / totalOriginalSize) * 100).toFixed(1);
    console.log('\n═══════════════════════════════════════');
    console.log(`Общая экономия: ${((totalOriginalSize - totalOptimizedSize) / 1024).toFixed(2)} KiB (${totalSavings}%)`);
    console.log('\n✅ Оптимизация завершена!');
    console.log(`📁 Оптимизированные изображения сохранены в: ${optimizedDir}`);
    console.log('\n💡 Следующий шаг: обновите HTML файлы для использования srcset.');
}

main().catch(console.error);

