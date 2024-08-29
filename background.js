chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'siteCheckResult') {
      console.log('Background script received result:', message.result);

      // Store the result in local storage
      chrome.storage.local.set({ siteCheckResult: message.result }, () => {
          if (chrome.runtime.lastError) {
              console.error('Background script storage error:', chrome.runtime.lastError.message);
          }
          // Respond to the message to indicate success
          sendResponse({ status: 'success' });
      });

      // Return true to indicate you will send a response asynchronously
      return true;
  }
});
