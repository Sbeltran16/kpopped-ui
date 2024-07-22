import { useState } from "react";
import fetcher from "../../../fetcher";
import { HOST } from "../../../config";

const likeEndpoint = (postId: number) => `${HOST}/posts/${postId}/like`;

export default function useLikePost() {
  const [loading, setLoading] = useState(false);

  const likePost = async (postId: number) => {
    setLoading(true);
    try {
      const response = await fetcher(likeEndpoint(postId), {
        method: "POST",
      });
      return response;
    } catch (error) {
      console.error("Failed to like post", error);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { likePost, loading };
}
