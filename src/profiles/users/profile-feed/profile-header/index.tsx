import { useState, useEffect } from "react";
import useFollowStatus from "../../../../api/follows/status/hooks/use-follow-status";
import { useParams } from "react-router-dom";
import useUserProfile from "../../../../api/users/hooks/use-user-profiles";
import {
  HeaderImageContainer,
  MainHeaderContainer,
  StyledUserAvatar,
  StyledUsername,
  UserInfoContainer,
  StyledFollowButtonContainer,
  StyledEditButton,
  StyledUsernameContainer,
  StyledBioContainer,
} from "./index.css";
import FollowButton from "../../../../components/inputs/follow-button";
import { Modal, Typography } from "@mui/material";
import ProfileUpdateForm from "../../../../components/forms/profile-update";

function ProfileHeader() {
  const { username } = useParams();
  const { data, error } = useUserProfile(username || "");
  const [isFollowing, setIsFollowing] = useState<boolean>(false);
  const { data: followStatusData } = useFollowStatus(username || "");
  const [isModalOpen, setModalOpen] = useState(false);

  const baseUrl = "http://localhost:3001";

  useEffect(() => {
    if (followStatusData) {
      setIsFollowing(followStatusData.isFollowing);
    }
  }, [followStatusData]);

  if (!data && !error) {
    return <div>Loading...</div>;
  }

  if (error && error.status !== 404) {
    return <div>Error: {error.message}</div>;
  }

  const user = data?.data;

  const profileBannerUrl = user.profile_banner_url
    ? `${baseUrl}${user.profile_banner_url}`
    : "/imgs/default_banner.png";

  const profilePictureUrl = user.profile_picture_url
    ? `${baseUrl}${user.profile_picture_url}`
    : "/imgs/default_avatar.png";

  if (!user) {
    return null;
  }

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <MainHeaderContainer>
      <HeaderImageContainer>
        <img
          src={profileBannerUrl}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <StyledUserAvatar src={profilePictureUrl} alt={user.username} />
      </HeaderImageContainer>
      <UserInfoContainer>
        <StyledUsernameContainer>
          <StyledUsername>{user.username}</StyledUsername>
          {/* <StyledEditButton variant="outlined" onClick={handleOpenModal}>
            Edit Profile
          </StyledEditButton> */}
        </StyledUsernameContainer>
      </UserInfoContainer>
      <StyledFollowButtonContainer>
        <FollowButton
          isFollowing={isFollowing}
          followeeId={user.id}
          onFollowChange={setIsFollowing}
        />
      </StyledFollowButtonContainer>
      <StyledBioContainer>
        <Typography style={{ fontSize: "15px" }}>{user.bio}</Typography>
      </StyledBioContainer>
      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <ProfileUpdateForm onClose={handleCloseModal} />
      </Modal>
    </MainHeaderContainer>
  );
}

export default ProfileHeader;
