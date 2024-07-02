import { useEffect, useState, useRef } from "react";
import { Post } from "../../../forms/post/types/post";
import { useUser } from "../../../../context/user";
import FormattedDate from "../../../data-display/formatted-date";
import {
  StatsIcon,
  CommentIcon,
  DeleteIcon,
  LikeIcon,
  MoreIcon,
} from "../../../layout/icons/index.css";
import {
  DropdownItem,
  DropdownMenu,
  PostFooter,
  PostHeader,
  StyledPostCard,
  UsernameLink,
  StyledMore,
} from "./index.css";
import { Typography } from "@mui/material";
import useDestroyPost from "../../../../api/posts/destroy/hooks/use-destroy-posts";

export default function PostCard({ data }: { data: Post }) {
  const { user } = useUser();
  const { destroyPost } = useDestroyPost();

  const isMyPost = data.user_id === user?.id;

  const userProfileUrl = isMyPost ? `/${user?.username}` : `/${data.username}`;

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const closeDropdown = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    if (dropdownOpen) {
      document.addEventListener("mousedown", closeDropdown);
    } else {
      document.removeEventListener("mousedown", closeDropdown);
    }

    return () => {
      document.removeEventListener("mousedown", closeDropdown);
    };
  }, [dropdownOpen]);

  const handleToggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleDeletePost = () => {
    destroyPost(data);
    setDropdownOpen(false);
  };

  return (
    <StyledPostCard>
      <PostHeader>
        <div style={{ marginBottom: "0.5rem" }}>
          {isMyPost ? (
            <UsernameLink to={userProfileUrl}>{user?.username}</UsernameLink>
          ) : (
            <UsernameLink to={userProfileUrl}>{data.username}</UsernameLink>
          )}
        </div>
        <span style={{ margin: " -0.3rem 0.1rem 0 0.8rem" }}>.</span>
        <div style={{ color: "gray", marginLeft: "1rem" }}>
          <FormattedDate date={data.created_at} variant="slashed-date" />
        </div>
      </PostHeader>
      <StyledMore ref={dropdownRef}>
        <MoreIcon onClick={handleToggleDropdown} />
        {dropdownOpen && (
          <DropdownMenu>
            {isMyPost ? (
              <DropdownItem
                onClick={handleDeletePost}
                style={{ fontSize: "14px" }}
              >
                Delete Post
              </DropdownItem>
            ) : (
              <DropdownItem style={{ fontSize: "14px" }}>
                Follow {data.username}
              </DropdownItem>
            )}
          </DropdownMenu>
        )}
      </StyledMore>
      <div>
        <Typography variant="body1">{data.post || data.content}</Typography>
      </div>
      <PostFooter>
        <CommentIcon />
        <LikeIcon />
        <StatsIcon />
      </PostFooter>
    </StyledPostCard>
  );
}
