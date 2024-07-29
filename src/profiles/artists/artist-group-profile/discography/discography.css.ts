import styled from "@emotion/styled";

const DiscographyContainer = styled("div")`
  margin: 2rem 0;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 600px) {
    padding: 0 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export { DiscographyContainer };
