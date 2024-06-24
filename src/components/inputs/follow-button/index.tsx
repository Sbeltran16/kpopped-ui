import useFollowUser from "../../../api/follows/create/hooks/use-follow-user";
import useUnfollowUser from "../../../api/follows/destroy/hooks/use-unfollow-user";

interface FollowButtonProps {
  isFollowing: boolean;
  followeeId: number;
  onFollowChange: (isFollowing: boolean) => void;
}

const FollowButton = ({
  isFollowing,
  followeeId,
  onFollowChange,
}: FollowButtonProps) => {
  const { follow } = useFollowUser();
  const { unfollow } = useUnfollowUser();

  const handleFollow = async () => {
    if (isFollowing) {
      await unfollow(followeeId);
    } else {
      await follow(followeeId);
    }
    onFollowChange(!isFollowing);
  };

  return (
    <button onClick={handleFollow}>
      {isFollowing ? "Unfollow" : "Follow"}
    </button>
  );
};

export default FollowButton;
