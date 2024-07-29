import Navbar from "../../components/navigation/navbar";
import { ArtistPage } from "../../profiles/artists/artist-group-profile/index";
import { useMediaQuery } from "@mui/material";
import MobileNavbar from "../../components/mobile-navigation/mobile-navbar";

export default function Artist() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <>
      {isMobile ? <MobileNavbar /> : <Navbar />}
      <ArtistPage />;
    </>
  );
}
