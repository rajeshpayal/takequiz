import React from "react";
import "./Result.css";
const Result = ({ questions, score, crtquestion, restartQuiz, time }) => {
  return (
    <>
      <div className="final-results">
        <h1>Final Results </h1>
        <h2>
          {score} / {questions.length} correct - (
          {(score / questions.length) * 100}%)
        </h2>
        <h3>No. of Question Correct : {crtquestion}</h3>
        <h3>No. of Question Wrong : {questions.length - crtquestion}</h3>
        <h3>Total Questions : {questions.length}</h3>
        <h3>Time Taken: {60 - time}seconds</h3>
        {(score / questions.length) * 100 <= 60 && (
          <button onClick={restartQuiz}>Retry</button>
        )}
      </div>
    </>
  );
};

export default Result;
