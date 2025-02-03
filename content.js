// content.js - Detects and replaces ads with positive content

function replaceAds() {
  const adSelectors = ["iframe", "ins", "[id*=advert]", "[class*=advert]"];
  adSelectors.forEach((selector) => {
    document.querySelectorAll(selector).forEach((ad) => {
      const widget = document.createElement("div");
      widget.style.cssText =
        "background: #f4f4f4; padding: 10px; border-radius: 5px; text-align: center; font-size: 14px;";
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
  return messages[Math.floor(Math.random() * messages.length)];
}

document.addEventListener("DOMContentLoaded", replaceAds);
