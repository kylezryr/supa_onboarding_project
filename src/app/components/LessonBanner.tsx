import React, { useState } from "react";
import Link from "next/link";

function LessonBanner({
  type,
  difficulty,
  level,
  lessonNumber,
}: {
  type: string;
  difficulty: string;
  level: number;
  lessonNumber: number;
}) {
  return (
    <div className="flex flex-col bg-stone-400 text-black justify-around items-start p-4 m-4">
      <div className="flex flex-col pl-16 items-start w-full">
        <div className="flex flex-row items-center m-4 justify-between border-black border-2 p-2 pl-8 pr-8">
          <div className="font-bold w-32">
            <p>Lesson {lessonNumber}</p>
          </div>
          <div className="pl-64 w-full">
            <p className="font-bold"> 0 of 250 Kaya Points </p>
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
