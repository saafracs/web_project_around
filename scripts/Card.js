// import { handleCardClick } from "./utils.js";

export default class Card {
  constructor(name, link, templateCard, handleCardClick) {
    this._name = name;
    this._link = link;
    this._templateCard = templateCard;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    this._cardElement = document
      .querySelector(this._templateCard)
      .content.querySelector(".elements__card")
      .cloneNode(true);

    const cardImage = this._cardElement.querySelector(".elements__card-image");
    const cardTitle = this._cardElement.querySelector(".elements__card-title");

    cardImage.src = this._link;
    cardImage.alt = this._name;
    cardTitle.textContent = this._name;
  }

  _setEventListeners() {
    const cardLikeButton = this._cardElement.querySelector(
      ".elements__card-footer-like"
    );
    const cardRemoveButton =
      this._cardElement.querySelector(".elements__trash");
    const cardImage = this._cardElement.querySelector(".elements__card-image");

    cardLikeButton.addEventListener("click", () => {
      this._handlerLikeCard();
    });

    cardRemoveButton.addEventListener("click", () => {
      this._handlerRemoveCard();
    });

    cardImage.addEventListener("click", () => {
      this._handlerOpenfullImage();
    });
  }

  _handlerLikeCard() {
    const cardLikeButton = this._cardElement.querySelector(
      ".elements__card-footer-like"
    );
    cardLikeButton.classList.toggle("elements__card-footer-like_active");
  }

  _handlerRemoveCard() {
    this._cardElement.remove();
  }

  _handlerOpenfullImage() {
    this._handleCardClick(this._name, this._link);
  }

  createCard() {
    this._getTemplate();
    this._setEventListeners();

    return this._cardElement;
  }
}
