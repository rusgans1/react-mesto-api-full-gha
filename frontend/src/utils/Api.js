class Api {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;
  }

  _checkResult(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(console.log(res.status));
  }

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      method: "GET",
      credentials: "include",
      headers: this._headers,
    }).then(this._checkResult);
  }

  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      method: "GET",
      credentials: "include",
      headers: this._headers,
    }).then(this._checkResult);
  }

  setUserInfo(obj) {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      credentials: "include",
      headers: this._headers,
      body: JSON.stringify({
        name: obj.name,
        about: obj.about,
      }),
    }).then(this._checkResult);
  }

  setNewCard(obj) {
    return fetch(`${this._url}/cards`, {
      method: "POST",
      credentials: "include",
      headers: this._headers,
      body: JSON.stringify({
        name: obj.name,
        link: obj.link,
      }),
    }).then(this._checkResult);
  }

  removeCard(idCard) {
    return fetch(`${this._url}/cards/${idCard}`, {
      method: "DELETE",
      credentials: "include",
      headers: this._headers,
    }).then(this._checkResult);
  }

  changeLikeCardStatus(idCard, isLiked) {
    return fetch(`${this._url}/cards/${idCard}/likes`, {
      method: `${isLiked ? "PUT" : "DELETE"}`,
      credentials: "include",
      headers: this._headers,
    }).then(this._checkResult);
  }

  setUserAvatar(obj) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: "PATCH",
      credentials: "include",
      headers: this._headers,
      body: JSON.stringify({
        avatar: obj.avatar,
      }),
    }).then(this._checkResult);
  }
}

const api = new Api({
  url: "https://api.mesto.petrov.nomoredomains.rocks",
  credentials: "include",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;