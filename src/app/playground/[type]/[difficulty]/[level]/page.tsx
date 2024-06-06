"use client"

import React, { useEffect, useState } from "react";
import Link from "next/link";
import supabase from "../../../../supabase";
import Question from "../../../../components/Question";
import LessonBanner from "../../../../components/LessonBanner";
import { LessonsType } from "@/app/types";

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

  const typesMap = new Map([
    ["boundingBox", "Bounding Box"],
    ["semantic", "Semantic"],
    ["polygon", "Polygon"],
  ]);
  const diffMap = new Map([
    ["red", "Red"],
    ["green", "Green"],
    ["yellow", "Yellow"],
  ]);
  

  const getLessons = async () => {
    try {
      fetch("http://localhost:9000/rank/" + params.type + "/" + params.difficulty + "/" + params.level)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const rankID = data[0].id
          fetch("http://localhost:9000/lessons/" + rankID).then((response) => {
            return response.json()
          }).then((data) => {
            setLessons(data);
          })
        });

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLessons();
  }, [])

  return (
    <>
      <div className="flex flex-col bg-stone-400 text-black font-bold items-start m-4 pl-4 h-20 justify-center">
        <p> {typesMap.get(params.type)} </p>
        <p className="mt-2">
          Rank: {params.difficulty} {params.level}
        </p>
      </div>
      <div className="flex flex-col justify-center items-center text-black">
        {lessons.map((lesson) => {
          return(
            <LessonBanner
              difficulty={params.difficulty}
              type={params.type}
              level={lesson.level}
              lessonNumber={lesson.lesson_number}
        />
          )
        })}
        <div className="text-gray-400 ml-4">
          <Link href={"/playground/" + params.type}>
            {" "}
            ← Back to {typesMap.get(params.type)}
          </Link>
        </div>
      </div>
    </>
  );
}

export default Lessons;
