import { useDispatch, useSelector } from "react-redux";
import { add, setA, setB } from "./addReducer";
import type { RootState } from "./store";
export default function AddRedux() {
  const { a, b, sum } = useSelector((state: RootState) => state.addReducer);
  const dispatch = useDispatch();
  return (
    <div id="wd-redux-add">
      <h3>Add Redux</h3>
      <input
        type="number"
        value={a}
        onChange={(e) => dispatch(setA(Number(e.target.value)))}
        className="me-2 w-32 rounded border border-neutral-300 px-3 py-1.5"
        id="wd-redux-add-a"
      />
      <input
        type="number"
        value={b}
        onChange={(e) => dispatch(setB(Number(e.target.value)))}
        className="me-2 w-32 rounded border border-neutral-300 px-3 py-1.5"
        id="wd-redux-add-b"
      />
      <button
        type="button"
        onClick={() => dispatch(add())}
        id="wd-redux-add-click"
        className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Add Redux
      </button>
      <p className="mt-2 font-medium">Sum: {sum}</p>
    </div>
  );
}
