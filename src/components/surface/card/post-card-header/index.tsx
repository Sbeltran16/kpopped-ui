import { Post } from "../../../forms/post/types/post";
import { useUser } from "../../../../context/user";
import { PostHeader, UsernameLink } from "./index.css";
import FormattedDate from "../../../data-display/formatted-date";

function PostHeaderComponent({ data }: { data: Post }) {
  const { user } = useUser();
  const isMyPost = data.user_id === user?.id;
  const userProfileUrl = isMyPost ? `/${user?.username}` : `/${data.username}`;

  return (
    <PostHeader>
      <div style={{ marginBottom: "0.5rem" }}>
        <UsernameLink to={userProfileUrl}>
          {isMyPost ? user?.username : data.username}
        </UsernameLink>
      </div>
      <span style={{ margin: " -0.3rem 0.1rem 0 0.8rem" }}>.</span>
      <div style={{ color: "gray", marginLeft: "1rem" }}>
        <FormattedDate date={data.created_at} variant="slashed-date" />
      </div>
    </PostHeader>
  );
}

export default PostHeaderComponent;
