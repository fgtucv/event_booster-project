import data from "../json/base.json";
// import img from "../"

console.log(data);

const list = document.querySelector(".main__list");

function buildList(itemsArray) {
    const html = itemsArray.map((item) => {
        return `<li data-locate="${item.data}" class="main__item">
                     <div class="main__style-div"></div>
                     <img class="main__img" src="${item.img}" alt="poster"/>
                     <h2 class="main__title">${item.title}</h2>
                     <span class="main__date">${item.date}</span><span class="main__locate">${item.location}</span>
                   </li>`;
    }).join("");

    list.innerHTML = html;

}

buildList(data);