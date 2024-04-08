import React from "react";
import Navbar from "../../navigation/navbar";
import { MainContent } from "./index.css";
import MainLayoutInterface from "./types";

export default function MainLayout({ children }: MainLayoutInterface) {
  return (
    <>
      <Navbar />
      <MainContent>{children}</MainContent>
    </>
  );
}
