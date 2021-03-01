import { createStore } from "redux";
import { addTodo } from "./reducer/addTodo.reducer";

export const store = createStore(addTodo);