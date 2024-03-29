import useSWR from "swr";
import { HOST } from "../../../config";
import { useUser } from "../../../../context/user";
import fetcher from "../../../fetcher";

const meEndpoint = `${HOST}/me`;

export default function useMe() {
  const authorizationHeader = localStorage.getItem("authToken") || "";
  const { updateUser } = useUser();

  return useSWR(meEndpoint, (url) =>
    fetcher(url, {
      headers: { Authorization: authorizationHeader },
    }).then(({ data }) => {
      updateUser(data);
    })
  );
}
