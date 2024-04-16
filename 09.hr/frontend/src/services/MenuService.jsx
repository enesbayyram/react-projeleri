import axios from "../config/ApiConfig";

class MenuService {
  getMenuListByRoleCode = (roleCode) => {
    return new Promise((resolve, reject) => {
      axios
        .get(`get-menulist-by-rolecode/${roleCode}`)
        .then((response) => resolve(response))
        .catch((err) => reject(err));
    });
  };
}

export default new MenuService();
