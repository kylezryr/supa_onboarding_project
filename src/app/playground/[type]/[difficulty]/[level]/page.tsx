"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import LessonBanner from "../../../../components/LessonBanner";
import { LessonsType, RanksType } from "@/app/types";

function Lessons({
  params,
}: {
  params: {
    difficulty: string;
    type: string;
    level: number;
  };
}) {
  const [rankID, setRankID] = useState<number>();
  const [lessons, setLessons] = useState<LessonsType[]>([]);
  const [showRankChallenge, setShowRankChallenge] = useState(false);
  const [nextRank, setNextRank] = useState<RanksType>();
  const rankChallengeBg = showRankChallenge
    ? "bg-darkPrimary"
    : "bg-lightPrimary";
  const rankTextColor = showRankChallenge ? "text-white" : "text-darkWhite";

  const typesMap = new Map([
    ["boundingBox", "Bounding Box"],
    ["semantic", "Semantic"],
    ["polygon", "Polygon"],
  ]);
  const typesMapReverse = new Map([
    ["Bounding Box", "boundingBox"],
    ["Semantic", "semantic"],
    ["Polygon", "polygon"],
  ]);
  const diffMap = new Map([
    ["red", "Red"],
    ["green", "Green"],
    ["yellow", "Yellow"],
  ]);
  const diffMapReverse = new Map([
    ["Red", "red"],
    ["Green", "green"],
    ["Yellow", "yellow"],
  ]);

  const getLessons = async () => {
    try {
      fetch(
        "http://localhost:9000/rankID/" +
          params.type +
          "/" +
          params.difficulty +
          "/" +
          params.level,
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const rankID = data[0].id;
          setRankID(rankID);
          fetch("http://localhost:9000/lessons/" + rankID)
            .then((response) => {
              return response.json();
            })
            .then((data) => {
              setLessons(data);
            });
        });
    } catch (error) {
      console.log(error);
    }
  };

  const getShowRankChallenge = async () => {
    try {
      fetch(
        "http://localhost:9000/rankID/" +
          params.type +
          "/" +
          params.difficulty +
          "/" +
          params.level,
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const rankID = data[0].id;
          setRankID(rankID);
          fetch("http://localhost:9000/showRankChallenge/" + rankID)
            .then((response) => {
              return response.json();
            })
            .then((data) => {
              setShowRankChallenge(data);
            });
          if (
            params.difficulty != "Red" &&
            params.type != "Polygon" &&
            params.level != 3
          ) {
            fetch("http://localhost:9000/nextRank/" + rankID)
              .then((response) => {
                return response.json();
              })
              .then((data) => {
                setNextRank(data);
              });
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLessons().then(() => {
      getShowRankChallenge();
    });
  }, []);

  return (
    <>
      <div className="flex flex-col bg-lightBg text-white font-bold items-start m-4 p-2 pl-8 justify-center shadow-lg rounded-lg">
        <p> {typesMap.get(params.type)} </p>
        <p className="mt-2">
          Rank: {diffMap.get(params.difficulty)} {params.level}
        </p>
        <p className="mt-2 font-normal">
          You must pass all the lessons first before the rank challenge is
          unlocked.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center text-black">
        {lessons.map((lesson) => {
          return (
            <LessonBanner
              difficulty={params.difficulty}
              type={params.type}
              level={lesson.level}
              lessonNumber={lesson.lesson_number}
              current_points={lesson.current_points}
              total_points={lesson.total_points}
              unlocked={lesson.unlocked}
            />
          );
        })}

        <div
          className={`flex flex-col ${rankChallengeBg} p-4 m-16 ml-32 mr-32 shadow-lg rounded-lg ${rankTextColor}`}
        >
          <p className="font-bold text-xl p-2">Rank Challenge</p>
          <p className="p-2">
            Test your knowledge of the skills in this course with a rank
            challenge. Go through course material and take quizzes to check your
            understanding before you start!
          </p>
          <div
            className={`flex flex-col items-center p-2 border-white border-2 w-36 text-white font-bold m-2 rounded-lg`}
          >
            {showRankChallenge ? (
              <Link
                href={`/playground/${params.type}/${params.difficulty}/${params.level}/rankChallenge`}
              >
                Rank Challenge
              </Link>
            ) : (
              <Link
                href={`/playground/${params.type}/${params.difficulty}/${params.level}/rankChallenge`}
                style={{ pointerEvents: "none" }}
              >
                Rank Challenge
              </Link>
            )}
          </div>
        </div>

        {nextRank ? (
          nextRank.unlocked ? (
            <div className="flex flex-row justify-between text-white ml-4 w-full pr-24 pl-24">
              <Link href={"/playground/" + params.type}>
                {" "}
                ← Back to {typesMap.get(params.type)}
              </Link>
              <Link
                href={`/playground/${typesMapReverse.get(nextRank.type)}/${diffMapReverse.get(nextRank.difficulty)}/${nextRank.level}`}
              >
                Up next: {nextRank.type} {nextRank.difficulty} {nextRank.level}{" "}
                →
              </Link>
            </div>
          ) : (
            <div className="flex flex-row justify-center text-white w-full">
              <Link href={"/playground/" + params.type}>
                {" "}
                ← Back to {typesMap.get(params.type)}
              </Link>
            </div>
          )
        ) : (
          <div className="flex flex-row justify-center text-white w-full">
            <Link href={"/playground/" + params.type}>
              {" "}
              ← Back to {typesMap.get(params.type)}
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

export default Lessons;
