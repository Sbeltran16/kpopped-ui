import styled from "@emotion/styled";

const DropdownMenu = styled.div`
  position: absolute;
  top: 2rem;
  right: 0;
  background: white;
  border: 1px solid #ddd;
  max-height: 200px;
  overflow-y: auto;
  width: 120px;
  z-index: 1000;
  box-shadow: 0 4px 6px black;
  border-radius: 0.5rem;
`;

const DropdownItem = styled.div`
  padding: 8px 16px;
  cursor: pointer;
  color: black;

  &:hover {
    background: #f0f0f0;
    color: #99668f;
    text-decoration: underline;
  }
`;

const StyledMore = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  margin: -2.2rem 0 0 20rem;
`;

export { DropdownItem, DropdownMenu, StyledMore };
