// copyToClipboard.js
document.addEventListener('DOMContentLoaded', function() {
    const copyTextDiv = document.getElementById('copyText');
    if (copyTextDiv) {
        copyTextDiv.addEventListener('click', function() {
            // Create a temporary textarea element to hold the text
            const tempTextarea = document.createElement('textarea');
            tempTextarea.value = this.textContent;
            document.body.appendChild(tempTextarea);

            // Select the text
            tempTextarea.select();
            tempTextarea.setSelectionRange(0, 99999); // For mobile devices

            // Copy the text to the clipboard
            document.execCommand('copy');

            // Remove the temporary textarea
            document.body.removeChild(tempTextarea);

            // Show the copied notification
            showCopiedNotification();
        });
    }
});

function showCopiedNotification() {
    const notification = document.createElement('div');
    notification.className = 'copied-notification show';
    notification.textContent = 'Copied!';
    document.body.appendChild(notification);

    // Remove the notification after 2 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300); // Wait for the transition to complete
    }, 2000);
}
