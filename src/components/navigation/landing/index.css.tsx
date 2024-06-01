import styled from "@emotion/styled";
import { Button, Grid } from "@mui/material";

const StyledLandingButton = styled(Button)`
  border-radius: 3rem;
  display: flex;
  font-size: 16px;
  text-decoration: none;
  text-transform: none;
  width: 100%;
  justify-content: center;
`;

const MainGridContainer = styled(Grid)`
  height: 90vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 4rem;
  flex-wrap: wrap;
`;

const ButtonsGridContainer = styled(Grid)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export { StyledLandingButton, MainGridContainer, ButtonsGridContainer };
