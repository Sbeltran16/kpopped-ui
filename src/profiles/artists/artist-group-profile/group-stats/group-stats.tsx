import { Grid, Paper, Typography } from "@mui/material";
import { GroupTitles } from "../styles/index.css";
import { StyledGroupStats } from "./group-stats.css";

interface GroupStatsProps {
  groupStats: any;
}

function GroupStatsData({ groupStats }: GroupStatsProps) {
  return (
    <>
      <GroupTitles>Stats</GroupTitles>
      <StyledGroupStats>
        {groupStats && (
          <Grid container spacing={2} style={{ marginTop: "20px" }}>
            {Object.entries(groupStats).map(([key, value], index) => (
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

export { GroupStatsData };
