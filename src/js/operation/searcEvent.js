import { page } from "../app.js"
import { getEventApi } from "../service/getEventApi.js";
import { createMarkup } from "./createMarkup.js"

const searcInput = document.querySelector(".header__input-searc");

searcInput.addEventListener("input", _.debounce(() => {
    searcPost()
}, 500));

function searcPost() {
    const keyWord = searcInput.value;

    getEventApi(page, keyWord).then((data) => {
        createMarkup(data._embedded)
    });
}