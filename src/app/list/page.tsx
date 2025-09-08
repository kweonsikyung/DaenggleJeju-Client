import React, { Suspense } from "react";
import ListClientPage from "./ListClientPage";
import * as s from "./style.css";

const Loading = () => {
  return <div className={s.loadingContainer}>Loading</div>;
};

export default function ListPage() {
  return (
    <Suspense fallback={<Loading />}>
      <ListClientPage />
    </Suspense>
  );
}
