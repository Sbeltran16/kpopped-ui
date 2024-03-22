import React from "react";
import { StyledNavbar, NavLink } from "./index.css";
import { useUser } from "../../../context/user";

export default function ButtonAppBar() {
  function RightSideNavItem() {
    const { user } = useUser();

    return (
      <div>
        {!user ? (
          <>
            <NavLink to="/signup">Sign Up</NavLink>
            <span>|</span>
            <NavLink to="/login">Log In</NavLink>
          </>
        ) : (
          <span>Hi, {user.username}</span>
        )}
      </div>
    );
  }
  return (
    <StyledNavbar position="static">
      {/* left side of app bar*/}
      <div>
        <NavLink to="/">Home</NavLink>
      </div>

      {/* right side of app bar*/}
      <RightSideNavItem />
    </StyledNavbar>
  );
}
