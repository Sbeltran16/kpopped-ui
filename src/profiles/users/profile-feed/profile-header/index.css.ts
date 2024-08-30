import styled from "@emotion/styled";
import { Avatar, Typography, Button } from "@mui/material";

const MainHeaderContainer = styled("div")`
  width: 100%;
  height: 70vh;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  border-bottom: 1px solid #e9e9e9;
`;

const HeaderImageContainer = styled("div")`
  height: 55%;
  width: 100%;
  object-fit: cover;
  position: relative;
`;

// Styled component for the avatar
const StyledUserAvatar = styled(Avatar)`
  width: 8rem;
  height: 8rem;
  border: 4px solid white;
  position: absolute;
  bottom: -4rem;
  left: 1rem;
  z-index: 2;
`;

const UserInfoContainer = styled("div")`
  margin: 5rem 0 0 0;
  display: flex;
  align-items: center;
`;

const StyledUsername = styled(Typography)`
  font-size: 24px;
  font-weight: bold;
  margin-left: 1rem;
`;

const StyledFollowButtonContainer = styled(Button)`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

const StyledEditButton = styled(Button)`
  border-radius: 4rem;
  font-size: 12px;
  border: 1px solid #99668f;
  background-color: white;
  color: black;
  font-weight: bolder;
  text-transform: none;
  padding: 0.2rem 1rem;

  &:hover {
    background-color: #99668f;
    color: white;
    border: 1px solid #669970;
    box-shadow: none;
  }
`;

const StyledUsernameContainer = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: auto;
  align-items: center;
  width: 100%;
  padding: 0 0.5rem;
`;

const StyledBioContainer = styled("div")`
  display: flex;
  margin-top: 1rem;
  padding: 0 1.5rem;
`;

export {
  MainHeaderContainer,
  HeaderImageContainer,
  StyledUsername,
  StyledUserAvatar,
  UserInfoContainer,
  StyledFollowButtonContainer,
  StyledEditButton,
  StyledUsernameContainer,
  StyledBioContainer,
};
