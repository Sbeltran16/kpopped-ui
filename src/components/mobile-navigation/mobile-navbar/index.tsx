import { useState, MouseEvent, KeyboardEvent } from "react";
import {
  Toolbar,
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useUser } from "../../../context/user";
import { NavLink } from "react-router-dom";
import { StyledAppBar, StyledDrawer } from "./index.css";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";

export default function MobileNavbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { user } = useUser();

  const toggleDrawer =
    (open: boolean) => (event: KeyboardEvent | MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as KeyboardEvent).key === "Tab" ||
          (event as KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setDrawerOpen(open);
    };

  const menuItems = (
    <List style={{ alignItems: "center", width: "40%" }}>
      {!user ? (
        <>
          <ListItem button component={NavLink} to="/signup">
            <ListItemText primary="Sign Up" />
          </ListItem>
          <ListItem button component={NavLink} to="/login">
            <ListItemText primary="Log In" />
          </ListItem>
        </>
      ) : (
        <>
          <ListItem
            button
            component={NavLink}
            to="/home"
            style={{ gap: "0.3rem" }}
          >
            <HomeIcon />
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component={NavLink} to={`/${user.username}`}>
            <PersonIcon />
            <ListItemText primary="Profile" />
          </ListItem>
          <ListItem
            button
            onClick={() => {
              localStorage.removeItem("authToken");
              window.location.href = "/";
            }}
          >
            <ListItemText primary="Logout" />
          </ListItem>
        </>
      )}
    </List>
  );

  return (
    <>
      <StyledAppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            style={{ flexGrow: 1, textAlign: "center", marginLeft: "-1.1rem" }}
          >
            <span style={{ color: "#99668F" }}>K</span>popped
            <span style={{ color: "#669970" }}>!</span>
          </Typography>
        </Toolbar>
      </StyledAppBar>
      <StyledDrawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        style={{ alignItems: "center", width: "40%" }}
      >
        {menuItems}
      </StyledDrawer>
    </>
  );
}
