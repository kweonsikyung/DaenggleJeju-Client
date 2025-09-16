import React from "react";
import { Skeleton } from "@/ui/atoms/Skeleton/Skeleton";

export function DanglePlaceSkeletonContent() {
  return (
    <div style={{ display: "flex", gap: "12px", width: "100%" }}>
      <Skeleton
        width={100}
        height={100}
        style={{ borderRadius: "8px", flexShrink: 0 }}
      />

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "4px 0",
        }}
      >
        <div>
          <Skeleton width="60%" height="14px" />
          <Skeleton width="90%" height="20px" style={{ marginTop: "8px" }} />
        </div>
        <div>
          <Skeleton width="40%" height="14px" />
          <div style={{ display: "flex", gap: "6px", marginTop: "10px" }}>
            <Skeleton
              width="50px"
              height="22px"
              style={{ borderRadius: "4px" }}
            />
            <Skeleton
              width="50px"
              height="22px"
              style={{ borderRadius: "4px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
