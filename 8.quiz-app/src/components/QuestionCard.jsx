import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import "../components/QuestionCard.css";
import { useDispatch, useSelector } from "react-redux";
import { changeModalStatus } from "../redux/quizSlice";

function QuestionCard({ questions, count, setCount, score, setScore }) {
  const [timer, setTimer] = useState(30);
  const dispatch = useDispatch();

  const choose = (e) => {
    const result = e.target.value == questions[count].correct_answer;
    if (result) {
      setScore(score + 100);
    }
    setCount(count + 1);
    setTimer(30);
    if (count == 9) {
      dispatch(changeModalStatus(true));
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeout(() => {
        if (timer > 0) {
          setTimer(timer - 1);
        }
        if (timer == 0 && count < 9) {
          setCount(count + 1);
          setTimer(30);
        }
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  return (
    <div className="question-card">
      <p style={{ fontSize: "20px", fontFamily: "arial" }}>
        <span style={{ fontWeight: "bold" }}> {count + 1}</span>/10{" "}
        {questions[count].question}
      </p>
      <p style={{ fontSize: "30px", fontWeight: "bold" }}>{timer}</p>
      <div className="answers-container">
        {questions[count].answers.map((answer, i) => (
          <Button
            value={answer}
            key={i}
            size="small"
            variant="contained"
            color="inherit"
            sx={{
              width: "47%",
              margin: "2px",
            }}
            onClick={choose}
          >
            {answer}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default QuestionCard;
