// background.js - Handles extension events and settings
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ messageType: "motivational" });
  console.log("AdFriend");
});

// Listen for messages from content scripts
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "getMessageType") {
    chrome.storage.sync.get("messageType", (data) => {
      sendResponse({ messageType: data.messageType || "motivational" });
    });
    return true;
  }
});
