"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Question from "../../../../../components/Question";
import { QuestionsType, LessonsType } from "../../../../../types";
import Quiz from "@/app/components/Quiz";

function Questions({
  params,
}: {
  params: {
    difficulty: string;
    type: string;
    level: number;
    lesson: string;
  };
}) {
  const [showPracticeQ, setShowPracticeQ] = useState(false);
  const [lessonID, setLessonID] = useState();
  const [rankID, setRankID] = useState();
  const [showRealQ, setShowRealQ] = useState(false);
  const [questions, setQuestions] = useState<QuestionsType[]>([]);
  const [lessonData, setLessonData] = useState<LessonsType>();
  const [pointsScored, setPointsScored] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const typesMap = new Map([
    ["boundingBox", "Bounding Box"],
    ["semantic", "Semantic"],
    ["polygon", "Polygon"],
  ]);
  const diffNavigation = new Map([
    ["red", "Red"],
    ["green", "Green"],
    ["yellow", "Yellow"],
  ]);

  const getQuestions = async () => {
    try {
      fetch(
        `http://localhost:9000/lessonID/${params.type}/${params.difficulty}/${params.level}/${params.lesson}`,
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const receivedLessonID = data[0].id;
          setLessonID(receivedLessonID);
          fetch("http://localhost:9000/questions/" + receivedLessonID)
            .then((response) => {
              return response.json();
            })
            .then((data) => {
              setQuestions(data);
            });
          fetch("http://localhost:9000/lesson/" + receivedLessonID)
            .then((response) => {
              return response.json();
            })
            .then((data) => {
              setLessonData(data[0]);
            });
        });
    } catch (error) {
      console.log(error);
    }
  };

  const updateLessonScore = async () => {
    try {
      fetch(
        `http://localhost:9000/rankID/${params.type}/${params.difficulty}/${params.level}`,
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const receivedRankID = data[0].id;
          setRankID(receivedRankID);
          fetch(
            `http://localhost:9000/updateLessonScore/${lessonID}/${pointsScored}/${receivedRankID}`,
            {
              method: "POST",
            },
          ).then((response) => {
            return response;
          });
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getQuestions();
  }, []);

  useEffect(() => {
    updateLessonScore();
  }, [quizFinished]);

  return (
    <div className="flex flex-col bg-darkBg min-h-screen">
      <div className="flex flex-col bg-lightBg text-white font-bold items-start m-8 ml-16 mr-16 pl-4 h-auto justify-center shadow-lg rounded-lg">
        <p className="m-2">{lessonData?.title}</p>
        <p className="m-2">
          Skill: {typesMap.get(params.type)}{" "}
          {diffNavigation.get(params.difficulty)} {params.level} - Lesson{" "}
          {params.lesson}
        </p>
        <p className="font-normal m-2 text-sm">{lessonData?.description}</p>
      </div>
      <div className="flex flex-col font-bold bg-lightBg text-white m-8 ml-16 mr-16 p-2 items-start shadow-lg rounded-lg">
        <p className="m-2">Read this guide</p>
        <p className="m-2">Watch this video</p>
        <p className="m-2">Another teaching format</p>
      </div>
      <div className="bg-lightBg flex flex-col justify-center items-start text-white m-8 ml-16 mr-16 p-2 shadow-lg rounded-lg">
        <p className="font-bold text-xl m-2 mb-4">Practice</p>
        <p className="m-2">Test your knowledge of the skills in this course.</p>
        <div className="flex flex-row justify-end">
          <button
            onClick={() => setShowPracticeQ(!showPracticeQ)}
            className="m-8 border-2 border-white font-bold p-2 rounded-lg bg-darkPrimary"
          >
            Practice
          </button>
        </div>
        {showPracticeQ &&
          questions.map((q) => {
            if (q.practice) {
              return (
                <Question
                  question_text={q.question_text}
                  question_number={q.question_number}
                  answers={q.answers}
                  correctAnswer={q.correct_answer}
                  points={q.points}
                  practice={q.practice}
                />
              );
            }
          })}
      </div>
      <div className="bg-lightBg flex flex-col justify-center items-start text-white m-8 ml-16 mr-16 p-2 shadow-lg rounded-lg">
        <p className="font-bold text-xl m-2 mb-4">Lesson Quiz</p>
        <p className="m-2">Test your knowledge of the skills in this course.</p>
        <p className="m-2">
          Complete this quiz to earn {lessonData?.total_points} Kaya Points!
        </p>
        <button
          onClick={() => setShowRealQ(!showRealQ)}
          className="m-8 border-2 border-white font-bold p-2 rounded-lg bg-darkPrimary"
        >
          Start quiz
        </button>
        {showRealQ && (
          <Quiz
            questions={questions.filter((q) => !q.practice)}
            pointsUpdater={setPointsScored}
            quizFinishedUpdater={setQuizFinished}
          />
        )}
        {quizFinished && (
          <p className="m-1 font-bold">
            {" "}
            Finished! You scored: {pointsScored} out of{" "}
            {lessonData?.total_points} points! You may return to the previous
            page
          </p>
        )}
      </div>
      <div className="flex flex-row justify-center text-white ml-64 mr-64">
        <Link
          href={
            "/playground/" +
            params.type +
            "/" +
            params.difficulty +
            "/" +
            params.level
          }
        >
          {" "}
          ← Back to {typesMap.get(params.type)}{" "}
          {diffNavigation.get(params.difficulty)} {params.level}
        </Link>
      </div>
    </div>
  );
}

export default Questions;
