import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import Grid from "@mui/material/Grid";
import axios from "../../config/Config";
import { Container } from "@mui/material";
import CommentList from "../comment/CommentList";
import CommentForm from "../comment/CommentForm";

function Post({ id, userId, isLiked, title, text, username }) {
  const [expanded, setExpanded] = useState(false);
  const [liked, setLiked] = useState(isLiked);
  const [likedSize, setLikedSize] = useState(0);
  const [comments, setComments] = useState([]);
  const [avatar, setAvatar] = useState();

  let disabledLike = localStorage.getItem("userId") ? false : true;

  useEffect(() => {
    setLiked(isLiked);
    getLikeSize(id);
  }, [isLiked]);

  useEffect(() => {
    getUserById(userId);
  }, []);

  const getLikeSize = async (postId) => {
    try {
      const response = await axios.get(`/likes?postId=${postId}`);
      const { data } = await response.data;
      setLikedSize(data.length);
    } catch (err) {
      console.log("like size fetch error ", err);
    }
  };
  const getCommentsByPostId = async (id) => {
    try {
      const response = await axios.get(`/comments?postId=${id}`);
      const { data } = await response.data;
      setComments(data);
    } catch (err) {
      console.log("comment list error : ", err);
    }
  };

  const getUserById = async () => {
    const response = await axios.get(`/users/${userId}`);
    const { result, errorMessage, data } = response.data;
    setAvatar(data.avatar);
  };

  const saveLike = async () => {
    try {
      await axios.post(
        "/likes",
        {
          userId: Number(localStorage.getItem("userId")),
          postId: id,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
    } catch (err) {
      if (err == "TOKEN_REFRESH_SUCCESS") {
        //böyle olmamalı
        saveLike();
      }
      console.log("save like error ", err);
    }
  };

  const deleteLike = async (userId, postId) => {
    try {
      await axios.delete(`/likes?userId=${userId}&postId=${postId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log("like silindi");
    } catch (err) {
      if (err == "TOKEN_REFRESH_SUCCESS") {
        deleteLike(userId, postId);
      }
    }
  };

  const handleComment = () => {
    setExpanded(!expanded);
    if (!expanded) {
      getCommentsByPostId(id);
    }
  };

  const handleLike = async () => {
    setLiked(!liked);
    if (!liked) {
      await saveLike();
    } else {
      await deleteLike(Number(localStorage.getItem("userId")), id);
    }
    await getLikeSize(id);
  };

  return (
    <Grid item xs={12} sm={12} md={12} lg={12}>
      <Card sx={{ margin: "10px 0px" }}>
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
          title={title}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {text}
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "space-between",
            margin: "0px 10px",
          }}
        >
          <IconButton onClick={handleLike} disabled={disabledLike}>
            {localStorage.getItem("userId") ? (
              <FavoriteIcon sx={{ color: liked ? "red" : "grey" }} />
            ) : (
              <FavoriteIcon sx={{ color: "grey" }} />
            )}
            <span
              style={{ marginLeft: "5px", fontSize: "16px", color: "black" }}
            >
              {likedSize}
            </span>
          </IconButton>

          <IconButton onClick={handleComment}>
            <CommentIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded}>
          <Container>
            <CommentList comments={comments} />
            {localStorage.getItem("userId") && (
              <CommentForm
                postId={id}
                userId={Number(localStorage.getItem("userId"))}
                getCommentsByPostId={getCommentsByPostId}
              />
            )}
          </Container>
        </Collapse>
      </Card>
    </Grid>
  );
}
export default Post;
