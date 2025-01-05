const select = document.querySelector(".header__chose-location");
const placeInUkraine = document.querySelectorAll("[data-locate='Ukraine']");
const placeInVdnh = document.querySelectorAll("[data-locate='vdnh']");

select.addEventListener("change", filter);

function filter(event) {
    const element = event.target;

    if (element.value === "Palace of Ukraine") {
        placeInVdnh.forEach((elm) => {
            elm.style.display = "none";
        })
    } else if (element.value === "VDNH") {
        placeInUkraine.forEach((elm) => {
            elm.style.display = "none";
        })
    }
}