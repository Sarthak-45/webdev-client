import Link from "next/link";
const fieldClass = "w-full rounded border border-neutral-300 px-3 py-1.5 text-sm";
const labelClass = "mb-1 block text-sm font-medium text-neutral-700";
export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" className="mx-auto max-w-2xl space-y-4 p-4">
      <div>
        <label htmlFor="wd-name" className={labelClass}>Assignment Name</label>
        <input id="wd-name" defaultValue="A1 - ENV + HTML" className={fieldClass} />
      </div>
      <div>
        <textarea
          id="wd-description"
          rows={4}
          defaultValue="The assignment is available online Submit a link to the landing page of your Web application running on Vercel."
          className={`${fieldClass} resize-y`}
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="wd-points" className={labelClass}>Points</label>
          <input id="wd-points" defaultValue={100} className={fieldClass} />
        </div>
        <div>
          <label htmlFor="wd-group" className={labelClass}>Assignment Group</label>
          <select id="wd-group" defaultValue="ASSIGNMENTS" className={fieldClass}>
            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            <option value="QUIZZES">QUIZZES</option>
            <option value="EXAMS">EXAMS</option>
            <option value="PROJECT">PROJECT</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="wd-display-grade-as" className={labelClass}>Display Grade as</label>
          <select id="wd-display-grade-as" defaultValue="Percentage" className={fieldClass}>
            <option value="Percentage">Percentage</option>
            <option value="Points">Points</option>
            <option value="Letter Grade">Letter Grade</option>
          </select>
        </div>
        <div>
          <label htmlFor="wd-submission-type" className={labelClass}>Submission Type</label>
          <select id="wd-submission-type" defaultValue="Online" className={fieldClass}>
            <option value="Online">Online</option>
            <option value="On Paper">On Paper</option>
            <option value="No Submission">No Submission</option>
          </select>
        </div>
      </div>
      <div>
        <span className={labelClass}>Online Entry Options</span>
        <div className="space-y-1 text-sm">
          {[
            { id: "wd-text-entry", label: "Text Entry", checked: false },
            { id: "wd-website-url", label: "Website URL", checked: true },
            { id: "wd-media-recordings", label: "Media Recordings", checked: false },
            { id: "wd-student-annotation", label: "Student Annotation", checked: false },
            { id: "wd-file-upload", label: "File Upload", checked: false },
          ].map(({ id, label, checked }) => (
            <label key={id} className="flex items-center gap-2">
              <input type="checkbox" id={id} defaultChecked={checked} />
              {label}
            </label>
          ))}
        </div>
      </div>
      <div>
        <label htmlFor="wd-assign-to" className={labelClass}>Assign To</label>
        <input id="wd-assign-to" defaultValue="Everyone" className={fieldClass} />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <label htmlFor="wd-due-date" className={labelClass}>Due</label>
          <input type="date" id="wd-due-date" defaultValue="2024-05-13" className={fieldClass} />
        </div>
        <div>
          <label htmlFor="wd-available-from" className={labelClass}>Available From</label>
          <input type="date" id="wd-available-from" defaultValue="2024-05-06" className={fieldClass} />
        </div>
        <div>
          <label htmlFor="wd-available-until" className={labelClass}>Until</label>
          <input type="date" id="wd-available-until" defaultValue="2024-05-20" className={fieldClass} />
        </div>
      </div>
      <div>
        <label htmlFor="wd-ai-editor-notes" className={labelClass}>Sample notes</label>
        <textarea
          id="wd-ai-editor-notes"
          rows={3}
          className={`${fieldClass} resize-y`}
        />
      </div>
      <div className="flex justify-end gap-2 border-t border-neutral-200 pt-4">
        <Link
          href="../"
          id="wd-cancel"
          className="rounded border border-neutral-300 bg-white px-4 py-1.5 text-sm no-underline"
        >
          Cancel
        </Link>
        <Link
          href="../"
          id="wd-save"
          className="rounded bg-red-600 px-4 py-1.5 text-sm font-medium text-white no-underline"
        >
          Save
        </Link>
      </div>
    </div>
  );
}
