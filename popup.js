document.getElementById("save").addEventListener("click", () => {
  const customContent = document.getElementById("customContent").value;
  chrome.storage.sync.set({ messageType }, () => {
    alert("Settings saved!");
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { messageType });
    });
  });
});

// Load saved content
chrome.storage.sync.get("messageType", (data) => {
  document.getElementById("customContent").value = data.messageType || "";
});
