import { createContext, useContext, useState, type ReactNode } from "react";
import { type ContextTodo } from "./todosContext";

type TodosContextValue = {
  todos: ContextTodo[];
  addTodo: (title: string) => void;
  updateTodo: (todo: ContextTodo) => void;
  deleteTodo: (id: string) => void;
};
const TodosContext = createContext<TodosContextValue | null>(null);
function useTodosCtx() {
  const v = useContext(TodosContext);
  if (!v) throw new Error("useTodosCtx must be used inside TodosProvider");
  return v;
}
function TodosProvider({ children }: { children: ReactNode }) {
  const [todos, setTodos] = useState<ContextTodo[]>([
    { id: "1", title: "Learn HTML" },
    { id: "2", title: "Learn CSS" },
    { id: "3", title: "Learn JavaScript" },
  ]);
  const addTodo = (title: string) =>
    setTodos((prev) => [...prev, { id: crypto.randomUUID(), title }]);
  const updateTodo = (todo: ContextTodo) =>
    setTodos((prev) => prev.map((t) => (t.id === todo.id ? todo : t)));
  const deleteTodo = (id: string) =>
    setTodos((prev) => prev.filter((t) => t.id !== id));
  return (
    <TodosContext.Provider value={{ todos, addTodo, updateTodo, deleteTodo }}>
      {children}
    </TodosContext.Provider>
  );
}
function TodoItem({ todo }: { todo: ContextTodo }) {
  const { updateTodo, deleteTodo } = useTodosCtx();
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(todo.title);
  return (
    <li className="mb-1 flex items-center justify-between rounded border border-neutral-200 px-3 py-1">
      {editing ? (
        <input
          className="rounded border px-2 py-0.5 text-sm"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      ) : (
        <span>{todo.title}</span>
      )}
      <span className="flex gap-2">
        <button
          type="button"
          className="rounded bg-yellow-400 px-2 py-0.5 text-sm"
          onClick={() => {
            if (editing) updateTodo({ ...todo, title });
            setEditing(!editing);
          }}
        >
          {editing ? "Save" : "Edit"}
        </button>
        <button
          type="button"
          className="rounded bg-red-600 px-2 py-0.5 text-sm font-medium text-white"
          onClick={() => deleteTodo(todo.id)}
        >
          Delete
        </button>
      </span>
    </li>
  );
}
function TodoForm() {
  const { addTodo } = useTodosCtx();
  const [title, setTitle] = useState("");
  return (
    <div className="mb-3 flex gap-2">
      <input
        className="rounded border border-neutral-300 px-3 py-1.5"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="New todo"
      />
      <button
        type="button"
        className="rounded bg-green-600 px-3 py-1.5 text-sm font-medium text-white"
        onClick={() => { addTodo(title); setTitle(""); }}
      >
        Add
      </button>
    </div>
  );
}
function TodoList() {
  const { todos } = useTodosCtx();
  return (
    <ul className="m-0 max-w-lg list-none p-0">
      {todos.map((t) => <TodoItem key={t.id} todo={t} />)}
    </ul>
  );
}
export default function ReactContextTodoList() {
  return (
    <TodosProvider>
      <div id="wd-context-todo-list">
        <h3>Context Todo List</h3>
        <TodoForm />
        <TodoList />
      </div>
    </TodosProvider>
  );
}
