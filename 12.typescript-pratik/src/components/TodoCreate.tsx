import React from "react";
import { ITodoType } from "../types/types";

interface TodoCreateType {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  addTodo : (todo : ITodoType)=> void
}

function TodoCreate({addTodo ,todo, setTodo }: TodoCreateType) {

  const addNewTodo = ()=>{
    const payload = {
      id : Math.floor(Math.random()*99999999),
      content : todo,
      isCompleted : false
    }
    addTodo(payload)
  }

  return (
    <div>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={addNewTodo}>Oluştur</button>
    </div>
  );
}

export default TodoCreate;
