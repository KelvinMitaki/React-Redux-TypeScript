import { combineReducers } from "redux";
import { Todo } from "../actions";
import todosReducer from "./todosReducer";

export interface StoreState {
  todos: Todo[];
}

export default combineReducers<StoreState>({
  todos: todosReducer
});
