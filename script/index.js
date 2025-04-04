let profileEditButton = document.querySelector(".profile__edit-button");
let popupProfile = document.querySelector(".popup_profile");
let popupCloseButton = document.querySelector(".popup__close-button");
let formElement = document.querySelector(".form");
let nameInput = document.querySelector(".form__input-name");
let titleInput = document.querySelector(".form__input-title");
let nameProfile = document.querySelector(".profile-name");
let titleProfile = document.querySelector(".profile-title");

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
