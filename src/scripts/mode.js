const listMode_button = document.querySelector(".choose__button_first");
const cardMode_button = document.querySelector(".choose__button_last");

const person_list = document.querySelector(".cards__list");
const person_collection = document.querySelectorAll(".person-card");

listMode_button.addEventListener("click", () => {
    listMode_button.classList.add("active");
    cardMode_button.classList.remove("active");
    person_list.classList.remove("cards__list");
    person_collection.forEach(i => {
        i.classList.remove("person-card");
    });
});

cardMode_button.addEventListener("click", () => {
    cardMode_button.classList.add("active");
    listMode_button.classList.remove("active");
    person_list.classList.add("cards__list");
    person_collection.forEach(i => {
        i.classList.add("person-card");
    });
});

