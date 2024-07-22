import styled from "@emotion/styled";

const VoteContainer = styled.div`
  display: flex;
  flex-flow: row;
  padding: 0 1rem;
  gap: 0.5rem;
  justify-content: flex-start;
`;

const IconsContainer = styled.div`
  display: flex;
  flex-flow: row;
  padding: 0 1rem;
  gap: 1.5rem;
  justify-content: flex-end;
`;

const PostFooter = styled.div`
  border: none;
  display: flex;
  justify-content: space-evenly;
  padding: 1rem;
`;

export { PostFooter, VoteContainer, IconsContainer };
