// -- To show the count in a popup
// chrome.tabs.query({}, (tabs) => {
//     const tabCount = tabs.length;
//     document.getElementById('tab-count').textContent = `Total Tabs: ${tabCount}`;
// });

// -- To show the count in a badge
// chrome.tabs.query({}, (tabs) => {
//   const tabCount = tabs.length;
//   chrome.action.setBadgeText({
//     text: tabCount.toString(),
//   }, () => {
//     if (chrome.runtime.lastError) {
//         console.error(chrome.runtime.lastError);
//       } else {
//         console.log('Badge text set successfully');
//       }
//   });
// });

// // Update the badge text whenever a tab is created, updated, or removed
// chrome.tabs.onCreated.addListener(() => {
//   updateBadgeText();
// });
// chrome.tabs.onUpdated.addListener(() => {
//   updateBadgeText();
// });
// chrome.tabs.onRemoved.addListener(() => {
//   updateBadgeText();
// });

// function updateBadgeText() {
//   chrome.tabs.query({}, (tabs) => {
//     const tabCount = tabs.length;
//     chrome.action.setBadgeText({
//       text: tabCount.toString(),
//     });
//   });
// }
