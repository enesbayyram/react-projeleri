import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import { Button, TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import "../../css/Override.css";
import "../../css/Comment.css";

function Comment({ id, postId, userId, username, text, avatar }) {
  return (
    <Card sx={{ margin: "20px 0px", height: "70px" }}>
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
            <Avatar sx={{ bgcolor: "secondary.main" }} aria-label="recipe">
              <img
                className="avatar-picture"
                src={`src/assets/avatars/avatar${avatar}.png`}
              />
            </Avatar>
          }
        />
        <TextField
          disabled
          className="MuiOutlinedInput-notchedOutline"
          sx={{ marginRight: "15px", marginTop: "10px", color: "black" }}
          fullWidth
          id="commentField"
          variant="outlined"
          value={text}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                {/* <Button size="small" variant="contained" color="primary">
                  Gönder
                </Button> */}
              </InputAdornment>
            ),
          }}
        />
      </div>
    </Card>
  );
}

export default Comment;
