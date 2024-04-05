import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Todo from "./Todo";
function TodoList() {
  const { todos } = useSelector((store) => store.todo);

  return (
    <div style={{ marginTop: "25px", width: "100%" }}>
      {todos ? (
        todos.map((todo) => <Todo key={todo.id} todo={todo} />)
      ) : (
        <p>Todo listesi boştur.</p>
      )}
    </div>
  );
}

export default TodoList;
