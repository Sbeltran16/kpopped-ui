import React from "react";
import { Post } from "../../../forms/post/types/post";
import { useUser } from "../../../../context/user";
import { format } from "date-fns";
import { enUS } from "date-fns/locale";
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

  const date = new Date(data?.created_at || "");
  const formattedDate = format(date, "eee, MMM do ' @ 'h:mmaaa", {
    locale: enUS,
  });
  console.log(data);

  return (
    <StyledPostCard>
      <Typography variant="caption">@{user?.username}</Typography>
      <Typography variant="body1">{data.post}</Typography>
      <Typography variant="caption">{formattedDate}</Typography>
      <PostFooter>
        <CommentIcon />
        <LikeIcon />
        <StatsIcon />
        <DeleteIcon onClick={() => destroyPost(data)} />
      </PostFooter>
    </StyledPostCard>
  );
}
