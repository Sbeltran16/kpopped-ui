import React from "react";
import RunwayContainer from "./index.css";
import { RunwayInterface } from "./types";

export default function Runway({ children }: RunwayInterface) {
  return <RunwayContainer>{children}</RunwayContainer>;
}
