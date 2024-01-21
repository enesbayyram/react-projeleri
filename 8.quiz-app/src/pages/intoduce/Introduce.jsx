import React, { useState } from "react";
import "../intoduce/Introduce.css";
import "../../App.css";
import QuizLogo from "../../assets/quiz-logo.png";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function Introduce() {
  const { levelQuestion } = useSelector((store) => store.quiz);
  const [selectedLevel, setSelectedLevel] = useState("");

  const navigate = useNavigate();

  const startQuiz = () => {
    if (selectedLevel) {
      navigate(`/quiz/${selectedLevel}`);
    }
  };

  return (
    <div className="introduce">
      <div className="introduce-container">
        <div className="content">
          <img className="logo" src={QuizLogo} />

          <FormControl fullWidth sx={{ marginTop: "1rem" }}>
            <InputLabel
              id="demo-simple-select-label"
              sx={{ fontWeight: "bold" }}
            >
              Level
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedLevel}
              label="Age"
              onChange={(e) => setSelectedLevel(e.target.value)}
              style={{
                color: "black",
                backgroundColor: "transparent",
              }}
            >
              {levelQuestion.map((item, index) => (
                <MenuItem value={item} key={index}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button
            sx={{ marginTop: "1.5rem", fontWeight: "bold" }}
            variant="contained"
            size="small"
            color="warning"
            onClick={startQuiz}
          >
            Quiz'e başla
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Introduce;
