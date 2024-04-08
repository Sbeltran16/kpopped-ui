import React from "react";
import MainLayout from "../../components/layout/main";
import RunwayContainer from "../../components/surface/runway/index.css";
import Post from "../../components/forms/post";
import MyPostFeed from "../../feeds/my-post-feed";

export default function Home() {
  return (
    <MainLayout>
      <RunwayContainer>
        <Post />
        <MyPostFeed />
      </RunwayContainer>
    </MainLayout>
  );
}
