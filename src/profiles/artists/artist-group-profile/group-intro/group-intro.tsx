import {
  GroupImage,
  GroupImageContainer,
  GradientOverlay,
  GroupName,
} from "./group-intro.css";

interface GroupIntroProps {
  groupIntro: any;
}

function GroupIntroData({ groupIntro }: GroupIntroProps) {
  return (
    <GroupImageContainer>
      <GroupImage
        src={groupIntro.group_pose_image}
        alt={groupIntro.profile_data.name}
      />
      <GradientOverlay />
      <GroupName>{groupIntro.profile_data.name}</GroupName>
    </GroupImageContainer>
  );
}

export { GroupIntroData };
