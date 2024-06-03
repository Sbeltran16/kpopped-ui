import React from "react";
import { StyledNavbar, NavLink, StyledLogout } from "./index.css";
import { useUser } from "../../../context/user";
import { Button } from "@mui/material";

function handleLogout() {
  localStorage.removeItem("authToken");
  window.location.href = "/";
}

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
          <div>
            <span>Hi, {user.username}</span>
            <StyledLogout onClick={handleLogout}>Logout</StyledLogout>
          </div>
        )}
      </div>
    );
  }
  return (
    <StyledNavbar position="static">
      {/* left side of app bar*/}
      <div>
        <NavLink to="/home">
          <span style={{ color: "#99668F" }}>K</span>popped
          <span style={{ color: "#669970" }}>!</span>
        </NavLink>
      </div>

      {/* right side of app bar*/}
      <RightSideNavItem />
    </StyledNavbar>
  );
}
