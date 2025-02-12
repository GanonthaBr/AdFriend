// Commonly used Ads selectors
const adSelectors = [
  "iframe",
  "iframe[class*='ad']",
  'div[id*="ads"]',
  'div[class*="GoogleCreativeContainerClass"]',
  'div[class*="ads"]',
];

let content = `
  <div class="adFriend" style="background:rgb(93, 170, 211); padding: 10px; border-radius: 5px; text-align: center; font-size: 14px; animation: backgroundColorChange 10s infinite;">
    <h3 style="color:#fff;font-weight:bold">🚀YOUR DESIRED CONTENT🚀</h3>
    ${getMessage()}
    <p>😊</p>
  </div>
`;

// Add CSS for animation
const style = document.createElement("style");
style.innerHTML = `
  @keyframes backgroundColorChange {
    0% { background-color: rgb(93, 170, 211); }
    25% { background-color: rgb(77, 224, 182); }
    50% { background-color: rgb(20, 144, 210); }
    75% { background-color: rgb(150, 226, 129); }
    100% { background-color: rgb(20, 144, 210); }
  }
`;
document.head.appendChild(style);

// our function that catch ads elements and replace them
function getAds_Replace() {
  adSelectors.forEach((selector) => {
    document.querySelectorAll(selector).forEach((element) => {
      // Preserve original dimensions
      const originalStyle = window.getComputedStyle(element);
      element.innerHTML = content;
      element.style.width = originalStyle.width;
      element.style.height = originalStyle.height;
    });
  });
}

// Run the function for initial check
getAds_Replace();

// Now observe any mutation of Nodes every 10 secs then run the function again
const observer = new MutationObserver(() => {
  var timeout;

  clearTimeout(timeout);
  // 2 secs wait before running
  timeout = setTimeout(() => {
    getAds_Replace();
  }, 2000);
});
observer.observe(document.body, { childList: true, subtree: true });

// Listen for custom content updates
chrome.runtime.onMessage.addListener((request) => {
  if (request.customContent) {
    customContent = request.customContent;
    getAds_Replace();
  }
});

function getMessage() {
  const messages = [
    "Keep pushing forward!",
    "You are doing great!",
    "Believe in yourself!",
    "Stay focused and positive!",
    "Every step counts!",
  ];

  return messages[Math.floor(Math.random() * messages.length)];
}
