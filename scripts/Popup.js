export default class Popup {
  constructor(popupElement) {
    this._popupElement = document.querySelector(popupElement);
  }

  open() {
    this._popupElement.classList.add("popup_opened");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._popupElement.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose = (evt) => {
    if (evt.key === "Escape") {
      this.close();
    }
  };

  setEventListeners() {
    const closeButton = this._popupElement.querySelector(
      ".popup__close-button"
    );
    const popupOverlays =
      this._popupElement.querySelectorAll(".popup__overlay");

    closeButton.addEventListener("click", () => {
      this.close();
    });

    popupOverlays.forEach((overlay) => {
      overlay.addEventListener("click", () => {
        this.close();
      });
    });
  }
}
