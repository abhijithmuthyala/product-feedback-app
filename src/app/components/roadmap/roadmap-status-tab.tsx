"use client";

import { usePathname, useRouter } from "next/navigation";

const varients = {
  live: "border-status-live border-b-4",
  "in-progress": "border-status-in-progress border-b-4",
  planned: "border-status-planned border-b-4",
};

const textColor = new Map([
  [true, "text-neutral-7"],
  [false, "text-neutral-5"],
]);

export default function RoadmapStatusButton({
  status,
  count,
  isSelected,
  className = "",
}) {
  const router = useRouter();
  const pathname = usePathname();

  async function updateStatus() {
    router.replace(`${pathname}?status=${status}`);
  }

  return (
    <button
      onClick={updateStatus}
      className={`${isSelected && varients[status]} ${className} py-5 ${textColor.get(isSelected)}`}
    >
      {status.replace(status[0], status[0].toUpperCase())} ({count})
    </button>
  );
}
