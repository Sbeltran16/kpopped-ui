import React, { useState } from "react";
import { StyledForm, PostField, PostButton } from "./index.css";
import useCreatePost from "../../../api/posts/create/hooks/use-create-post";

export default function Post() {
  const { post: createPost } = useCreatePost();
  const [post, setPost] = useState("");

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPost(e.target.value);

  const handlePostSubmit = () => {
    if (!post) return;

    createPost({ post });
    window.location.href = window.location.href + "?refresh=" + Date.now();
  };

  return (
    <StyledForm>
      <PostField
        fullWidth
        multiline
        onChange={handleOnChange}
        placeholder="Whats On Your Mind?"
        rows={3}
        variant="filled"
        InputLabelProps={{
          shrink: true,
        }}
        value={post}
      />
      <PostButton variant="contained" onClick={handlePostSubmit}>
        KPost!
      </PostButton>
    </StyledForm>
  );
}
