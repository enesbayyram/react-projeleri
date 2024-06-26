import { useEffect, useState } from "react";
import LoginPage from "./pages/LoginPage";
import "./App.css";
import RouterConfig from "./config/RouterConfig";
import Spinner from "./components/Spinner";
import storageService from "./services/StorageService";
import menuService from "./services/MenuService";
import loginService from "./services/LoginService";
import { setMenu } from "./redux/slices/menuSlice";
import {
  setCurrentUser,
  setIsAuthenticate,
  setLoading,
} from "./redux/slices/appSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();

  const getCurrentUserAuthorizedMenu = () => {
    const roleCode = storageService.getRole();
    if (roleCode) {
      menuService
        .getCurrentUserAuthorizedMenu()
        .then((response) => {
          // SOR BUNLARI
          //3- Tree Menü yapısı

          dispatch(setMenu(response?.data?.data));
        })
        .catch((error) => {});
    }
  };

  const getCurrentUser = () => {
    const username = storageService.getUsername();
    if(username){
      loginService
      .getCurrentUser(username)
      .then((response) => {
        if (response.data?.result) {
          dispatch(setIsAuthenticate(true));
          dispatch(setCurrentUser(response.data?.data));
        }
      })
      .catch((err) => {});
    }
  };

  useEffect(() => {
    getCurrentUserAuthorizedMenu();
  }, []);

  useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <div className="App">
      <Spinner />
      <RouterConfig />
    </div>
  );
}

export default App;
