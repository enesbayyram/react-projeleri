import React from "react";
import "../components/Modal.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeModalStatus } from "../redux/quizSlice";

function Modal({ score }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const againGame = () => {
    dispatch(changeModalStatus(false));
    navigate("/");
  };

  return (
    <div className="modal">
      <div className="content">
        <div>Skor : {score}</div>
        <div>
          <Button
            sx={{ marginTop: "30px" }}
            variant="contained"
            size="small"
            color="success"
            onClick={againGame}
          >
            Yeniden Başla
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
