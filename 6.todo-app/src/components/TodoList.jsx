import React from "react";
import { useSelector } from "react-redux";
import Todo from "../components/Todo";
import "../css/Todo.css";

function TodoList() {
  const { todos } = useSelector((store) => store.todo);
  return (
    <div className="todo-list-main">
      {todos && todos.map((todo) => <Todo key={todo.id} todo={todo} />)}
    </div>
  );
}

export default TodoList;
