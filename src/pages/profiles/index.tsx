import MainLayout from "../../components/layout/main";
import RunwayContainer from "../../components/surface/runway/index.css";
import ProfileFeed from "../../profiles/users/profile-feed";

export default function Profiles() {
  return (
    <MainLayout>
      <RunwayContainer>
        <ProfileFeed />
      </RunwayContainer>
    </MainLayout>
  );
}
