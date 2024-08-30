import { useState } from "react";
import { ImageList, Button, useMediaQuery, useTheme } from "@mui/material";
import {
  StyledButton,
  StyledImage,
  StyledImageListItem,
} from "./latest-pictures.css";
import { GroupTitles } from "../styles/index.css";

interface GroupPicturesProps {
  groupImages: string[];
}

function GroupPicturesData({ groupImages }: GroupPicturesProps) {
  const [visibleImages, setVisibleImages] = useState(5);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleShowMore = () => {
    setVisibleImages((prevVisibleImages) => prevVisibleImages + 5);
  };

  return (
    <>
      <GroupTitles>Group Images</GroupTitles>
      <ImageList
        sx={{ width: "100%", height: "auto" }}
        cols={isMobile ? 1 : 5}
        gap={16}
      >
        {groupImages.slice(0, visibleImages).map((image, index) => (
          <StyledImageListItem key={index}>
            <StyledImage
              src={`${image}?w=500&h=500&fit=crop&auto=format`}
              srcSet={`${image}?w=500&h=500&fit=crop&auto=format&dpr=2 2x`}
              alt={`Group Image ${index + 1}`}
              loading="lazy"
            />
          </StyledImageListItem>
        ))}
      </ImageList>
      {visibleImages < groupImages.length && (
        <StyledButton variant="contained" onClick={handleShowMore}>
          Show More
        </StyledButton>
      )}
    </>
  );
}

export default GroupPicturesData;
