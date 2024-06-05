import React from "react";
import Link from "next/link";
import PointSlider from "./PointSlider";

function SkillBanner({
  type,
  navigation,
}: {
  type: string;
  navigation: string;
}) {
  return (
    <div className="flex flex-row justify-around items-center w-auto bg-zinc-100 text-black flex-wrap h-20 m-4 p-4 font-bold">
      <div className="text-blue-600">
        <Link href={"/playground/" + navigation}>{type}</Link>
      </div>
      <div className="flex flex-col w-1/3 items-center">
        <p className="m-1"> 0 of 250 Kaya Points </p>
        <PointSlider totalPoints={250} currentPoints={0} />
      </div>
    </div>
  );
}

export default SkillBanner;
