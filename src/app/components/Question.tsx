import React, { useState } from "react";

function Question({
  question_text,
  question_number,
  answers,
  correctAnswer,
  practice,
  points,
}: {
  question_text: string;
  question_number: number;
  answers: string[];
  correctAnswer: number;
  practice: boolean;
  points: number;
}) {
  const [buttonColour, setButtonColour] = useState("bg-neutral-300");
  const [answered, setAnswered] = useState(false);
  const [correct, setCorrect] = useState(false);
  const namePrefix = practice ? "P" : "R";

  const checkAnswer = () => {
    setAnswered(true);
    const correctOption = document.getElementById(
      `${namePrefix}answerQ${question_number}O${correctAnswer}`,
    ) as HTMLInputElement;
    if (correctOption.checked) {
      setButtonColour("bg-lime-600");
      setCorrect(true);
    } else {
      setButtonColour("bg-red-500");
      setCorrect(false);
    }
  };

  return (
    <>
      <div className="flex flex-col m-2 p-2 items-start">
        <p className="text-xl font-bold ">
          Question {question_number} ({points} points)
        </p>
        <p className="pl-2 font-bold">{question_text}</p>
        {answers.map((answer, index) => {
          return (
            <div className="flex flex-row items-center p-1">
              <input
                className="m-1"
                type="radio"
                id={`${namePrefix}answerQ${question_number}O${index}`}
                name={`${namePrefix}optionQ${question_number}`}
                value={answer}
              ></input>
              <label className="pl-2" htmlFor={`answer${index}`}>
                {answer}
              </label>
            </div>
          );
        })}
        <div className="flex flex-row items-center p-1">
          <button
            className={`border-black border-2 p-1 m-1 ${buttonColour}`}
            onClick={checkAnswer}
          >
            Submit
          </button>
          {answered &&
            (correct ? (
              <p className="pl-2">Correct!</p>
            ) : (
              <p className="pl-2">Incorrect, please try again.</p>
            ))}
        </div>
      </div>
    </>
  );
}

export default Question;
