import styled from "@emotion/styled";
import { Button } from "@mui/material";

const StyledFollowButton = styled(Button)`
  border-radius: 4rem;
  font-size: 12px;
  border: 1px solid #99668f;
  background-color: white;
  color: black;
  font-weight: bolder;
  text-transform: none;
  padding: 0.2rem 1rem;

  &:hover {
    background-color: #99668f;
    color: white;
    border: 1px solid #669970;
    box-shadow: none;
  }
`;

export { StyledFollowButton };
