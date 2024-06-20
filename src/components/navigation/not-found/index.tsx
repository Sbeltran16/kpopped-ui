import { Container, Message, BackLink } from "./index.css";

export default function UserNotFound() {
  return (
    <Container>
      <Message> Looks Like This User Does Not Exist !</Message>
      <BackLink to="/home">Go back Home</BackLink>
    </Container>
  );
}
