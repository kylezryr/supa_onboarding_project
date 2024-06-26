"use client";

import React, { useEffect, useState } from "react";
import ProfileHeader from "./components/ProfileHeader";
import ProfileBanner from "./components/ProfileBanner";
import { LevelsType, RanksType } from "./types";

export default function Home() {
  const [maxRanks, setMaxRanks] = useState<RanksType[]>([]);
  const [level, setLevel] = useState<LevelsType>();
  const [loading, setLoading] = useState(false);

  //find max ranks and set max ranks
  //map through max ranks, get total and current points and render Profile Banner

  const getMaxRanks = async () => {
    try {
      fetch("http://18.140.246.157:9000/maxRanks")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setMaxRanks(data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const getCurrentLevel = async () => {
    setLoading(true);
    try {
      fetch("http://18.140.246.157:9000/userCurrentLevel")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setLevel(data);
          setLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMaxRanks();
    getCurrentLevel();
  }, []);

  return (
    <>
      {!loading && level && (
        <ProfileHeader
          startPoints={Number(level.start_points)}
          totalPoints={Number(level.end_points)}
          currentPoints={Number(level.current_points)}
          levelNumber={Number(level.level_number)}
        />
      )}
      <div className="flex flex-col p-4">
        {maxRanks.map((rank) => {
          return (
            <ProfileBanner
              type={rank.type}
              difficulty={rank.difficulty}
              level={rank.level}
              total_points={rank.total_points}
              current_points={rank.current_points}
            />
          );
        })}
      </div>
    </>
  );
}
