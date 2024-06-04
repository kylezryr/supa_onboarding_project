import React from "react";
// import picture from "../../assets/kyleramachandran.jpg";

function SkillHeader({
  type,
  showSkill,
}: {
  type: string;
  showSkill: boolean;
}) {
  return (
    <div className="bg-stone-400">
      <div className="bg-stone-400 h-8"></div>
      <div className="flex bg-white text-black font-bold justify-start p-4 text-xl mt-8">
        <p>Playground Test</p>
      </div>
      <div className="flex flex-row text-black align-start justify-start p-4 font-bold">
        {showSkill ? <p>Skill: {type}</p> : <p>No skill selected</p>}
      </div>
    </div>
  );
}

export default SkillHeader;
