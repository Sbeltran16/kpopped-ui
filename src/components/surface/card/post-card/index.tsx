import React from "react";
import { Post } from "../../../forms/post/types/post";
import { useUser } from "../../../../context/user";
import FormattedDate from "../../../data-display/formatted-date";
import {
  CommentIcon,
  DeleteIcon,
  LikeIcon,
  PostFooter,
  StatsIcon,
  StyledPostCard,
} from "./index.css";
import { Typography } from "@mui/material";
import useDestroyPost from "../../../../api/posts/destroy/hooks/use-destroy-posts";

export default function PostCard({ data }: { data: Post }) {
  const { user } = useUser();
  const { destroyPost } = useDestroyPost();

  console.log(data);

  return (
    <StyledPostCard>
      <Typography variant="caption">
        @{user?.username} -{" "}
        <FormattedDate date={data.created_at} variant="slashed-date" />
      </Typography>
      <Typography variant="body1">{data.post || data.content}</Typography>
      <PostFooter>
        <CommentIcon />
        <LikeIcon />
        <StatsIcon />
        <DeleteIcon onClick={() => destroyPost(data)} />
      </PostFooter>
    </StyledPostCard>
  );
}
