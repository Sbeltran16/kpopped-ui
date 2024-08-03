import { Grid, Typography, CardMedia, CardContent } from "@mui/material";
import { DiscographyContainer } from "./discography.css";
import { GroupTitles } from "../../artist-group-profile/styles/index.css";

interface IdolDiscographyProps {
  discography: any[];
}

function IdolDiscographyData({ discography }: IdolDiscographyProps) {
  return (
    <DiscographyContainer>
      <GroupTitles>Latest Discography</GroupTitles>
      {discography.length > 0 && (
        <Grid container spacing={4} style={{ marginTop: "20px" }}>
          {discography.map((album, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <CardMedia
                component="img"
                image={album.cover_image}
                alt={album.title}
                style={{
                  height: "300px",
                  objectFit: "contain",
                  borderRadius: "8px",
                }}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {album.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  <strong>Release Date:</strong> {album.release_date}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  <strong>Tracks:</strong> {album.tracks}
                </Typography>
              </CardContent>
            </Grid>
          ))}
        </Grid>
      )}
    </DiscographyContainer>
  );
}

export { IdolDiscographyData };
