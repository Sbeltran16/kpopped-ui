import styled from "@emotion/styled";

const RunwayContainer = styled.div`
  border: 1px solid #e9e9e9;
  border-bottom: none;
  border-top: none;
  height: 100vh;
  margin: 0 auto;
  max-width: 650px;
  overflow-y: auto;

  @media (max-width: 768px) {
    padding: 0 1rem;
    margin: 5rem 0 0;
    width: 100%;
    box-sizing: border-box;
  }
`;

export default RunwayContainer;
