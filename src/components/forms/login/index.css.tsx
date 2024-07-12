import styled from "@emotion/styled";
import { Grid } from "@mui/material";

const MainLoginGridContainer = styled(Grid)`
  height: 90vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    height: 70vh;
    margin-top: 2rem;
  }
`;

export { MainLoginGridContainer };
