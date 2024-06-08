import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { TodoType } from "../types/types";

import Todo from "./Todo";

function TodoList() {
  const { todoList } = useSelector((state: RootState) => state.todo);

  return (
    <div style={{ width: "300px" }}>
      {todoList &&
        todoList.map((todo: TodoType, index: number) => (
            <Todo key={todo.id} todo={todo} />
        ))}
    </div>
  );
}

export default TodoList;
