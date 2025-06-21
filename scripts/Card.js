export default class Card {
  constructor(
    name,
    link,
    idCard,
    isLiked,
    templateCard,
    handleCardClick,
    handleCardDelete,
    handleCardLike
  ) {
    this._name = name;
    this._link = link;
    this._idCard = idCard;
    this._isLiked = isLiked;
    this._templateCard = templateCard;
    this._handleCardClick = handleCardClick;
    this._handleCardDelete = handleCardDelete;
    this._handleCardLike = handleCardLike;
  }

  _getTemplate() {
    this._cardElement = document
      .querySelector(this._templateCard)
      .content.querySelector(".elements__card")
      .cloneNode(true);

    const cardImage = this._cardElement.querySelector(".elements__card-image");
    const cardTitle = this._cardElement.querySelector(".elements__card-title");
    const cardButton = this._cardElement.querySelector(
      ".elements__card-footer-like"
    );

    cardImage.src = this._link;
    cardImage.alt = this._name;
    cardTitle.textContent = this._name;

    if (this._isLiked) {
      cardButton.classList.add("elements__card-footer-like_active");
    }
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
      this._handleRemoveCard();
    });

    cardImage.addEventListener("click", () => {
      this._handlerOpenfullImage();
    });
  }

  _handlerLikeCard() {
    this._handleCardLike(this._isLiked, this._cardElement);
    this._isLiked = !this._isLiked;
    // if (isLiked) {
    //   cardLikeButton.classList.add("elements__card-footer-like_active");
    // } else {
    //   cardLikeButton.classList.remove("elements__card-footer-like_active");
    // }
  }

  _handleRemoveCard() {
    this._handleCardDelete(this._cardElement, this._idCard);
  }

  _handlerOpenfullImage() {
    this._handleCardClick(this._name, this._link);
  }

  // () {
  //   this._cardElement.remove();
  // }

  createCard() {
    this._getTemplate();
    this._setEventListeners();

    return this._cardElement;
  }
}
