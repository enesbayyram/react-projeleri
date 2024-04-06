import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getQuestions } from "../../redux/quizSlice";
import QuestionCard from "../../components/QuestionCard";
import Modal from "../../components/Modal";

function Quiz() {
  const { diffuculty } = useParams();
  const [count, setCount] = useState(0);
  const [score, setScore] = useState(0);

  const dispatch = useDispatch();
  const { questions, modal } = useSelector((store) => store.quiz);

  useEffect(() => {
    dispatch(getQuestions(diffuculty));
  }, [dispatch]);

  return (
    <div>
      {modal ? (
        <Modal score={score} />
      ) : (
        questions.length > 0 && (
          <QuestionCard
            questions={questions}
            count={count}
            setCount={setCount}
            score={score}
            setScore={setScore}
          />
        )
      )}
    </div>
  );
}

export default Quiz;
