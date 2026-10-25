"use client";
import { usePathname } from "next/navigation";
export default function Breadcrumb({
  course,
}: {
  course: { name: string } | undefined;
}) {
  const pathname = usePathname() ?? "";
  const section = pathname.split("/").pop() ?? "";
  const raw = section.charAt(0).toUpperCase() + section.slice(1);
  const label = section === "table" ? "People" : raw;
  return (
    <span>
      {course?.name} &gt; {label}
    </span>
  );
}
