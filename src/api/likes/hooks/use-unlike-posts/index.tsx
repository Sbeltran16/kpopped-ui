import { useState } from "react";
import fetcher from "../../../fetcher";
import { HOST } from "../../../config";

const unlikeEndpoint = (postId: number) => `${HOST}/posts/${postId}/like`;

export default function useUnlikePost() {
  const [loading, setLoading] = useState(false);

  const unlikePost = async (postId: number) => {
    setLoading(true);
    try {
      const response = await fetcher(unlikeEndpoint(postId), {
        method: "DELETE",
      });
      return response;
    } catch (error) {
      console.error("Failed to unlike post", error);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { unlikePost, loading };
}
