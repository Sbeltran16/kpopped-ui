import { Typography } from "@mui/material";
import { MemberImage, MembersContainer, MemberCard } from "./members.css";
import { GroupTitles } from "../styles/index.css";

interface GroupMembersProps {
  members: any[];
}

function GroupMembersData({ members }: GroupMembersProps) {
  return (
    <>
      <GroupTitles>Members</GroupTitles>
      {members.length > 0 && (
        <MembersContainer>
          {members.map((member, index) => (
            <MemberCard key={index}>
              <MemberImage src={member.image} alt={member.name} />
              <Typography>{member.name}</Typography>
            </MemberCard>
          ))}
        </MembersContainer>
      )}
    </>
  );
}

export { GroupMembersData };
