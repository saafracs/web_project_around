import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupElement) {
    super(popupElement);
    this._captionElement =
      this._popupElement.querySelector(".popup__body-text");
    this._imageElement = this._popupElement.querySelector(".popup__body-image");
  }

  open(name, link) {
    super.open();
    this._captionElement.textContent = name;
    this._imageElement.src = link;
    this._imageElement.alt = name;
  }
}
