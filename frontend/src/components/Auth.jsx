import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { FormControl } from "@mui/material";
import axios from "../config/Config";
import { useNavigate } from "react-router-dom";

function Auth() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const clearInputs = () => {
    setUsername("");
    setPassword("");
  };

  const isNullOrEmpty = (value) => {
    if (value == null || value.trim() == "") {
      return true;
    }
    return false;
  };

  const login = async () => {
    try {
      const response = await axios.post("/auth/login", {
        username: username,
        password: password,
      });
      const { data, errorMessage, result } = await response.data;
      if (result) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("refreshToken", data.refreshToken);
        localStorage.setItem("username", data.username);
        localStorage.setItem("userId", data.userId);

        navigate("/");
      } else {
        console.log("token alinamadi --->" + errorMessage);
      }
    } catch (err) {
      console.log("login olurken hata olustu :" + err);
    }
  };

  const register = async () => {
    if (isNullOrEmpty(username) || isNullOrEmpty(password)) {
      alert("Kullanıcı adı veya şifre boş olamaz!");
      return;
    }

    //şimdilik alert yapıp geçelim miraya soracagım 3 soru yazdım
    try {
      const response = await axios.post("/auth/register", {
        username: username,
        password: password,
      });

      const { data, errorMessage, result } = await response.data;
      if (result) {
        clearInputs();
      } else {
      }
    } catch (error) {}
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card sx={{ margin: "150px", width: "30%" }}>
        <CardContent>
          <Typography
            sx={{ fontSize: 14, textAlign: "center" }}
            color="text.secondary"
            gutterBottom
          >
            Giriş Yap / Kayıt Ol
          </Typography>

          <FormControl fullWidth>
            <TextField
              fullWidth
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              id="usernameField"
              label="Kullanıcı adı"
              variant="standard"
              sx={{ marginBottom: "30px" }}
            />

            <TextField
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="passwordField"
              label="Şifre"
              variant="standard"
              sx={{ marginBottom: "15px" }}
            />
          </FormControl>
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            marginRight: "10px",
          }}
        >
          <Button onClick={() => login()} variant="contained" size="small">
            Giriş Yap
          </Button>
          <Button
            onClick={() => register()}
            color="success"
            variant="contained"
            size="small"
          >
            Kayıt Ol
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Auth;
