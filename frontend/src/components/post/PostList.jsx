import Post from "./Post";
import React, { useEffect, useState } from "react";
import "../../css/Post.css";
import Grid from "@mui/material/Grid";
import PostForm from "./PostForm";
import { getAllPosts } from "../../redux/postSlice";
import { useSelector, useDispatch } from "react-redux";
import axios from "../../config/Config";

function PostList() {
  const [likes, setLikes] = useState([]);

  const dispatch = useDispatch();

  const { error, posts } = useSelector((store) => store.post);

  const getLikesByUserId = async (userId) => {
    try {
      const response = await axios.get(`/likes?userId=${userId}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });

      const { data } = await response.data;
      setLikes(data);
      console.log(data);
    } catch (err) {
      console.log("Likes listesi alinirken hata olustu : ", err);
    }
  };

  useEffect(() => {
    dispatch(getAllPosts());
  }, []);

  useEffect(() => {
    {
      localStorage.getItem("userId") &&
        getLikesByUserId(Number(localStorage.getItem("userId")));
    }
  }, []);

  return (
    <div>
      {error ? (
        <div>Hata {error}</div>
      ) : (
        <Grid container className="postsDiv">
          {localStorage.getItem("userId") && (
            <PostForm
              userId={Number(localStorage.getItem("userId"))}
              username={localStorage.getItem("username")}
            />
          )}
          {posts.map((post) => {
            let isLiked = false;

            likes.forEach((like) => {
              if (like.postId == post.id) {
                isLiked = true;
              }
            });
            return <Post isLiked={isLiked} key={post.id} {...post} />;
          })}
        </Grid>
      )}
    </div>
  );
}

export default PostList;
