import styled from "@emotion/styled";

const RunwayContainer = styled.div`
  border: 1px solid #e9e9e9;
  border-bottom: none;
  border-left: none;
  border-top: none;
  height: 100vh;
  margin: 0 7rem;
  max-width: 650px;
  padding: 1rem;
  overflow-y: auto;

  @media (max-width: 768px) {
    margin: 0;
    padding: 0 1rem;
    margin-top: 5rem;
    width: 100%;
    box-sizing: border-box;
  }
`;

export default RunwayContainer;
