(function() {
  "use strict";
  try {
    if (typeof document != "undefined") {
      var elementStyle = document.createElement("style");
      elementStyle.appendChild(document.createTextNode("@layer reset {\n  * {\n    margin: 0;\n    padding: 0;\n  }\n\n  html, body {\n    height: 100%;\n  }\n}\n\n@layer base-color {\n  :root {\n    --bg-color: #121212;\n    --text-color: #ccc;\n  }\n}\n\nbody {\n  color: var(--text-color);\n  background-color: var(--bg-color);\n}\n\n#app {\n  place-items: center;\n  height: 100%;\n  display: grid;\n}"));
      document.head.appendChild(elementStyle);
    }
  } catch (e) {
    console.error("vite-plugin-css-injected-by-js", e);
  }
})();
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
let instance = null;
let counter = 0;
class Counter {
  constructor() {
    if (!instance) {
      instance = this;
    }
    return instance;
  }
  getCounter() {
    return counter;
  }
  increase() {
    counter++;
  }
}
document.addEventListener("DOMContentLoaded", (evt) => {
  let counter1 = new Counter();
  let counter2 = new Counter();
  let counter3 = new Counter();
  counter1.increase();
  console.log(counter1.getCounter());
  counter2.increase();
  console.log(counter2.getCounter());
  counter3.increase();
  console.log(counter3.getCounter());
  console.log(counter1 === counter3);
});
