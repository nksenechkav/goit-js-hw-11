import"./assets/vendor-60237e46.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const a={formEl:document.querySelector('.js-search-form[data-id="js-search-image"]'),imageEl:document.querySelector(".js-image-container")};a.formEl.addEventListener("submit",t=>{t.preventDefault();const s=t.target.elements.query.value;c(s).then(o=>{d(o)}),t.target.reset()});function c(t){const s="https://pixabay.com",o="/api/",i=`?key=42271393-ceafa19bde7d0a63fb15d5d6f&q=${t}&image_type=photo&orientation=horizontal&safesearch=true`,e=s+o+i;return fetch(e).then(r=>r.json())}function l(t){return`<div class="image-card card">
    <div class="image-container">
      <img
        src="${t.hits.webformatURL}"
        alt="${t.hits.tags}"
        class="search-image"
      />
    </div>
    <div class="image-body">
      <h4 class="image-info">${t.hits.likes}</h4>
      <h4 class="image-info">${t.hits.views}</h4>
      <h4 class="image-info">${t.hits.comments}</h4>
      <h4 class="image-info"> ${t.hits.downloads}</h4>
    </div>
  </div>`}function d(t){const s=l(t);a.imageEl.insertAdjacentHTML("afterbegin",s)}
//# sourceMappingURL=commonHelpers.js.map
