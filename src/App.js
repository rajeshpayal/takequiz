import React, { useState, useRef } from "react";

import "./App.css";
import DisplayQuestion from "./components/DisplayQuestion";
const dummy_questions = [
  {
    topic: "GK Knowledge",
    level: "Beginner",
    perQuestionScore: 5,
    questions: [
      {
        text: "What is the capital of America?",
        options: [
          { id: 0, text: "New York City", isCorrect: false },
          { id: 1, text: "Boston", isCorrect: false },
          { id: 2, text: "Santa Fe", isCorrect: false },
          { id: 3, text: "Washington DC", isCorrect: true },
        ],
      },
      {
        text: "What year was the Constitution of America written?",
        options: [
          { id: 0, text: "1787", isCorrect: true },
          { id: 1, text: "1776", isCorrect: false },
          { id: 2, text: "1774", isCorrect: false },
          { id: 3, text: "1826", isCorrect: false },
        ],
      },
      {
        text: "Who was the second president of the US?",
        options: [
          { id: 0, text: "John Adams", isCorrect: true },
          { id: 1, text: "Paul Revere", isCorrect: false },
          { id: 2, text: "Thomas Jefferson", isCorrect: false },
          { id: 3, text: "Benjamin Franklin", isCorrect: false },
        ],
      },
      {
        text: "What is the largest state in the US?",
        options: [
          { id: 0, text: "California", isCorrect: false },
          { id: 1, text: "Alaska", isCorrect: true },
          { id: 2, text: "Texas", isCorrect: false },
          { id: 3, text: "Montana", isCorrect: false },
        ],
      },
      {
        text: "Which of the following countries DO NOT border the US?",
        options: [
          { id: 0, text: "Canada", isCorrect: false },
          { id: 1, text: "Russia", isCorrect: true },
          { id: 2, text: "Cuba", isCorrect: true },
          { id: 3, text: "Mexico", isCorrect: false },
        ],
      },
    ],
  },
];
function App() {
  const [selectQuiz, setSelectedQuiz] = useState(0);
  const [takeQuiz, setTakeQuiz] = useState(false);
  const windowSize = useRef([window.innerWidth, window.innerHeight]);

  const takeQuizHandler = () => {
    if (
      window.confirm(
        "Are you sure you want to take the quiz , remember once you have taken the quiz you can quit"
      )
    ) {
      setTakeQuiz(!takeQuiz);
    } else {
      return;
    }
  };
  return (
    <div
      className="body"
      style={{ height: windowSize.current[1], width: windowSize.current[0] }}
    >
      <div className="nine">
        <h1>
          {dummy_questions[selectQuiz].topic}
          <span>{dummy_questions[selectQuiz].level}</span>
        </h1>
      </div>

      {!takeQuiz && (
        <div className="quiz-details">
          <h2>Instructions for Taking a Quiz</h2>
          <ol>
            <li>
              Select an answer for every question. Unanswered questions will be
              scored as incorrect.
            </li>
            <li>
              Currently, only one answer can be selected for a multiple choice
              question.
            </li>
            <li>
              You will be shown your results, including your score and any
              feedback offered by the author of the quiz
            </li>
            <li>
              If you want to try to get a better score, click the Try Again
              button at the bottom of the results page. You can try the quiz as
              many times as you like.
            </li>
          </ol>
        </div>
      )}

      {!takeQuiz && (
        <>
          <div className="wrap">
            <h2>Quiz Details</h2>
            <h3>Passing Percentages : 80</h3>
            <h3>
              No of Questions : {dummy_questions[selectQuiz].questions.length}
            </h3>
            <h3>Time : 1 min</h3>
          </div>
          <button onClick={takeQuizHandler}>Take Quiz</button>
        </>
      )}

      {takeQuiz && (
        <DisplayQuestion
          questions={dummy_questions[selectQuiz].questions}
          title={dummy_questions[selectQuiz].topic}
        />
      )}
    </div>
  );
}

export default App;
