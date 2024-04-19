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

  isAccessMenu = (menuList, destinationPath) => {
    let result =false;
     menuList.map((menu) => {
      if(menu.menuLink == destinationPath){
        result = true;
      }
    });
    return result;
  };
}

export default new MenuService();
