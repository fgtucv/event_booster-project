const bacdrop = document.querySelector(".bacdrop");
const openButton = document.querySelector(".main__list");
const closeButton = document.querySelector(".modal_close-button");
const logoPhoto = document.querySelector(".modal_event-logo");
const posterPhoto = document.querySelector(".modal_poster")

openButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);

function openModal(event) {
    const element = event.target.parentNode;

    if(element.parentElement.classList.contains("main__item") || element.classList.contains("main__item")){
        bacdrop.classList.remove("is-hidden");
    } else{
        return;
    }

    logoPhoto.src = element.querySelector(".main__img").src
    posterPhoto.src = element.querySelector(".main__img").src
}

function closeModal() {
    bacdrop.classList.add("is-hidden");
}