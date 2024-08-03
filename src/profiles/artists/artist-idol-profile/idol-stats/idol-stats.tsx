import { Grid, Paper, Typography } from "@mui/material";
import { GroupTitles } from "../../artist-group-profile/styles/index.css";
import { StyledGroupStats } from "../../artist-group-profile/group-stats/group-stats.css";

interface IdolStatsProps {
  idolStats: any;
}

function IdolStatsData({ idolStats }: IdolStatsProps) {
  return (
    <>
      <GroupTitles>Stats</GroupTitles>
      <StyledGroupStats>
        {idolStats && (
          <Grid container spacing={2} style={{ marginTop: "20px" }}>
            {Object.entries(idolStats).map(([key, value], index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Typography variant="body1" gutterBottom>
                  <strong>{key}:</strong>
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {value as React.ReactNode}
                </Typography>
              </Grid>
            ))}
          </Grid>
        )}
      </StyledGroupStats>
    </>
  );
}

export { IdolStatsData };
