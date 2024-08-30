import MainLayout from "../../components/layout/main";
import RunwayContainer from "../../components/surface/runway/index.css";
import ProfileFeed from "../../profiles/users/profile-feed/index";
import ProfileHeader from "../../profiles/users/profile-feed/profile-header";

export default function Profiles() {
  return (
    <MainLayout>
      <RunwayContainer>
        <ProfileHeader />
        <ProfileFeed />
      </RunwayContainer>
    </MainLayout>
  );
}
