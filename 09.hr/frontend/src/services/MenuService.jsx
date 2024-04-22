import axios from "../config/ApiConfig";

class MenuService {
  getCurrentUserAuthorizedMenu = () => {
    return new Promise((resolve, reject) => {
      axios
        .get(`get-current-user-authorized-menu`)
        .then((response) => resolve(response))
        .catch((err) => reject(err));
    });
  };

  isAccessMenu = (menuList, destinationPath) => {
    let result =false;
     menuList.map((menu) => {
      let parentMenu = menu.parentMenu;
      if(parentMenu.menuType=="MENU"){
        if(parentMenu.menuLink == destinationPath){
          result = true;
        }
      }
      else if(parentMenu.menuType =="FOLDER"){
        menu.children.map((child)=>{
          if(child.menuLink==destinationPath){
            result=true;
          }
        })
      }
    });
    return result;
  };
}

export default new MenuService();
