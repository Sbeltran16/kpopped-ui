import { useState } from "react";
import { HOST } from "../../../config";
import { Post } from "../../../../components/forms/post/types/post";
import useSWR from "swr";
import fetcher from "../../../fetcher";

const postEndpoint = `${HOST}/posts`;

export default function useCreatePost() {
  const [postData, setPostData] = useState<Post>();
  const fetchObject = {
    method: "POST",
    body: JSON.stringify({
      post: postData?.post,
    }),
  };

  const post = (data: Post) => setPostData(data);

  const swrObject = useSWR(postData ? postEndpoint : null, (url) =>
    fetcher(url, fetchObject)
      .then((res) => {
        return res;
      })
      .finally(() => setPostData(undefined))
  );

  return {
    ...swrObject,
    post,
  };
}
