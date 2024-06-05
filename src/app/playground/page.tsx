"use client";

import { useState, useEffect } from "react";
import React from "react";
import SkillBanner from "../components/SkillBanner";
import { SkillsType } from "../types";
import SkillHeader from "../components/SkillHeader";

function Skills() {
  const [skills, setSkills] = useState<SkillsType[]>([]);

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

  useEffect(() => {
    getSkills();
  }, []);

  return (
    <>
      <SkillHeader type=" " showSkill={false} />
      <div>
        <div className="flex flex-col">
          {skills.map((skill) => {
            return (
              <SkillBanner type={skill.type} navigation={skill.navigation} />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Skills;
