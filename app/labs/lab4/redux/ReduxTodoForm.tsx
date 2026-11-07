import { useDispatch, useSelector } from "react-redux";
import { addTodo, setTodo, updateTodo } from "./todosReducer";
import type { RootState } from "./store";
export default function ReduxTodoForm() {
  const todo = useSelector((state: RootState) => state.todosReducer.todo);
  const dispatch = useDispatch();
  return (
    <div id="wd-redux-todo-form" className="mb-3 flex flex-wrap gap-2">
      <input
        className="rounded border border-neutral-300 px-3 py-1.5"
        value={todo.title}
        onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))}
        id="wd-redux-todo-title"
      />
      <button
        type="button"
        onClick={() => dispatch(addTodo())}
        id="wd-redux-add-todo-click"
        className="rounded bg-green-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Add
      </button>
      <button
        type="button"
        onClick={() => dispatch(updateTodo())}
        id="wd-redux-update-todo-click"
        className="rounded bg-yellow-400 px-3 py-1.5 text-sm font-medium"
      >
        Update
      </button>
    </div>
  );
}
