// // popup.js - Handles user settings

// document.getElementById("save").addEventListener("click", () => {
//   const messageType = document.getElementById("messageType").value;
//   chrome.storage.sync.set({ messageType }, () => {
//     alert("Settings saved!");
//   });
// });
document.getElementById("save").addEventListener("click", () => {
  const customContent = document.getElementById("customContent").value;
  chrome.storage.sync.set({ customContent }, () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { customContent });
    });
  });
});

// Load saved content
chrome.storage.sync.get("customContent", (data) => {
  document.getElementById("customContent").value = data.customContent || "";
});
