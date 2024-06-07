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

  // const getScores = async () => {
  //   {maxRanks.map((rank) => {
  //     try {
  //       fetch(`http://localhost:9000/scores/`)
  //         .then((response) => {
  //           return response.json();
  //         })
  //         .then((data) => {
  //           const lessonID = data[0].id
  //           console.log("id: ", lessonID)
  //           fetch("http://localhost:9000/questions/" + lessonID).then((response) => {
  //             return response.json()
  //           }).then((data) => {
  //             console.log(data)
  //             return(
  //               <ProfileBanner type="Bounding Box" difficulty="green3" />
  //             )
  //           })
  //         });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   })}
  // };

  useEffect(() => {
    getMaxRanks();
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
