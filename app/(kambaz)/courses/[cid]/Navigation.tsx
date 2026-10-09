"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Home", path: "home", id: "wd-course-home-link" },
  { label: "Modules", path: "modules", id: "wd-course-modules-link" },
  { label: "Piazza", path: "piazza", id: "wd-course-piazza-link" },
  { label: "Zoom", path: "zoom", id: "wd-course-zoom-link" },
  { label: "Assignments", path: "assignments", id: "wd-course-assignments-link" },
  { label: "Quizzes", path: "quizzes", id: "wd-course-quizzes-link" },
  { label: "Grades", path: "grades", id: "wd-course-grades-link" },
  { label: "People", path: "people/table", id: "wd-course-people-link" },
];

export default function CourseNavigation({ cid }: { cid: string }) {
  const pathname = usePathname();
  return (
    <nav id="wd-courses-navigation">
      <ul className="m-0 list-none p-0">
        {links.map(({ label, path, id }) => {
          const active = pathname.includes(`/${path}`);
          return (
            <li key={path}>
              <Link
                href={`/courses/${cid}/${path}`}
                id={id}
                className={`block border-0 py-2 px-3 text-red-600 no-underline${
                  active ? " border-l-4 border-red-600 bg-red-50 font-semibold" : ""
                }`}
              >
                {label}
              </Link>
            </li>
          );
        })}
        <li>
          <Link
            href={`/courses/${cid}/home`}
            id="wd-course-ai-link"
            className="block border-0 py-2 px-3 text-red-600 no-underline"
          >
            Sample
          </Link>
        </li>
      </ul>
    </nav>
  );
}
