import styled from "@emotion/styled";
import { Button, TextField } from "@mui/material";

export const StyledForm = styled.form`
  padding-bottom: 1rem;
  border-bottom: 1px solid #d4d4d4;
  display: flex;
  flex-flow: column;
`;

export const PostField = styled(TextField)`
  margin-bottom: 1rem;
  background-color: white;
  .MuiInputBase-root {
    padding: 2rem;
    background-color: white;
  }
`;

export const PostButton = styled(Button)`
  align-self: flex-end;
  border-radius: 20px;
  text-transform: none;
  background-color: #669970;
`;
