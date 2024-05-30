import React from "react";
import { Link, NavLink } from "react-router-dom";

function SkillBanner({ type, navigation }:{type: string; navigation: string}) {
  return (
    <div className="flex flex-row justify-around items-center w-full bg-white text-black flex-wrap h-20 m-4 p-4 ">
      <div className="flex flex-col">
        <div className="text-sky-400">
          <NavLink to={"/" + navigation}>{type}</NavLink>
        </div>
      </div>
      <div className="text-black">
        <p> score </p>
      </div>
    </div>
  );
}

export default SkillBanner;
