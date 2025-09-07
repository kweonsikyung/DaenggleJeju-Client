import React from "react";
import ShortsClientPage from "./ShortsClientPage";
import { shortsData } from "@/utils/dummy_data";
import NavBar from "@/ui/atoms/NavBar/NavBar";
import * as s from "./style.css";

export default function ShortsPage() {
  const videos = shortsData["강아지 여행"];
  return (
    <div className={s.page}>
      <ShortsClientPage videos={videos} />
      <NavBar activePage="dangle" />
    </div>
  );
}
