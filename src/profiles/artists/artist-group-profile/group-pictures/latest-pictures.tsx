import { ImageList } from "@mui/material";
import { StyledImage, StyledImageListItem } from "./latest-pictures.css";
import { GroupTitles } from "../styles/index.css";

interface GroupPicturesProps {
  groupImages: string[];
}

function GroupPicturesData({ groupImages }: GroupPicturesProps) {
  return (
    <>
      <GroupTitles>Latest Group Images</GroupTitles>
      <ImageList sx={{ width: "100%", height: "auto" }} cols={5} gap={16}>
        {groupImages.map((image, index) => (
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
    </>
  );
}

export { GroupPicturesData };
