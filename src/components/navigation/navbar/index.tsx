import { useEffect, useState, useRef } from "react";
import {
  NavbarContainer,
  NavbarLink,
  StyledLinkContainer,
  StyledLogout,
  SearchButton,
  SearchBarWrapper,
} from "./index.css";
import { useUser } from "../../../context/user";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import { NavLink } from "react-router-dom";
import SearchBar from "../../inputs/search-input";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

function handleLogout() {
  localStorage.removeItem("authToken");
  window.location.href = "/";
}

export default function Navbar() {
  const { user } = useUser();
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchType, setSearchType] = useState<string>("user");
  const searchRef = useRef<HTMLDivElement>(null);

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      searchRef.current &&
      !searchRef.current.contains(event.target as Node)
    ) {
      setSearchOpen(false);
    }
  };
  const handleSearchTypeChange = (event: SelectChangeEvent) => {
    setSearchType(event.target.value as string);
  };

  // useEffect(() => {
  //   if (searchOpen) {
  //     document.addEventListener("mousedown", handleClickOutside);
  //   } else {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   }

  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, []);

  return (
    <NavbarContainer>
      <NavLink
        style={{ textDecoration: "none", fontSize: "26px", color: "black" }}
        to={"/home"}
      >
        <span style={{ color: "#99668F" }}>K</span>popped
        <span style={{ color: "#669970" }}>!</span>
      </NavLink>
      <StyledLinkContainer ref={searchRef}>
        {searchOpen ? (
          <SearchBarWrapper>
            <SearchBar searchType={searchType} />
            <Box sx={{ minWidth: 120, marginLeft: 2 }}>
              <FormControl fullWidth>
                <InputLabel id="search-type-select-label">
                  Search Type
                </InputLabel>
                <Select
                  labelId="search-type-select-label"
                  id="search-type-select"
                  value={searchType}
                  label="Search Type"
                  onChange={handleSearchTypeChange}
                >
                  <MenuItem value="user">User</MenuItem>
                  <MenuItem value="group">Artists</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </SearchBarWrapper>
        ) : (
          <SearchButton onClick={toggleSearch}>
            <SearchIcon fontSize="large" />
          </SearchButton>
        )}
        {!user ? (
          <>
            <NavbarLink to="/signup">Sign Up</NavbarLink>
            <NavbarLink to="/login">Log In</NavbarLink>
          </>
        ) : (
          <>
            <NavbarLink to={"/home"}>
              <HomeIcon fontSize="large" />
            </NavbarLink>
            <NavbarLink to={`/${user.username}`}>
              <PersonIcon fontSize="large" />
            </NavbarLink>
            <span
              style={{
                color: "#99668f",
                margin: "0 2rem 0",
                fontSize: "18px",
              }}
            >
              |
            </span>
            <StyledLogout onClick={handleLogout}>Logout</StyledLogout>
          </>
        )}
      </StyledLinkContainer>
    </NavbarContainer>
  );
}
