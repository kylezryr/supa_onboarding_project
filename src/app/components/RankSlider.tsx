import React from "react";

function RankSlider({
  totalPoints,
  currentPoints,
  level,
}: {
  totalPoints: number;
  currentPoints: number;
  level: number;
}) {
  let width = (currentPoints / totalPoints) * 100;
  const startText = `Level ${level}`;
  const endText = `Level ${level + 1}`;

  return (
    <div className="flex flex-col">
      <div
        className="flex flex-row justify-start items-center m-0.5"
        style={{ width: `${width}%` }}
      >
        <p className="text-xs/[8px] min-w-16">{currentPoints} pts</p>
      </div>
      <div className="h-2 bg-black w-full rounded">
        <div
          className="h-2 bg-white rounded"
          style={{ width: `${width}%` }}
        ></div>
      </div>
      <div className="flex flex-row justify-between items-center text-black">
        <p className="m-2">{startText}</p>
        <p className="m-2">{endText}</p>
      </div>
      <div className="flex flex-row justify-end items-center">
        <p>{totalPoints - currentPoints} points to complete</p>
      </div>
    </div>
  );
}

export default RankSlider;
