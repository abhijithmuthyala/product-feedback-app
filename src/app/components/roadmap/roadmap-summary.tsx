import { getRoadmapStats } from "@/api/roadmap-stats";
import Link from "next/link";

const colorMap = {
  "in-progress": "bg-status-in-progress",
  live: "bg-status-live",
  planned: "bg-status-planned",
};

type RoadmapStatType = {
  type: string;
  number: number;
};

export default async function RoadmapSummary({}) {
  const roadmapStats: RoadmapStatType = await getRoadmapStats();

  return (
    <article className="rounded-lg bg-neutral-0 px-6 py-6">
      <header className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-neutral-7">Roadmap</h2>
        <Link
          href="/roadmap"
          className="text-sm font-semibold text-secondary underline decoration-inherit underline-offset-4"
        >
          View
        </Link>
      </header>
      <ul className="mt-6 flex flex-col gap-2">
        {Object.entries(roadmapStats).map(function renderRoadmapStat(stat) {
          const [type, number] = stat;
          return (
            <li key={type} className="flex items-center gap-4">
              <div
                className={`${colorMap[type]} aspect-square w-2 rounded-full`}
              ></div>
              <div className="flex grow items-center justify-between">
                <p className="text-neutral-6">
                  {type.replace(type[0], type[0].toUpperCase())}
                </p>
                <p className="font-bold text-neutral-6">{number}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </article>
  );
}
