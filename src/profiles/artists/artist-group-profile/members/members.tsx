import { Typography } from "@mui/material";
import { MemberImage, MembersContainer, MemberCard } from "./members.css";
import { GroupTitles } from "../styles/index.css";
import { useNavigate } from "react-router-dom";

interface Member {
  name: string;
  image: string;
  profile_url: string;
}

interface GroupMembersProps {
  members: Member[];
}

function GroupMembersData({ members }: GroupMembersProps) {
  const navigate = useNavigate();

  const handleMemberClick = (profileUrl: string) => {
    const formattedUrl = profileUrl.replace(
      "/profiles/idol/",
      "/artists/idol/"
    );
    navigate(formattedUrl);
  };

  return (
    <>
      <GroupTitles>Members</GroupTitles>
      {members.length > 0 && (
        <MembersContainer>
          {members.map((member, index) => (
            <MemberCard
              key={index}
              onClick={() => handleMemberClick(member.profile_url)}
            >
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
