"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import DifficultyBanner from "@/app/components/DifficultyBanner";
import SkillHeader from "@/app/components/SkillHeader";
import { DifficultiesType, RanksType } from "@/app/types";
import ProfileBanner from "@/app/components/ProfileBanner";
import TypeBanner from "@/app/components/TypeBanner";

function Type({ params }: { params: { type: string } }) {
  const [difficulties, setDifficulties] = useState<RanksType[]>([]);
  const [selectedRank, setSelectedRank] = useState<RanksType>();
  const [redSelected, setRedSelected] = useState(false);
  const [greenSelected, setGreenSelected] = useState(false);
  const [yellowSelected, setYellowSelected] = useState(false);
  const [loading, setLoading] = useState(false);

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

  const getDifficulties = async () => {
    setLoading(true);
    try {
      fetch("http://localhost:9000/difficulties/" + typesMap.get(params.type))
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setDifficulties(data);
          setLoading(false);
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

  const getMaxRanks = async () => {
    setLoading(true);
    try {
      fetch("http://localhost:9000/maxRanks")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const rank = data.filter(
            (r: RanksType) => r.type == typesMap.get(params.type),
          );
          setSelectedRank(rank[0]);
          console.log(selectedRank);
          setLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDifficulties();
    getMaxRanks();
  }, []);

  return (
    <>
      <SkillHeader type={params.type} showSkill={true} />
      <div className="flex flex-row justify-between">
        <div className="flex flex-col bg-lightBg m-4 mt-8 w-1/5 text-white font-bold p-4 max-h-40 shadow-lg rounded-xl">
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
        {!loading && (
          <div className="flex flex-col items-center justify-center w-4/5">
            {selectedRank && (
              <div className="w-5/6 mt-4">
                <TypeBanner
                  difficulty={selectedRank?.difficulty}
                  type={selectedRank?.type}
                  level={selectedRank?.level}
                  current_points={selectedRank?.current_points}
                  total_points={selectedRank?.total_points}
                />
              </div>
            )}
            {difficulties.map((diff) => {
              if (redSelected && diff.difficulty == "Red") {
                return (
                  <DifficultyBanner
                    difficulty={diff.difficulty}
                    navigation={
                      params.type + "/" + diffMap.get(diff.difficulty)
                    }
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
                    navigation={
                      params.type + "/" + diffMap.get(diff.difficulty)
                    }
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
                    navigation={
                      params.type + "/" + diffMap.get(diff.difficulty)
                    }
                    level={diff.level}
                    totalPoints={diff.total_points}
                    currentPoints={diff.current_points}
                    unlocked={diff.unlocked}
                  />
                );
              }
            })}
            <div className="flex flex-row justify-start text-gray-400 mt-4 ">
              <Link href="/playground"> ← Back to playground</Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Type;
