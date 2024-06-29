import styled from "@emotion/styled";
import { InputBase } from "@mui/material";

const Search = styled("div")`
  position: relative;
  border-radius: 1.5rem;
  background-color: white;
  color: black;
  margin-left: 0;
  width: 100%;
  height: 2.5rem;
`;

const SearchIconWrapper = styled("div")`
  padding: 0 1rem;
  height: 100%;
  position: absolute;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledInputBase = styled(InputBase)`
  color: inherit;
  width: 100%;
  .MuiInputBase-input {
    padding: 0.5rem 0.5rem 0.5rem 2.5rem;
    transition: width 300ms;
    width: 12ch;
    @media (min-width: 600px) {
      &:focus {
        width: 20ch;
      }
    }
  }
`;

const ClearIconWrapper = styled("div")`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DropdownMenu = styled("div")`
  position: absolute;
  align-items: center;
  background: white;
  border: 1px solid #ddd;
  max-height: 200px;
  overflow-y: auto;
  width: 10%;
  z-index: 1000;
  box-shadow: 0 4px 6px #99668f;
  border-radius: 1rem;
`;

const DropdownItem = styled("div")`
  padding: 8px 16px;
  cursor: pointer;
  color: black;

  &:hover {
    background: #f0f0f0;
  }
`;

export {
  Search,
  SearchIconWrapper,
  StyledInputBase,
  ClearIconWrapper,
  DropdownMenu,
  DropdownItem,
};
