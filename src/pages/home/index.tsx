import React from "react";
import MainLayout from "../../components/layout/main";
import RunwayContainer from "../../components/surface/runway/index.css";
import Post from "../../components/forms/post";
import { Box } from "@mui/material";
import useIndexPosts from "../../api/posts/index/hooks/use-index-posts";

export default function Home() {
  const { data } = useIndexPosts();
  return (
    <MainLayout>
      <RunwayContainer>
        <Post />
        <Box sx={{ marginTop: "2rem" }}>For You</Box>
      </RunwayContainer>
    </MainLayout>
  );
}
