const bacdrop = document.querySelector(".bacdrop");
const openButton = document.querySelector(".main__list");
const closeButton = document.querySelector(".modal_close-button");

openButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);

function openModal(event) {
    const element = event.target;

    if(element.parentElement.classList.contains("main__item") || element.classList.contains("main__item")){
        bacdrop.classList.remove("is-hidden");
    } else{
        return;
    }
}

function closeModal() {
    bacdrop.classList.add("is-hidden");
}