import React, { useState } from "react";
import { QuestionsType, PointsType } from "../types";
import QuizQuestion from "./QuizQuestion";

function Quiz({
  questions,
  pointsUpdater,
  quizFinishedUpdater,
}: {
  questions: QuestionsType[];
  pointsUpdater: React.Dispatch<React.SetStateAction<number>>;
  quizFinishedUpdater: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  let pointsScored = 0;
  const [finishedButtonColor, setFinishedButtonColor] =
    useState("bg-darkPrimary");
  const [finished, setFinished] = useState(false);

  const finishQuiz = () => {
    setFinished(true);
    setFinishedButtonColor("bg-buttonNeutral");
    {
      questions.map((q) => {
        const correctOption = document.getElementById(
          `RanswerQ${q.question_number}O${q.correct_answer}`,
        ) as HTMLInputElement;
        if (correctOption.checked) {
          pointsScored += Number(q.points);
          correctOption.style.accentColor = "green";
        } else {
          correctOption.checked = true;
          correctOption.style.accentColor = "red";
        }
      });
    }
    pointsUpdater(pointsScored);
    quizFinishedUpdater(true);
  };

  return (
    <>
      <div className="flex flex-col">
        {questions.map((q) => {
          return (
            <QuizQuestion
              question_text={q.question_text}
              question_number={q.question_number}
              answers={q.answers}
              correctAnswer={q.correct_answer}
              points={q.points}
            />
          );
        })}
      </div>
      <div>
        <button
          className={`border-white border-2 font-bold p-2 rounded-lg m-1 ${finishedButtonColor}`}
          style={{ pointerEvents: finished ? "none" : "auto" }}
          onClick={finishQuiz}
        >
          Finish quiz
        </button>
      </div>
    </>
  );
}

export default Quiz;
