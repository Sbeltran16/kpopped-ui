import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const SidebarContainer = styled.div`
  width: 16.75rem;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background-color: white;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #e9e9e9;
  padding: 1rem;
  justify-content: space-between;

  @media (max-width: 768px) {
    display: none;
  }
`;

const SidebarLink = styled(Link)`
  align-items: center;
  border-radius: 3rem;
  color: black;
  display: flex;
  font-size: 20px;
  gap: 0.5rem;
  margin: 0.3rem;
  padding: 1rem;
  text-decoration: none;

  &:hover {
    background-color: rgba(211, 211, 211, 0.3);
    color: #99668f;
  }
`;

const StyledLogout = styled(Button)`
  border: none;
  border-radius: 3rem;
  color: black;
  padding: 0;
  text-transform: none;
  font-size: 20px;
  margin-top: auto;
  margin-bottom: 2rem;

  &:hover {
    background-color: rgba(211, 211, 211, 0.3);
  }
`;

const StyledLinkContainer = styled.div`
  align-items: center;
  display: flex;
  flex-flow: column;
  margin: auto;
  padding: 2rem;
`;

export { SidebarContainer, SidebarLink, StyledLogout, StyledLinkContainer };
