'use client'

import { useState, useEffect } from "react";
import React from "react";
import ProfileHeader from "../components/SkillHeader";
import SkillBanner from "../components/SkillBanner";

import { SkillsType } from "../types";
import supabase from "../supabase";
import SkillHeader from "../components/SkillHeader";

function Skills() {
  const [skills, setSkills] = useState<SkillsType[]>([]);

  const getSkills = async () => {
    const { data } = await supabase.from("types").select();
    if (data) {
      setSkills(data);
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
