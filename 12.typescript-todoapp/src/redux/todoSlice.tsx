import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { InitialState, TodoType } from "../types/types";

const initialState: InitialState = {
  todoList: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TodoType>) => {
      state.todoList = [...state.todoList, action.payload];
    },
    deleteTodoById: (state: InitialState, action: PayloadAction<number>) => {
      state.todoList = [
        ...state.todoList.filter(
          (todo: TodoType) => todo.id !== action.payload
        ),
      ];
    },
    updateTodoById: (
      state: InitialState,
      action: PayloadAction<TodoType>
    ) => {

      state.todoList = [...state.todoList.map((todo:TodoType)=> todo.id != action.payload.id ? todo : action.payload)];
    },
  },
  extraReducers(builder) {},
});

export const { addTodo, deleteTodoById , updateTodoById } = todoSlice.actions;
export default todoSlice.reducer;
