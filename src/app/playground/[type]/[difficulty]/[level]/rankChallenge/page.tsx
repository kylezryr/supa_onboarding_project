"use client";

import ChallengeQuestion from "@/app/components/ChallengeQuestion";
import { ChallengeQuestionsType } from "@/app/types";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function RankChallenge({
  params,
}: {
  params: {
    difficulty: string;
    type: string;
    level: number;
  };
}) {
  const [questions, setQuestions] = useState<ChallengeQuestionsType[]>([]);
  const [rankID, setRankID] = useState();
  const [finishedButtonColor, setFinishedButtonColor] =
    useState("bg-darkPrimary");
  const [rankChallengePassed, setRankChallengePassed] = useState(false);
  const [finished, setFinished] = useState(false);

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
  const answerMap: boolean[] = [];

  const getQuestions = async () => {
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
          fetch(`http://localhost:9000/challengeQuestions/${receivedRankID}`)
            .then((response) => {
              return response.json();
            })
            .then((data) => {
              setQuestions(data);
            });
        });
    } catch (error) {
      console.log(error);
    }
  };

  const finishChallenge = () => {
    setFinished(true);
    {
      questions.map((q, index) => {
        const correctOption = document.getElementById(
          `answerQ${q.question_number}O${q.correct_answer}`,
        ) as HTMLInputElement;
        if (correctOption.checked) {
          answerMap[index] = true;
          correctOption.style.accentColor = "green";
        } else {
          answerMap[index] = false;
          correctOption.checked = true;
          correctOption.style.accentColor = "red";
        }
      });
    }
    const allCorrect = answerMap.every((v) => v === true);
    setRankChallengePassed(allCorrect);
    setFinishedButtonColor(allCorrect ? "bg-buttonCorrect" : "bg-buttonWrong");
  };

  const updateRankChallenge = () => {
    if (rankChallengePassed) {
      try {
        fetch(`http://localhost:9000/updateRank/${rankID}`, {
          method: "POST",
        }).then((response) => {
          console.log("update successful");
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    getQuestions();
  }, []);

  useEffect(() => {
    updateRankChallenge();
  }, [rankChallengePassed]);

  return (
    <div className="min-h-screen bg-darkBg">
      <div className="flex flex-col">
        <div className="flex flex-col bg-lightBg text-white font-bold items-start m-8 ml-16 mr-16 p-4 h-auto justify-center rounded-lg">
          <p className="m-2">
            {typesMap.get(params.type)} {diffNavigation.get(params.difficulty)}{" "}
            {params.level}- Rank Challenge
          </p>
          <p className="font-normal m-2 text-sm">
            Get all the rank challenge questions right to unlock the next rank!
          </p>
        </div>
        {questions.map((q) => {
          return (
            <div className="flex flex-col items-start justify-center bg-lightBg text-white m-16 mt-4 mb-4 p-4 rounded-lg">
              <ChallengeQuestion
                question_text={q.question_text}
                question_number={q.question_number}
                answers={q.answers}
                correctAnswer={q.correct_answer}
              />
            </div>
          );
        })}
        <div className="flex flex-col items-center  m-2 ml-16 mr-16 text-white">
          <button
            className={`border-white border-2 p-2 rounded-lg m-1 w-32 font-bold ${finishedButtonColor}`}
            onClick={finishChallenge}
          >
            Finish quiz
          </button>
          {finished &&
            (rankChallengePassed ? (
              <p className="p-2 font-bold">
                You have passed the rank challenge!
              </p>
            ) : (
              <>
                <p className="p-2 font-bold">
                  You have failed the rank challenge, please try again.
                </p>
                {/* <Link
                  href={`/playground/${params.type}/${params.difficulty}/${params.level}/rankChallenge`}
                >
                  Retry Rank Challenge
                </Link> */}
              </>
            ))}
        </div>
        <div className="flex flex-row justify-center text-gray-400 ml-64 mr-64">
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
    </div>
  );
}

export default RankChallenge;
