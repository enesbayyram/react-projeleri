import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const getTodosFromStorage = () => {
  if (localStorage.getItem("todos")) {
    return JSON.parse(localStorage.getItem("todos"));
  }
  return [];
};

const writeTodosToStorage = (todo) => {
  const todos = getTodosFromStorage();
  localStorage.setItem("todos", JSON.stringify([...todos, todo]));
};

const removeTodosToStorage = (todoId) => {
  const todos = getTodosFromStorage();
  if (todos) {
    localStorage.setItem(
      "todos",
      JSON.stringify([...todos.filter((todo) => todo.id !== todoId)])
    );
  }
};

const updateTodosToStorage = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    fillTodos: (state) => {
      state.todos = getTodosFromStorage();
    },
    createTodo: (state, action) => {
      state.todos = [...state.todos, action.payload];
      writeTodosToStorage(action.payload);
    },
    removeTodo: (state, action) => {
      state.todos = [
        ...state.todos.filter((todo) => todo.id !== action.payload),
      ];
      removeTodosToStorage(action.payload);
    },
    updateTodo: (state, action) => {
      state.todos = [
        ...state.todos.map((todo) => {
          if (todo.id == action.payload.id) {
            return { id: action.payload.id, content: action.payload.content };
          }
          return todo;
        }),
      ];
      updateTodosToStorage(state.todos);
    },
  },
  extraReducers: (builder) => {},
});

export const { createTodo, removeTodo, updateTodo, fillTodos } =
  todoSlice.actions;
export default todoSlice.reducer;
