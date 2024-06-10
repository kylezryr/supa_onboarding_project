"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import DifficultyBanner from "@/app/components/DifficultyBanner";
import SkillHeader from "@/app/components/SkillHeader";
import { DifficultiesType, RanksType } from "@/app/types";

function Type({ params }: { params: { type: string } }) {
  const [difficulties, setDifficulties] = useState<RanksType[]>([]);
  const buttonLabels = ["Green", "Yellow", "Red"];
  const typesMap = new Map([
    ["boundingBox", "Bounding Box"],
    ["semantic", "Semantic"],
    ["polygon", "Polygon"],
  ]);
  const diffMap = new Map([
    ["Red", "red"],
    ["Yellow", "yellow"],
    ["Green", "green"],
  ]);
  const [redSelected, setRedSelected] = useState(false);
  const [greenSelected, setGreenSelected] = useState(false);
  const [yellowSelected, setYellowSelected] = useState(false);

  const getDifficulties = async () => {
    try {
      fetch("http://localhost:9000/difficulties/" + typesMap.get(params.type))
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setDifficulties(data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const selectDifficulty = (difficulty: string) => {
    if (difficulty == "Red") {
      setRedSelected(true);
      setGreenSelected(false);
      setYellowSelected(false);
    } else if (difficulty == "Yellow") {
      setYellowSelected(true);
      setGreenSelected(false);
      setRedSelected(false);
    } else if (difficulty == "Green") {
      setRedSelected(false);
      setGreenSelected(true);
      setYellowSelected(false);
    }
  };

  useEffect(() => {
    getDifficulties();
  }, []);

  return (
    <>
      <SkillHeader type={params.type} showSkill={true} />
      <div className="flex flex-row justify-between">
        <div className="flex flex-col bg-stone-400 m-4 w-1/5 text-black font-bold p-4 items-start h-full">
          <p className="flex justify-start"> Rankings </p>
          <div className="flex flex-col items-start pl-4">
            {buttonLabels.map((label) => {
              return (
                <button
                  onClick={() => selectDifficulty(label)}
                  style={{ margin: 4 }}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col items-center justify-start w-4/5">
          {difficulties.map((diff) => {
            if (redSelected && diff.difficulty == "Red") {
              return (
                <DifficultyBanner
                  difficulty={diff.difficulty}
                  navigation={params.type + "/" + diffMap.get(diff.difficulty)}
                  level={diff.level}
                  totalPoints={diff.total_points}
                  currentPoints={diff.current_points}
                  unlocked={diff.unlocked}
                />
              );
            } else if (yellowSelected && diff.difficulty == "Yellow") {
              return (
                <DifficultyBanner
                  difficulty={diff.difficulty}
                  navigation={params.type + "/" + diffMap.get(diff.difficulty)}
                  level={diff.level}
                  totalPoints={diff.total_points}
                  currentPoints={diff.current_points}
                  unlocked={diff.unlocked}
                />
              );
            } else if (greenSelected && diff.difficulty == "Green") {
              return (
                <DifficultyBanner
                  difficulty={diff.difficulty}
                  navigation={params.type + "/" + diffMap.get(diff.difficulty)}
                  level={diff.level}
                  totalPoints={diff.total_points}
                  currentPoints={diff.current_points}
                  unlocked={diff.unlocked}
                />
              );
            }
          })}
          <div className="flex flex-row w-full justify-start text-gray-400 mt-4 ml-4 pl-24">
            <Link href="/playground"> ← Back to playground</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Type;
