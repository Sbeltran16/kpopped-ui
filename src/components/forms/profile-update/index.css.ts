import styled from "@emotion/styled";

const StyledUpdateForm = styled("form")`
  background-color: white;
  border: 2px solid black;
  border-radius: 2rem;
  height: 50vh;
  margin: 6rem auto;
  padding: 3rem;
  width: 40%;
`;

const StyledLabelContainer = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StyledBioTextAreaWrapper = styled("div")`
  position: relative;
  width: 100%;
`;

const StyledBioLabel = styled("label")`
  position: absolute;
  top: 0.75rem;
  left: 0.75rem;
  font-size: 14px;
  transition: all 0.3s ease;
  color: #99668f;
`;

const StyledBioTextArea = styled("textarea")`
  width: 100%;
  height: 10vh;
  border: 1px solid grey;
  border-radius: 0.5rem;
  padding: 0.75rem;
  padding-top: 2.5rem;
  resize: none;
  font-size: 1rem;
  font-family: "Comfortaa", sans-serif;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border: 2px solid #99668f;
  }
`;

export {
  StyledUpdateForm,
  StyledLabelContainer,
  StyledBioTextAreaWrapper,
  StyledBioLabel,
  StyledBioTextArea,
};
