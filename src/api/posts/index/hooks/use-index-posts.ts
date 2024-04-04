import useSWR from "swr";
import { HOST } from "../../../config";
import fetcher from "../../../fetcher";
import { PostsIndexResponse } from "./types/posts-index-response";

const postEndpoint = `${HOST}/posts`;

export default function useIndexPosts() {
  return useSWR<PostsIndexResponse>(postEndpoint, fetcher);
}
