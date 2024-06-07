import React from "react";

function Question({
  question_text,
  question_number,
  answers,
  correctAnswer,
  points,
}: {
  question_text: string;
  question_number: number;
  answers: string[];
  correctAnswer: number;
  points: number;
}) {
  return (
    <>
      <div className="flex flex-col m-2 items-start">
        <p className="text-xl font-bold ">
          Question {question_number} ({points} points)
        </p>
        <p className="pl-2 font-bold">{question_text}</p>
        {answers.map((answer) => {
          return <p className="m-1 pl-4">{answer}</p>;
        })}
      </div>
    </>
  );
}

export default Question;
