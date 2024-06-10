import React, { useState } from "react";

function ChallengeQuestion({
  question_text,
  question_number,
  answers,
  correctAnswer,
}: {
  question_text: string;
  question_number: number;
  answers: string[];
  correctAnswer: number;
}) {
  return (
    <>
      <div className="flex flex-col m-2 p-2 items-start">
        <p className="text-xl font-bold ">Question {question_number}</p>
        <p className="pl-2 font-bold">{question_text}</p>
        {answers.map((answer, index) => {
          return (
            <div className="flex flex-row items-center p-1">
              <input
                className="m-1"
                type="radio"
                id={`answerQ${question_number}O${index}`}
                name={`optionQ${question_number}`}
                value={answer}
              ></input>
              <label className="pl-2" htmlFor={`answer${index}`}>
                {answer}
              </label>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ChallengeQuestion;
