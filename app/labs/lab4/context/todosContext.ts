import { createContext, useContext, useState, type ReactNode } from "react";
export type ContextTodo = { id: string; title: string };
type TodosContextValue = {
  todos: ContextTodo[];
  addTodo: (title: string) => void;
  updateTodo: (todo: ContextTodo) => void;
  deleteTodo: (id: string) => void;
};
export const TodosContext = createContext<TodosContextValue | null>(null);
export function useTodosContext() {
  const value = useContext(TodosContext);
  if (!value) throw new Error("useTodosContext must be used inside TodosProvider");
  return value;
}
