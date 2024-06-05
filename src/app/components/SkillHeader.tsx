import React from "react";
// import picture from "../../assets/kyleramachandran.jpg";

function SkillHeader({
  type,
  showSkill,
}: {
  type: string;
  showSkill: boolean;
}) {
  const typesMap = new Map([
    ["boundingBox", "Bounding Box"],
    ["semantic", "Semantic"],
    ["polygon", "Polygon"],
  ]);
  return (
    <div className="bg-stone-400">
      {/* <div className="bg-stone-400 h-4"></div> */}
      <div className="flex bg-white text-black font-bold justify-start p-4 pl-8 text-xl">
        <p className="ml-2 mr-2">Playground</p>
      </div>
      <div className="flex flex-row text-black align-start justify-start p-4 pl-8 font-bold">
        {showSkill ? (
          <p className="ml-2 mr-2">Skill: {typesMap.get(type)}</p>
        ) : (
          <p className="ml-2 mr-2">Select a skill</p>
        )}
      </div>
    </div>
  );
}

export default SkillHeader;
