import{S as a}from"./assets/vendor-d5aa4654.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function c(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function o(t){if(t.ep)return;t.ep=!0;const e=c(t);fetch(t.href,e)}})();const d=document.querySelector(".form-control"),i=document.querySelector(".loader"),s=document.querySelector(".gallery");d.addEventListener("submit",l=>{l.preventDefault();const c=`https://pixabay.com/api/?key={42271393-ceafa19bde7d0a63fb15d5d6f}&q=${document.querySelector("#keyword").value}&image_type=photo&orientation=horizontal&safesearch=true`;i.style.display="block",s.innerHTML="",fetch(c).then(o=>o.json()).then(o=>{if(i.style.display="none",o.hits.length===0){s.innerHTML="No results found.";return}o.hits.forEach(e=>{const r=document.createElement("img");r.src=e.webformatURL,r.alt=e.tags,r.addEventListener("click",()=>{new a().open({items:[{src:e.largeImageURL,caption:`Likes: ${e.likes}, Views: ${e.views}, Comments: ${e.comments}, Downloads: ${e.downloads}`}]})}),s.appendChild(r)}),new a().refresh()}).catch(o=>{i.style.display="none",s.innerHTML="Error fetching images.",console.error(o)})});
//# sourceMappingURL=commonHelpers.js.map
