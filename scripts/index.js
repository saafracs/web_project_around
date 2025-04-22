let profileEditButton = document.querySelector(".profile__edit-button");
let popupProfile = document.querySelector(".popup_profile");
let popupCloseButton = document.querySelector(".popup__close-button");
let formElement = document.querySelector(".form");
let nameInput = document.querySelector(".form__input-name");
let titleInput = document.querySelector(".form__input-title");
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
