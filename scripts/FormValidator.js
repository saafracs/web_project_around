export default class FormValidator {
  constructor(formElement) {
    this._formElement = formElement;
  }

  _handleCheckInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
      this._handleShowInputError(
        this._formElement,
        inputElement,
        inputElement.validationMessage
      );
    } else {
      this._hideInputError(formElement, inputElement);
    }
  };

  _hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove("popup__input_type_error");
    errorElement.classList.remove("popup__input-error_active");
    errorElement.textContent = "";
  };

  _hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  _handleShowInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add("popup__input_type_error");
    errorElement.textContent = errorMessage;
    errorElement.classList.add("popup__input-error_active");
  };

  _handleChangeButtonState = (inputList, buttonElement) => {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.disabled = true;
    } else {
      buttonElement.disabled = false;
    }
  };

  _setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(".form__input"));
    const buttonElement = formElement.querySelector(".popup__button");
    this._handleChangeButtonState(inputList, buttonElement);

    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._handleCheckInputValidity(formElement, inputElement);
        this._handleChangeButtonState(inputList, buttonElement);
      });
    });
  };

  enableValidation = () => {
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners(this._formElement);
  };
}
