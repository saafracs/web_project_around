export default class UserInfo {
  constructor(nameSelector, titleSelector) {
    this._nameElement = document.querySelector(nameSelector);
    this._titleElement = document.querySelector(titleSelector);
  }

  getUserInfo = () => {
    return {
      name: this._nameElement.textContent,
      title: this._titleElement.textContent,
    };
  };

  setUserInfo = (dataUser) => {
    this._nameElement.textContent = dataUser.name;
    this._titleElement.textContent = dataUser.title;
  };
}
