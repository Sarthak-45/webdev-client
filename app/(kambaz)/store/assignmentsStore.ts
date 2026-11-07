"use client";
import { create } from "zustand";
import assignmentsJson from "../database/assignments.json";
export type Assignment = (typeof assignmentsJson)[number] & { until?: string };
const emptyAssignment: Assignment = {
  _id: "0",
  title: "New Assignment",
  course: "",
  available: "",
  due: "",
  points: 100,
  description: "New Assignment Description",
  until: "",
};
type AssignmentsStore = {
  assignments: Assignment[];
  addAssignment: (courseId: string) => void;
  deleteAssignment: (id: string) => void;
  updateAssignment: (assignment: Assignment) => void;
};
export const useAssignmentsStore = create<AssignmentsStore>((set) => ({
  assignments: assignmentsJson as Assignment[],
  addAssignment: (courseId) =>
    set((state) => ({
      assignments: [
        ...state.assignments,
        { ...emptyAssignment, course: courseId, _id: crypto.randomUUID() },
      ],
    })),
  deleteAssignment: (id) =>
    set((state) => ({
      assignments: state.assignments.filter((a) => a._id !== id),
    })),
  updateAssignment: (assignment) =>
    set((state) => ({
      assignments: state.assignments.map((a) =>
        a._id === assignment._id ? assignment : a,
      ),
    })),
}));
export { emptyAssignment };
