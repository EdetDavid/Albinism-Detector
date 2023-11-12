Uhexport default class APIService {
  static loginUser(body) {
    return fetch("https://albinism-detector.onrender.com/api/auth/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((resp) => resp.json())
      .catch((error) => console.log(error));
  }

  static RegisterUser(body) {
    return fetch("https://albinism-detector.onrender.com/api/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((resp) => resp.json())
      .catch((error) => console.log(error));
  }
}
