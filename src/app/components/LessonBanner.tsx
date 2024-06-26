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
  unlocked,
}: {
  type: string;
  difficulty: string;
  level: number;
  lessonNumber: number;
  total_points: number;
  current_points: number;
  unlocked: boolean;
}) {
  const bgColor = unlocked ? "bg-darkPrimary" : "bg-lightPrimary";
  const borderColor = unlocked ? "border-lightPrimary" : "border-darkWhite";
  const textColor = unlocked ? "text-white" : "text-darkWhite";

  return (
    <div
      className={`flex flex-col ${bgColor} ${textColor} justify-around items-start p-4 m-4 min-w-[80%] shadow-lg rounded-xl`}
    >
      <div className="flex flex-col pl-16 pr-16 items-start w-full">
        <div
          className={`flex flex-row items-center m-4 justify-between ${borderColor} border-2 p-2 pl-8 pr-8 ml-0 w-full rounded-lg`}
        >
          <div className="font-bold w-32">
            <p>Lesson {lessonNumber}</p>
          </div>
          <div className="flex flex-col items-center w-2/5 p-1">
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
          <div
            className={`p-2 border-2 ${borderColor} m-4 ml-0 pl-8 pr-8 rounded-lg font-bold`}
          >
            {unlocked ? (
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
            ) : (
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
                style={{ pointerEvents: "none" }}
              >
                Start
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LessonBanner;
