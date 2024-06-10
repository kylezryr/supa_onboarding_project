import React, { useState } from "react";
import Link from "next/link";
import PointSlider from "./PointSlider";

function LessonBanner({
  type,
  difficulty,
  level,
  lessonNumber,
  total_points,
  current_points,
}: {
  type: string;
  difficulty: string;
  level: number;
  lessonNumber: number;
  total_points: number;
  current_points: number;
}) {
  return (
    <div className="flex flex-col bg-stone-400 text-black justify-around items-start p-4 m-4">
      <div className="flex flex-col pl-16 items-start w-full">
        <div className="flex flex-row items-center m-4 justify-between border-black border-2 p-2 pl-8 pr-8">
          <div className="font-bold w-32">
            <p>Lesson {lessonNumber}</p>
          </div>
          <div className="flex flex-col items-center pl-64 w-full p-1">
            <p className="font-bold mb-1">
              {" "}
              {current_points} of {total_points} Kaya Points{" "}
            </p>
            <PointSlider
              totalPoints={total_points}
              currentPoints={current_points}
            />
          </div>
        </div>
        <div className="flex flex-row">
          <div className="p-2 border-2 border-black m-4 pl-8 pr-8">
            <Link
              href={
                "/playground/" +
                type +
                "/" +
                difficulty +
                "/" +
                level +
                "/" +
                lessonNumber
              }
            >
              Start
            </Link>
          </div>
          {/* <div className="p-2 border-2 border-black m-4 pl-8 pr-8">
                <NavLink to={"/" + navigation + level}>Take Quiz</NavLink>
            </div> */}
        </div>
      </div>
    </div>
  );
}

export default LessonBanner;
