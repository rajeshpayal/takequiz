import React, { useState, useRef } from "react";

import "./App.css";
import DisplayQuestion from "./components/DisplayQuestion";
const dummy_questions = [
  {
    topic: "JavaScript",
    level: "Beginner",
    perQuestionScore: 5,
    questions: [
      {
        text: "Javascript is an _______ language?",
        options: [
          { text: "Procedural", isCorrect: false },
          { text: "Object-based", isCorrect: false },
          { text: "Object Oriented", isCorrect: true },
          { text: "None of the above", isCorrect: false },
        ],
      },
      {
        text: "Which of the following keywords is used to define a variable in Javascript?",
        options: [
          { text: "var", isCorrect: false },
          { text: "let", isCorrect: false },
          { text: "var and let", isCorrect: true },
          { text: "None", isCorrect: false },
        ],
      },
      {
        text: "How can a datatype be declared to be a constant type?",
        options: [
          { text: "const", isCorrect: true },
          { text: "Var", isCorrect: false },
          { text: "Let", isCorrect: false },
          { text: "Constant", isCorrect: false },
        ],
      },
      {
        text: "What keyword is used to check whether a given property is valid or not?",
        options: [
          { text: "is in", isCorrect: false },
          { text: "in", isCorrect: true },
          { text: "exist", isCorrect: false },
          { text: "lies", isCorrect: false },
        ],
      },
      {
        text: "When an operator’s value is NULL, the typeof returned by the unary operator is:",
        options: [
          { text: "boolean", isCorrect: false },
          { text: "object", isCorrect: true },
          { text: "undefined", isCorrect: true },
          { text: "Integer", isCorrect: false },
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
