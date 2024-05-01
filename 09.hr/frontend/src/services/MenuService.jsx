import axios from "../config/ApiConfig";

class MenuService {

  constructor(result){
    this.result = result;
  }
  
  getCurrentUserAuthorizedMenu = () => {
    return new Promise((resolve, reject) => {
      axios
        .get(`get-current-user-authorized-menu`)
        .then((response) => resolve(response))
        .catch((err) => reject(err));
    });
  };

  checkChildren = (parentMenu, destinationPath) => {
    for (let i = 0; i < parentMenu.children.length; i++) {
      const child = parentMenu.children[i];
      if (child.children.length == 0) {
        if (child.menuLink == destinationPath) {
          this.result=true;
          break;
        }
      } else {
        this.checkChildren(child, destinationPath);
      }
    }
  };

  isAccessMenu = (menuList, destinationPath) => {
    for (let i = 0; i < menuList.length; i++) {
      if (menuList[i].menuType == "MENU") {
        if (menuList[i].menuLink == destinationPath) {
          this.result = true;
          break;
        }
      } else if (menuList[i].menuType == "FOLDER") {
        this.checkChildren(menuList[i], destinationPath);
        if (this.result) {
          break;
        }
      }
    }
    return this.result;
  };
}

export default new MenuService(false);
