import"./assets/vendor-60237e46.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const n={formEl:document.querySelector('.js-search-form[data-id="js-search-image"]'),imageEl:document.querySelector(".js-image-container")};n.formEl.addEventListener("submit",o=>{o.preventDefault();const r=o.target.elements.query.value;a(r).then(s=>{console.log(s),console.log(l(s))}),o.target.reset()});function a(o){const r="https://pixabay.com",s="/api/",i=`?key=42271393-ceafa19bde7d0a63fb15d5d6f&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`,e=r+s+i;return fetch(e).then(t=>t.json())}function l({webformatURL:o,tags:r,likes:s,views:i,comments:e,downloads:t}){return`<div class="image-card card">
    <div class="image-container">
      <img
        src="${o}"
        alt="${r}"
        class="search-image"
      />
    </div>
    <div class="image-body">
      <h4 class="image-info">${s}</h4>
      <h4 class="image-info">${i}</h4>
      <h4 class="image-info">${e}</h4>
      <h4 class="image-info"> ${t}</h4>
    </div>
  </div>`}
//# sourceMappingURL=commonHelpers.js.map
