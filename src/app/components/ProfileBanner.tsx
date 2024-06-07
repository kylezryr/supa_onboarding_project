import React from "react";
import PointSliderText from "./PointSliderText";
import Link from "next/link";

function ProfileBanner({
  difficulty,
  type,
  level,
  current_points,
  total_points,
}: {
  difficulty: string;
  type: string;
  level: number;
  current_points: number;
  total_points: number;
}) {
  const typesMap = new Map([
    ["Bounding Box", "boundingBox"],
    ["Semantic", "semantic"],
    ["Polygon", "polygon"],
  ]);
  const difficultyColor =
    difficulty.substring(0, difficulty.length).charAt(0).toUpperCase() +
    difficulty.substring(0, difficulty.length).slice(1);
  const difficultyNumber = level;
  return (
    <>
      <div className="flex flex-row items-center justify-between bg-zinc-100 text-black font-bold m-4 p-4">
        <div className="w-2/3">
          <PointSliderText
            totalPoints={total_points}
            currentPoints={current_points}
            difficulty={difficulty}
            level={level}
          />
        </div>
        <div className="flex flex-col items-center">
          <p className="m-1 w-32">{difficultyColor + " " + difficultyNumber}</p>
          <div className="m-1 w-32 text-blue-600">
            <Link href={"/playground/" + typesMap.get(type)}>{type}</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileBanner;
