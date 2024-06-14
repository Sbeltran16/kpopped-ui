import { StyledNavbar, NavLink, StyledLogout } from "./index.css";
import { useUser } from "../../../context/user";
import SearchBar from "../../inputs/search-input";

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
          <div style={{ display: "flex", alignItems: "center" }}>
            <SearchBar />
            <span style={{ marginLeft: "2rem" }}>Hi, {user.username}</span>
            <StyledLogout onClick={handleLogout}>Logout</StyledLogout>
          </div>
        )}
      </div>
    );
  }

  // Left side of navbar
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
