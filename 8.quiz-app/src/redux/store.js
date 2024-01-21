import { configureStore } from "@reduxjs/toolkit";
import QuizSlice from "../redux/quizSlice";

export const store = configureStore({
  reducer: {
    quiz: QuizSlice,
  },
});
