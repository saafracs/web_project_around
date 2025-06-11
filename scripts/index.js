import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import PopupWithImage from "./PopupWithImage.js";
import PopupWithForm from "./PopupWithForm.js";
import UserInfo from "./UserInfo.js";

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

const userInfo = new UserInfo(".profile-name", ".profile-title");

const popupImage = document.querySelector(".popup_image");
const popupProfile = document.querySelector(".popup_profile");
const profileEditButton = document.querySelector(".profile__edit-button");

const areaCard = document.querySelector(".elements");

function createNewCard(name, link) {
  const card = new Card(name, link, ".template", (name, link) => {
    popupImageObj.open(name, link);
  });
  return card.createCard();
}

// Create Initial Cards

initialCards.forEach((item) => {
  areaCard.append(createNewCard(item.name, item.link));
});

const popupFormProfile = new PopupWithForm(".popup_profile", (dataUser) => {
  userInfo.setUserInfo(dataUser);
  popupFormProfile.close();
});
popupFormProfile.setEventListeners();

profileEditButton.addEventListener("click", function () {
  popupFormProfile.open();
});

//

const imageEditButton = document.querySelector(".profile__add-button");

const popupFormImage = new PopupWithForm(".popup_image", ({ name, link }) => {
  const newCard = createNewCard(name, link);
  areaCard.prepend(newCard);
  popupFormImage.close();
});

popupFormImage.setEventListeners();

imageEditButton.addEventListener("click", function () {
  popupFormImage.open();
});

const popupImageObj = new PopupWithImage(".popup_full");
popupImageObj.setEventListeners();

const formValidatorProfile = new FormValidator(popupProfile);
formValidatorProfile.enableValidation();

const formValidatorImage = new FormValidator(popupImage);
formValidatorImage.enableValidation();
