import React from "react";

function PointSlider({
  totalPoints,
  currentPoints,
}: {
  totalPoints: number;
  currentPoints: number;
}) {
  let width = (currentPoints / totalPoints) * 100;

  return (
    <div className="h-2 bg-black w-full rounded">
      <div
        className="h-2 bg-white rounded"
        style={{ width: `${width}%` }}
      ></div>
    </div>
  );
}

export default PointSlider;
