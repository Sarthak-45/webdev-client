"use client";
import Link from "next/link";
import { FaTrash } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
import { useAssignmentsStore } from "../../../store/assignmentsStore";
export default function AssignmentItem({
  cid,
  aid,
  title,
  details,
}: {
  cid: string;
  aid: string;
  title: string;
  details: string;
}) {
  const deleteAssignment = useAssignmentsStore((state) => state.deleteAssignment);
  return (
    <li className="wd-assignment-list-item mb-1 flex items-center justify-between rounded border border-neutral-200 px-3 py-2">
      <div className="flex items-center gap-3">
        <span className="text-green-700">📋</span>
        <div>
          <Link
            href={`/courses/${cid}/assignments/${aid}`}
            className="wd-assignment-link font-medium text-neutral-900 no-underline hover:underline"
          >
            {title}
          </Link>
          <div className="text-xs text-neutral-500">{details}</div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <FaCheckCircle className="text-green-600" />
        <button
          type="button"
          onClick={() => deleteAssignment(aid)}
          className="text-red-600"
          title="Delete assignment"
        >
          <FaTrash />
        </button>
        <IoEllipsisVertical />
      </div>
    </li>
  );
}
