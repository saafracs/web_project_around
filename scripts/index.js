let profileEditButton = document.querySelector(".profile__edit-button");
let imageAddButton = document.querySelector(".profile__add-button");
let popupProfile = document.querySelector(".popup_profile");
let popupImage = document.querySelector(".popup_image");
let popupCloseButton = document.querySelector(".popup__close-button");
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

initialCard.forEach((item) => {
  let cardElement = templateCard.content.cloneNode(true);

  cardElement.querySelector(".elements__card-image").src = item.link;
  cardElement.querySelector(".elements__card-image").alt = item.name;
  cardElement.querySelector(".elements__card-title").textContent = item.name;

  containerCards.append(cardElement);
});

//Popup Profile

profileEditButton.addEventListener("click", function () {
  popupProfile.classList.add("popup_opened");
});

popupCloseButton.addEventListener("click", function () {
  popupProfile.classList.remove("popup_opened");
});

formElement.addEventListener("submit", function (evt) {
  evt.preventDefault();

  if (nameInput.value !== "" && titleInput.value !== "") {
    nameProfile.textContent = nameInput.value;
    titleProfile.textContent = titleInput.value;
    popupProfile.classList.remove("popup_opened");
  } else {
    alert("Todos los campos son obligatorios");
  }
});

//Popup Image

imageAddButton.addEventListener("click", function () {
  popupImage.classList.add("popup_opened");
});

popupCloseButton.addEventListener("click", function () {
  popupImage.classList.remove("popup_opened");
});

imageFormElement.addEventListener("submit", function (evt) {
  evt.preventDefault();

  if (imageNameInput.value !== "" && imageTitleInput.value !== "") {
    let imageInputName = imageNameInput.value;
    let imageInputTitle = imageTitleInput.value;

    popupImage.classList.remove("popup_opened");

    let cardElement = templateCard.content.cloneNode(true);

    cardElement.querySelector(".elements__card-image").src = imageInputTitle;
    cardElement.querySelector(".elements__card-image").alt = imageInputName;
    cardElement.querySelector(".elements__card-title").textContent =
      imageInputName;

    containerCards.prepend(cardElement);
  } else {
    alert("Todos los campos son obligatorios");
  }
});
