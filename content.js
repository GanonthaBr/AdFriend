// content.js - Detects and replaces ads with positive content

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    replaceAds();
  });
} else {
  replaceAds();
}
function replaceAds() {
  const adSelectors = [
    "iframe", // Many ads are inside iframes
    "ins", // Used for Google AdSense
    '[id*="ads*"]', // Elements with "ad" in ID
    '[id*="google_image"]', // Elements with "ad" in ID
    '[class*="ads*"]', // Elements with "ad" in class name
    '[class*="GoogleActiveViewElement"]', // Elements with "ad" in class name
    '[class*="GoogleCreativeContainerClass"]', // Elements with "ad" in class name
    '[class*="celtra-screen-object"]', // Elements with "ad" in class name
    '[class*="canvasSize"]', // Elements with "ad" in class name
    '[id*="sponsored-*"]', // Elements with "sponsored" in ID
    '[class*="sponsored-*"]', // Elements with "sponsored" in class
  ];

  adSelectors.forEach((selector) => {
    document.querySelectorAll(selector).forEach((ad) => {
      console.log(ad);

      const widget = document.createElement("div");
      widget.style.cssText =
        "background:rgb(26, 127, 182); padding: 10px; border-radius: 5px; text-align: center; font-size: 14px;";
      widget.innerText = getPositiveMessage();
      ad.replaceWith(widget);
    });
  });
}

const adClassRegEx = /(^|\s)(ads?|sponsored)(\s|$)/;
// Function to handle newly added nodes
function handleMutations(mutations) {
  mutations.forEach((mutation) => {
    mutation.addedNodes.forEach((node) => {
      if (node.nodeType === Node.ELEMENT_NODE) {
        const className = node.className || "";
        const id = node.id || "";
        // Check if the new node matches the ad-related pattern
        if (adClassRegEx.test(className) || adClassRegEx.test(id)) {
          // Replace the ad with a positive message
          const widget = document.createElement("div");
          widget.style.cssText =
            "background:rgb(26, 127, 182); padding: 10px; border-radius: 5px; text-align: center; font-size: 14px;";
          widget.innerText = getPositiveMessage();
          ad.replaceWith(widget);
        }
      }
    });
  });
}

// Create a MutationObserver instance
const observer = new MutationObserver(handleMutations);

// Start observing the document body for child additions
observer.observe(document.body, { childList: true, subtree: true });

function getPositiveMessage() {
  const messages = [
    "Keep pushing forward!",
    "You are doing great!",
    "Believe in yourself!",
    "Stay focused and positive!",
    "Every step counts!",
  ];
  return messages[Math.floor(Math.random() * messages.length)];
}
