import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
`;

const Message = styled.h1`
  font-size: 2rem;
  color: black;
`;

const BackLink = styled(NavLink)`
  margin-top: 1rem;
  text-decoration: none;
  color: black;

  &:hover {
    text-decoration: underline;
    color: #99668f;
  }
`;

export { Container, Message, BackLink };
