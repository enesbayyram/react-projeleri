import { useDispatch } from "react-redux";
import { deleteTodoById, updateTodoById } from "../redux/todoSlice";
import React, { useState } from "react";
import { TodoType } from "../types/types";

interface TodoProps {
    todo : TodoType
}

function Todo({todo} : TodoProps) {
    const {id,content} = todo;
  const dispatch = useDispatch();

  const [editable, setEditable] = useState<boolean>(false);
  const [newValue, setNewValue] = useState<string>(content);

  const handleDeleteTodo = (id: number) => {
    if (id) {
      dispatch(deleteTodoById(id));
    }
  };

  const handleUpdateTodo = (id: number) => {
    const payload: TodoType = {
      id: id,
      content: newValue,
    };
    dispatch(updateTodoById(payload));
    setEditable(false);
    setNewValue('');
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "orange",
          padding: "10px",
          borderRadius: "5px",
        }}
        key={id}
      >
        {editable ? (
          <input
            value={newValue}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
             setNewValue(e.target.value)
            }
            style={{
              border: "none",
              backgroundColor: "transparent",
              borderBottom: "1px solid black",
              outline: "none",
            }}
            type="text"
          />
        ) : (
          <div>{content}</div>
        )}

        <div className="row">
          <div
            onClick={() => setEditable(!editable)}
            style={{ marginRight: "10px" }}
          >
            {editable ? (
              <div onClick={() => handleUpdateTodo(id)}>T</div>
            ) : (
              <div onClick={() => setEditable(true)}>G</div>
            )}
          </div>
          <div onClick={() => handleDeleteTodo(id)}>X</div>
        </div>
      </div>
    </div>
  );
}

export default Todo;
