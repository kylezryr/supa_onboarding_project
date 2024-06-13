import React from "react";

function RankSlider({
  totalPoints,
  currentPoints,
  level,
  startPoints,
}: {
  totalPoints: number;
  currentPoints: number;
  level: number;
  startPoints: number;
}) {
  let width = (currentPoints / (totalPoints - startPoints)) * 100;
  const startText = `Level ${level}`;
  const endText = `Level ${level + 1}`;
  const ptsTextPos = width < 15 ? "justify-start" : "justify-end";

  return (
    <div className="flex flex-col">
      <div
        className={`flex flex-row ${ptsTextPos} items-center m-0.5`}
        style={{ width: `${width}%` }}
      >
        <p className="flex flex-row justify-center text-xs/[8px] min-w-16">
          {currentPoints} pts
        </p>
      </div>
      <div className="h-2 bg-black w-full rounded">
        <div
          className="h-2 bg-white rounded"
          style={{ width: `${width}%` }}
        ></div>
      </div>
      <div className="flex flex-row justify-between items-center text-white">
        <p className="m-2">{startText}</p>
        <p className="m-2">{endText}</p>
      </div>
      <div className="flex flex-row justify-end items-center">
        <p className="mr-2">
          {totalPoints - (currentPoints + startPoints)} points to complete
        </p>
      </div>
    </div>
  );
}

export default RankSlider;
