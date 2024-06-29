import { StyledTextField } from "./index.css";
import { TextFieldProps } from "@mui/material";

export default function TextInput(props: TextFieldProps) {
  return <StyledTextField {...props} />;
}
