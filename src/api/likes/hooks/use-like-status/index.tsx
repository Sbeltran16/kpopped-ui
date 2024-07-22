import useSWR from "swr";
import fetcher from "../../../fetcher";
import { HOST } from "../../../config";

const likeStatusEndpoint = (postId: number) =>
  `${HOST}/posts/${postId}/like/status`;

export function useLikeStatus(postId: number) {
  const { data, error } = useSWR(
    postId ? likeStatusEndpoint(postId) : null,
    fetcher
  );

  return {
    liked: data?.liked || false,
    likeCount: data?.like_count || 0,
    loading: !data && !error,
    error,
  };
}
