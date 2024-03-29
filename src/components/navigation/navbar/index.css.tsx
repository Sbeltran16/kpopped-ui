import styled from "@emotion/styled";
import { AppBar } from "@mui/material";
import { Link } from "react-router-dom";

const StyledNavbar = styled(AppBar)`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  padding: 1rem;
`;

const NavLink = styled(Link)`
  margin: 1rem;
  text-decoration: none;
  color: white;

  &:hover {
    color: yellow;
  }
`;

export { NavLink, StyledNavbar };
