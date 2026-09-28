import AssignmentItem from "./AssignmentItem";
export default async function Assignments({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;
  return (
    <div id="wd-assignments">
      <input
        id="wd-search-assignment"
        placeholder="Search for Assignments"
      />
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>
      <h3 id="wd-assignments-title">ASSIGNMENTS 40% of Total</h3>
      <ul id="wd-assignment-list">
        <AssignmentItem
          cid={cid}
          aid="A1"
          title="A1 ENV + HTML"
          details="Multiple Modules | Not available until May 6 at 12:00am | Due May 13 at 11:59pm | 100 pts"
        />
        <AssignmentItem
          cid={cid}
          aid="A2"
          title="A2 CSS + TAILWIND"
          details="Multiple Modules | Not available until May 13 at 12:00am | Due May 20 at 11:59pm | 100 pts"
        />
        <AssignmentItem
          cid={cid}
          aid="A3"
          title="A3 JS + REACT"
          details="Multiple Modules | Not available until May 20 at 12:00am | Due May 27 at 11:59pm | 100 pts"
        />
        <AssignmentItem
          cid={cid}
          aid="A4"
          title="A4 COMPONENTS + STATE"
          details="Multiple Modules | Not available until May 27 at 12:00am | Due Jun 3 at 11:59pm | 100 pts"
        />
        <AssignmentItem
          cid={cid}
          aid="A5"
          title="A5 BACKEND + REST"
          details="Multiple Modules | Not available until Jun 3 at 12:00am | Due Jun 10 at 11:59pm | 100 pts"
        />
        <AssignmentItem
          cid={cid}
          aid="A6"
          title="A6 FULLSTACK"
          details="Multiple Modules | Not available until Jun 10 at 12:00am | Due Jun 17 at 11:59pm | 100 pts"
        />
      </ul>
    </div>
  );
}
