import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import supabase from "../supabase";
import Question from "../components/Question";
import LessonBanner from "../components/LessonBanner";

function Lessons({
  difficulty,
  type,
  level,
}: {
  difficulty: string;
  type: string;
  level: number;
}) {
  const navigation = new Map([
    ["Bounding Box", "boundingBox"],
    ["Semantic", "semantic"],
    ["Polygon", "polygon"],
  ]);

  return (
    <>
      <div className="flex flex-col bg-stone-400 text-black font-bold items-start m-4 pl-4 h-20 justify-center">
        <p> {type} </p>
        <p className="mt-2">
          Rank: {difficulty} {level}
        </p>
      </div>
      <div className="flex flex-col justify-center items-center text-black">
        <LessonBanner
          difficulty="Red"
          level={1}
          navigation="boundingBox/red"
          lessonNumber={1}
        />
        <LessonBanner
          difficulty="Red"
          level={1}
          navigation="boundingBox/red"
          lessonNumber={2}
        />
        <div className="text-gray-400 ml-4">
          <NavLink to={"/" + navigation.get(type)}> ← Back to {type}</NavLink>
        </div>
      </div>
    </>
  );
}

export default Lessons;
