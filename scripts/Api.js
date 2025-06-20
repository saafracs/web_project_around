class Api {
  constructor(url, token) {
    this._url = url;
    this._token = token;
  }

  //
  getUser() {
    return this._makeRequest("users/me");
  }

  //
  getCards() {
    return this._makeRequest("cards");
  }

  //
  updateUser(name, about) {
    return this._makeRequest("users/me", "PATCH", { name, about });
  }

  //
  createCards(name, link) {
    return this._makeRequest("cards", "POST", { name, link });
  }

  removeCard(idCard) {
    return this._makeRequest(`cards/${idCard}`, "DELETE");
  }

  updateAvatar(avatar) {
    return this._makeRequest("users/me/avatar", "PATCH", { avatar });
  }

  likeCard(idCard) {
    return this._makeRequest(`cards/${idCard}/likes`, "PUT");
  }

  removeLike(idCard) {
    return this._makeRequest(`cards/${idCard}/likes`, "DELETE");
  }

  _makeRequest(path, method = "GET", body = {}) {
    const config = {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: this._token,
      },
    };
    if (method !== "GET" && method !== "DELETE") {
      config["body"] = JSON.stringify(body);
    }
    return fetch(`${this._url}${path}`, config).then((response) =>
      response.json()
    );
  }
}

const api = new Api(
  "https://around-api.es.tripleten-services.com/v1/",
  "8701e54e-93e4-44a1-9cd5-eec8cedbf509"
);

export default api;
