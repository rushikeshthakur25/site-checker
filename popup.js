document.addEventListener('DOMContentLoaded', () => {
    const statusElement = document.getElementById('status');

    function updatePopup(statusMessage, statusClass) {
        statusElement.innerText = statusMessage;
        statusElement.className = statusClass;
    }

    // Retrieve the stored site check result from storage
    chrome.storage.local.get('siteCheckResult', (data) => {
        if (chrome.runtime.lastError) {
            console.error('Popup script runtime error:', chrome.runtime.lastError.message);
            updatePopup('Error checking the site.', 'error');
        } else {
            const result = data.siteCheckResult || 'Error checking the site.';
            console.log('Popup retrieved site check result:', result);
            updatePopup(result, result.includes('Warning') ? 'warning' : 'status');
        }
    });
});
