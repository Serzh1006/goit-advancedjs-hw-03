(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const f=s=>{try{return fetch(`https://pixabay.com/api/?key=36524518-a58dcdc8b7630db8edc13e4de&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}catch(r){console.log(r,"500: Server error!")}},u=s=>s.reduce((r,{webformatURL:o,largeImageURL:i,tags:e,likes:t,views:l,comments:a,downloads:d})=>r+`<li class="gallery-item">
    <div class="img-wrap">
      <a class="gallery-link" href="${i}">
          <img src="${o}" alt="${e}" width="360" />
          </a></div>
        <div class="gallery-wrap-info">
          <div class="second-wrap-info">
            <h2 class="gallery-info-title">likes</h2>
            <p class="gallery-info-text">${t}</p>
          </div>
          <div class="second-wrap-info">
            <h2 class="gallery-info-title">views</h2>
            <p class="gallery-info-text">${l}</p>
          </div>
          <div class="second-wrap-info">
            <h2 class="gallery-info-title">comments</h2>
            <p class="gallery-info-text">${a}</p>
          </div>
          <div class="second-wrap-info">
            <h2 class="gallery-info-title">downloads</h2>
            <p class="gallery-info-text">${d}</p>
          </div>
        </div>
    </li>`,""),c=document.querySelector(".gallery"),n=document.querySelector(".form");n.addEventListener("submit",s=>{s.preventDefault();const r=s.target.elements[0].value;if(r.trim()===""){console.log("Please enter text!");return}f(r.trim()).then(o=>{if(o.hits.length===0){console.log("Sorry, there are no images matching your search query. Please try again!"),c.innerHTML="",n.reset();return}const i=u(o.hits);c.innerHTML=i,n.reset()}).catch(o=>console.log(o))});
//# sourceMappingURL=index.js.map
