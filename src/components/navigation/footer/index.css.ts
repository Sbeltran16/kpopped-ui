import styled from "@emotion/styled";

const FooterContainer = styled.footer`
  padding: 1rem;
  text-align: center;
  position: relative;
  width: 100%;

  @media (max-width: 768px) {
    display: flex;
    font-size: 16px;
    justify-content: center;
    margin-top: 4rem;
    margin-bottom: 1rem;
    padding: 1rem 0;
  }
`;

export { FooterContainer };
