!function(){let e=document.querySelector(".main__list");function t(t){console.log(t);let n=t.events.map(e=>`<li class="main__item">
                     <div class="main__style-div"></div>
                     <img class="main__img" src="${e.images[0].url}" alt="poster"/>
                     <h2 class="main__title">${e.name}</h2>
<span class="main__locate">${e.locale}</span>
                   </li>`).join("");e.innerHTML=n}let n=document.querySelector(".bacdrop"),i=document.querySelector(".main__list"),a=document.querySelector(".modal_close-button");i.addEventListener("click",function(e){let t=e.target;(t.parentElement.classList.contains("main__item")||t.classList.contains("main__item"))&&n.classList.remove("is-hidden")}),a.addEventListener("click",function(){n.classList.add("is-hidden")});let s=async(e,t)=>{if(""===t||null==t)try{return await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=RKwTp5P44ztFFCbPCDFoxyCASf3hPfPS&size=20&page=${e}`).then(e=>e.json())}catch(e){return e}else try{return await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=RKwTp5P44ztFFCbPCDFoxyCASf3hPfPS&size=20&page=${e}&keyword=${t}`).then(e=>e.json())}catch(e){return e}},c=document.querySelector(".main__pagination-list"),o=1;s(1,"").then(e=>{t(e._embedded)}),c.addEventListener("click",function(e){let n=e.target;if(!n.classList.contains("main__pagination-button"))return;let i=document.querySelector(".active"),a=document.querySelector(".active-button");s(o=Number(n.textContent),"").then(e=>{t(e._embedded)}),console.log(i),console.log(a),console.log(n.parentNode),i.classList.remove("active"),a.classList.remove("active-button"),n.classList.add("active-button"),n.parentNode.classList.add("active")});let l=document.querySelector(".header__input-searc");l.addEventListener("input",_.debounce(()=>{!function(){let e=l.value;s(o,e).then(e=>{t(e._embedded)})}()},500))}();
//# sourceMappingURL=index.a62fdef4.js.map
