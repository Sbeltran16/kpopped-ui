import React from "react";
import MainLayout from "../../components/layout/main";
import RunwayContainer from "../../components/surface/runway/index.css";
import Post from "../../components/forms/post";
import useIndexPosts from "../../api/posts/index/hooks/use-index-posts";
import MyPostFeed from "../../feeds/my-post-feed";
import { useUser } from "../../context/user";

export default function Home() {
  const { user } = useUser();

  return (
    <MainLayout>
      <RunwayContainer>
        <Post />
        <MyPostFeed />
      </RunwayContainer>
    </MainLayout>
  );
}
