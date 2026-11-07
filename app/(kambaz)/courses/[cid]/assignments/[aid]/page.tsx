"use client";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import {
  useAssignmentsStore,
  emptyAssignment,
  type Assignment,
} from "../../../../store/assignmentsStore";
export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const router = useRouter();
  const assignments = useAssignmentsStore((state) => state.assignments);
  const updateAssignment = useAssignmentsStore((state) => state.updateAssignment);
  const existing = assignments.find((a) => a._id === aid);
  const [assignment, setAssignment] = useState<Assignment>(
    existing ?? { ...emptyAssignment, course: String(cid), _id: String(aid) },
  );
  const save = () => {
    updateAssignment(assignment);
    router.push(`/courses/${cid}/assignments`);
  };
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input
        id="wd-name"
        className="mb-2 block w-full rounded border border-neutral-300 px-3 py-1.5"
        value={assignment.title}
        onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
      />
      <p>Assignment id: {aid}</p>
      <textarea
        id="wd-description"
        value={assignment.description}
        onChange={(e) =>
          setAssignment({ ...assignment, description: e.target.value })
        }
        rows={8}
        className="mb-3 block w-full rounded border border-neutral-300 px-3 py-1.5"
      />
      <table>
        <tbody>
          <tr>
            <td align="right" valign="top" className="pr-3 pt-2">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input
                id="wd-points"
                type="number"
                className="rounded border border-neutral-300 px-3 py-1.5"
                value={assignment.points}
                onChange={(e) =>
                  setAssignment({ ...assignment, points: Number(e.target.value) })
                }
              />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top" className="pr-3 pt-2">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group" defaultValue="ASSIGNMENTS" className="rounded border border-neutral-300 px-3 py-1.5">
                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                <option value="QUIZZES">QUIZZES</option>
                <option value="EXAMS">EXAMS</option>
                <option value="PROJECT">PROJECT</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top" className="pr-3 pt-2">
              <label>Assign</label>
            </td>
            <td>
              <div className="rounded border border-neutral-300 p-3">
                <label htmlFor="wd-due-date" className="block text-sm font-medium">Due</label>
                <input
                  type="date"
                  id="wd-due-date"
                  className="mb-2 block rounded border border-neutral-300 px-3 py-1.5"
                  value={assignment.due}
                  onChange={(e) => setAssignment({ ...assignment, due: e.target.value })}
                />
                <div className="flex gap-4">
                  <div>
                    <label htmlFor="wd-available-from" className="block text-sm font-medium">Available from</label>
                    <input
                      type="date"
                      id="wd-available-from"
                      className="rounded border border-neutral-300 px-3 py-1.5"
                      value={assignment.available}
                      onChange={(e) => setAssignment({ ...assignment, available: e.target.value })}
                    />
                  </div>
                  <div>
                    <label htmlFor="wd-available-until" className="block text-sm font-medium">Until</label>
                    <input
                      type="date"
                      id="wd-available-until"
                      className="rounded border border-neutral-300 px-3 py-1.5"
                      value={assignment.until ?? ""}
                      onChange={(e) => setAssignment({ ...assignment, until: e.target.value })}
                    />
                  </div>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td></td>
            <td className="pt-4">
              <button
                type="button"
                onClick={() => router.push(`/courses/${cid}/assignments`)}
                id="wd-cancel"
                className="me-2 rounded border border-neutral-300 px-4 py-1.5 text-sm"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={save}
                id="wd-save"
                className="rounded bg-red-600 px-4 py-1.5 text-sm font-medium text-white"
              >
                Save
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
