// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const ticker = document.getElementById('ticker');
    if (ticker) {
        const tickerItems = ticker.querySelectorAll('.ticker-item');
        let totalWidth = 0;

        tickerItems.forEach(item => {
            totalWidth += item.offsetWidth + parseInt(window.getComputedStyle(item).marginRight);
        });

        let animationDuration = totalWidth / 100; // Adjust speed based on total width

        // Clone the ticker content for seamless looping
        const clone = ticker.cloneNode(true);
        ticker.parentNode.replaceChild(clone, ticker);

        // Set animation duration and handle animation end to restart
        clone.style.animation = `tickerScroll ${animationDuration}s linear`;
        clone.addEventListener('animationiteration', () => {
            clone.style.animation = 'none';
            setTimeout(() => {
                clone.style.animation = `tickerScroll ${animationDuration}s linear`;
            }, 0);
        });
    }
});
