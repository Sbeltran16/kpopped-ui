import useSWR from "swr";
import { useState } from "react";
import { HOST } from "../../../config";
import fetcher from "../../../fetcher";
import { Post } from "../../../../components/forms/post/types/post";

const postDestroyEndpoint = (id: number) => `${HOST}/posts/${id}`;

export default function useDestroyPost() {
  const [postData, setPostData] = useState<Post>();
  const fetchObject = { method: "DELETE" };

  const destroyPost = (data: Post) => {
    setPostData(data);
  };

  const swrObject = useSWR(
    postData?.id ? postDestroyEndpoint(postData.id) : null,
    (url) =>
      fetcher(url, fetchObject)
        .then((res) => res)
        .finally(() => setPostData(undefined))
  );

  return {
    ...swrObject,
    destroyPost,
  };
}
