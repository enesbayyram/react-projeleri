import React from "react";
import { Link, useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("username");

    navigate("/auth");
  };

  const goUserPage = ()=>{
    navigate(`/users/${localStorage.getItem("userId")}`)
    window.location.reload();
  }
  return (
    <AppBar>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link style={{ textDecoration: "none", color: "#fff" }} to="/">
            Anasayfa
          </Link>
        </Typography>
        {localStorage.getItem("userId") && (
          <Button color="inherit" onClick={()=>goUserPage()}>Profil</Button>
        )}
        {localStorage.getItem("userId") ? (
          <Button color="inherit" onClick={() => logout()}>
            Çıkış Yap
          </Button>
        ) : (
          <Button color="inherit" onClick={() => navigate("/auth")}>
            Giriş / Kayıt
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
