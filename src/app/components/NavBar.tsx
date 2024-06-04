"use client";

import React from "react";
import Link from "next/link";

function NavBar() {
  return (
    <>
      <div className="flex flex-row text-black p-8 h-0.5 items-center bg-stone-400">
        <div className="m-2">
          <Link href="/">My Profile</Link>
        </div>
        <div className="m-2">
          <Link href="/playground">Playground</Link>
        </div>
      </div>
    </>
  );
}

export default NavBar;
