import { useEffect, useState } from "react";
import { Post } from "../../../forms/post/types/post";
import PostHeaderComponent from "../post-card-header";
import PostDropdown from "../post-card-dropdown";
import PostFooterComponent from "../post-card-footer";
import { StyledPostCard } from "./index.css";
import { Typography } from "@mui/material";
import useLikePost from "../../../../api/likes/hooks/use-like-posts";
import useUnlikePost from "../../../../api/likes/hooks/use-unlike-posts";
import { useLikeStatus } from "../../../../api/likes/hooks/use-like-status";
import { useUser } from "../../../../context/user";

export default function PostCard({ data }: { data: Post }) {
  const { user } = useUser();
  const { likePost } = useLikePost();
  const { unlikePost } = useUnlikePost();
  const { liked: initialLiked, likeCount: initialLikeCount } = useLikeStatus(
    data.id!
  );

  const [liked, setLiked] = useState(initialLiked);
  const [likes, setLikes] = useState(initialLikeCount);

  useEffect(() => {
    setLiked(initialLiked);
    setLikes(initialLikeCount);
  }, [initialLiked, initialLikeCount]);

  const handleLike = async () => {
    if (liked) {
      await unlikePost(data.id!);
      setLikes((prev: number) => (prev !== undefined ? prev - 1 : 0));
    } else {
      await likePost(data.id!);
      setLikes((prev: number) => (prev !== undefined ? prev + 1 : 1));
    }
    setLiked(!liked);
  };

  return (
    <StyledPostCard>
      <PostHeaderComponent data={data} />
      <PostDropdown data={data} user={user} />
      <div>
        <Typography variant="body1">{data.post || data.content}</Typography>
      </div>
      <PostFooterComponent
        liked={liked}
        likes={likes}
        handleLike={handleLike}
      />
    </StyledPostCard>
  );
}
