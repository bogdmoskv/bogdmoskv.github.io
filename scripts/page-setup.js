window.addEventListener('load', () => {
    setTimeout(matchTextHeight, 100);
});

//Срабатывает каждый раз, когда изменяется размер окна 
window.addEventListener('resize', matchTextHeight);

function matchTextHeight() {
    setMaxHeight('.advantage-row-1 .advantage-text');
    setMaxHeight('.advantage-row-2 .advantage-text');
    setMaxHeight('.advantage-row-3 .advantage-text');
    setMaxHeight('.advantage-row-4 .advantage-text');
}

function setMaxHeight(selector) {
    const textBlocks = document.querySelectorAll(selector);
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
        textBlocks.forEach(el => {
            el.style.height = 'auto';
            const currentHeight = el.offsetHeight;      
            el.style.height = (currentHeight + 20) + 'px';
        });
    } else {
        let maxHeight = 0;

        //сбросим старые высоты и найдём максимальную
        textBlocks.forEach(el => {
            el.style.height = 'auto';
            maxHeight = Math.max(maxHeight, el.offsetHeight);
        });

        //зададим всем одинаковую
        textBlocks.forEach(el => {
            el.style.height = (maxHeight + 30) + 'px';
        });
    }
}



