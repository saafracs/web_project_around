import { Card } from "./Card.js";

const initialCards = [
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

const buttonElement = document.querySelector(".popup__button");
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

// Create new Cards

function createNewCard(name, link) {
  const card = new Card(name, link, ".template");
  return card.createCard();
}

//

const profileEditButton = document.querySelector(".profile__edit-button");
const imageAddButton = document.querySelector(".profile__add-button");

const popupProfile = document.querySelector(".popup_profile");
const popupImage = document.querySelector(".popup_image");

profileEditButton.addEventListener("click", function () {
  buttonElement.disabled = true;
  popupProfile.classList.add("popup_opened");
});

imageAddButton.addEventListener("click", function () {
  buttonElement.disabled = true;
  popupImage.classList.add("popup_opened");
});

//

export {
  initialCards,
  createNewCard,
  areaCard,
  openFullImage,
  popupFull,
  profileEditButton,
  imageAddButton,
  openPopup,
  popupProfile,
  popupImage,
  buttonElement,
};
