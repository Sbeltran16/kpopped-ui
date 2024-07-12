import styled from "@emotion/styled";
import { AppBar, Drawer } from "@mui/material";

const StyledAppBar = styled(AppBar)`
  background-color: white;
  color: black;
  box-shadow: none;
  border-bottom: 1px solid #e9e9e9;
`;

const StyledDrawer = styled(Drawer)`
  .MuiDrawer-paper {
    width: 12rem;
  }
`;

export { StyledAppBar, StyledDrawer };
