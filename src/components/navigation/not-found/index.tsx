import { Typography } from "@mui/material";
import SearchBar from "../../inputs/search-input";
import { Container, Message } from "./index.css";

export default function UserNotFound() {
  return (
    <Container>
      <Message> Looks Like This User Does Not Exist !</Message>
    </Container>
  );
}
