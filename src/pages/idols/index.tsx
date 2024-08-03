import Navbar from "../../components/navigation/navbar";
import { IdolPage } from "../../profiles/artists/artist-idol-profile/index";
import { useMediaQuery } from "@mui/material";
import MobileNavbar from "../../components/mobile-navigation/mobile-navbar";

export default function Idol() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <>
      {isMobile ? <MobileNavbar /> : <Navbar />}
      <IdolPage />;
    </>
  );
}
