export default class Api {
    constructor({baseUrl, headers}) {
        this._baseUrl = baseUrl;
        this._headers = headers; 
    }

    getCardList() {
        return fetch(this._baseUrl + '/cards', {
            headers: this._headers
        })
        .then((res) => {
            if (res.ok) {
            return res.json();
            }else{
            Promise.reject('Error #' + res.status);
            }
        })
        .catch((err) => console.log(err));
    }

    getIUserInfo() {
        return fetch(this._baseUrl + '/users/me', {
            headers: this._headers
        })
        .then((res) => {
            if (res.ok) {
              return res.json();
            }else{
            Promise.reject('Error #' + res.status);
            }
        })
        .catch((err) => console.log(err));
    }

    addCard({name, link}) {
        return fetch(this._baseUrl + '/cards', {
            headers: this._headers,
            method: "POST",
            body: JSON.stringify({name, link})
        })
        .then((res) => {
            if (res.ok) {
              return res.json();
            }else{
            Promise.reject('Error #' + res.status);
            }
        })
        .catch((err) => console.log(err));
    }

    setUserInfo({name, about}) {
        return fetch(this._baseUrl + '/users/me', {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({name, about})
        })
        .then((res) => {
            if (res.ok) {
              return res.json();
            }else{
            Promise.reject('Error #' + res.status);
            }
        })
        .catch((err) => console.log(err)); 
    }

    setUserAvatar(avatar) {
        return fetch(this._baseUrl + '/users/me/avatar', {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({avatar: avatar.link})
        })
        .then((res) => {
            if (res.ok) {
              return res.json();
            }else{
            Promise.reject('Error #' + res.status);
            }
        })
        .catch((err) => console.log(err)); 
    }

    deleteCard(id) {
        fetch(this._baseUrl + '/cards/' + id, {
            method: "DELETE",
            headers: this._headers
        })
        .then((res) => {
            if (res.ok) {
              return res.json();
            }else{
            Promise.reject('Error #' + res.status);
            }
        })
        .catch((err) => console.log(err)); 
    }

    addLike(id) {
        return fetch(this._baseUrl + '/cards/likes/' + id, {
            method: "PUT",
            headers: this._headers
        })
        .then((res) => {
            if (res.ok) {
              return res.json();
            }else{
            Promise.reject('Error #' + res.status);
            }
        })
        .catch((err) => console.log(err)); 
    }

    removeLike(id) {
        return fetch(this._baseUrl + '/cards/likes/' + id, {
            method: "DELETE",
            headers: this._headers
        })
        .then((res) => {
            if (res.ok) {
              return res.json();
            }else{
            Promise.reject('Error #' + res.status);
            }
        })
        .catch((err) => console.log(err)); 
    }

}

