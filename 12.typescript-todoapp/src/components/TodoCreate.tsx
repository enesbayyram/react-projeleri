import React, { useState } from "react";
import { TodoType } from "../types/types";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";

function TodoCreate() {
  const [newTodo, setNewTodo] = useState<string>("");

  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (newTodo.trim().length > 0) {
      const payload: TodoType = {
        id: Math.floor(Math.random() * 999999999),
        content: newTodo,
      };

      dispatch(addTodo(payload));
      setNewTodo("");
    } else {
      alert("todo giriniz");
    }
  };

  return (
    <div className="column" style={{ marginBottom: "50px" }}>
      <input
        id="todoInput"
        value={newTodo}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setNewTodo(e.target.value)
        }
        placeholder="todo giriniz"
        type="text"
        style={{
          padding: "15px 10px",
          borderRadius: "5px",
          border: "1px solid grey",
          width: "300px",
        }}
      />
      <button onClick={handleAddTodo} style={{ marginTop: "10px" }}>
        Oluştur
      </button>
    </div>
  );
}

export default TodoCreate;
