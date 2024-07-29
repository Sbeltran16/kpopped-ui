import { HOST } from "../../config";
import fetcher from "../../fetcher";

export const fetchGroupData = async (groupName: string) => {
  try {
    const data = await fetcher(`${HOST}/artists/${groupName}`);
    return data;
  } catch (error) {
    console.error("Error fetching group data:", error);
    return null;
  }
};
