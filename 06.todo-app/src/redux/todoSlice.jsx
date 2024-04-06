import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    saveTodo: (state, action) => {
      state.todos = [action.payload, ...state.todos];
    },
    deleteTodo: (state, action) => {
      state.todos = [
        ...state.todos.filter((item) => item.id != action.payload),
      ];
    },
    updateTodo: (state, action) => {
      state.todos = [
        ...state.todos.filter((item) => item.id != action.payload.id),
        action.payload,
      ];
    },
  },
  extraReducers: (builder) => {},
});

export const { saveTodo, deleteTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
