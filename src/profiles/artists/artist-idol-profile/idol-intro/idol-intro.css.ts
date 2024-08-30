import styled from "@emotion/styled";
import { Typography } from "@mui/material";

const IdolImageContainer = styled("div")`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @media (max-width: 1024px) {
    height: 40vh;
    padding-top: 2.8rem;
    margin-top: -1.4rem;
  }
`;

const IdolImage = styled("img")`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  position: absolute;
  background-color: #000;

  @media (max-width: 600px) {
    object-fit: cover;
    object-position: center;
    position: absolute;
  }
`;

const GradientOverlay = styled("div")`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;

  @media (max-width: 1024px) {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

const IdolName = styled(Typography)`
  position: absolute;
  bottom: 0%;
  width: 100%;
  text-align: left;
  font-size: 8rem;
  font-weight: bold;
  font-family: Trebuchet MS;
  color: white;
  z-index: 1;

  @media (max-width: 600px) {
    font-size: 3.2rem;
    text-align: left;
  }
`;

export { GradientOverlay, IdolImage, IdolImageContainer, IdolName };
