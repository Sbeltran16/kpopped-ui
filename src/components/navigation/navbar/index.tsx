import React from "react";
import { StyledNavbar, NavLink } from "./index.css";

export default function ButtonAppBar() {
  return (
    <StyledNavbar position="static">
      {/* left side of app bar*/}
      <div>
        <NavLink to="/">Home</NavLink>
      </div>

      {/* right side of app bar*/}
      <div>
        <NavLink to="/login">Login</NavLink>
        <span>|</span>
        <NavLink to="/signup">Signup</NavLink>
      </div>
    </StyledNavbar>
  );
}
