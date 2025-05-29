import {
  initialCard,
  createNewCard,
  areaCard,
  popupFull,
  openPopup,
  profileEditButton,
  popupProfile,
  popupImage,
} from "./utils.js";

import FormValidator from "./FormValidator.js";
import { Card } from "./Card.js";

const formElement = document.querySelector(".form");
const formImage = document.querySelector(".form_image");
const nameProfile = document.querySelector(".profile-name");
const titleProfile = document.querySelector(".profile-title");

// Create Cards

initialCard.forEach((item) => {
  areaCard.append(createNewCard(item.name, item.link));
});

// Close popups

let popupOverlays = document.querySelectorAll(".popup__overlay");

popupOverlays.forEach((item) => {
  item.addEventListener("click", () => {
    item.closest(".popup").classList.remove("popup_opened");
    formElement.reset();
  });

  document.addEventListener("keydown", (evt) => {
    if (evt.key === "Escape") {
      item.closest(".popup").classList.remove("popup_opened");
      formElement.reset();
    }
  });
});

const closeFullImage = document.querySelector(".popup__close-button_full");
const popupCloseButtonProfile = document.querySelector(
  ".popup__close-button_profile"
);
const popupCloseimage = document.querySelector(".popup__close-button_image");

popupCloseButtonProfile.addEventListener("click", function () {
  popupProfile.classList.remove("popup_opened");
});

popupCloseimage.addEventListener("click", function () {
  popupImage.classList.remove("popup_opened");
});

closeFullImage.addEventListener("click", function () {
  popupFull.classList.remove("popup_opened");
});

profileEditButton.addEventListener("click", function () {
  openPopup(popupProfile);
});

//
//

formImage.addEventListener("submit", function (evt) {
  evt.preventDefault();

  const titleInput = document.querySelector(".form__input-name-image");
  const linkInput = document.querySelector(".form__input-title-image");

  const newCard = new Card(
    titleInput.value,
    linkInput.value,
    ".template__card",
    console.log(titleInput, linkInput)
  );

  popupImage.classList.remove("popup_opened");
  formImage.reset();

  areaCard.prepend(newCard.createCard());
});

//
//

formElement.addEventListener("submit", function (evt) {
  evt.preventDefault();

  let nameInput = document.querySelector(".form__input-name");
  let titleInput = document.querySelector(".form__input-title");

  nameProfile.textContent = nameInput.value;
  titleProfile.textContent = titleInput.value;

  popupProfile.classList.remove("popup_opened");

  formElement.reset();
});

const formValidatorProfile = new FormValidator(popupProfile);
formValidatorProfile.enableValidation();

const formValidatorImage = new FormValidator(popupImage);
formValidatorImage.enableValidation();
