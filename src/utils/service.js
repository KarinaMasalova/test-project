export default class Service {
    constructor() {
        this.headers = { 'Content-Type': 'application/json' };
    }

    post(url, body) {
        return fetch(url, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(body)
        })
        .then((response) => response.json())
        .catch((err) => Promise.reject(err));
    }

    get(url, id) {
        return fetch(`${url}/${id}`, {
            method: "GET",
            headers: this.headers,
        })
        .then((response) => response.json())
        .catch((err) => Promise.reject(err));
    }

    delete(url, id) {
        return fetch(`${url}/${id}`, {
            method: "DELETE",
            headers: this.headers,
        })
        .then((response) => response.json())
        .catch((err) => Promise.reject(err));
    }
}
