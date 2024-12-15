import{i as a,S as u}from"./assets/vendor-5ObWk2rO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const p=i=>{try{return fetch(`https://pixabay.com/api/?key=36524518-a58dcdc8b7630db8edc13e4de&q=${i}&image_type=photo&orientation=horizontal&safesearch=true`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}catch(t){console.log(t,"500: Server error!")}},y=i=>i.reduce((t,{webformatURL:o,largeImageURL:s,tags:e,likes:r,views:n,comments:d,downloads:f})=>t+`<li class="gallery-item">
    <div class="img-wrap">
      <a class="gallery-link" href="${s}">
          <img src="${o}" alt="${e}" width="360" />
          </a></div>
        <div class="gallery-wrap-info">
          <div class="second-wrap-info">
            <h2 class="gallery-info-title">likes</h2>
            <p class="gallery-info-text">${r}</p>
          </div>
          <div class="second-wrap-info">
            <h2 class="gallery-info-title">views</h2>
            <p class="gallery-info-text">${n}</p>
          </div>
          <div class="second-wrap-info">
            <h2 class="gallery-info-title">comments</h2>
            <p class="gallery-info-text">${d}</p>
          </div>
          <div class="second-wrap-info">
            <h2 class="gallery-info-title">downloads</h2>
            <p class="gallery-info-text">${f}</p>
          </div>
        </div>
    </li>`,""),c=document.querySelector(".gallery"),l=document.querySelector(".form");l.addEventListener("submit",i=>{i.preventDefault();const t=i.target.elements[0].value;if(t.trim()===""){a.info({title:"Oops...",message:"Please enter text!",position:"topRight"});return}p(t.trim()).then(o=>{if(o.hits.length===0){a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomCenter"}),c.innerHTML="",l.reset();return}const s=y(o.hits);c.innerHTML=s,l.reset()}).catch(o=>console.log(o))});new u(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});
//# sourceMappingURL=index.js.map
