import React, { useEffect, useState } from "react";

import "./DisplayQuestion.css";
import Result from "./Result";

const DisplayQuestion = ({ questions, title }) => {
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [crtquestion, setCrtQuestion] = useState(0);
  const [time, setTime] = useState(60);

  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
      setCrtQuestion(crtquestion + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      setTime(time - 1);
    }, 1000);

    if (time < 1) {
      clearTimeout(timeOutId);
      setShowResults(true);
    }
    return () => {
      clearTimeout(timeOutId);
    };
  }, [time]);

  const doubleDigit = time >= 10 ? time : `0${time}`;

  return (
    <div className="App">
      {!showResults && <h2>Time: {doubleDigit}sec</h2>}

      {showResults && (
        <Result questions={questions} score={score} crtquestion={crtquestion} />
      )}
      {!showResults && (
        <div className="question-card">
          <h2>
            Q: {currentQuestion + 1} / {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>
          <ol>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ol>
        </div>
      )}
    </div>
  );
};

export default DisplayQuestion;