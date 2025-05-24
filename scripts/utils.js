import { Card } from "./Card.js";

const initialCard = [
  {
    name: "Dragonstone",
    link: "./images/dragonstone.jpg",
  },
  {
    name: "Kings Landing",
    link: "./images/kingslanding.jpg",
  },
  {
    name: "Winterfell",
    link: "./images/winterfell.jpg",
  },
  { name: "Dothraki Hut", link: "./images/dothraki.jpg" },
  {
    name: "The Wall",
    link: "./images/the_wall.jpg",
  },
  {
    name: "Pyke",
    link: "./images/pyke.jpg",
  },
];

//

//Open Full Image Popup

const popupFull = document.querySelector(".popup_full");

function openPopup(popup) {
  popup.classList.add("popup_opened");
}

function openFullImage(name, link) {
  openPopup(popupFull);

  const popupImage = document.querySelector(".popup__body-image");

  popupImage.src = link;
  popupImage.alt = name;
  popupFull.querySelector(".popup__body-text").textContent = name;
}

//Template Selector

const areaCard = document.querySelector(".elements");

//

function createNewCard(name, link) {
  const card = new Card(name, link, ".template__card");
  return card.createCard();
}

//

// {profileEditButton.addEventListener("click", function () {
//   popupProfile.classList.add("popup_opened");
// });

// popupCloseButtonProfile.addEventListener("click", function () {
//   popupProfile.classList.remove("popup_opened");
//   formElement.reset();
// });

// formElement.addEventListener("submit", function (evt) {
//   evt.preventDefault();

//   nameProfile.textContent = nameInput.value;
//   titleProfile.textContent = titleInput.value;

//   popupProfile.classList.remove("popup_opened");

//   formElement.reset();
// });

// // Popup Create New Card

// imageAddButton.addEventListener("click", function () {
//   popupImage.classList.add("popup_opened");
// });

// popupCloseButtonImage.addEventListener("click", function () {
//   popupImage.classList.remove("popup_opened");
// });

// // Create New Card

// imageFormElement.addEventListener("submit", function (evt) {
//   evt.preventDefault();

//   let imageInputName = imageNameInput.value;
//   let imageInputTitle = imageTitleInput.value;

//   popupImage.classList.remove("popup_opened");

//   imageFormElement.reset();

//   containerCards.prepend(createCards(imageInputName, imageInputTitle));
// });

// ;}

// los controladores de eventos y la función que abre/cierra los popup form.
export { initialCard, createNewCard, areaCard, openFullImage };
