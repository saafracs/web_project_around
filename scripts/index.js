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

let initialCard = [
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

// Create Cards

function createCards(name, link) {
  let cardElement = templateCard.content
    .querySelector(".elements__card")
    .cloneNode(true);

  cardImage = cardElement.querySelector(".elements__card-image");
  cardName = cardElement.querySelector(".elements__card-image");
  cardTitle = cardElement.querySelector(".elements__card-title");

  cardImage.src = link;
  cardName.alt = name;
  cardTitle.textContent = name;

  //Card Like Button

  let cardLikeButton = cardElement.querySelector(".elements__card-footer-like");

  cardLikeButton.addEventListener("click", function () {
    cardLikeButton.classList.toggle("elements__card-footer-like_active");

    return cardLikeButton;
  });

  //Card Remove Button

  let removeCard = cardElement.querySelector(".elements__trash");

  removeCard.addEventListener("click", function () {
    cardElement.remove();
  });

  //Open Full Image View

  cardImage.addEventListener("click", () => {
    popupFullImage.classList.add("popup_opened");

    popupImageFull.src = link;
    popupImageFull.alt = name;
    popupImageText.textContent = name;
  });

  //Close Full image View Button

  popupCloseButtonFullImage.addEventListener("click", function () {
    popupFullImage.classList.remove("popup_opened");
  });

  return cardElement;
}

initialCard.forEach((item) => {
  containerCards.append(createCards(item.name, item.link));
});

// Popup Profile

profileEditButton.addEventListener("click", function () {
  popupProfile.classList.add("popup_opened");
});

popupCloseButtonProfile.addEventListener("click", function () {
  popupProfile.classList.remove("popup_opened");
  formElement.reset();
});

formElement.addEventListener("submit", function (evt) {
  evt.preventDefault();

  nameProfile.textContent = nameInput.value;
  titleProfile.textContent = titleInput.value;

  popupProfile.classList.remove("popup_opened");

  formElement.reset();
});

// Popup Create New Card

imageAddButton.addEventListener("click", function () {
  popupImage.classList.add("popup_opened");
});

popupCloseButtonImage.addEventListener("click", function () {
  popupImage.classList.remove("popup_opened");
});

// Create New Card

imageFormElement.addEventListener("submit", function (evt) {
  evt.preventDefault();

  let imageInputName = imageNameInput.value;
  let imageInputTitle = imageTitleInput.value;

  popupImage.classList.remove("popup_opened");

  imageFormElement.reset();

  containerCards.prepend(createCards(imageInputName, imageInputTitle));
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
