let profileEditButton = document.querySelector(".profile__edit-button");
let imageAddButton = document.querySelector(".profile__add-button");
let popupProfile = document.querySelector(".popup_profile");
let popupImage = document.querySelector(".popup_image");
let popupCloseButton = popupImage.querySelector(".popup__close-button");
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
  let cardElement = templateCard.content.cloneNode(true);

  cardElement.querySelector(".elements__card-image").src = link;
  cardElement.querySelector(".elements__card-image").alt = name;
  cardElement.querySelector(".elements__card-title").textContent = name;

  let cardLikeButton = cardElement.querySelector(".elements__card-footer-like");
  cardLikeButton.addEventListener("click", function () {
    cardLikeButton.classList.toggle("elements__card-footer-like_active");

    return cardLikeButton;
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

popupCloseButton.addEventListener("click", function () {
  popupProfile.classList.remove("popup_opened");
});

// Popup Image

imageAddButton.addEventListener("click", function () {
  popupImage.classList.add("popup_opened");
});

popupCloseButton.addEventListener("click", function () {
  popupImage.classList.remove("popup_opened");
});

// Create New Card

imageFormElement.addEventListener("submit", function (evt) {
  evt.preventDefault();

  if (imageNameInput.value !== "" && imageTitleInput.value !== "") {
    let imageInputName = imageNameInput.value;
    let imageInputTitle = imageTitleInput.value;

    popupImage.classList.remove("popup_opened");

    return createCards(imageInputName, imageInputTitle);
  } else {
    alert("Todos los campos son obligatorios");
  }
});
