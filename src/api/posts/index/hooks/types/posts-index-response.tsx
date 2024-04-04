import { Post } from "../../../../../components/forms/post/types/post";

export type PostsIndexResponse = {
  id: String;
  type: String;
  attributes: Post;
};
