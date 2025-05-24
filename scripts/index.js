import { Card } from "./Card.js";
import { initialCard, createNewCard, areaCard } from "./utils.js";

let profileEditButton = document.querySelector(".profile__edit-button");
let imageAddButton = document.querySelector(".profile__add-button");
let popupProfile = document.querySelector(".popup_profile");
let popupImage = document.querySelector(".popup_image");
let popupFullImage = document.querySelector(".popup_full");
let popupCloseButtonImage = popupImage.querySelector(
  ".popup__close-button_image"
);
let popupCloseButtonProfile = popupProfile.querySelector(
  ".popup__close-button_profile"
);
let popupCloseButtonFullImage = popupFullImage.querySelector(
  ".popup__close-button_full"
);
let popupImageFull = popupFullImage.querySelector(".popup__body-image");
let popupImageText = popupFullImage.querySelector(".popup__body-text");

let formElement = document.querySelector(".form");
let imageFormElement = document.querySelector(".form_image");
let nameInput = document.querySelector(".form__input-name");
let titleInput = document.querySelector(".form__input-title");
let imageNameInput = document.querySelector(".form__input-name-image");
let imageTitleInput = document.querySelector(".form__input-title-image");
let nameProfile = document.querySelector(".profile-name");
let titleProfile = document.querySelector(".profile-title");
let templateCard = document.querySelector(".template__card");
let containerCards = document.querySelector(".elements");

//

// Create Cards

initialCard.forEach((item) => {
  areaCard.append(createNewCard(item.name, item.link));
});

// Close popups with ESC and Pressing Overlay

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
