"use client";

import { useState, useEffect } from "react";
import React from "react";
import SkillBanner from "../components/SkillBanner";
import { SkillsType, ScoresType } from "../types";
import SkillHeader from "../components/SkillHeader";

function Skills() {
  const [skills, setSkills] = useState<SkillsType[]>([]);
  const [scores, setScores] = useState<ScoresType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getSkills = async () => {
    try {
      fetch("http://localhost:9000")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setSkills(data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const getScores = async () => {
    try {
      setIsLoading(true);
      fetch(`http://localhost:9000/typeScores`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setScores(data);
          setIsLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSkills();
    getScores();
  }, []);

  return (
    <div className="min-h-screen bg-darkBg">
      <SkillHeader type=" " showSkill={false} />
      <div>
        <div className="flex flex-col">
          {!isLoading &&
            skills.map((skill) => {
              const filtered_scores = scores.filter((score) => {
                return score.type === skill.type;
              });
              console.log(filtered_scores);
              return (
                <SkillBanner
                  type={skill.type}
                  navigation={skill.navigation}
                  total_points={filtered_scores[0].sum_total}
                  current_points={filtered_scores[0].sum_current}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Skills;
