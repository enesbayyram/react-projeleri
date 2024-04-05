import React, { useEffect, useRef, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useDispatch } from "react-redux";
import { createTodo } from "../redux/todoSlice";

function TodoCreate() {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState("");

  const inputTodoCreateRef = useRef(null);

  const focusInput = () => {
    inputTodoCreateRef.current.children[1].children[0].focus();
  };

  useEffect(() => {
    focusInput();
  }, []);

  const clearInputs = () => {
    setNewTodo("");
  };

  const handleCreateTodo = () => {
    if (!newTodo || newTodo.trim().length < 1) return;

    const request = {
      id: Math.floor(Math.random() * 99999999),
      content: newTodo,
    };
    dispatch(createTodo(request));

    clearInputs();
    focusInput();
  };
  return (
    <Stack
      direction="column"
      sx={{ width: "100%" }}
      alignItems="flex-end"
      justifyContent="flex-start"
    >
      <TextField
        id="newTodoInput"
        ref={inputTodoCreateRef}
        label="Yeni bir todo"
        variant="standard"
        size="small"
        sx={{
          marginBottom: "15px",
        }}
        fullWidth
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <Button
        onClick={handleCreateTodo}
        variant="contained"
        size="small"
        sx={{ width: "150px", textTransform: "none", fontSize: "15px" }}
      >
        Todo Oluştur
      </Button>
    </Stack>
  );
}

export default TodoCreate;
