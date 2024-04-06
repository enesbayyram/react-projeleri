import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Introduce from "../pages/intoduce/Introduce";
import Quiz from "../pages/quiz/Quiz";

function RouterConfig() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Introduce />} />
        <Route path="/quiz/:diffuculty" element={<Quiz />} />
      </Routes>
    </Router>
  );
}

export default RouterConfig;
