"use client";

import React, { useEffect, useState } from "react";
import ProfileHeader from "./components/ProfileHeader";
import ProfileBanner from "./components/ProfileBanner";
import { RanksType } from "./types";

export default function Home() {
  const [maxRanks, setMaxRanks] = useState<RanksType[]>([]);

  //find max ranks and set max ranks
  //map through max ranks, get total and current points and render Profile Banner

  const getMaxRanks = () => {
    try {
      fetch("http://localhost:9000/maxRanks")
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

  useEffect(() => {
    getMaxRanks();
    console.log(maxRanks);
  }, []);

  return (
    <>
      <ProfileHeader />
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
    </>
  );
}
