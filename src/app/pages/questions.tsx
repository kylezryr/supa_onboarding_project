'use client'

import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import supabase from "../supabase";
import Question from "../components/Question";
import { QuestionsType } from "../types";

function Questions({
  difficulty,
  type,
  level,
  lessonNumber,
}: {
  difficulty: string;
  type: string;
  level: number;
  lessonNumber: number;
}) {
  const [showPracticeQ, setShowPracticeQ] = useState(false);
  const [showRealQ, setShowRealQ] = useState(false);
  const [practiceQ, setPracticeQ] = useState<QuestionsType[]>([]);
  const [realQ, setRealQ] = useState<QuestionsType[]>([]);
  const typeNavigation = new Map([
    ["Bounding Box", "boundingBox"],
    ["Semantic", "semantic"],
    ["Polygon", "polygon"],
  ]);
  const diffNavigation = new Map([
    ["Red", "red"],
    ["Green", "green"],
    ["Yellow", "yellow"],
  ]);
  const [description, setDescription] = useState("");

  const getPracticeQuestions = async () => {
    const { data } = await supabase.rpc("getpracticequestions", {
      inputtype: type,
      inputdifficulty: difficulty,
    });
    if (data) {
      setPracticeQ(data);
    }
  };

  const getRealQuestions = async () => {
    const { data } = await supabase.rpc("getrealquestions", {
      inputtype: type,
      inputdifficulty: difficulty,
    });
    if (data) {
      setRealQ(data);
    }
  };

  useEffect(() => {
    getPracticeQuestions();
    getRealQuestions();
    setDescription("example description");
  }, []);

  return (
    <div className="flex flex-col">
      <div className=" flex text-black ml-16 text-xs items-start">
        <NavLink
          to={
            "/" +
            typeNavigation.get(type) +
            "/" +
            diffNavigation.get(difficulty) +
            level
          }
        >
          {" "}
          ← Back to {type} {difficulty}
        </NavLink>
      </div>
      <div className="flex flex-col bg-stone-400 text-black font-bold items-start m-8 ml-16 mr-16 pl-4 h-auto justify-center">
        <p className="m-2">Title here</p>
        <p className="m-2">
          Skill: {type} {difficulty} - Lesson {lessonNumber}
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
          practiceQ.map((q) => {
            return (
              <Question
                question={q.question}
                answers={q.answers}
                correctAnswer={q.correctAnswer}
              />
            );
          })}
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
          realQ.map((q) => {
            return (
              <Question
                question={q.question}
                answers={q.answers}
                correctAnswer={q.correctAnswer}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Questions;
