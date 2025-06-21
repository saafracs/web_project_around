import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import PopupWithImage from "./PopupWithImage.js";
import PopupWithForm from "./PopupWithForm.js";
import UserInfo from "./UserInfo.js";
import Popup from "./Popup.js";
import api from "./Api.js";
import Section from "./Section.js";

const userInfo = new UserInfo(
  ".profile-name",
  ".profile-title",
  ".profile-image__pic"
);

const popupImage = document.querySelector(".popup_image");
const popupProfile = document.querySelector(".popup_profile");
const profilePictureContainer = document.querySelector(".profile-image");
const editIcon = document.querySelector(".profile-image__icon");
const profilePicture = document.querySelector(".profile-image__pic");
const profileEditPic = document.querySelector(".popup_profile-picture-edit");

const areaCard = document.querySelector(".elements");

const popupImageObj = new PopupWithImage(".popup_full");
popupImageObj.setEventListeners();

const popupRemoveConfirmation = new Popup(".popup_remove-image");

popupRemoveConfirmation.setEventListeners();

// Server Cards

api.getCards().then((data) => {
  const cardsServer = data;
  cardsServer.forEach((cardData) => {
    areaCard.append(
      createNewCard(
        cardData.name,
        cardData.link,
        cardData._id,
        cardData.isLiked
      )
    );
  });
});

//

function createNewCard(name, link, idCard, isLiked) {
  const card = new Card(
    name,
    link,
    idCard,
    isLiked,

    ".template",

    (name, link) => {
      popupImageObj.open(name, link);
    },

    (cardElement, idCard) => {
      popupRemoveConfirmation.open();
      const removeButton = document.querySelector(
        ".popup__button_confirm-remove-image"
      );
      removeButton.addEventListener("click", () => {
        api.removeCard(idCard).then(() => {
          popupRemoveConfirmation.close();
          cardElement.remove();
        });
      });
    },

    (isLiked, cardElement) => {
      const cardLikeButton = cardElement.querySelector(
        ".elements__card-footer-like"
      );

      if (isLiked) {
        api.removeLike(idCard).then(() => {
          cardLikeButton.classList.remove("elements__card-footer-like_active");
        });
      } else {
        api.likeCard(idCard).then(() => {
          cardLikeButton.classList.add("elements__card-footer-like_active");
        });
      }
      console.log(isLiked, cardElement);
    }
  );
  return card.createCard();
}

const profileEditButton = document.querySelector(".profile__edit-button");

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

// new avatar

const popupProfilePictureEdit = new PopupWithForm(
  ".popup_profile-picture-edit",
  ({ avatar }) => {
    api.updateAvatar(avatar).then(() => {
      profilePicture.src = avatar;
    });

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

const formValidatorProfile = new FormValidator(popupProfile);
formValidatorProfile.enableValidation();

const formValidatorImage = new FormValidator(popupImage);
formValidatorImage.enableValidation();

// api

api.getUser().then((data) => {
  userInfo.setUserInfo(data);
  profilePicture.src = data.avatar;
  profilePicture.alt = data.name;
});

//
