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
`;

export const PostButton = styled(Button)`
  alogn-self: flex-end;
`;
