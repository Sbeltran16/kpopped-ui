import { useState } from "react";
import useSWR from "swr";
import { HOST } from "../../../config";
import { LoginFormValues } from "../../../../components/forms/login";
import { useUser } from "../../../../context/user";
import fetcher from "../../../fetcher";

const loginEndpoint = `${HOST}/login`;

export default function useLogin() {
  const [loginData, setLoginData] = useState<LoginFormValues>();

  const fetchObject = {
    method: "POST",
    body: JSON.stringify({
      user: {
        email: loginData?.email,
        password: loginData?.password,
      },
    }),
  };

  const { updateUser } = useUser();

  const login = (data: LoginFormValues) => setLoginData(data);

  const swrObject = useSWR(loginData ? loginEndpoint : null, (url) =>
    fetcher(url, fetchObject)
      .then((res) => {
        const { status } = res;
        updateUser(status.data.user);

        return res;
      })
      .finally(() => setLoginData(undefined))
  );

  return {
    ...swrObject,
    login,
  };
}
