const list = document.querySelector(".main__list");

export function createMarkup(arr) {
    console.log(arr)
    const html = arr.events.map((item) => {
        return `<li class="main__item">
                     <div class="main__style-div"></div>
                     <img class="main__img" src="${item.images[0].url}" alt="poster"/>
                     <h2 class="main__title">${item.name}</h2>
<span class="main__locate">${item.locale}</span>
                   </li>`;
    }).join("");

    list.innerHTML = html;
}