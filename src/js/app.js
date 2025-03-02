import { createMarkup } from "./operation/createMarkup.js";
import { getEventApi } from "./service/getEventApi.js";

const paginationList = document.querySelector(".main__pagination-list");

export let page = 1;

getEventApi(page, "").then((data) => {
    createMarkup(data._embedded)
});

paginationList.addEventListener("click", pagination);

function pagination(event) {
    const element = event.target;

    if (!element.classList.contains("main__pagination-button")){
        return
    }

    let activeItem = document.querySelector(".active");
    let activeButton = document.querySelector(".active-button");

    page = Number(element.textContent);

    getEventApi(page, "").then((data) => {
        createMarkup(data._embedded)
    });

    console.log(activeItem)
    console.log(activeButton)
    console.log(element.parentNode)

    activeItem.classList.remove("active")
    activeButton.classList.remove("active-button")
    element.classList.add("active-button")
    element.parentNode.classList.add("active")
}