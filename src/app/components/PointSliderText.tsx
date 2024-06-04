import React from "react";

function PointSliderText({
  totalPoints,
  currentPoints,
  difficulty,
}: {
  totalPoints: number;
  currentPoints: number;
  difficulty: string;
}) {
  let width = (currentPoints / totalPoints) * 100;
  const difficultyColor = (difficulty.substring(0, difficulty.length - 1)).charAt(0).toUpperCase() + (difficulty.substring(0, difficulty.length - 1)).slice(1);
  const difficultyNumber = parseInt(difficulty[difficulty.length - 1]);
  const startText = difficultyColor + " " + difficultyNumber;
  let endText;

  if (difficultyColor === "Level ") {
    endText = difficultyColor + " " + (difficultyNumber + 1);
  } else if (difficultyColor !== "Level" && difficultyNumber > 2) {
    if (difficultyColor === "Green") {
       endText = "Yellow 1" 
    }
    else if (difficultyColor === "Yellow") {
       endText = "Red 1"
    }
    else if (difficultyColor === "Red"){
       endText = "Max Rank"
    }
  } else {
      endText = difficultyColor + " " + (difficultyNumber + 1);
  }

  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-end items-center m-0.5" style={{ width: `${width}%` }}>
        <p className="text-xs/[8px]">{currentPoints} pts</p>
      </div>
      <div className="h-2 bg-black w-full rounded">
        <div
          className="h-2 bg-white rounded"
          style={{ width: `${width}%` }}
        >
        </div>
      </div>
      <div className="flex flex-row justify-between items-center text-black">
        <p className="m-2">{startText}</p>
        <p className="m-2">{endText}</p>
      </div>
      <div className="flex flex-row justify-end items-center">
        <p>{totalPoints-currentPoints} points to complete</p>
      </div>
    </div>
    
  );
}

export default PointSliderText;
