(function () {
    const blocklist = [
        "0815.su", "0317123.cn", "07819.cf", "0039.cf", "021.com", "02466.cf",
        "45kti.xyz", "b2bx.net", "iq2kq5bfdw2a6.ga", "suxt3eifou1eo5plgv.cf",
        "szi4edl0wnab3w6inc.gq", "uqxcmcjdvvvx32.cf", "avito-boxberry.ru",
        "avito-dilivery.ru", "avito-office.ru", "avito-package.ru",
        "avito-payshops.ru", "avito-repayment.online", "avito-safe-order.online",
        "testphp.vulnweb.com", "vulnweb.com", "phishing-site.com", 
        "badsites.example.com", "malicious-site.org" 
    ];
    const url = window.location.href;
    const domain = new URL(url).hostname.toLowerCase(); // Normalize domain to lowercase

    function isBlocked(domain, blocklist) {
        return blocklist.some(blockedDomain => domain === blockedDomain || domain.endsWith(`.${blockedDomain}`));
    }

    const isScam = isBlocked(domain, blocklist);
    const result = isScam
        ? `Warning: The site ${domain} is potentially a scam!`
        : `The site ${domain} appears to be original and safe.`;

    console.log(`Content script check result: ${result}`);

    // Store the result in chrome.storage.local
    chrome.storage.local.set({ siteCheckResult: result }, () => {
        if (chrome.runtime.lastError) {
            console.error('Content script storage set error:', chrome.runtime.lastError.message);
        } else {
            console.log('Result successfully stored in chrome.storage.local');
        }
    });

    // Optionally send a message to the background script
    chrome.runtime.sendMessage({ action: 'siteCheckResult', result }, (response) => {
        if (chrome.runtime.lastError) {
            console.error('Content script message send error:', chrome.runtime.lastError.message);
        } else {
            console.log('Message sent to background script:', response);
        }
    });
})();
