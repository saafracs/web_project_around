import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import PopupWithImage from "./PopupWithImage.js";
import PopupWithForm from "./PopupWithForm.js";
import UserInfo from "./UserInfo.js";
import Popup from "./Popup.js";
import api from "./Api.js";
import Section from "./Section.js";

// const initialCards = [
//   {
//     name: "Dragonstone",
//     link: "./images/dragonstone.jpg",
//   },
//   {
//     name: "Kings Landing",
//     link: "./images/kingslanding.jpg",
//   },
//   {
//     name: "Winterfell",
//     link: "./images/winterfell.jpg",
//   },
//   { name: "Dothraki Hut", link: "./images/dothraki.jpg" },
//   {
//     name: "The Wall",
//     link: "./images/the_wall.jpg",
//   },
//   {
//     name: "Pyke",
//     link: "./images/pyke.jpg",
//   },
// ];

const userInfo = new UserInfo(".profile-name", ".profile-title");

const popupImage = document.querySelector(".popup_image");
const popupProfile = document.querySelector(".popup_profile");
const profileEditButton = document.querySelector(".profile__edit-button");
const profilePictureContainer = document.querySelector(".profile-image");
const editIcon = document.querySelector(".profile-image__icon");
const profilePicture = document.querySelector(".profile-image__pic");
const profileEditPic = document.querySelector(".popup_profile-picture-edit");

const areaCard = document.querySelector(".elements");

function createNewCard(name, link) {
  const card = new Card(name, link, ".template", (name, link) => {
    popupImageObj.open(name, link);
  });
  return card.createCard();
}

// Create Initial Cards

// initialCards.forEach((item) => {
//   areaCard.append(createNewCard(item.name, item.link));
// });

const popupFormProfile = new PopupWithForm(".popup_profile", (dataUser) => {
  api.updateUser(dataUser.name, dataUser.about).then(() => {
    userInfo.setUserInfo(dataUser);
    popupFormProfile.close();
  });
});
popupFormProfile.setEventListeners();

profileEditButton.addEventListener("click", function () {
  popupFormProfile.open();
});

//

const popupRemoveConfirmation = new Popup(".popup_remove-image");
popupRemoveConfirmation.setEventListeners();

// new avatar

const popupProfilePictureEdit = new PopupWithForm(
  ".popup_profile-picture-edit",
  ({ avatar }) => {
    // console.log(avatar);
    // api.updateAvatar(avatar).then(() => {
    //   profilePicture.src = avatar;
    // });
    popupProfilePictureEdit.close();
  }
);

profilePictureContainer.addEventListener("click", () => {
  popupProfilePictureEdit.open();
});

popupProfilePictureEdit.setEventListeners();

const popupProfilePictureEditForm = new FormValidator(profileEditPic);
popupProfilePictureEditForm.enableValidation();

// Edit Profile Picture Icon

profilePictureContainer.addEventListener("mouseover", () => {
  profilePicture.style.opacity = "0.7";
});

profilePictureContainer.addEventListener("mouseout", () => {
  profilePicture.style.opacity = "1";
});

profilePictureContainer.addEventListener("mouseover", () => {
  editIcon.style.opacity = "1";
});

profilePictureContainer.addEventListener("mouseout", () => {
  editIcon.style.opacity = "0";
});

//

const imageEditButton = document.querySelector(".profile__add-button");

const popupFormImage = new PopupWithForm(".popup_image", ({ name, link }) => {
  console.log(name, link);
  api.createCards(name, link).then(() => {
    const newCard = createNewCard(name, link);
    areaCard.prepend(newCard);
    popupFormImage.close();
  });
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

// api

api.getUser().then((data) => {
  console.log(data);
  userInfo.setUserInfo(data);
});

//

// api.createCards().then((data) => {});

// Server Cards

api.getCards().then((data) => {
  const cardsServer = data;
  cardsServer.forEach((cardData) => {
    areaCard.prepend(createNewCard(cardData.name, cardData.link));
  });
});

//
