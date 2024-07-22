import Navbar from "../../navigation/navbar";
import { MainContent } from "./index.css";
import MainLayoutInterface from "./types";
import { useMediaQuery } from "@mui/material";
import MobileNavbar from "../../mobile-navigation/mobile-navbar";

export default function MainLayout({ children }: MainLayoutInterface) {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <>
      {isMobile ? <MobileNavbar /> : <Navbar />}
      <MainContent>{children}</MainContent>
    </>
  );
}
