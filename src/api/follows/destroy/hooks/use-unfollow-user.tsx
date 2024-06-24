import { useState } from "react";
import useSWR from "swr";
import fetcher from "../../../fetcher";
import { HOST } from "../../../config";

export default function useUnfollowUser() {
  const [followeeId, setFolloweeId] = useState<number | null>(null);

  const unfollow = (id: number) => setFolloweeId(id);

  const swrObject = useSWR(
    followeeId ? `${HOST}/follows/${followeeId}` : null,
    (url) =>
      fetcher(url, {
        method: "DELETE",
      }).then((res) => {
        setFolloweeId(null);
        return res;
      })
  );

  return {
    ...swrObject,
    unfollow,
  };
}
