'use client'

import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import DifficultyBanner from "../components/DifficultyBanner";
import supabase from "../supabase";
import SkillHeader from "../components/SkillHeader";
import { DifficultiesType } from "../types";

function Type({ type, navigation }: { type: string; navigation: string }) {
  const [difficulties, setDifficulties] = useState<DifficultiesType[]>([]);
  const buttonLabels = ["Red", "Yellow", "Green"];
  const [redSelected, setRedSelected] = useState(false);
  const [greenSelected, setGreenSelected] = useState(false);
  const [yellowSelected, setYellowSelected] = useState(false);

  const getDifficulties = async () => {
    const { data, error } = await supabase.rpc("getdifficulties", {
      inputtype: type,
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
      <SkillHeader type={type} showSkill={true} />
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
                  navigation={navigation + "/" + diff.navigation}
                  level={diff.level}
                />
              );
            } else if (yellowSelected && diff.difficulty == "Yellow") {
              return (
                <DifficultyBanner
                  difficulty={diff.difficulty}
                  navigation={navigation + "/" + diff.navigation}
                  level={diff.level}
                />
              );
            } else if (greenSelected && diff.difficulty == "Green") {
              return (
                <DifficultyBanner
                  difficulty={diff.difficulty}
                  navigation={navigation + "/" + diff.navigation}
                  level={diff.level}
                />
              );
            }
          })}
          <div className="text-gray-400 ml-4">
            <NavLink to="/skills"> ← Back to skills</NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Type;
