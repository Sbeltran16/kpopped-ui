import { useState } from "react";
import useSWR from "swr";
import { SignUpFormValues } from "../../../../components/forms/signup";
import fetcher from "../../../fetcher";
import { HOST } from "../../../config";

const signupEndpoint = `${HOST}/signup`;

export default function useSignUp() {
  const [signupData, setSignupData] = useState<SignUpFormValues>();
  const fetchObject = {
    method: "POST",
    body: JSON.stringify({
      user: {
        username: signupData?.username,
        email: signupData?.email,
        password: signupData?.password,
      },
    }),
  };

  const signup = (data: SignUpFormValues) => setSignupData(data);

  const swrObject = useSWR(
    // if signupdata is present then it will allow the call to continue
    signupData ? signupEndpoint : null,

    // reset the data so it doesn't trigger calls over and over
    (url) =>
      fetcher(url, fetchObject)
        .then((res) => {
          return res;
        })
        .finally(() => setSignupData(undefined))
  );

  return {
    ...swrObject,
    signup,
  };
}
