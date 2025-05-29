import {
  initialCards,
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

// Create Initial Cards

initialCards.forEach((item) => {
  areaCard.append(createNewCard(item.name, item.link));
});

// Close popups

const popupOverlays = document.querySelectorAll(".popup__overlay");

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

  const newCard = createNewCard(titleInput.value, linkInput.value);

  popupImage.classList.remove("popup_opened");
  formImage.reset();

  areaCard.prepend(newCard);
});

//
//

formElement.addEventListener("submit", function (evt) {
  evt.preventDefault();

  const nameInput = document.querySelector(".form__input-name");
  const titleInput = document.querySelector(".form__input-title");

  nameProfile.textContent = nameInput.value;
  titleProfile.textContent = titleInput.value;

  popupProfile.classList.remove("popup_opened");

  formElement.reset();
});

const formValidatorProfile = new FormValidator(popupProfile);
formValidatorProfile.enableValidation();

const formValidatorImage = new FormValidator(popupImage);
formValidatorImage.enableValidation();
