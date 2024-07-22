import styled from "@emotion/styled";
import { InputBase } from "@mui/material";

const Search = styled("div")`
  align-items: center;
  background-color: white;
  border-radius: 1.5rem;
  border: 2px solid black;
  color: black;
  height: 2.5rem;
  margin-left: 0;
  position: relative;
  width: 100%;

  &:focus-within {
    border-color: #99668f;
  }
`;

const SearchIconWrapper = styled("div")`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  padding: 0 1rem;
  pointer-events: none;
  position: absolute;
`;

const StyledInputBase = styled(InputBase)`
  color: inherit;
  padding: 0.2rem 2.5rem;
  width: 100%;
`;

const ClearIconWrapper = styled("div")`
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
`;

const DropdownMenu = styled("div")`
  align-items: center;
  background: white;
  border-radius: 1rem;
  border: 1px solid #ddd;
  box-shadow: 0 4px 6px #99668f;
  max-height: 200px;
  overflow-y: auto;
  position: absolute;
  width: 10%;
  z-index: 1000;
`;

const DropdownItem = styled("div")`
  color: black;
  cursor: pointer;
  padding: 8px 16px;

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
