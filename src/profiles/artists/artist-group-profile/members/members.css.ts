import styled from "@emotion/styled";

const MembersContainer = styled("div")`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  margin: 1rem;
  gap: 10px;
  width: 100%;
  box-sizing: border-box;
`;

const MemberCard = styled("div")`
  position: relative;
  width: 7rem;
  height: 7rem;
  padding: 1rem;
  border-radius: 50%;
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 600px) {
    width: 5rem;
    height: 5rem;
    padding: 2rem;
  }
`;

const MemberImage = styled("img")`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  border: 2px solid #669970;
`;

export { MembersContainer, MemberCard, MemberImage };
