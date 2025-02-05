// content.js - Detects and replaces ads with positive content
document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");
});
document.addEventListener("DOMContentLoaded", replaceAds);

function replaceAds() {
  console.log("GOT HERE NOW>>>>>>");
  const adSelectors = [
    "iframe", // Many ads are inside iframes
    "ins", // Used for Google AdSense
    '[id*="ad"]', // Elements with "ad" in ID
    '[class*="ad"]', // Elements with "ad" in class name
    '[id*="sponsored"]', // Elements with "sponsored" in ID
    '[class*="sponsored"]', // Elements with "sponsored" in class
    '[id*="banner"]', // Banner ads
    '[class*="banner"]', // Banner ads
  ];
  adSelectors.forEach((selector) => {
    document.querySelectorAll(selector).forEach((ad) => {
      console.log(ad);
      console.log("YEAH");
      const widget = document.createElement("div");
      widget.style.cssText =
        "background:rgb(182, 26, 26); padding: 10px; border-radius: 5px; text-align: center; font-size: 14px;";
      widget.innerText = getPositiveMessage();
      ad.replaceWith(widget);
    });
  });
}

function getPositiveMessage() {
  const messages = [
    "Keep pushing forward!",
    "You are doing great!",
    "Believe in yourself!",
    "Stay focused and positive!",
    "Every step counts!",
  ];
  console.log("REACHED HERE!");
  return messages[Math.floor(Math.random() * messages.length)];
}
