function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},t={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in t){var n=t[e];delete t[e];var i={id:e,exports:{}};return r[e]=i,n.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,n){t[e]=n},n.parcelRequired7c6=i),i("5I0Ww"),i("b5rV1");var o=i("eWps1"),a=i("b5rV1"),l=i("7Y9D8");const s=document.querySelector(".lib-container"),c=document.querySelector(".menu__link__library"),d=document.querySelector(".library__link__watched"),u=document.querySelector(".library__link__queue");function p(){s.innerHTML="",(0,o.spin)();try{return 0===a.watchedMovies.length?void f():v(a.watchedMovies)}catch(e){console.error("Set state error: ",e.message)}finally{(0,o.stopSpin)()}}function f(){return e(l).Notify.failure("Sorry, there is no any movie in your library yet.")}function v(e){const n=e.map((e=>{const n=new Date(`${e.release_date}`).getFullYear(),r=e.genres.map((e=>e.name));let t="";var i;return t=r.length>2?(i=r,i.slice(0,2)).join(", ")+", other":r.join(", "),`\n      <div class="thumb">\n    <ul class="carditem" data-id='${e.id}'>\n        <li class="cardimg-wrap">\n            <img src="https://image.tmdb.org/t/p/w500/${e.poster_path}" alt="poster of the movie ${e.original_title}"\n                class="cardimg"\n            />\n        </li>\n        <li class="cardtext-wrap">\n            <h2 class="cardname">${e.original_title}</h2>\n            <div class="cardinfo">\n                <p class="cardgenres">${t}</span></p>\n                <p class="cardyear">${n}</p>\n            </div>\n        </li>\n    </ul>\n</div>`})).join("");return s.insertAdjacentHTML("beforeend",n),n}c.addEventListener("click",p),d.addEventListener("click",p),u.addEventListener("click",(function(){s.innerHTML="",(0,o.spin)();try{if(0===a.queuedMovies.length)return void f();v(a.queuedMovies)}catch(e){console.error("Set state error: ",e.message)}finally{(0,o.stopSpin)()}})),c.addEventListener("click",p),(0,o.spin)(),(0,o.stopSpin)(),v(a.watchedMovies),i("bBYeD"),i("3sLj0");
//# sourceMappingURL=library.4375ea8a.js.map