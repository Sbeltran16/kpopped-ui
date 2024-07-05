import {
  SidebarContainer,
  SidebarLink,
  StyledLinkContainer,
  StyledLogout,
} from "./index.css";
import { useUser } from "../../../context/user";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import { NavLink } from "react-router-dom";

function handleLogout() {
  localStorage.removeItem("authToken");
  window.location.href = "/";
}

export default function Sidebar() {
  const { user } = useUser();

  return (
    <SidebarContainer>
      {!user ? (
        <>
          <SidebarLink to="/signup">Sign Up</SidebarLink>
          <SidebarLink to="/login">Log In</SidebarLink>
        </>
      ) : (
        <>
          <NavLink
            style={{ textDecoration: "none", fontSize: "26px", color: "black" }}
            to={"/home"}
          >
            <span style={{ color: "#99668F" }}>K</span>popped
            <span style={{ color: "#669970" }}>!</span>
          </NavLink>
          <StyledLinkContainer>
            <SidebarLink to={"/home"}>
              <HomeIcon />
              Home
            </SidebarLink>
            <SidebarLink to={`/${user.username}`}>
              <PersonIcon /> Profile
            </SidebarLink>
          </StyledLinkContainer>
          <StyledLogout onClick={handleLogout}>Logout</StyledLogout>
        </>
      )}
    </SidebarContainer>
  );
}
