var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var r=o[e];delete o[e];var n={id:e,exports:{}};return t[e]=n,r.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},e.parcelRequired7c6=r),r("b5rV1");var n=r("9ihTn");const i=document.querySelector(".modal"),c=document.querySelector(".js-movie-title"),d=document.querySelector(".js-movie-poster"),l=document.querySelector(".js-movie-vote"),u=document.querySelector(".js-movie-votes"),s=document.querySelector(".js-movie-popularity"),a=document.querySelector(".js-movie-original-title"),m=document.querySelector(".js-movie-genre"),v=document.querySelector(".js-movie-excerpt"),p=document.querySelector(".modal__btn--close"),y=document.querySelector(".trailerBtn"),f=document.querySelector(".watchedBtn"),q=document.querySelector(".queueBtn");p.addEventListener("click",g),i.addEventListener("click",(function(e){e.target===e.currentTarget&&g()}));function g(){window.removeEventListener("keydown",S),i.classList.remove("modal--visible")}function S(e){"Escape"===e.code&&g()}document.querySelector(".js-movies-wrapper").addEventListener("click",(e=>{const t=e.target.closest(".carditem");if(!t)return;const o=t.dataset.id;console.log(o),(0,n.default)(o).then((e=>{d.src=`https://image.tmdb.org/t/p/w500${e.poster_path}`,c.textContent=e.title,l.textContent=`${e.vote_average}`,u.textContent=`${e.vote_count}`,s.textContent=`${e.popularity}`,a.textContent=e.original_title,m.textContent=e.genres.map((e=>e.name)).join(", "),v.textContent=e.overview})).catch((e=>{console.error(e)})),y.setAttribute("data-movie-id",o),f.setAttribute("data-movie-id",o),q.setAttribute("data-movie-id",o),i.classList.add("modal--visible")})),r("3sLj0"),r("bBYeD");
//# sourceMappingURL=library.5b2d8776.js.map
