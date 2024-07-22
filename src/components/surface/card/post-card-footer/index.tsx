import { Typography } from "@mui/material";
import {
  CommentIcon,
  LikeIcon,
  StatsIcon,
  UpvoteIcon,
  DownvoteIcon,
} from "../../../../styling/icons/index.css";
import { PostFooter, VoteContainer, IconsContainer } from "./index.css";

function PostFooterComponent({
  liked,
  likes,
  handleLike,
}: {
  liked: boolean;
  likes: number;
  handleLike: () => void;
}) {
  return (
    <PostFooter>
      <VoteContainer>
        <UpvoteIcon />
        <span>|</span>
        <DownvoteIcon />
      </VoteContainer>
      <IconsContainer>
        <CommentIcon />
        <div
          onClick={handleLike}
          style={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <LikeIcon liked={liked} />
          <Typography variant="body2" style={{ marginLeft: "0.5rem" }}>
            {likes}
          </Typography>
        </div>
        <StatsIcon />
      </IconsContainer>
    </PostFooter>
  );
}

export default PostFooterComponent;
