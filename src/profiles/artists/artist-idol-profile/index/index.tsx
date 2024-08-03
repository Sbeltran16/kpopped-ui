import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";
import { fetchIdolData } from "../../../../api/artists/idol-data-api";
import {
  MainContainer,
  DataContainer,
} from "../../artist-group-profile/styles/index.css";
import { IdolIntroData } from "../idol-intro/idol-intro";
import { IdolDiscographyData } from "../discography/discography";
import { IdolStatsData } from "../idol-stats/idol-stats";
import { IdolPicturesData } from "../idol-pictures/idol-pictures";

function IdolPage() {
  const { idolName } = useParams<{ idolName: string }>();
  const [idolData, setIdolData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (idolName) {
      const fetchArtistData = async (artistName: string) => {
        try {
          const formattedName = artistName.trim().replace(/\s+/g, "-");
          const data = await fetchIdolData(formattedName);
          console.log(data);
          if (data) {
            setIdolData(data);
            setError(null);
          } else {
            setError("No data found");
          }
        } catch (err) {
          setError("Error fetching data");
          console.error(err);
        }
      };

      fetchArtistData(idolName);
    }
  }, [idolName]);

  return (
    <>
      {error && <Typography color="error">{error}</Typography>}
      {idolData && (
        <>
          <IdolIntroData idolIntro={idolData} />
          <MainContainer>
            <DataContainer>
              <IdolStatsData idolStats={idolData.stats} />
            </DataContainer>
            <DataContainer>
              <IdolDiscographyData discography={idolData.discography} />
            </DataContainer>
            <DataContainer>
              <IdolPicturesData idolImages={idolData.latest_pictures} />
            </DataContainer>
          </MainContainer>
        </>
      )}
    </>
  );
}

export { IdolPage };
