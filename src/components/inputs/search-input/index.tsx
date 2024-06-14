import { ChangeEvent, FormEvent, useState } from "react";
import {
  ClearIconWrapper,
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "./index.css";
import SearchIcon from "@mui/icons-material/Search";
import CancelIcon from "@mui/icons-material/Cancel";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const navigate = useNavigate();

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/${searchQuery}`);
    }
  };

  const handleSearchClear = () => {
    setSearchQuery("");
  };

  return (
    <form onSubmit={handleSearchSubmit}>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          value={searchQuery}
          onChange={handleSearchChange}
        />
        {searchQuery && (
          <ClearIconWrapper onClick={handleSearchClear}>
            <CancelIcon />
          </ClearIconWrapper>
        )}
      </Search>
    </form>
  );
}
