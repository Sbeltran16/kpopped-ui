import useSWR from "swr";
import fetcher from "../../../fetcher";
import { HOST } from "../../../config";

export default function useFollowedPosts() {
  const { data, error } = useSWR(`${HOST}/follows/followed_posts`, fetcher);

  return {
    followedPostsData: data,
    followedPostsError: error,
    isLoading: !data && !error,
  };
}
