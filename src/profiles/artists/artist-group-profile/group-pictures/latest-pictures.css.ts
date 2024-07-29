import styled from "@emotion/styled";
import { ImageListItem } from "@mui/material";

const StyledImage = styled("img")`
  width: 100%;
  height: 100%;
  border-radius: 30%;
  object-fit: cover;
  object-position: center;
`;

const StyledImageListItem = styled(ImageListItem)`
  aspect-ratio: 1;
  overflow: hidden;
`;

export { StyledImage, StyledImageListItem };
