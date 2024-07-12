import styled from "@emotion/styled";
import { TextField } from "@mui/material";

export const StyledTextField = styled(TextField)`
  display: flex;
  margin: 1.5rem;

  @media (max-width: 768px) {
    display: flex;
    margin: 0.6rem;
  }
`;
