import Link from "next/link";
export default function CourseCard({
  id,
  title,
  subtitle,
  color = "steelblue",
}: {
  id: string;
  title: string;
  subtitle: string;
  color?: string;
}) {
  return (
    <div className="wd-dashboard-course">
      <Link href={`/courses/${id}/home`} className="wd-dashboard-course-link">
        <div style={{ backgroundColor: color, width: 200, height: 150 }} />
        <div>
          <h5>{title}</h5>
          <p className="wd-dashboard-course-title">{subtitle}</p>
          <button type="button">Go</button>
        </div>
      </Link>
    </div>
  );
}
