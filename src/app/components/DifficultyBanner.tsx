import React from "react";
import Link from "next/link";
import PointSlider from "./PointSlider";

function DifficultyBanner({
  difficulty,
  navigation,
  level,
  currentPoints,
  totalPoints,
  unlocked,
}: {
  difficulty: string;
  navigation: string;
  level: number;
  currentPoints: number;
  totalPoints: number;
  unlocked: boolean;
}) {
  const bgColor = unlocked ? "bg-darkPrimary" : "bg-lightPrimary";
  const borderColor = unlocked ? "border-lightPrimary" : "border-darkwhite";
  const textColor = unlocked ? "text-white" : "text-darkWhite";

  return (
    <div
      className={`flex flex-col ${bgColor} ${textColor} justify-around items-start p-4 m-4 min-w-[80%] shadow-lg rounded-xl`}
    >
      <div className="flex flex-col pl-16 pr-16 items-start w-full">
        <div
          className={`flex flex-row items-center m-4 justify-between ${borderColor} border-2 p-2 pl-8 pr-8 ml-0 w-full rounded-lg`}
        >
          <div className="font-bold w-32 text-xl">
            <p>
              {difficulty} {level}
            </p>
          </div>
          <div className="flex flex-col w-2/5 items-center">
            <p className="font-bold m-2">
              {" "}
              {`${currentPoints} of ${totalPoints} Kaya Points`}{" "}
            </p>
            <PointSlider
              totalPoints={totalPoints}
              currentPoints={currentPoints}
            />
          </div>
        </div>
        <div
          className={`p-2 border-2 ${borderColor} m-4 pl-8 pr-8 ml-0 rounded-lg font-bold`}
        >
          {unlocked ? (
            <Link href={"/playground/" + navigation + "/" + level}>Start</Link>
          ) : (
            <Link href={"/"} style={{ pointerEvents: "none" }}>
              Start
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default DifficultyBanner;
