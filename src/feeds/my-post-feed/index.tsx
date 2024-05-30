import React from "react";
import useIndexPosts from "../../api/posts/index/hooks/use-index-posts";
import { MyPostFeedWrapper } from "./index.css";
import { Typography } from "@mui/material";
import PostCard from "../../components/surface/card/post-card";

export default function MyPostFeed() {
  const { data } = useIndexPosts();

  if (!data?.data) {
    return <div>Loading...</div>;
  }

  return (
    <MyPostFeedWrapper>
      <Typography variant="h5">For You</Typography>
      {data.data.map((post) => (
        <PostCard data={post.attributes} key={post.attributes.id} />
      ))}
    </MyPostFeedWrapper>
  );
}
