'use client'

import React from "react";
import { Nav, NavLink, Bars, NavMenu } from "./NavbarElements";
import { Link } from "react-router-dom";
import "./styles.css";

function NavBar() {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/">My Profile</NavLink>
          <NavLink to="/skills">Playground</NavLink>
          {/* <NavLink to="/worklog">Worklog</NavLink> */}
        </NavMenu>
      </Nav>
    </>
  );
}

export default NavBar;
