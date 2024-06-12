import React from "react";

function ProfilePicture() {
  return (
    <>
      <div className="flex flex-col justify-center items-center bg-darkBg rounded-full h-20 w-20 pt-1 pl-1 pr-1">
        <div className="bg-lightBg h-2/5 w-2/5 rounded-full mb-1.5 mt-2"></div>
        <div className="bg-lightBg h-2/5 w-4/5 mt-0.5 rounded-full"></div>
      </div>
    </>
  );
}

export default ProfilePicture;
