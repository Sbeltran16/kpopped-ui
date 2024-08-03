import {
  IdolImage,
  IdolImageContainer,
  IdolName,
  GradientOverlay,
} from "./idol-intro.css";

interface IdolIntroProps {
  idolIntro: any;
}

function IdolIntroData({ idolIntro }: IdolIntroProps) {
  return (
    <IdolImageContainer>
      <IdolImage src={idolIntro.pose_image} alt={idolIntro.profile_data.name} />
      <GradientOverlay />
      <IdolName>{idolIntro.profile_data.name}</IdolName>
    </IdolImageContainer>
  );
}

export { IdolIntroData };
