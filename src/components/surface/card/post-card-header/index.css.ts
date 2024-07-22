import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

const PostHeader = styled.div`
  display: flex;
  font-size: 1rem;
  flex-flow: row;
  margin-bottom: 0.5rem;
`;

const UsernameLink = styled(NavLink)`
  color: black;
  font-weight: bolder;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export { PostHeader, UsernameLink };
