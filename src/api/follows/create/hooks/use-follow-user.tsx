import { HOST } from "../../../config";
import useSWR from "swr";
import fetcher from "../../../fetcher";
import { useState } from "react";

const followEndpoint = `${HOST}/follows`;

export default function useFollowUser() {
  const [followeeId, setFolloweeId] = useState<number | null>(null);

  const follow = (id: number) => setFolloweeId(id);

  const swrObject = useSWR(followeeId ? followEndpoint : null, (url) =>
    fetcher(url, {
      method: "POST",
      body: JSON.stringify({ followee_id: followeeId }),
    }).then((res) => {
      setFolloweeId(null);
      return res;
    })
  );

  return {
    ...swrObject,
    follow,
  };
}
