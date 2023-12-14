import { useState } from "react";
import "./App.css";
import { useSelector } from "react-redux";
import TodoCreate from "./components/TodoCreate";
import TodoContainer from "./components/TodoContainer";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "50px",
      }}
    >
      <TodoCreate />
      <TodoList />
    </div>
  );
}

export default App;
