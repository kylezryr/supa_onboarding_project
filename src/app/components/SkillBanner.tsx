import React from "react";
import Link from "next/link";
import PointSlider from "./PointSlider";

function SkillBanner({
  type,
  navigation,
  current_points,
  total_points,
}: {
  type: string;
  navigation: string;
  current_points: number;
  total_points: number;
}) {
  return (
    <div className="flex flex-row justify-around items-center w-auto bg-zinc-100 text-black flex-wrap h-20 m-4 p-4 font-bold">
      <div className="text-blue-600">
        <Link href={"/playground/" + navigation}>{type}</Link>
      </div>
      <div className="flex flex-col w-1/3 items-center">
        <p className="m-1">
          {" "}
          {`${current_points} of ${total_points} Kaya Points`}{" "}
        </p>
        <PointSlider
          totalPoints={total_points}
          currentPoints={current_points}
        />
      </div>
    </div>
  );
}

export default SkillBanner;
