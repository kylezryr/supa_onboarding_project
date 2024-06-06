"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Question from "../../../../../components/Question";
import { QuestionsType } from "../../../../../types";

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
  const [showRealQ, setShowRealQ] = useState(false);
  const [questions, setQuestions] = useState<QuestionsType[]>([]);
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
  const typeToID = new Map([
    ["boundingBox", 0],
    ["semantic", 18],
    ["polygon", 9],
  ]);
  const diffToID = new Map([
    ["red", 0],
    ["yellow", 3],
    ["green", 6],
  ])
  const [description, setDescription] = useState("");
  
  const getQuestions = async () => {
    const url = `http://localhost:9000/lessonID/${params.type}/${params.difficulty}/${params.level}/${params.lesson}`
    try {
      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const lessonID = data[0].id
          console.log("id: ", lessonID)
          fetch("http://localhost:9000/questions/" + lessonID).then((response) => {
            return response.json()
          }).then((data) => {
            console.log("questions:", data)
            setQuestions(data);
          })
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log("t:", params.type, "d:", params.difficulty, "lv", params.level, "le", params.lesson)
    getQuestions();
    setDescription("example description");
  }, []);

  return (
    <div className="flex flex-col">
      <div className=" flex text-black ml-16 text-xs items-start p-1">
        <Link href={"/playground/" + params.type + "/" + params.difficulty + "/" + params.level}>
          {" "}
          ← Back to {typesMap.get(params.type)} {diffNavigation.get(params.difficulty)} {params.level}
        </Link>
      </div>
      <div className="flex flex-col bg-stone-400 text-black font-bold items-start m-8 ml-16 mr-16 pl-4 h-auto justify-center">
        <p className="m-2">Title here</p>
        <p className="m-2">
          Skill: {typesMap.get(params.type)} {diffNavigation.get(params.difficulty)} -{" "}
          Lesson {params.lesson}
        </p>
        <p className="font-normal m-2 text-sm">{description}</p>
      </div>
      <div className="flex flex-col font-bold bg-stone-400 text-black m-8 ml-16 mr-16 p-2 items-start">
        <p className="m-2">Read this guide</p>
        <p className="m-2">Watch this video</p>
        <p className="m-2">Another teaching format</p>
      </div>
      <div className="bg-stone-400 flex flex-col justify-center items-start text-black m-8 ml-16 mr-16 p-2">
        <p className="font-bold text-xl m-2 mb-4">Practice</p>
        <p className="m-2">Test your knowledge of the skills in this course.</p>
        <div className="flex flex-row justify-end">
          <button
            onClick={() => setShowPracticeQ(!showPracticeQ)}
            className="m-8 border-2 border-black p-2"
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
              />
              )
            }
          })
          }
      </div>
      <div className="bg-stone-400 flex flex-col justify-center items-start text-black m-8 ml-16 mr-16 p-2">
        <p className="font-bold text-xl m-2 mb-4">Lesson Quiz</p>
        <p className="m-2">Test your knowledge of the skills in this course.</p>
        <p className="m-2">Complete this quiz to earn 250 Kaya Points!</p>
        <button
          onClick={() => setShowRealQ(!showRealQ)}
          className="m-8 border-2 border-black p-2"
        >
          Start quiz
        </button>
        {showRealQ &&
          questions.map((q) => {
            if (!q.practice) {
              return (
              <Question
                question_text={q.question_text}
                question_number={q.question_number}
                answers={q.answers}
                correctAnswer={q.correct_answer}
                points={q.points}
              />
              )
            }
          })}
      </div>
    </div>
  );
}

export default Questions;
