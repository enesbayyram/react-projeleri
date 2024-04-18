import axios from "../config/ApiConfig";

class LoginService {
  login = (payload) => {
    return new Promise((resolve, reject) => {
      axios
        .post("/authenticate", payload)
        .then((response) => resolve(response))
        .catch((err) => reject(err));
    });
  };

  register = (payload) => {
    return new Promise((resolve, reject) => {
      axios
        .post("/register", payload)
        .then((response) => resolve(response?.data))
        .catch((err) => reject(err));
    });
  };

  getCurrentUser = (username) => {
    return new Promise((resolve, reject) => {
      axios
        .post(`/getCurrentUser/${username}`)
        .then((response) => resolve(response))
        .catch((err) => reject(err));
    });
  };
}

export default new LoginService();
