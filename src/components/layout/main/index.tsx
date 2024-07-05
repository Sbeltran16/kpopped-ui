import Sidebar from "../../navigation/sidebar";
import { MainContent } from "./index.css";
import MainLayoutInterface from "./types";
import { useMediaQuery } from "@mui/material";
import MobileNavbar from "../../navigation/mobile-navbar";

export default function MainLayout({ children }: MainLayoutInterface) {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <>
      {isMobile ? <MobileNavbar /> : <Sidebar />}
      <MainContent>{children}</MainContent>
    </>
  );
}
