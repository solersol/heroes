// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    adjustSectionHeight();
});

window.addEventListener('resize', function() {
    adjustSectionHeight();
});

function adjustSectionHeight() {
    const section = document.querySelector('.section.started');
    if (section) {
        const bgImage = new Image();
        bgImage.src = getComputedStyle(section).backgroundImage.replace(/url\(['"]?(.*?)['"]?\)/i, "$1");
        bgImage.onload = function() {
            section.style.minHeight = `${bgImage.height}px`;
        };
    }
}
