import React, { useEffect, useState } from "react";
import Link from "next/link";
import supabase from "../../../supabase";
import Question from "../../../components/Question";
import LessonBanner from "../../../components/LessonBanner";

function Lessons({
  params,
}: {
  params: {
    difficulty: string;
    type: string;
    level: number;
  };
}) {
  const typesMap = new Map([
    ["boundingBox", "Bounding Box"],
    ["semantic", "Semantic"],
    ["polygon", "Polygon"],
  ]);

  return (
    <>
      <div className="flex flex-col bg-stone-400 text-black font-bold items-start m-4 pl-4 h-20 justify-center">
        <p> {typesMap.get(params.type)} </p>
        <p className="mt-2">
          Rank: {params.difficulty} {params.level}
        </p>
      </div>
      <div className="flex flex-col justify-center items-center text-black">
        <LessonBanner
          difficulty={params.difficulty}
          type={params.type}
          lessonNumber={1}
        />
        <LessonBanner
          difficulty={params.difficulty}
          type={params.type}
          lessonNumber={2}
        />
        <LessonBanner
          difficulty={params.difficulty}
          type={params.type}
          lessonNumber={3}
        />
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
