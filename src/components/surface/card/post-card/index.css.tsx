import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";

const DropdownMenu = styled.div`
  position: absolute;
  top: 2rem;
  right: 0;
  background: white;
  border: 1px solid #ddd;
  max-height: 200px;
  overflow-y: auto;
  width: 120px;
  z-index: 1000;
  box-shadow: 0 4px 6px black;
  border-radius: 0.5rem;
`;

const DropdownItem = styled.div`
  padding: 8px 16px;
  cursor: pointer;
  color: black;

  &:hover {
    background: #f0f0f0;
    color: #99668f;
    text-decoration: underline;
  }
`;

const PostFooter = styled.div`
  border: none;
  display: flex;
  justify-content: space-evenly;
  padding: 1rem;
`;

const PostHeader = styled.div`
  display: flex;
  font-size: 1rem;
  flex-flow: row;
  margin-bottom: 0.5rem;
`;

const StyledMore = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  margin: -2.2rem 0 0 20rem;
`;

const StyledPostCard = styled.div`
  border-bottom: 1px solid #d3d3d3;
  border-top: none
  display: flex;
  flex-flow: column;
  gap: 0.5rem;
  margin: 1.5rem 0;
  padding: 1rem;
`;

const UsernameLink = styled(NavLink)`
  color: black;
  font-weight: bolder;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export {
  DropdownItem,
  DropdownMenu,
  PostFooter,
  PostHeader,
  StyledMore,
  StyledPostCard,
  UsernameLink,
};
