import React from "react";
import { Post } from "../../../forms/post/types/post";
import { useUser } from "../../../../context/user";
import { format } from "date-fns";
import { enUS } from "date-fns/locale";
import { StyledPostCard } from "./index.css";
import { Typography } from "@mui/material";

export default function PostCard({ data }: { data: Post }) {
  const { user } = useUser();
  const date = new Date(data?.created_at || "");
  const formattedDate = format(date, "eee, MMM do ' @ 'h:mmaaa", {
    locale: enUS,
  });
  console.log(data);

  return (
    <StyledPostCard>
      <Typography variant="caption">@{user?.username}</Typography>
      <Typography variant="body1">"{data.post}</Typography>
      <Typography variant="caption">{formattedDate}</Typography>
    </StyledPostCard>
  );
}
