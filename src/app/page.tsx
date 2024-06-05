"use client";

import React from "react";
import ProfileHeader from "./components/ProfileHeader";
import ProfileBanner from "./components/ProfileBanner";

export default function Home() {
  return (
    <>
      <ProfileHeader />
      <ProfileBanner type="Bounding Box" difficulty="green3" />
      <ProfileBanner type="Polygon" difficulty="yellow3" />
      <ProfileBanner type="Semantic" difficulty="red3" />
    </>
  );
}
