import { useEffect, useState } from "react";
import LoginPage from "./pages/LoginPage";
import "./App.css";
import RouterConfig from "./config/RouterConfig";
import Spinner from "./components/Spinner";
import storageService from "./services/StorageService";
import menuService from "./services/MenuService";
import loginService from "./services/LoginService";
import { setMenu } from "./redux/slices/menuSlice";
import { setLoading } from "./redux/slices/appSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();

  const getMenuListByRoleCode = () => {
    const roleCode = storageService.getRole();
    if (roleCode) {
      menuService
        .getMenuListByRoleCode(roleCode)
        .then((response) => {
          // SOR BUNLARI
          //1-enese sor refresh tokendan sonra redux ın null kalması
          //2-Sayfa yenilendiğinde authenticate olup olmadığını backende ne gönderilir tartış biraz
          //3- Tree Menü yapısı

          //YAP BUNLARI
          // 1- logout
          // 2- Router yapısı
          // 3- URL üzerinden kaçmaya çalışırsa ancak bu isAuthenticate'e bağlı olduğu için simdilik kalsın.
          dispatch(setMenu(response?.data?.data));
        })
        .catch((error) => {});
    }
  };

  // const authenticate = ()=>{
  //   loginService.login()
  // }

  useEffect(() => {
    getMenuListByRoleCode();
  }, []);

  return (
    <div className="App">
      <Spinner />
      <RouterConfig />
    </div>
  );
}

export default App;
