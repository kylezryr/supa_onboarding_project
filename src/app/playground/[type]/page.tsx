"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import DifficultyBanner from "@/app/components/DifficultyBanner";
import supabase from "@/app/supabase";
import SkillHeader from "@/app/components/SkillHeader";
import { DifficultiesType } from "@/app/types";

function Type({ params }: { params: { type: string } }) {
  const [difficulties, setDifficulties] = useState<DifficultiesType[]>([]);
  const buttonLabels = ["Red", "Yellow", "Green"];
  const typesMap = new Map([
    ["boundingBox", "Bounding Box"],
    ["semantic", "Semantic"],
    ["polygon", "Polygon"],
  ]);
  const [redSelected, setRedSelected] = useState(false);
  const [greenSelected, setGreenSelected] = useState(false);
  const [yellowSelected, setYellowSelected] = useState(false);

  const getDifficulties = async () => {
    const { data, error } = await supabase.rpc("getdifficulties", {
      inputtype: typesMap.get(params.type),
    });
    if (error) {
      console.log(error);
    } else {
      console.log(data);
      if (data) {
        setDifficulties(data);
      }
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
        <div className="flex flex-col items-start">
          {difficulties.map((diff) => {
            if (redSelected && diff.difficulty == "Red") {
              return (
                <DifficultyBanner
                  difficulty={diff.difficulty}
                  navigation={params.type + "/" + diff.navigation}
                  level={diff.level}
                />
              );
            } else if (yellowSelected && diff.difficulty == "Yellow") {
              return (
                <DifficultyBanner
                  difficulty={diff.difficulty}
                  navigation={params.type + "/" + diff.navigation}
                  level={diff.level}
                />
              );
            } else if (greenSelected && diff.difficulty == "Green") {
              return (
                <DifficultyBanner
                  difficulty={diff.difficulty}
                  navigation={params.type + "/" + diff.navigation}
                  level={diff.level}
                />
              );
            }
          })}
          <div className="text-gray-400 ml-4">
            <Link href="/playground"> ← Back to playground</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Type;
