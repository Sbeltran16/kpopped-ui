import styled from "@emotion/styled";
import { AppBar, Button } from "@mui/material";
import { Link } from "react-router-dom";

const StyledNavbar = styled(AppBar)`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: black;
`;

const NavLink = styled(Link)`
  margin: 1rem;
  text-decoration: none;
  color: white;
  font-size: 20px;

  &:hover {
    color: yellow;
  }
`;

const StyledLogout = styled(Button)`
  border: none;
  color: white;
  padding: 0;
  margin-left: 2rem;
  text-transform: none;
  font-size: 1rem;
  font-family: "Comfortaa", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;

  &:hover {
    color: yellow;
  }
`;

export { NavLink, StyledNavbar, StyledLogout };
