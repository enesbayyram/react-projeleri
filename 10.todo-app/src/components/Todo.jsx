import React, { useState } from "react";
import { IoIosRemoveCircle } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import Stack from "@mui/material/Stack";
import { useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../redux/todoSlice";
import TextField from "@mui/material/TextField";

function Todo({ todo }) {
  const dispatch = useDispatch();

  const { id, content } = todo;

  const [editable, setEditable] = useState(false);
  const [todoContent, setTodoContent] = useState(content);

  const handleRemoveTodo = () => {
    dispatch(removeTodo(id));
  };

  const handleUpdateTodo = () => {
    dispatch(updateTodo({ id: id, content: todoContent }));
    setEditable(false);
  };

  return (
    <Stack
      direction="row"
      spacing={1}
      sx={{
        marginTop: "20px",
        border: "1px solid lightgrey",
        padding: "15px 30px",
      }}
      alignItems="center"
      justifyContent="space-between"
    >
      <div>
        {editable ? (
          <TextField
            id="editInput"
            variant="standard"
            size="small"
            sx={{ width: "350px" }}
            value={todoContent}
            onChange={(e) => setTodoContent(e.target.value)}
          />
        ) : (
          content
        )}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <IoIosRemoveCircle onClick={handleRemoveTodo} className="remove-icon" />
        {editable ? (
          <FaCheck
            className="edit-or-check-icon"
            style={{ fontSize: "20px" }}
            onClick={handleUpdateTodo}
          />
        ) : (
          <MdEdit
            className="edit-or-check-icon"
            onClick={() => setEditable(true)}
          />
        )}
      </div>
    </Stack>
  );
}

export default Todo;
