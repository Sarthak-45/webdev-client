import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
export type ReduxTodo = { id: string; title: string };
type TodosState = { todos: ReduxTodo[]; todo: ReduxTodo };
const emptyTodo: ReduxTodo = { id: "-1", title: "Learn Mongo" };
const todosSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [
      { id: "1", title: "Learn HTML" },
      { id: "2", title: "Learn CSS" },
      { id: "3", title: "Learn JavaScript" },
    ] as ReduxTodo[],
    todo: emptyTodo,
  } as TodosState,
  reducers: {
    setTodo: (state, action: PayloadAction<ReduxTodo>) => {
      state.todo = action.payload;
    },
    addTodo: (state) => {
      state.todos = [
        ...state.todos,
        { ...state.todo, id: Date.now().toString() },
      ];
      state.todo = emptyTodo;
    },
    updateTodo: (state) => {
      state.todos = state.todos.map((t) =>
        t.id === state.todo.id ? state.todo : t
      );
      state.todo = emptyTodo;
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((t) => t.id !== action.payload);
    },
  },
});
export const { setTodo, addTodo, updateTodo, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;
