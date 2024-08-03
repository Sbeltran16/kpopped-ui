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
  position: absolute;

  @media (max-width: 600px) {
    object-fit: contain;
    position: absolute;
  }
`;

const GradientOverlay = styled("div")`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) 60%,
    rgba(255, 255, 255, 1) 85%
  );

  @media (max-width: 1024px) {
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 30%,
      rgba(255, 255, 255, 1) 65%
    );
  }
`;

const IdolName = styled(Typography)`
  position: absolute;
  bottom: 8%;
  width: 100%;
  text-align: center;
  font-size: 5rem;
  font-weight: bolder;
  color: black;
  z-index: 1;

  @media (max-width: 600px) {
    font-size: 3.2rem;
  }
`;

export { GradientOverlay, IdolImage, IdolImageContainer, IdolName };
