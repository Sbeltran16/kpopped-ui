import { ChangeEvent, FormEvent, useState } from "react";
import {
  ClearIconWrapper,
  Search,
  SearchIconWrapper,
  StyledInputBase,
  DropdownMenu,
  DropdownItem,
} from "./index.css";
import SearchIcon from "@mui/icons-material/Search";
import CancelIcon from "@mui/icons-material/Cancel";
import { useNavigate } from "react-router-dom";
import useUserSuggestions from "../../../api/users/hooks/use-user-suggestions";

type Suggestion = {
  username: string;
};

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const navigate = useNavigate();

  const { suggestions } = useUserSuggestions(searchQuery);

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

  const handleSuggestionClick = (username: string) => {
    setSearchQuery(username);
    navigate(`/${username}`);
  };

  return (
    <form onSubmit={handleSearchSubmit}>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search"
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
      {suggestions && suggestions.length > 0 && (
        <DropdownMenu>
          {suggestions.map((suggestion: Suggestion, index: number) => (
            <DropdownItem
              key={index}
              onClick={() => handleSuggestionClick(suggestion.username)}
            >
              {suggestion.username}
            </DropdownItem>
          ))}
        </DropdownMenu>
      )}
    </form>
  );
}
