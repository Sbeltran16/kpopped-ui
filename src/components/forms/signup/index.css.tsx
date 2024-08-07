import styled from "@emotion/styled";
import { Box, Grid } from "@mui/material";

const StyledFormBox = styled(Box)`
  margin: 3rem;
  padding: 3rem;
  border-radius: 1.5rem;
  box-shadow: 0rem 0.1875rem 0.9375rem rgba(0, 0, 0, 0.2);
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainSignupGridContainer = styled(Grid)`
  height: 90vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    height: 80vh;
    margin-top: 2rem;
  }
`;

export { StyledFormBox, MainSignupGridContainer };
