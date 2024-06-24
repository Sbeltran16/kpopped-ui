import useIndexPosts from "../../api/posts/index/hooks/use-index-posts";
import useFollowedPosts from "../../api/posts/followed/hooks"; // Adjust path as per your actual file structure
import { MyPostFeedWrapper } from "./index.css";
import { Typography } from "@mui/material";
import PostCard from "../../components/surface/card/post-card";

export default function MyPostFeed() {
  const { data: myPostsData } = useIndexPosts();
  const { followedPostsData, isLoading: followedPostsLoading } =
    useFollowedPosts();

  if (!myPostsData?.data || followedPostsLoading) {
    return <div>Loading...</div>;
  }

  const myPosts = myPostsData.data.map((post) => ({
    id: post.id,
    ...post.attributes,
  }));

  const allPosts = [...myPosts, ...(followedPostsData || [])];

  return (
    <MyPostFeedWrapper>
      <Typography variant="h5">For You</Typography>
      {allPosts.map((post) => (
        <PostCard data={post} key={post.id} />
      ))}
    </MyPostFeedWrapper>
  );
}
