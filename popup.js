// popup.js - Handles user settings

document.getElementById("save").addEventListener("click", () => {
  const messageType = document.getElementById("messageType").value;
  chrome.storage.sync.set({ messageType }, () => {
    alert("Settings saved!");
  });
});
