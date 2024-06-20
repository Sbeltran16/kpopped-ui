// src/pages/profiles/index.tsx
import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useUserProfile from "../../api/users/hooks/use-user-profiles";
import PostCard from "../../components/surface/card/post-card";
import { Typography } from "@mui/material";
import { ProfileFeedWrapper } from "./index.css";
import { Post } from "../../components/forms/post/types/post";

export default function ProfileFeed() {
  const { username } = useParams();
  const navigate = useNavigate();
  const { data, error } = useUserProfile(username || "");

  useEffect(() => {
    if (error && error.status === 404) {
      navigate("/user-not-found");
    } else if (data && !data.data) {
      navigate("/user-not-found");
    }
  }, [error, data, navigate]);

  if (!data && !error) {
    return <div>Loading...</div>;
  }

  if (error && error.status !== 404) {
    return <div>Error: {error.message}</div>;
  }

  const user = data?.data;

  if (!user) {
    return null;
  }

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
