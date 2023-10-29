import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import { Button, TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import "../../css/Override.css";
import axios from "../../config/Config";

function CommentForm({ postId, userId, getCommentsByPostId }) {
  const [commentText, setCommentText] = useState("");
  const [avatar, setAvatar] = useState();

  const handleSaveComment = () => {
    commentSave();
  };

  const getUserById = async (userId) => {
    const response = await axios.get(`/users/${userId}`);
    const { result, errorMessage, data } = response.data;
    setAvatar(data.avatar);
  };

  useEffect(() => {
    getUserById(userId);
  }, []);

  const commentSave = async () => {
    try {
      const response = await axios.post(
        "/comments",
        {
          userId,
          postId,
          text: commentText,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      clearInputs();
      getCommentsByPostId(postId);
    } catch (err) {
      console.log("Comment save is error ", err);
    }
  };

  const clearInputs = () => {
    setCommentText("");
  };

  return (
    <Card
      sx={{
        marginTop: "20px",
        marginRight: "20px",
        marginBottom: "20px",
        height: "65px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignContent: "center",
          width: "100%",
        }}
      >
        <CardHeader
          avatar={
            <img
              className="avatar-picture"
              src={`src/assets/avatars/avatar${avatar}.png`}
            />
          }
        />
        <TextField
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          label="Yorum yazınız."
          className="MuiOutlinedInput-notchedOutline"
          sx={{ marginTop: "10px", color: "black", size: "10px" }}
          fullWidth
          id="commentField"
          variant="outlined"
          multiline
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Button
                  onClick={handleSaveComment}
                  size="small"
                  variant="contained"
                  color="inherit"
                >
                  Gönder
                </Button>
              </InputAdornment>
            ),
          }}
        />
      </div>
    </Card>
  );
}

export default CommentForm;
