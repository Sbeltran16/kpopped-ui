import { HOST } from "../../../config";
import fetcher from "../../../fetcher";
import useSWR from "swr";

interface Suggestion {
  id: number;
  username: string;
}

export default function useUserSuggestions(query: string) {
  const endpoint = query ? `${HOST}/search_users?query=${query}` : null;
  const { data, error } = useSWR<Suggestion[]>(endpoint, fetcher);

  return {
    suggestions: data,
    isLoading: !error && !data,
    isError: error,
  };
}
