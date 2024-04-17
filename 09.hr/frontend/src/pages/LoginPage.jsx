import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "../css/LoginPage.css";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import InputAdornment from "@mui/material/InputAdornment";
import loginService from "../services/LoginService";
import storageService from "../services/StorageService";
import { useNavigate } from "react-router-dom";
import toastService from "../services/ToastService";
import menuService from "../services/MenuService";
import { useDispatch, useSelector } from "react-redux";
import { setIsAuthenticate, setLoading } from "../redux/slices/appSlice";
import { setMenu } from "../redux/slices/menuSlice";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = () => {
    if (!username || !password) {
      toastService.warn("Tüm alanları doldurunuz");
      return;
    }
    dispatch(setLoading(true));
    loginService
      .login({ username, password })
      .then((response) => {
        if (response?.data?.result) {
          const token = response?.data?.data?.token;
          storageService.writeToken(token);
          storageService.writeRefreshToken(response?.data?.data?.refreshToken);

          const role = storageService.getRole();

          menuService
            .getMenuListByRoleCode(role)
            .then((response) => {
              dispatch(setMenu(response.data?.data));

              dispatch(setIsAuthenticate(true));
              navigate("/");
            })
            .catch((err) => {
              console.log(err);
            });
        }
      })
      .catch((err) => {
        console.log("err ", err);
      })
      .finally(() => dispatch(setLoading(false)));
  };

  return (
    <div className="container">
      <div className="login-page">
        <div>
          <TextField
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input-username"
            label="Kullanıcı adı"
            variant="outlined"
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FaUser />
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div>
          <TextField
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            className="input-password"
            size="small"
            label="Şifre"
            variant="outlined"
            style={{ marginTop: "7px" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <RiLockPasswordFill />
                </InputAdornment>
              ),
            }}
          />
        </div>

        <div className="button-div">
          <Button
            onClick={login}
            className="login-button"
            variant="contained"
            size="small"
            sx={{ textTransform: "none" }}
          >
            Giriş Yap
          </Button>

          <Button
            variant="contained"
            className="register-button"
            size="small"
            color="success"
            sx={{ marginLeft: "5px", textTransform: "none" }}
            onClick={() => navigate("/register")}
          >
            Kayıt Ol
          </Button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
