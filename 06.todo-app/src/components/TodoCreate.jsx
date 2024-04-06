import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { IconButton, InputAdornment } from "@mui/material";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { saveTodo } from "../redux/todoSlice";

function TodoCreate() {
  const [newTodo, setNewTodo] = useState("");
  // const { todos } = useSelector((store) => store.todo);

  const dispatch = useDispatch();

  // console.log("todos", todos);
  const handleSaveTodo = () => {
    if (newTodo == null || newTodo.trim().length == 0) {
      alert("Todo girişi yapınız !");
      return;
    }
    const request = {
      id: Math.floor(Math.random() * 9999999999),
      content: newTodo,
    };
    dispatch(saveTodo(request));
    clearInputs();
  };

  const clearInputs = () => {
    setNewTodo("");
  };
  return (
    <div>
      <TextField
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        id="todo-input"
        label="Bir todo giriniz"
        variant="outlined"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleSaveTodo}>
                <IoMdAddCircleOutline size={28} />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
}

export default TodoCreate;
