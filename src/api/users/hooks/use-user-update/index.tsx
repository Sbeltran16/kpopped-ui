import { useState } from "react";
import { HOST } from "../../../config";
import fetcher from "../../../fetcher";

const userUpdateEndpoint = `${HOST}/me`;

export default function useUserUpdate() {
  const [error, setError] = useState<string | null>(null);

  const updateUser = async (formData: FormData) => {
    try {
      const response = await fetcher(userUpdateEndpoint, {
        method: "PATCH",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to update user");
      }

      return response;
    } catch (err) {
      throw err;
    }
  };

  return {
    updateUser,
    error,
  };
}
