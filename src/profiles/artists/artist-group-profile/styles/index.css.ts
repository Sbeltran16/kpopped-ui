import styled from "@emotion/styled";
import { Typography } from "@mui/material";

const MainContainer = styled("div")`
  height: 100%;
  width: 100%;

  @media (max-width: 756px) {
  }
`;

const GroupTitles = styled(Typography)`
  display: flex;
  justify-content: flex-start;
  font-size: 24px;
  font-weight: bolder;
  @media (max-width: 600px) {
    font-size: 18px;
    justify-content: center;
  }
`;

const DataContainer = styled("div")`
  margin: 1rem 0;
  padding: 3rem;

  background-color: rgba(102, 153, 112, 0.2);
  @media (max-width: 600px) {
    padding: 1rem;
  }
`;

export { MainContainer, GroupTitles, DataContainer };
