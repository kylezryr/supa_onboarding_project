import React from "react";

function Question({
  question,
  answers,
  correctAnswer,
}: {
  question: string;
  answers: string;
  correctAnswer: number;
}) {
  const answersList = answers.split(", ");

  return (
    <>
      <div className="flex flex-col m-2 items-start">
        <p className="text-xl font-bold ">
          {question} {correctAnswer}
        </p>
        {answersList.map((answer) => {
          return <p className="m-1">{answer}</p>;
        })}
      </div>
    </>
  );
}

export default Question;
