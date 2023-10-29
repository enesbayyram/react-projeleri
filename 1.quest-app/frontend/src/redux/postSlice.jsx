import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../config/Config";

const initialState = {
  posts: [],
  loading: false,
  errorMessage: null,
};

export const getAllPosts = createAsyncThunk("getPosts", async () => {
  const response = await axios.get("/posts");
  const { data } = await response.data;
  return data;
});

export const savePost = createAsyncThunk("post", async (newPost) => {
  const response = await axios.post("/posts", {
    userId: newPost.userId,
    title: newPost.title,
    text: newPost.text,
  },{
    headers:{
      'Authorization' : `Bearer ${localStorage.getItem("token")}`
    }
  });
  const { data } = await response.data;
  return data;
});

export const postSlice = createSlice({
  name: "posts",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(savePost.fulfilled, (state, action) => {
      state.posts = [...state.posts, action.payload];
    }),
      builder.addCase(getAllPosts.pending, (state) => {
        state.loading = true;
      }),
      builder.addCase(getAllPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.loading = false;
      }),
      builder.addCase(getAllPosts.rejected, (state, err) => {
        state.errorMessage = err.error.message;
        state.loading = false;
      });
  },
});

export default postSlice.reducer;
