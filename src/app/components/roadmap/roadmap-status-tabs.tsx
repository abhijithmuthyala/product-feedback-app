"use client";

import { useUpdateQueryParamEffect } from "@/hooks";
import RoadmapStatusButton from "./roadmap-status-tab";

export default function RoadmapStatusTabs({ stats, activeStatus }) {
  useUpdateQueryParamEffect("status", activeStatus);

  return (
    <div className="flex flex-wrap items-center border-b-2 border-neutral-2 text-sm font-bold md:text-base">
      {Object.entries(stats).map(function renderStatusButton([status, count]) {
        return (
          <div key={status} className="grow basis-24">
            <RoadmapStatusButton
              status={status}
              count={count}
              isSelected={activeStatus === status}
              className="w-full px-3"
            />
          </div>
        );
      })}
    </div>
  );
}
