import styled from "@emotion/styled";
import { Typography } from "@mui/material";

const GroupImageContainer = styled("div")`
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

const GroupImage = styled("img")`
  width: 100%;
  height: 100%;
  object-fit: contain;
  position: absolute;
  background-color: #000;

  @media (max-width: 600px) {
    object-fit: cover;
    position: absolute;
  }
`;

const GradientOverlay = styled("div")`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1;

  @media (max-width: 1024px) {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

const GroupName = styled(Typography)`
  position: absolute;
  bottom: 0%;
  width: 100%;
  text-align: left;
  margin-left: 2rem;
  font-size: 8rem;
  font-weight: bold;
  font-family: Trebuchet MS;
  color: white;
  z-index: 2;

  @media (max-width: 600px) {
    font-size: 3.2rem;
    margin-left: 1rem;
    text-align: left;
  }
`;

export { GradientOverlay, GroupImage, GroupImageContainer, GroupName };
