import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { getAllPosts, savePost } from "../../redux/postSlice";
import { useDispatch, useSelector } from "react-redux";
import Popup from "../Popup";
import axios from "../../config/Config";

function PostForm({ userId, username }) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [toast, setToast] = useState({ type: "success", isOpen: false });
  const [avatar, setAvatar] = useState();

  const dispatch = useDispatch();

  const handleSavePost = () => {
    const newPost = {
      userId: userId,
      title: title,
      text: text,
    };
    const a = dispatch(savePost(newPost));
    if (a.error) {
      setToast({ type: "error", isOpen: true });
    } else {
      setToast({ type: "success", isOpen: true });
    }
    clearInputs();
  };

  const getUserById = async () => {
    const response = await axios.get(`/users/${userId}`);
    const { result, errorMessage, data } = response.data;
    setAvatar(data.avatar);
  };

  useEffect(() => {
    getUserById(userId);
  }, []);

  const clearInputs = () => {
    setTitle("");
    setText("");
  };

  return (
    /*
    Miraya sor
    1-Props olarak geçilen değeri state 'e setlerken hatalı oluyor iç mimaride render sırası var sanırım ?
    2-Popup mesajlarını nasıl yönetiyorlar hata varsa , başarılıysa veya warning mesajı verilecekse ?
    3- return dışında bir javascript kodu içinde bir compoennt nasıl render ediliyor ?
    */

    <>
      <Popup
        isOpen={toast.isOpen}
        onCLose={setToast}
        duration={1200}
        level={toast.type}
        message="Post gönderildi"
      />

      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Card sx={{ margin: "10px 0px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[400] }} aria-label="recipe">
                  {/* {username.charAt(0).toUpperCase()} */}
                  <img
                    className="avatar-picture"
                    src={`src/assets/avatars/avatar${avatar}.png`}
                  />
                </Avatar>
              }
            />
            <TextField
              style={{ margin: "10px 10px" }}
              id="titleField"
              fullWidth
              label="Başlık"
              variant="standard"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div style={{ margin: "0px 20px" }}>
            <TextField
              style={{ margin: "10px 10px" }}
              id="titleField"
              fullWidth
              multiline
              label="İçerik"
              variant="standard"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <CardActions
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignContent: "center",
            }}
          >
            <span></span>
            <Button
              sx={{ marginRight: "5px" }}
              size="small"
              color="primary"
              variant="contained"
              onClick={handleSavePost}
            >
              Gönder
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
}

export default PostForm;
