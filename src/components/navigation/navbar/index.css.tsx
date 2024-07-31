import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: white;
  border-bottom: 1px solid black;
`;

const NavbarLink = styled(Link)`
  align-items: center;
  color: black;
  display: flex;
  font-size: 20px;
  margin: 0 0.5rem;
  padding: 6px 8px;
  text-decoration: none;
  border-radius: 4rem;

  &:hover {
    color: #99668f;
  }
`;

const StyledLinkContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledLogout = styled(Button)`
  border: none;
  border-radius: 3rem;
  color: black;
  padding: 0 0.5rem;
  text-transform: none;
  font-size: 20px;
  margin: 0 0.5rem;

  &:hover {
    background-color: white;
    color: #99668f;
  }
`;

const SearchButton = styled(Button)`
  background: none;
  border: none;
  border-radius: 4rem;
  color: black;
  cursor: pointer;

  &:hover {
    color: #99668f;
  }
`;

const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export {
  NavbarContainer,
  NavbarLink,
  StyledLinkContainer,
  StyledLogout,
  SearchButton,
  SearchBarWrapper,
};
