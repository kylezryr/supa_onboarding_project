import React from "react";
import RankSlider from "./RankSlider";
// import picture from "../../assets/kyleramachandran.jpg";

function ProfileHeader({
  totalPoints, 
  currentPoints, 
  levelNumber,
  startPoints,
  } : 
  {
    totalPoints: number;
    currentPoints: number;
    levelNumber: number;
    startPoints: number;
}) {
  return (
    <div className="bg-stone-400">
      {/* <div className="bg-stone-400 h-4"></div> */}
      <div className="flex bg-darkBg text-white font-bold justify-start p-4 text-xl pl-8">
        <p className="ml-2 mr-2">My Profile</p>
      </div>
      <div className="flex flex-row text-white bg-lightBg items-center justify-between p-4 pl-8 pr-8 font-bold">
        <div className="flex flex-row items-center">
          <div className="m-2">
            <p> image </p>
          </div>
          <div className="flex flex-col ml-8 mr-2">
            <p className="m-2">Name</p>
            <p className="m-2 w-36">Edit Profile</p>
          </div>
        </div>

        <div className="w-1/2">
          <RankSlider totalPoints={totalPoints} currentPoints={currentPoints} level={levelNumber} startPoints={startPoints}/>
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader;
