import React from "react";
import Link from "next/link";
import PointSlider from "./PointSlider";

function DifficultyBanner({
  difficulty,
  navigation,
  level,
}: {
  difficulty: string;
  navigation: string;
  level: number;
}) {
  return (
    <div className="flex flex-col bg-stone-400 text-black justify-around items-start p-4 m-4">
      <div className="flex flex-col pl-16 items-start w-full">
        <div className="flex flex-row items-center m-4 justify-between border-black border-2 p-2 pl-8 pr-8">
          <div className="font-bold w-32">
            <p>
              {difficulty} {level}
            </p>
          </div>
          <div className="flex flex-col pl-64 w-full">
            <p className="font-bold m-2"> 0 of 250 Kaya Points </p>
            <PointSlider totalPoints={250} currentPoints={0} />
          </div>
        </div>
        <div className="p-2 border-2 border-black m-4 pl-8 pr-8">
          <Link href={"/playground/" + navigation + level}>Start</Link>
        </div>
      </div>
    </div>
  );
}

export default DifficultyBanner;
