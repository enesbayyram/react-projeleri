import { useEffect, useState } from "react";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";
import "./App.css";
import { useDispatch } from "react-redux";
import { fillTodos } from "./redux/todoSlice";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fillTodos());
  }, []);
  return (
    <div className="App">
      <div style={{ width: "500px" }}>
        <TodoCreate />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
