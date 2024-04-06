import React from "react";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  levelQuestion: ["easy", "medium", "hard"],
  questions: [],
  modal: false,
};

const ROOT_PATH = "https://opentdb.com";

const shuffle = (array) => {
  return [...array.sort(() => Math.random() - 0.5)];
};

export const getQuestions = createAsyncThunk(
  "getQuestions",
  async (diffuculty) => {
    const endPoint = `${ROOT_PATH}/api.php?amount=${10}&difficulty=${diffuculty}`;
    const response = await axios.get(endPoint);
    return response.data.results.map((item) => ({
      ...item,
      answers: shuffle([...item.incorrect_answers, item.correct_answer]),
    }));
  }
);

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    changeModalStatus: (state, action) => {
      state.modal = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getQuestions.fulfilled, (state, action) => {
      state.questions = action.payload;
    });
  },
});

export const { changeModalStatus } = quizSlice.actions;
export default quizSlice.reducer;
