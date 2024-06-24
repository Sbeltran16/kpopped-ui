import { HOST } from "../../../config";
import fetcher from "../../../fetcher";
import useSWR from "swr";

const useFollowStatus = (username: string) => {
  const { data, error } = useSWR(
    username ? `${HOST}/follow-status/${username}` : null,
    fetcher
  );

  return {
    data,
    error,
  };
};

export default useFollowStatus;
