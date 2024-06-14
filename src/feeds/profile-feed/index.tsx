// src/pages/profiles/index.tsx
import React from "react";
import { useParams } from "react-router-dom";
import useUserProfile from "../../api/users/hooks/use-user-profiles";
import PostCard from "../../components/surface/card/post-card";
import { Typography } from "@mui/material";
import { ProfileFeedWrapper } from "./index.css";
import { Post } from "../../components/forms/post/types/post";

export default function ProfileFeed() {
  const { username } = useParams();
  const { data, error } = useUserProfile(username || "");

  if (!data) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const user = data?.data;

  return (
    <ProfileFeedWrapper>
      <Typography variant="h5">{user.username}'s Profile</Typography>
      <Typography variant="h6">Posts</Typography>
      {user.posts.map((post: Post) => (
        <PostCard data={post} key={post.id} />
      ))}
    </ProfileFeedWrapper>
  );
}
