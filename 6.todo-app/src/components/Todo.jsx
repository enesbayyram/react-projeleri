import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { IoMdCloseCircle } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";
import { IconButton } from "@mui/material";
import { GiConfirmed } from "react-icons/gi";
import "../css/Todo.css";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../redux/todoSlice";
import TextField from "@mui/material/TextField";

function Todo({ todo }) {
  const { id, content } = todo;
  const [editable, setEditable] = useState(false);
  const [editTodoValue, setEditTodoValue] = useState(content);

  const dispatch = useDispatch();

  const handleDeleteTodo = () => {
    dispatch(deleteTodo(id));
  };

  const handleUpdateTodo = () => {
    const request = {
      id: id,
      content: editTodoValue,
    };
    dispatch(updateTodo(request));
    setEditable(false);
  };

  return (
    <Card sx={{ width: 500, height: 70 }} className="todo">
      <CardContent>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          {editable ? (
            <>
              <TextField
                id="todo-input-update"
                value={editTodoValue}
                onChange={(e) => setEditTodoValue(e.target.value)}
                variant="standard"
                fullWidth
                InputProps={{
                  style: {
                    height: "47px",
                    width: "390px",
                  },
                }}
              />
            </>
          ) : (
            <Typography sx={{ fontSize: 14 }} color="text.secondary">
              {content}
            </Typography>
          )}

          <Stack direction="row" alignItems="center" justifyContent="center">
            <IconButton onClick={handleDeleteTodo}>
              <IoMdCloseCircle />
            </IconButton>
            {editable ? (
              <IconButton onClick={handleUpdateTodo}>
                <GiConfirmed />
              </IconButton>
            ) : (
              <IconButton onClick={() => setEditable(true)}>
                <FaRegEdit />
              </IconButton>
            )}
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default Todo;
