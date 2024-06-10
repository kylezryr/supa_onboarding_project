import React from "react";

function PointSliderText({
  totalPoints,
  currentPoints,
  difficulty,
  level,
}: {
  totalPoints: number;
  currentPoints: number;
  difficulty: string;
  level: number;
}) {
  let width = (currentPoints / totalPoints) * 100;
  const ptsTextPos = width < 15 ? "justify-start" : "justify-end";

  const difficultyColor =
    difficulty.substring(0, difficulty.length).charAt(0).toUpperCase() +
    difficulty.substring(0, difficulty.length).slice(1);
  const difficultyNumber = level;
  const startText = difficultyColor + " " + difficultyNumber;
  let endText;

  if (difficultyColor === "Level ") {
    endText = difficultyColor + " " + (difficultyNumber + 1);
  } else if (difficultyColor !== "Level" && difficultyNumber > 2) {
    if (difficultyColor === "Green") {
      endText = "Yellow 1";
    } else if (difficultyColor === "Yellow") {
      endText = "Red 1";
    } else if (difficultyColor === "Red") {
      endText = "Max Rank";
    }
  } else {
    endText = difficultyColor + " " + (difficultyNumber + 1);
  }

  return (
    <div className="flex flex-col">
      <div
        className={`flex flex-row ${ptsTextPos} items-center m-0.5`}
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

export default PointSliderText;
