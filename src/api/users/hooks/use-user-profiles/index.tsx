import useSWR from "swr";
import fetcher from "../../../fetcher";
import { HOST } from "../../../config";

export default function useUserProfile(username: string) {
  const useProfileEndpoint = `${HOST}/${username}`;
  return useSWR(useProfileEndpoint, fetcher);
}
