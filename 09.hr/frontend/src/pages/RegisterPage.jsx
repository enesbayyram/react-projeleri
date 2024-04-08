import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "../css/RegisterPage.css";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import InputAdornment from "@mui/material/InputAdornment";
import loginService from "../services/LoginService";
import { useNavigate } from "react-router-dom";
import { IoIosPersonAdd } from "react-icons/io";

function RegisterPage() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const clear = () => {
    setFirstName("");
    setLastname("");
    setUsername("");
    setPassword("");
  };

  const register = () => {
    const payload = {
      firstname,
      lastname,
      username,
      password,
    };
    loginService
      .register(payload)
      .then((response) => {
        if (response?.result) {
          navigate("/login");
        }
      })
      .catch((err) => alert(err));
  };

  return (
    <div className="container">
      <div className="register-page">
        <div>
          <TextField
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
            className="input-name"
            size="small"
            label="İsim"
            variant="outlined"
            style={{ marginBottom: "15px" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IoIosPersonAdd />
                </InputAdornment>
              ),
            }}
          />
        </div>

        <div>
          <TextField
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            className="input-surname"
            size="small"
            label="Soyisim"
            variant="outlined"
            style={{ marginBottom: "15px" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IoIosPersonAdd />
                </InputAdornment>
              ),
            }}
          />
        </div>

        <div>
          <TextField
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input-username"
            label="Kullanıcı adı"
            variant="outlined"
            size="small"
            style={{ marginBottom: "15px" }}
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
            onChange={(e) => setPassword(e.target.value)}
            className="input-password"
            size="small"
            label="Şifre"
            variant="outlined"
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
            variant="contained"
            className="register-button"
            size="small"
            color="success"
            sx={{ marginLeft: "5px", textTransform: "none" }}
            onClick={register}
          >
            Kayıt Ol
          </Button>

          <Button
            variant="contained"
            className="clear-button"
            size="small"
            color="inherit"
            sx={{ marginLeft: "5px", textTransform: "none" }}
            onClick={clear}
          >
            Temizle
          </Button>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
