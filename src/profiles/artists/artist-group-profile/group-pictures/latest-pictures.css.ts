import styled from "@emotion/styled";
import { ImageListItem, Button } from "@mui/material";

const StyledImage = styled("img")`
  width: 100%;
  height: 100%;
  border-radius: 20%;
  object-fit: cover;
  object-position: center;
`;

const StyledImageListItem = styled(ImageListItem)`
  aspect-ratio: 1;
  overflow: hidden;
`;

const StyledButton = styled(Button)`
  justify-content: center;
  background-color: #99668f;
  color: white;
  border-radius: 5rem;
  &:hover {
    background-color: #8c4f73;
  }
`;

export { StyledImage, StyledImageListItem, StyledButton };
