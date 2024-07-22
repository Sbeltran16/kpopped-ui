import { useState, useRef, useEffect } from "react";
import { Post } from "../../../forms/post/types/post";
import useDestroyPost from "../../../../api/posts/destroy/hooks/use-destroy-posts";
import { DropdownItem, DropdownMenu, StyledMore } from "./index.css";
import MoreIcon from "@mui/icons-material/MoreVert";
import { User } from "../../../../context/user/types/user";

interface PostDropdownProps {
  data: Post;
  user: User | undefined;
}

function PostDropdown({ data, user }: PostDropdownProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { destroyPost } = useDestroyPost();

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
    <StyledMore ref={dropdownRef}>
      <MoreIcon onClick={handleToggleDropdown} />
      {dropdownOpen && (
        <DropdownMenu>
          {data.user_id === user?.id ? (
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
  );
}

export default PostDropdown;
