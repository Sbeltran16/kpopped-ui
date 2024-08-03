import { HOST } from "../../config";
import fetcher from "../../fetcher";

export const fetchIdolData = async (idolName: string) => {
  try {
    const data = await fetcher(`${HOST}/idols/${idolName}`);
    return data;
  } catch (error) {
    console.error("Error fetching idol data:", error);
    return null;
  }
};
