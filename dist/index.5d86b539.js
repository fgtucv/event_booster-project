!function(){let e=document.querySelector(".main__list");function t(t){console.log(t);let n=t.events.map(e=>`<li class="main__item">
                     <div class="main__style-div"></div>
                     <img class="main__img" src="${e.images[0].url}" alt="poster"/>
                     <h2 class="main__title">${e.name}</h2>
<span class="main__locate">${e.locale}</span>
                   </li>`).join("");e.innerHTML=n}let n=document.querySelector(".bacdrop"),c=document.querySelector(".main__list"),i=document.querySelector(".modal_close-button"),a=document.querySelector(".modal_event-logo"),s=document.querySelector(".modal_poster");c.addEventListener("click",function(e){let t=e.target.parentNode;(t.parentElement.classList.contains("main__item")||t.classList.contains("main__item"))&&(n.classList.remove("is-hidden"),a.src=t.querySelector(".main__img").src,s.src=t.querySelector(".main__img").src)}),i.addEventListener("click",function(){n.classList.add("is-hidden")});let o=async(e,t)=>{if(""===t||null==t)try{return await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=RKwTp5P44ztFFCbPCDFoxyCASf3hPfPS&size=20&page=${e}`).then(e=>e.json())}catch(e){return e}else try{return await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=RKwTp5P44ztFFCbPCDFoxyCASf3hPfPS&size=20&page=${e}&keyword=${t}`).then(e=>e.json())}catch(e){return e}},l=document.querySelector(".main__pagination-list"),r=1;o(1,"").then(e=>{t(e._embedded)}),l.addEventListener("click",function(e){let n=e.target;if(!n.classList.contains("main__pagination-button"))return;let c=document.querySelector(".active"),i=document.querySelector(".active-button");o(r=Number(n.textContent),"").then(e=>{t(e._embedded)}),console.log(c),console.log(i),console.log(n.parentNode),c.classList.remove("active"),i.classList.remove("active-button"),n.classList.add("active-button"),n.parentNode.classList.add("active")});let d=document.querySelector(".header__input-searc");d.addEventListener("input",_.debounce(()=>{!function(){let e=d.value;o(r,e).then(e=>{t(e._embedded)})}()},500))}();
//# sourceMappingURL=index.5d86b539.js.map
