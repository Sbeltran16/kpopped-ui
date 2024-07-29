import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";
import { fetchGroupData } from "../../../../api/artists/group-data-api";
import { GroupDiscographyData } from "../discography/discography";
import { GroupMembersData } from "../members/members";
import { GroupPicturesData } from "../group-pictures/latest-pictures";
import { GroupStatsData } from "../group-stats/group-stats";
import { GroupIntroData } from "../group-intro/group-intro";
import { DataContainer, MainContainer } from "../styles/index.css";

function ArtistPage() {
  const { groupName } = useParams<{ groupName: string }>();
  const [groupData, setGroupData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (groupName) {
      const fetchArtistData = async (artistName: string) => {
        try {
          const formattedName = artistName.trim().replace(/\s+/g, "-");
          const data = await fetchGroupData(formattedName);
          if (data) {
            setGroupData(data);
            setError(null);
          } else {
            setError("No data found");
          }
        } catch (err) {
          setError("Error fetching data");
          console.error(err);
        }
      };

      fetchArtistData(groupName);
    }
  }, [groupName]);

  return (
    <>
      {error && <Typography color="error">{error}</Typography>}
      {groupData && (
        <>
          <GroupIntroData groupIntro={groupData} />
          <MainContainer>
            <DataContainer>
              <GroupMembersData members={groupData.members} />
            </DataContainer>
            <DataContainer>
              <GroupStatsData groupStats={groupData.group_stats} />
            </DataContainer>
            <DataContainer>
              <GroupDiscographyData discography={groupData.discography} />
            </DataContainer>
            <DataContainer>
              <GroupPicturesData
                groupImages={groupData.group_latest_pictures}
              />
            </DataContainer>
          </MainContainer>
        </>
      )}
    </>
  );
}

export { ArtistPage };
