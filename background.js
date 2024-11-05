function updateBadgeText() {
    chrome.tabs.query({}, (tabs) => {
      const tabCount = tabs.length;
      chrome.action.setBadgeText({
        text: tabCount.toString(),
      }, () => {
        if (chrome.runtime.lastError) {
          console.error(chrome.runtime.lastError);
        } else {
          console.log('Badge text set successfully');
        }
      });
    });
  }
  
  // Update the badge text whenever a tab is created, updated, or removed
  chrome.tabs.onCreated.addListener(updateBadgeText);
  chrome.tabs.onUpdated.addListener(updateBadgeText);
  chrome.tabs.onRemoved.addListener(updateBadgeText);
  
  // Initial update when the extension is loaded
  updateBadgeText();