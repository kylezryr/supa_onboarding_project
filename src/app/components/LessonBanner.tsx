import React from "react";
import { Link, NavLink } from "react-router-dom";

function LessonBanner({ difficulty, navigation, level, lessonNumber }:{difficulty:string; navigation: string; level: number; lessonNumber: number}) {
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
            <NavLink to={"/" + navigation + level + "/lesson" + lessonNumber}>
              Start
            </NavLink>
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
